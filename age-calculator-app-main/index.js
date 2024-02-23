const birthDay = {validate:"", date:""};

const date = document.getElementById("inputForm");
date.addEventListener("submit", submitForm);

const dInput = document.getElementById("dd-input");
// dInput.addEventListener("click", resetState);
dInput.addEventListener("focus", resetState);

const mInput = document.getElementById("mm-input");
mInput.addEventListener("focus", resetState);

const yInput = document.getElementById("yy-input");
yInput.addEventListener("focus", resetState);

function submitForm(event){
    event.preventDefault();

    let day = document.forms["inputForm"]["day"].value;
    let month = document.forms["inputForm"]["month"].value;
    let year = document.forms["inputForm"]["year"].value;

    validate(day, month, year);
    calcLife(birthDay.date);
    
}

function validFomat(date){
    let numberRegex = /^\d+$/;
    return numberRegex.test(date);
}

function isLeapYears(y){
    if(y%4 === 0){
        if(y%100 === 0){
            if(y%400 ===0){
                return true;
            }
            return false;
        }
        return true;
    }
}


function validate(day, month, year){
    let currentYear = new Date().getFullYear();
    birthDay.validate = "";

    if (month === "" || day === "" || year ===""){
        document.getElementById("dd-err").innerHTML="This feild is require";
        document.getElementById("dd-input").classList.add("invalid");
        document.getElementById("dd-label").classList.add("invalid");
    }

    //check leap year
    if(Number(month) === 2){
        if(day > 29 || !isLeapYears(year)){
            document.getElementById("dd-err").innerHTML="Must be a valid date";
            document.getElementById("dd-input").classList.add("invalid");
            document.getElementById("dd-label").classList.add("invalid");
            birthDay.validate = "invalid";
        }
    } else{
        if(!validFomat(month) ||Number(month)<=0 || Number(month)>12){
            if(month === "") {
                document.getElementById("mm-err").innerHTML="This feild is require";
            }else{
                document.getElementById("mm-err").innerHTML="Must be a valid month";
            }
            document.getElementById("mm-input").classList.add("invalid");
            document.getElementById("mm-label").classList.add("invalid");
            birthDay.validate = "invalid";
        }
        if(!validFomat(day) || Number(day)<=0 || Number(day)>31){
            if(day === ""){
                document.getElementById("dd-err").innerHTML="This feild is require";
            }else{
                document.getElementById("dd-err").innerHTML="Must be a valid day";
            }
            document.getElementById("dd-input").classList.add("invalid");
            document.getElementById("dd-label").classList.add("invalid");
            birthDay.validate = "invalid";
        }
        if(!validFomat(year) ||Number(year) > currentYear){
            if(year === ""){
                document.getElementById("yy-err").innerHTML="This feild is require";
            }else{
                document.getElementById("yy-err").innerHTML="Must be in the past";
            }
            document.getElementById("yy-input").classList.add("invalid");
            document.getElementById("yy-label").classList.add("invalid");
            birthDay.validate = "invalid";
        }
    }
    if( birthDay.validate !== "invalid"){
        birthDay.validate = "valid";
        birthDay.date = `${month}/${day}/${year}`;
    }

}

function resetState(event) {
    
    if(event.target.id === "dd-input"){
        document.getElementById("dd-err").innerHTML="";
        document.getElementById("dd-input").classList.remove("invalid");
        document.getElementById("dd-label").classList.remove("invalid");
    }
    if(event.target.id === "mm-input"){
        document.getElementById("mm-err").innerHTML="";
        document.getElementById("mm-input").classList.remove("invalid");
        document.getElementById("mm-label").classList.remove("invalid");
    }
    if(event.target.id === "yy-input"){
        document.getElementById("yy-err").innerHTML="";
        document.getElementById("yy-input").classList.remove("invalid");
        document.getElementById("yy-label").classList.remove("invalid");
    }
}

function calcLife(date){
    
    if(birthDay.validate === "invalid"){
        document.getElementById("ylife").innerHTML = "--";
        document.getElementById("mlife").innerHTML = "--";
        document.getElementById("dlife").innerHTML = "--";
    }
    else if(birthDay.validate === "valid"){
        let birthDate = new Date(date);
        let now = new Date();
        let currentDate = new Date(Number(now.getMonth())+1+"/"+now.getDate()+"/"+"/"+now.getFullYear());

        let Difference_In_Time = currentDate.getTime() - birthDate.getTime();
        let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

        document.getElementById("ylife").innerHTML = Math.floor(Difference_In_Days/365);
        document.getElementById("mlife").innerHTML = Math.floor((Difference_In_Days%365)/30);
        document.getElementById("dlife").innerHTML = Math.floor((Difference_In_Days%365)%30);
    }
}