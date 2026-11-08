import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background">
    <div className="container-kits text-center max-w-md">
      <div className="font-heading font-bold text-8xl text-navy/10 mb-4">404</div>
      <h1 className="font-heading font-bold text-3xl text-navy mb-3">Page Not Found</h1>
      <div className="w-12 h-1 bg-gold mx-auto mb-5" />
      <p className="text-secondary-text text-base mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary inline-flex">
        <Home size={15} />
        Return Home
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
