'use client'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import ContactModal from '@/components/ContactModal';
import { useState } from 'react';

import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    console.log('hey', name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await emailjs
      .send(
        'service_hzlw7fh', // Replace with your EmailJS service ID
        'template_zi8qf7w', // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'FqRRzxqFGb4uqIWHr' // Replace with your EmailJS public key
      );

      alert('Message sent successfully!');
      setIsLoading(false);
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending the message. Please try again later.');
      setIsLoading(false);
      return;
    }
  };

  return (
    <section id="contact-section" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: `url(${grainImage.src})`}}></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-2xl">Let&apos;s create something amazing together</h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and discuss how
                I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-10 h-12 rounded-xl gap-2 lg:ml-10 w-max border border-gray-900">
                <span className="font-semibold" onClick={() => setIsOpen(true)}>Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && <ContactModal 
            setIsOpen={setIsOpen} 
            formData={formData} 
            handleSubmit={handleSubmit} 
            handleInputChange={handleInputChange} 
            isLoading={isLoading}
          />}
    </section>
  );
};

export default ContactSection;
