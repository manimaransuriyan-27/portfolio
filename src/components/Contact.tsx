import { useState, useRef } from 'react';
import { Send, MapPin, Phone, Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, type Variants } from 'framer-motion';
import { personalData } from '../constants/profile';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _botcheck: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Bot honeypot check
    if (formData._botcheck !== '') {
      setIsSubmitting(false);
      setSubmitStatus('success'); 
      return;
    }

    // Strict Validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim() || formData.name.length > 100 || 
        !formData.email.trim() || formData.email.length > 100 || !emailRegex.test(formData.email) ||
        !formData.message.trim() || formData.message.length > 1000) {
      setIsSubmitting(false);
      return;
    }

    setSubmitStatus('idle');

    try {
      if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS environment variables are missing.");
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: personalData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', _botcheck: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] text-white relative">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Touch</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8" />
          <motion.p variants={fadeUpVariant} className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out. I'll try my best to get back to you!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
          >
            <div className="bg-[#111] border border-white/5 p-10 rounded-3xl h-full flex flex-col justify-between hover:border-white/10 transition-colors shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-semibold mb-6 text-zinc-100">Contact Information</h3>
                <p className="text-zinc-400 mb-10 leading-relaxed font-light">
                  I'm currently available for freelance work and open to full-time remote opportunities. Let's create something beautiful together.
                </p>
              </div>

              <div className="space-y-8 relative z-10">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-black/50 border border-white/5 shadow-inner rounded-full flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-zinc-300 font-medium text-lg">Location</h4>
                    <p className="text-zinc-500">Salem, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-black/50 border border-white/5 shadow-inner rounded-full flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-zinc-300 font-medium text-lg">Phone</h4>
                    <p className="text-zinc-500">+91 9043270496</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-black/50 border border-white/5 shadow-inner rounded-full flex items-center justify-center text-pink-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-zinc-300 font-medium text-lg">Email</h4>
                    <p className="text-zinc-500">{personalData.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
          >
            <div className="bg-[#111] border border-white/5 p-10 rounded-3xl shadow-2xl relative">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <input type="text" name="_botcheck" style={{ display: 'none' }} value={formData._botcheck} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-3 ml-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder-zinc-600 shadow-inner"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-3 ml-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder-zinc-600 shadow-inner"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-3 ml-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={1000}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none placeholder-zinc-600 shadow-inner"
                    placeholder="Enter your message"
                  />
                </div>

                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-2xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                  >
                    {isSubmitting ? (
                      <>Sending... <Loader2 size={20} className="animate-spin" /></>
                    ) : (
                      <>Send Message <Send size={20} /></>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-4 text-emerald-400">
                      <CheckCircle size={24} className="flex-shrink-0" />
                      <p className="font-medium text-emerald-300">Message sent successfully! I'll get back to you soon.</p>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 p-5 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center gap-4 text-rose-400">
                      <AlertCircle size={24} className="flex-shrink-0" />
                      <p className="font-medium text-rose-300">Failed to send message. Please try again or email me directly.</p>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
