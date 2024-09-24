import React from 'react'
import ContentOne from './content-one'
import ContentThree from './content-three'
import ContentTwo from './content-two'

function MainContent() {
  return (
    <div className='text-center md:text-left'>
        <h2 className='overpass-h2 text-center mt-10'>Designed for the future</h2>
        <ContentOne />
        <ContentTwo />
        <ContentThree />
    </div>
  )
}

export default MainContent

