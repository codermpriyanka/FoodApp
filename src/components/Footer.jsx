import React from 'react'

const Footer = () => {
  const currYear=new Date().getFullYear();
  return (
    <footer className='font-bold footer py-100 bg-blue-400 flex justify-center'>
      <p> Copyright & copy:{currYear}, Made with ❤</p>
    </footer>
  )
}

export default Footer
