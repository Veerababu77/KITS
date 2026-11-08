import React, { useState, useRef } from 'react';
import { cn } from '@/utils/cn';

type AspectRatio = '4:3' | '16:9' | '1:1' | 'hero' | 'auto';
type Category = 'campus' | 'hostel' | 'library' | 'laboratory' | 'transport' | 'nss' | 'events' | 'sports' | 'management' | 'hero' | 'general';

interface KitsImageProps {
  src: string;
  alt: string;
  category?: Category;
  aspectRatio?: AspectRatio;
  objectPosition?: string;
  fallback?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  caption?: string;
}

const aspectRatioClasses: Record<AspectRatio, string> = {
  '4:3': 'aspect-[4/3]',
  '16:9': 'aspect-[16/9]',
  '1:1': 'aspect-square',
  'hero': 'aspect-auto',
  'auto': 'aspect-auto',
};

// Initials-based placeholder for management portraits
const ManagementPlaceholder: React.FC<{ initials?: string; className?: string }> = ({
  initials = '?',
  className,
}) => (
  <div
    className={cn(
      'flex items-center justify-center bg-gradient-to-br from-navy-700 to-royal-600 text-white font-heading font-bold',
      className
    )}
  >
    <span className="text-3xl tracking-wider">{initials}</span>
  </div>
);

// Generic placeholder
const GenericPlaceholder: React.FC<{ category?: Category; className?: string }> = ({
  category = 'general',
  className,
}) => {
  const bgColors: Record<string, string> = {
    campus: 'from-navy-700 to-navy-500',
    hostel: 'from-blue-800 to-blue-600',
    library: 'from-amber-800 to-amber-600',
    laboratory: 'from-indigo-800 to-indigo-600',
    transport: 'from-slate-700 to-slate-500',
    nss: 'from-green-800 to-green-600',
    events: 'from-purple-800 to-purple-600',
    sports: 'from-orange-800 to-orange-600',
    general: 'from-gray-700 to-gray-500',
  };

  const labels: Record<string, string> = {
    campus: 'KITS Campus',
    hostel: 'Hostel',
    library: 'Library',
    laboratory: 'Laboratory',
    transport: 'Transport',
    nss: 'NSS',
    events: 'Events',
    sports: 'Sports',
    general: 'KITS',
  };

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center bg-gradient-to-br text-white/80',
        bgColors[category] || bgColors.general,
        className
      )}
    >
      <div className="w-12 h-12 mb-2 opacity-40">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
        </svg>
      </div>
      <span className="text-xs font-medium opacity-60">{labels[category] || 'Image'}</span>
    </div>
  );
};

const KitsImage: React.FC<KitsImageProps> = ({
  src,
  alt,
  category = 'general',
  aspectRatio = '4:3',
  objectPosition = 'center',
  fallback,
  loading = 'lazy',
  priority = false,
  className,
  imgClassName,
  caption,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleError = () => setHasError(true);
  const handleLoad = () => setIsLoaded(true);

  const loadingAttr = priority ? 'eager' : loading;

  return (
    <figure className={cn('relative overflow-hidden', className)}>
      <div className={cn('relative w-full overflow-hidden', aspectRatioClasses[aspectRatio])}>
        {/* Loading skeleton */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}

        {hasError ? (
          category === 'management' ? (
            <ManagementPlaceholder initials={fallback} className="absolute inset-0 w-full h-full" />
          ) : (
            <GenericPlaceholder category={category} className="absolute inset-0 w-full h-full" />
          )
        ) : (
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            loading={loadingAttr}
            onError={handleError}
            onLoad={handleLoad}
            className={cn(
              'w-full h-full object-cover transition-opacity duration-500',
              isLoaded ? 'opacity-100' : 'opacity-0',
              imgClassName
            )}
            style={{ objectPosition }}
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-secondary-text text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default KitsImage;
