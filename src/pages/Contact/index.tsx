import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^(\+91|91|0)?[6-9]\d{9}$/, 'Please enter a valid Indian mobile number'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | KITS Divili';
    window.scrollTo(0, 0);
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log('Contact form demo submitted:', data);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 5000);
  };

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-gradient-to-r from-navy via-navy-800 to-royal text-white py-16 lg:py-20 border-b-4 border-gold">
        <div className="container-kits">
          <div className="max-w-3xl">
            <span className="text-xs font-nav font-bold tracking-widest text-gold uppercase mb-2 block">
              Institutional Communications
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact KITS Divili
            </h1>
            <p className="text-white/80 text-base font-body leading-relaxed">
              Reach out to our campus administration, principal&rsquo;s office, or admissions helpline.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-kits max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 5 Cols: Published Contact Credentials */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Address Card */}
              <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-premium">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded bg-navy text-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-lg mb-1">
                      Campus Address
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary-text font-body leading-relaxed">
                      <strong>KAKINADA INSTITUTE OF TECHNOLOGY &amp; SCIENCE</strong><br />
                      Tirupati Village, Divili, Peddapuram Mandal,<br />
                      East Godavari District, Andhra Pradesh, India &ndash; <strong>533433</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Telephone Card */}
              <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-premium">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded bg-royal text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone size={20} />
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm font-body">
                    <h3 className="font-heading font-bold text-navy text-lg mb-1">
                      Telephones &amp; Helplines
                    </h3>
                    <p className="text-secondary-text">
                      <span className="font-semibold text-navy">General Enquiry:</span>{' '}
                      <a href="tel:+919010695695" className="text-royal font-bold hover:underline">
                        +91 9010695695
                      </a>
                    </p>
                    <p className="text-secondary-text">
                      <span className="font-semibold text-navy">Admissions Cell:</span>{' '}
                      <a href="tel:+919010344441" className="text-royal font-bold hover:underline">
                        +91 9010344441
                      </a>
                    </p>
                    <p className="text-secondary-text">
                      <span className="font-semibold text-navy">Landline Office:</span>{' '}
                      <span className="text-slate-800 font-medium">08852-247281</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-premium">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded bg-amber-600 text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail size={20} />
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm font-body">
                    <h3 className="font-heading font-bold text-navy text-lg mb-1">
                      Official Institutional Emails
                    </h3>
                    <p className="text-secondary-text">
                      <span className="font-semibold text-navy">Official College Email:</span><br />
                      <a href="mailto:kitsenggcollege@gmail.com" className="text-royal font-medium hover:underline">
                        kitsenggcollege@gmail.com
                      </a>
                    </p>
                    <p className="text-secondary-text">
                      <span className="font-semibold text-navy">JNTUK Principal Affiliation Email:</span><br />
                      <a href="mailto:jq.principal@jntuk.edu.in" className="text-royal font-medium hover:underline">
                        jq.principal@jntuk.edu.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-100 border border-slate-200 p-5 rounded-sm text-center">
                <MapPin className="text-slate-400 mx-auto mb-2" size={24} />
                <p className="text-xs font-nav font-bold text-navy uppercase">
                  Location Coordinates &bull; Divili, Peddapuram
                </p>
                <p className="text-[11px] text-secondary-text font-body mt-1">
                  Located along Peddapuram &ndash; Divili corridor, East Godavari, AP. College transport connects directly to campus gates.
                </p>
              </div>

            </div>

            {/* Right 7 Cols: Direct Message Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-premium-lg">
                <h3 className="font-heading font-bold text-2xl text-navy mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-secondary-text font-body leading-relaxed mb-6">
                  Fill out the form below and our administrative office will respond to your inquiry promptly.
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-sm text-center space-y-2">
                    <CheckCircle2 size={36} className="text-emerald-600 mx-auto" />
                    <h4 className="font-heading font-bold text-navy text-lg">Message Recorded (Demo)</h4>
                    <p className="text-xs text-slate-600 font-body">
                      Thank you for contacting KITS Divili. In this demonstration frontend, your message has been logged.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-xs font-nav font-bold text-navy uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        {...register('fullName')}
                        className="w-full p-2.5 border border-slate-200 rounded text-xs font-body outline-none focus:border-royal"
                      />
                      {errors.fullName && <p className="text-[11px] text-red-500 mt-0.5">{errors.fullName.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-nav font-bold text-navy uppercase mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 90001 00001"
                          {...register('phone')}
                          className="w-full p-2.5 border border-slate-200 rounded text-xs font-body outline-none focus:border-royal"
                        />
                        {errors.phone && <p className="text-[11px] text-red-500 mt-0.5">{errors.phone.message}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-nav font-bold text-navy uppercase mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="your.email@example.com"
                          {...register('email')}
                          className="w-full p-2.5 border border-slate-200 rounded text-xs font-body outline-none focus:border-royal"
                        />
                        {errors.email && <p className="text-[11px] text-red-500 mt-0.5">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-nav font-bold text-navy uppercase mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Admission Inquiry, Document Verification, Bus Route"
                        {...register('subject')}
                        className="w-full p-2.5 border border-slate-200 rounded text-xs font-body outline-none focus:border-royal"
                      />
                      {errors.subject && <p className="text-[11px] text-red-500 mt-0.5">{errors.subject.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-nav font-bold text-navy uppercase mb-1">
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Type your message or inquiry here..."
                        {...register('message')}
                        className="w-full p-2.5 border border-slate-200 rounded text-xs font-body outline-none focus:border-royal resize-none"
                      />
                      {errors.message && <p className="text-[11px] text-red-500 mt-0.5">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold py-3 px-6 text-xs font-bold w-full justify-center inline-flex items-center gap-2"
                    >
                      <Send size={14} />
                      <span>{isSubmitting ? 'Sending Message...' : 'Submit Message'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
