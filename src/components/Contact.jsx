import {useState, useRef}  from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
    const[form, setForm] = useState({
      name : "",
      email : "",
       message : "",
    });
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO:- emailjs sending logic here...
        setLoading(false);

        setForm({
            name : "",
      email : "",
       message : "",
        })

  };
   return (
    <div className="flex flex-col-reverse xl:flex-row gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='w-full xl:w-1/2 bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}> Get in touch</p>
        <h3 className={styles.sectionHeadText}> Contact</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Please enter your name...'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Please enter your email address...'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> Your Message</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Please enter your message...'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button className='bg-tertiary py-3 px-8 outline-none w-fit rounded-xl text-white font-bold shadow-md shadow-primary' type='submit'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div className="w-full xl:w-1/2 h-[350px] md:h-[500px] xl:h-[550px]" variants={slideIn('right', 'tween', 0.2, 1)}>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};
export default SectionWrapper(Contact, "contact");
