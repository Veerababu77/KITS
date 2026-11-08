import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ComingSoonPageProps {
  title: string;
  description?: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ title, description }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-background">
    <div className="container-kits text-center max-w-xl">
      <div className="w-16 h-16 bg-navy/5 flex items-center justify-center mx-auto mb-6">
        <span className="font-heading font-bold text-navy text-2xl">K</span>
      </div>
      <h1 className="font-heading font-bold text-3xl text-navy mb-3">{title}</h1>
      <div className="w-12 h-1 bg-gold mx-auto mb-4" />
      <p className="text-secondary-text text-base leading-relaxed mb-8">
        {description || 'This section is part of the full KITS website implementation. The complete content will be developed in subsequent phases.'}
      </p>
      <Link to="/" className="btn-primary inline-flex">
        <ArrowLeft size={15} />
        Back to Homepage
      </Link>
    </div>
  </div>
);

export default ComingSoonPage;
