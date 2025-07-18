import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


emailjs.init('Rq50mknR58XYX-AF2');

// Custom Modal Component for messages
const MessageModal = ({ message, type, onClose }) => {
  if (!message) return null;

  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';
  const borderColor = type === 'success' ? 'border-green-400' : 'border-red-400';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`relative p-8 rounded-xl shadow-lg max-w-sm w-full text-center border-2 ${borderColor} ${bgColor}`}
      >
        <p className="text-white text-lg font-semibold mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-white text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_0k56q5f',
        'template_ly8cwnm',
        formRef.current,
        'Rq50mknR58XYX-AF2'
      )
      .then(
        (result) => {
          console.log(result.text);
          setModal({ message: 'Message sent successfully!', type: 'success' });
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error(error.text);
          setModal({ message: 'Oops, something went wrong. Please try again.', type: 'error' });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const closeModal = () => {
    setModal({ message: '', type: '' });
  };

  return (
    <div className="relative flex flex-col-reverse xl:flex-row gap-10 overflow-hidden min-h-screen items-center justify-center p-4">
      {/* Custom Message Modal */}
      <MessageModal message={modal.message} type={modal.type} onClose={closeModal} />

      {/* Form Section */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="w-full xl:w-1/2 p-1 bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500 rounded-3xl shadow-lg animate-gradient-pulse"
      >
        <div className="bg-gray-900 p-8 rounded-2xl h-full">
          <p className={`${styles.sectionSubText} text-purple-300`}>Get in touch</p>
          <h3 className={`${styles.sectionHeadText} text-blue-300`}>Contact</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 text-lg">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Please enter your name..."
                className="bg-gray-800 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium
                           focus:ring-2 focus:ring-purple-500 focus:shadow-lg focus:shadow-purple-500/50 transition-all duration-300"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 text-lg">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Please enter your email address..."
                className="bg-gray-800 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium
                           focus:ring-2 focus:ring-blue-500 focus:shadow-lg focus:shadow-blue-500/50 transition-all duration-300"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 text-lg">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Please enter your message..."
                className="bg-gray-800 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border-none font-medium
                           focus:ring-2 focus:ring-pink-500 focus:shadow-lg focus:shadow-pink-500/50 transition-all duration-300"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-500 py-3 px-8 outline-none w-fit rounded-xl text-white font-bold shadow-md shadow-primary
                         hover:scale-105 transition-all duration-300 transform-gpu cursor-pointer
                         disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="w-full xl:w-1/2 h-[350px] md:h-[500px] xl:h-[550px]"
      >
        <EarthCanvas />
      </motion.div>


    </div>
  );
};

export default SectionWrapper(Contact, 'contact');