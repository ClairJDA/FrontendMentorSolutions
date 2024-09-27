import React from 'react'

function FooterMenu() {
  return (
    <div className='px-8 text-sm text-center my-6 md:my-0 md:text-left md:flex gap-8'>
        <div className="md:inline-block">
          <a className="block hover:text-teal-400" href="/about">
            About Us
          </a>
          <a className="block my-2 hover:text-teal-400" href="/contact">
            Contact
          </a>
          <a className="block hover:text-teal-400" href="/blog">
            Blog
          </a>
        </div>
        <div className="md:inline-block">
          <a className="block hover:text-teal-400" href="/careers">
            Careers
          </a>
          <a className="block my-2 hover:text-teal-400" href="/support">
            Support
          </a>
          <a className="block hover:text-teal-400" href="/policy">
            Privacy Policy
          </a>
        </div>
    </div>
  )
}

export default FooterMenu