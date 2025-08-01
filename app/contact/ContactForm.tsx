'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    estate: '',
    plotSize: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    if (formData.message.length > 500) {
      setSubmitStatus('Message must be 500 characters or less');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          estate: formData.estate,
          plotSize: formData.plotSize,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          estate: '',
          plotSize: '',
          message: ''
        });
      } else {
        setSubmitStatus('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a192f] mb-6">Send Us a Message</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>
          
          <form id="contact-form" onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f7b733] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f7b733] transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f7b733] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <div className="relative">
                  <button 
                    type="button"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left cursor-pointer hover:border-[#f7b733] transition-colors pr-8"
                    onClick={() => {
                      const dropdown = document.getElementById('subject-dropdown');
                      dropdown?.classList.toggle('hidden');
                    }}
                  >
                    {formData.subject || 'Select Subject'}
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2"></i>
                  </button>
                  <div id="subject-dropdown" className="hidden absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
                    <div className="py-2">
                      {['General Inquiry', 'Plot Purchase', 'Site Visit Request', 'Title Processing', 'Construction Services', 'Other'].map(subject => (
                        <div 
                          key={subject}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            handleSelectChange('subject', subject);
                            document.getElementById('subject-dropdown')?.classList.add('hidden');
                          }}
                        >
                          {subject}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interested Estate</label>
                <div className="relative">
                  <button 
                    type="button"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left cursor-pointer hover:border-[#f7b733] transition-colors pr-8"
                    onClick={() => {
                      const dropdown = document.getElementById('estate-dropdown');
                      dropdown?.classList.toggle('hidden');
                    }}
                  >
                    {formData.estate || 'Select Estate'}
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2"></i>
                  </button>
                  <div id="estate-dropdown" className="hidden absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
                    <div className="py-2">
                      {['', 'Great North Estate - Kabwe', 'Paramount Estate - Kitwe', 'Dreamscape Housing - Ndola', 'Fatima Estate - Ndola'].map(estate => (
                        <div 
                          key={estate}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            handleSelectChange('estate', estate);
                            document.getElementById('estate-dropdown')?.classList.add('hidden');
                          }}
                        >
                          {estate || 'Not Sure Yet'}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Plot Size</label>
                <div className="relative">
                  <button 
                    type="button"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left cursor-pointer hover:border-[#f7b733] transition-colors pr-8"
                    onClick={() => {
                      const dropdown = document.getElementById('plotsize-dropdown');
                      dropdown?.classList.toggle('hidden');
                    }}
                  >
                    {formData.plotSize || 'Select Plot Size'}
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2"></i>
                  </button>
                  <div id="plotsize-dropdown" className="hidden absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
                    <div className="py-2">
                      {['', '30x20', '32x25', '40x20', '40x30'].map(size => (
                        <div 
                          key={size}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            handleSelectChange('plotSize', size);
                            document.getElementById('plotsize-dropdown')?.classList.add('hidden');
                          }}
                        >
                          {size || 'Not Sure Yet'}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={500}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f7b733] transition-colors resize-none"
                placeholder="Tell us about your requirements, questions, or any specific needs..."
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.message.length}/500 characters
              </div>
            </div>

            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${submitStatus.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {submitStatus}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#f7b733] text-white px-8 py-4 rounded-lg hover:bg-[#e6a82d] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}