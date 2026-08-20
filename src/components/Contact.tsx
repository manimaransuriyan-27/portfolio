import { useState, useRef } from 'react';
import { Send, MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, type Variants } from 'framer-motion';
import { toast } from 'sonner';
import { personalData } from '../constants/profile';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _botcheck: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Bot honeypot check
    if (formData._botcheck !== '') {
      setIsSubmitting(false);
      return;
    }

    // Strict Validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim() || formData.name.length > 100 ||
        !formData.email.trim() || formData.email.length > 100 || !emailRegex.test(formData.email) ||
        !formData.message.trim() || formData.message.length > 1000) {
      setIsSubmitting(false);
      toast.error('Please check your details and try again.');
      return;
    }

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

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '', _botcheck: '' });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error('Failed to send message. Please try again or email me directly.');
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
    <section id="contact" className="py-32 bg-background text-foreground relative">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08)_0%,transparent_70%)] pointer-events-none" />

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
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Touch</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-8" />
          <motion.p variants={fadeUpVariant} className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
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
            <Card className="group relative h-full justify-between overflow-hidden rounded-3xl border-border shadow-2xl ring-0 transition-colors hover:border-cyan-500/30 [--card-spacing:--spacing(10)]">
              <CardContent className="relative z-0">
                <h3 className="text-3xl font-semibold mb-6 text-foreground">Contact Information</h3>
                <p className="text-muted-foreground mb-10 leading-relaxed font-light">
                  I'm currently available for freelance work and open to full-time remote opportunities. Let's create something beautiful together.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 bg-muted border border-border shadow-inner rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-foreground/90 font-medium text-lg">Location</h4>
                      <p className="text-muted-foreground">Salem, India</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 bg-muted border border-border shadow-inner rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-foreground/90 font-medium text-lg">Phone</h4>
                      <p className="text-muted-foreground">+91 9043270496</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 bg-muted border border-border shadow-inner rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-foreground/90 font-medium text-lg">Email</h4>
                      <p className="text-muted-foreground">{personalData.email}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
          >
            <Card className="relative rounded-3xl border-border shadow-2xl ring-0 [--card-spacing:--spacing(10)]">
              <CardContent className="relative z-0">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  <input type="text" name="_botcheck" style={{ display: 'none' }} value={formData._botcheck} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <Label htmlFor="name" className="mb-3 ml-1 text-sm font-medium text-muted-foreground">Your Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className="h-auto w-full rounded-2xl border-border bg-background px-5 py-4 text-foreground shadow-inner placeholder:text-muted-foreground/70 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="mb-3 ml-1 text-sm font-medium text-muted-foreground">Your Email</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className="h-auto w-full rounded-2xl border-border bg-background px-5 py-4 text-foreground shadow-inner placeholder:text-muted-foreground/70 focus-visible:border-purple-500 focus-visible:ring-purple-500/50"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="mb-3 ml-1 text-sm font-medium text-muted-foreground">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={1000}
                      className="w-full resize-none rounded-2xl border-border bg-background px-5 py-4 text-foreground shadow-inner placeholder:text-muted-foreground/70 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/50"
                      placeholder="Enter your message"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      render={
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                        />
                      }
                      disabled={isSubmitting}
                      className="h-auto w-full gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 px-10 py-5 font-bold tracking-wide text-white shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
                    >
                      {isSubmitting ? (
                        <>Sending... <Loader2 size={20} className="animate-spin" /></>
                      ) : (
                        <>Send Message <Send size={20} /></>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
