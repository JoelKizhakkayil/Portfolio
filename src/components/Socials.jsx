import React from 'react'
import { Linkedin,Github } from "lucide-react";

const Socials = () => {
  return (
    <div className='cosmic-button w-fit inline-flex gap-10 justify-center mx-auto mt-auto py-2 relative px-10'>
        <a href='https://www.linkedin.com/in/joelkizhakkayil10/' target='_blank' rel='noreferrer'>
            <Linkedin/> 
        </a>
        <a href='https://github.com/JoelKizhakkayil' target='_blank' rel='noreferrer'>
            <Github/>
        </a>
    </div>
  )
}

export default Socials
