import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className=' w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/ad12ac96-fbca-4f52-b66b-e255b47f29e2" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF8401] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> // Submit the form below or shoot an email-myemail@gmail.com</p>
            </div>
            <input  className='p-2 bg-[#ccd6f6]'type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' rows="10" name='message'></textarea>
            <button className='text-white border-2 hover:bg-[#FF8401] px-4 py-4 my-8 mx-auto flex items-center'> Let's collaborate</button>
        </form>

    
    </div>
  )
}
