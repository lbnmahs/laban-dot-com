import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../animations/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID, 
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Laban',
        from_email: form.email,
        to_emails: 'labanmahs2002@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_EMAIL_PUBLIC_ID
    ).then(() => {
      setLoading(false)
      alert('Thank you, I will get back to you shortly.')
      setForm({
        name: "",
        email: "",
        message: ""
      })
    }), (error) => {
      setLoading(false)
      alert('Something went wrong, please try again later.')
      console.log(error.text)
    }
  }
  return (
    <div className='xl:mt-12'>

      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)} 
        className='bg-black-100 p-8 rounded-2xl'
      >
        <p class={`${styles.sectionSubText}`}>Get In Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type='text' 
              name='name' 
              autoComplete='off'
              value={form.name} 
              onChange={handleChange} 
              placeholder="What's your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type='email' 
              name='email' 
              autoComplete='off'
              value={form.email} 
              onChange={handleChange} 
              placeholder="What's your email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7' 
              name='message' 
              autoComplete='off'
              value={form.message} 
              onChange={handleChange} 
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {
              loading ? 'Sending...' : 'Send Message'
            }
          </button>
        </form>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')