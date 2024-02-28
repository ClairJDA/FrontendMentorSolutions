var share = document.getElementById('share-btn');
share.addEventListener("click", popupmenu);

var popup = document.getElementById('popup-menu');
popup.addEventListener("click",popupmenu);

function popupmenu(){
    popup.classList.toggle('hide');
}