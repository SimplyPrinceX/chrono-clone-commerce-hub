import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      toast({
        title: 'Message Sent',
        description: "Thank you for your message. We'll get back to you as soon as possible.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="watch-container">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex text-sm">
            <li className="text-gray-500 hover:text-gray-700">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="font-medium">Contact Us</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Our Address</h3>
                  <p className="text-gray-700">
                    45 MG Road<br />
                    Indiranagar, Bengaluru, Karnataka 560038<br />
                    India
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-700">
                    <a href="mailto:contact@chronova.in" className="text-gold hover:underline">
                      contact@chronova.in
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-700">
                    <a href="tel:+918867472331" className="text-gold hover:underline">
                      +91 88674 72331
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Opening Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 10:00 AM - 7:00 PM<br />
                    Saturday: 11:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'border-red-500' : ''}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" className="bg-gold hover:bg-amber-600 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Our Location</h2>
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
            <iframe
              title="Chronova Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.042283191144!2d77.6407062!3d12.9718932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167fbdfeadbb%3A0x2bb3b8a4a4f3a2aa!2s45%20MG%20Road%2C%20Indiranagar%2C%20Bangalore%2C%20Karnataka%20560038!5e0!3m2!1sen!2sin!4v1714933529933!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
