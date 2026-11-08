import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, GraduationCap, CheckCircle } from 'lucide-react';
import { cn } from '@/utils/cn';

const enquirySchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z.string()
    .regex(/^(\+91|91|0)?[6-9]\d{9}$/, 'Please enter a valid Indian phone number'),
  email: z.string().email('Please enter a valid email address'),
  programme: z.string().min(1, 'Please select a programme'),
  department: z.string().min(1, 'Please select a department'),
  message: z.string().optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

const programmes = [
  'Diploma',
  'B.Tech (Undergraduate)',
  'M.Tech (Postgraduate)',
];

const departments = [
  'Agricultural Engineering',
  'Civil Engineering',
  'Computer Science and Engineering',
  'CSD (Data Science)',
  'Electrical and Electronics Engineering',
  'Electronics and Communication Engineering',
  'Mechanical Engineering',
  'Artificial Intelligence and Data Science',
  'Humanities and Sciences',
];

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => (
    <div className={className}>
      <label className="block text-xs font-nav font-semibold text-primary-text mb-1.5 uppercase tracking-wide">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      <input
        ref={ref}
        className={cn(
          'w-full px-4 py-2.5 border text-sm font-body outline-none transition-all duration-200',
          'placeholder:text-secondary-text/50',
          error
            ? 'border-red-400 bg-red-50 focus:border-red-500'
            : 'border-gray-200 bg-white focus:border-royal focus:ring-1 focus:ring-royal/20'
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
);
FormInput.displayName = 'FormInput';

const AdmissionEnquirySection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = async (data: EnquiryFormData) => {
    // Demo only — no backend
    console.log('Enquiry form submitted (demo):', data);
    await new Promise((r) => setTimeout(r, 800)); // Simulate async
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); reset(); }, 5000);
  };

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-kits">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 text-secondary-text text-xs font-nav tracking-widest uppercase mb-4">
              <span className="w-6 h-px bg-gold" />
              Admissions
            </div>
            <h2 className="section-title mb-4">
              Begin Your Journey
              <br />
              <span className="text-royal">at KITS</span>
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-secondary-text text-base leading-relaxed mb-8">
              Take the first step towards a rewarding engineering career. Submit your enquiry and our admissions team will reach out to guide you through the process.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <a href="tel:+919010695695" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-navy flex items-center justify-center group-hover:bg-gold transition-colors duration-200">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-secondary-text font-nav">Phone</p>
                  <p className="text-primary-text font-medium text-sm">+91 9010695695</p>
                </div>
              </a>
              <a href="tel:+919010344441" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-navy flex items-center justify-center group-hover:bg-gold transition-colors duration-200">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-secondary-text font-nav">Admissions</p>
                  <p className="text-primary-text font-medium text-sm">+91 9010344441</p>
                </div>
              </a>
              <a href="mailto:kitsenggcollege@gmail.com" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-navy flex items-center justify-center group-hover:bg-gold transition-colors duration-200">
                  <Mail size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-secondary-text font-nav">Email</p>
                  <p className="text-primary-text font-medium text-sm">kitsenggcollege@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-navy flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-secondary-text font-nav">Address</p>
                  <p className="text-primary-text font-medium text-sm leading-relaxed">
                    Tirupati Village, Divili,
                    <br />Peddapuram Mandal, East Godavari,
                    <br />Andhra Pradesh — 533433
                  </p>
                </div>
              </div>
            </div>

            <Link to="/contact" className="btn-outline inline-flex">
              <MapPin size={15} />
              Get Directions
            </Link>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-gray-100 shadow-premium-lg p-8">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="text-gold" size={22} />
                <h3 className="font-heading font-semibold text-navy text-xl">Admission Enquiry</h3>
              </div>

              {/* Demo notice */}
              <div className="bg-amber-50 border border-amber-200 p-3 mb-6 text-xs text-amber-700 font-nav">
                📋 This is a demonstration form. Submissions do not reach the institution. Please contact KITS directly for official admissions.
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  <h4 className="font-heading font-semibold text-navy text-xl mb-2">
                    Thank You!
                  </h4>
                  <p className="text-secondary-text text-sm">
                    Your enquiry has been recorded (demo). The form will reset shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <FormInput
                      label="First Name"
                      placeholder="Enter first name"
                      required
                      error={errors.firstName?.message}
                      {...register('firstName')}
                    />
                    <FormInput
                      label="Last Name"
                      placeholder="Enter last name"
                      required
                      error={errors.lastName?.message}
                      {...register('lastName')}
                    />
                    <FormInput
                      label="Phone Number"
                      type="tel"
                      placeholder="+91 90001 00001"
                      required
                      error={errors.phone?.message}
                      {...register('phone')}
                    />
                    <FormInput
                      label="Email Address"
                      type="email"
                      placeholder="your@email.com"
                      required
                      error={errors.email?.message}
                      {...register('email')}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-nav font-semibold text-primary-text mb-1.5 uppercase tracking-wide">
                        Programme <span className="text-red-500">*</span>
                      </label>
                      <select
                        className={cn(
                          'w-full px-4 py-2.5 border text-sm font-body outline-none transition-all duration-200 bg-white',
                          errors.programme
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-gray-200 focus:border-royal focus:ring-1 focus:ring-royal/20'
                        )}
                        {...register('programme')}
                      >
                        <option value="">Select Programme</option>
                        {programmes.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                      {errors.programme && <p className="mt-1 text-xs text-red-500">{errors.programme.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-nav font-semibold text-primary-text mb-1.5 uppercase tracking-wide">
                        Department <span className="text-red-500">*</span>
                      </label>
                      <select
                        className={cn(
                          'w-full px-4 py-2.5 border text-sm font-body outline-none transition-all duration-200 bg-white',
                          errors.department
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-gray-200 focus:border-royal focus:ring-1 focus:ring-royal/20'
                        )}
                        {...register('department')}
                      >
                        <option value="">Select Department</option>
                        {departments.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                      {errors.department && <p className="mt-1 text-xs text-red-500">{errors.department.message}</p>}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-nav font-semibold text-primary-text mb-1.5 uppercase tracking-wide">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Any specific questions or additional information..."
                      className="w-full px-4 py-2.5 border border-gray-200 text-sm font-body outline-none focus:border-royal focus:ring-1 focus:ring-royal/20 transition-all duration-200 resize-none"
                      {...register('message')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full justify-center text-base py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <GraduationCap size={18} />
                        Submit Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionEnquirySection;
