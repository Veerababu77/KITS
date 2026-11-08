import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, ArrowRight, GraduationCap, BookOpen, Award, Compass } from 'lucide-react';
import { cn } from '@/utils/cn';

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE_1 = 'https://www.kitsdivili.ac.in/images/infra1.jpg';
const HERO_IMAGE_2 = 'https://www.kitsdivili.ac.in/images/banner-nacc-home.png';

// Synchronous screen detection to prevent layout shift or pin-locking on initial render
const checkIsMobileOrTablet = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 1024 || 'ontouchstart' in window;
};

// =========================================================================
// RESPONSIVE HERO (For Phones, Tablets & Touch Viewports: 320px - 1023px)
// Never pins the screen; allows 100% natural, fluid touch scrolling
// =========================================================================
const MobileTabletHero: React.FC = () => {
  const [activeScene, setActiveScene] = useState<0 | 1>(0);
  const prefersReduced = useReducedMotion();

  // Automatic gentle crossfade between Scene 1 and Scene 2
  useEffect(() => {
    if (prefersReduced) return;
    const timer = setInterval(() => {
      setActiveScene((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, [prefersReduced]);

  const scrollToNextSection = () => {
    const nextElem = document.getElementById('institutional-prestige-section');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-navy overflow-hidden min-h-[580px] h-[85vh] max-h-[850px] flex flex-col justify-between">
      {/* Background Images with smooth crossfade */}
      <div className="absolute inset-0 z-0 bg-navy">
        {/* Scene 1: Campus Identity */}
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
            activeScene === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          )}
        >
          <img
            src={HERO_IMAGE_1}
            alt="KITS Divili Campus Infrastructure"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-navy/40" />
        </div>

        {/* Scene 2: Institutional Recognition Banner */}
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
            activeScene === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          )}
        >
          <img
            src={HERO_IMAGE_2}
            alt="KITS Divili NAAC Accreditation Banner"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-navy/30" />
        </div>
      </div>

      {/* Top Scene Switcher Pills (Allows phone/tablet user to instantly toggle between Scene 1 and Scene 2) */}
      <div className="relative z-20 pt-4 px-4 sm:px-6 flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 bg-navy/80 backdrop-blur-md border border-gold/40 px-3 py-1 rounded-full text-[11px] font-nav text-gold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Est. 2008 &bull; Autonomous</span>
        </div>

        {/* Scene 1 / Scene 2 Toggle Buttons */}
        <div className="flex items-center gap-1.5 bg-navy/80 backdrop-blur-md border border-white/20 p-1 rounded-full">
          <button
            onClick={() => setActiveScene(0)}
            className={cn(
              'px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-nav font-bold transition-all',
              activeScene === 0
                ? 'bg-gold text-navy shadow-sm'
                : 'text-white/70 hover:text-white'
            )}
            aria-label="Show Scene 1: Campus"
          >
            1. Campus
          </button>
          <button
            onClick={() => setActiveScene(1)}
            className={cn(
              'px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-nav font-bold transition-all',
              activeScene === 1
                ? 'bg-gold text-navy shadow-sm'
                : 'text-white/70 hover:text-white'
            )}
            aria-label="Show Scene 2: Recognition"
          >
            2. NAAC Recognition
          </button>
        </div>
      </div>

      {/* Center/Bottom Content */}
      <div className="relative z-20 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 flex-1 flex flex-col justify-end max-w-3xl">
        <AnimatePresence mode="wait">
          {activeScene === 0 ? (
            <motion.div
              key="scene-1-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Shaping Minds. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-gold to-amber-400">
                  Building Futures.
                </span>
              </h1>

              <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed font-body max-w-xl">
                Kakinada Institute of Technology and Science &mdash; Empowering the next generation through quality technical education, innovation and excellence.
              </p>

              <div className="border-l-3 border-gold pl-3 py-0.5">
                <p className="text-white text-xs sm:text-sm font-nav font-bold uppercase tracking-wide">
                  KAKINADA INSTITUTE OF TECHNOLOGY &amp; SCIENCE
                </p>
                <p className="text-gold text-[11px] font-nav font-semibold tracking-widest uppercase">
                  DIVILI &bull; AUTONOMOUS
                </p>
              </div>

              {/* Touch-Friendly Action Buttons */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <Link
                  to="/about"
                  className="btn-gold py-2.5 px-4 sm:px-5 text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-1.5"
                >
                  <span>Explore KITS</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/departments"
                  className="btn-outline py-2.5 px-4 sm:px-5 text-xs sm:text-sm font-medium border border-white/80 text-white hover:bg-white hover:text-navy inline-flex items-center gap-1.5 backdrop-blur-sm"
                >
                  <BookOpen size={14} />
                  <span>Departments</span>
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="scene-2-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/60 px-3 py-1 rounded text-xs font-nav font-bold text-amber-200 uppercase">
                <Award size={14} className="text-gold" />
                <span>NAAC &lsquo;A&rsquo; Grade Distinction &bull; 3.03 CGPA</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                National Institutional Recognition
              </h2>

              <p className="text-white/85 text-xs sm:text-sm font-body leading-relaxed max-w-xl">
                Autonomous status conferred by UGC, permanent affiliation to JNTUK Kakinada, and AICTE approval across all engineering disciplines.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <Link
                  to="/admissions/enquiry"
                  className="btn-gold py-2.5 px-5 text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2"
                >
                  <GraduationCap size={16} />
                  <span>Apply for Admission</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/achievements"
                  className="btn-outline py-2.5 px-4 text-xs sm:text-sm font-medium border border-white/80 text-white hover:bg-white hover:text-navy inline-flex items-center gap-1.5 backdrop-blur-sm"
                >
                  <Award size={14} />
                  <span>Achievements</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Scroll Prompt (Smooth tap/scroll to proceed) */}
      <div className="relative z-20 pb-3 flex justify-center">
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center gap-1 text-white/70 hover:text-gold transition-colors py-1 px-3"
          aria-label="Scroll to explore rest of campus"
        >
          <span className="text-[10px] font-nav uppercase tracking-widest font-semibold">
            Tap or Scroll to Explore
          </span>
          <ChevronDown size={16} className="text-gold animate-bounce" />
        </button>
      </div>
    </div>
  );
};

// =========================================================================
// DESKTOP HERO (For Laptops & Large Desktops: >= 1024px Non-Touch)
// Pinned scroll-driven cinematic progression
// =========================================================================
const DesktopHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scene1Ref = useRef<HTMLDivElement>(null);
  const scene2Ref = useRef<HTMLDivElement>(null);
  const scene1TextRef = useRef<HTMLDivElement>(null);
  const scene2TextRef = useRef<HTMLDivElement>(null);
  const scene1ImgRef = useRef<HTMLImageElement>(null);
  const scene2ImgRef = useRef<HTMLImageElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Pin hero container for 200vh
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=200%',
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          setScrollProgress(p);
          setShowScrollIndicator(p < 0.08);
        },
      });

      // Scene 1 parallax zoom
      gsap.to(scene1ImgRef.current, {
        scale: 1.08,
        yPercent: 8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: 1.2,
        },
      });

      // Scene 1 text exit
      gsap.to(scene1TextRef.current, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=65%',
          scrub: 1,
        },
      });

      // Scene 2 layers OVER Scene 1 (Scene 1 stays as solid photo background: zero white flash)
      gsap.fromTo(
        scene2Ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: '+=40%',
            end: '+=120%',
            scrub: 1.2,
          },
        }
      );

      // Scene 2 image zoom
      gsap.fromTo(
        scene2ImgRef.current,
        { scale: 1.08 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: '+=40%',
            end: '+=130%',
            scrub: 1.5,
          },
        }
      );

      // Scene 2 text reveal
      gsap.fromTo(
        scene2TextRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: '+=85%',
            end: '+=150%',
            scrub: 1,
          },
        }
      );

      // Progress bar
      gsap.to(progressBarRef.current, {
        scaleX: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: true,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === containerRef.current) {
          st.kill();
        }
      });
    };
  }, [prefersReduced]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-navy overflow-hidden"
      style={{ height: '100vh', backgroundColor: '#0B1F3A' }}
    >
      {/* Top progress bar */}
      <div
        ref={progressBarRef}
        className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-amber-300 to-royal z-40 origin-left"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* SCENE 1 — Campus Identity (Base layer: z-index 10) */}
      <div
        ref={scene1Ref}
        className="hero-scene z-10 bg-navy"
        style={{ backgroundColor: '#0B1F3A' }}
      >
        <img
          ref={scene1ImgRef}
          src={HERO_IMAGE_1}
          alt="KITS Divili Campus — Shaping Minds, Building Futures"
          className="hero-image-cover bg-navy"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 navy-overlay" />

        <div
          ref={scene1TextRef}
          className="absolute inset-0 flex flex-col items-start justify-center z-20"
        >
          <div className="container-kits w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 border border-gold/70 text-gold text-xs font-nav tracking-widest uppercase px-4 py-1.5 mb-5 bg-navy/50 backdrop-blur-md rounded">
                  <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                  Est. 2008 &bull; Autonomous Institution
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="font-heading text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-md"
              >
                Shaping Minds.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-gold to-amber-400">
                  Building Futures.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 max-w-xl font-body drop-shadow-sm"
              >
                Kakinada Institute of Technology and Science &mdash; Empowering the next generation through quality technical education, innovation and excellence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="border-l-3 border-gold pl-4 mb-8"
              >
                <p className="text-white font-nav font-semibold text-sm tracking-wider uppercase">
                  KAKINADA INSTITUTE OF TECHNOLOGY AND SCIENCE
                </p>
                <p className="text-gold text-xs font-nav font-bold tracking-widest mt-0.5">
                  DIVILI &bull; AUTONOMOUS
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/about"
                  className="btn-gold px-7 py-3.5 text-sm font-bold shadow-lg hover:shadow-gold transition-all"
                >
                  <span>Explore KITS</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/academics"
                  className="btn-outline px-7 py-3.5 text-sm font-medium border-2 border-white/80 text-white hover:bg-white hover:text-navy hover:border-white transition-all backdrop-blur-sm"
                >
                  <BookOpen size={16} />
                  <span>Discover Academics</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* SCENE 2 — Recognition (Layered directly over Scene 1: z-index 20) */}
      <div
        ref={scene2Ref}
        className="hero-scene z-20 bg-navy"
        style={{ opacity: 0, backgroundColor: '#0B1F3A' }}
      >
        <img
          ref={scene2ImgRef}
          src={HERO_IMAGE_2}
          alt="KITS Divili — Institutional Recognition and Accreditation"
          className="hero-image-cover bg-navy"
          loading="eager"
        />

        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />

        <div
          ref={scene2TextRef}
          className="absolute bottom-0 left-0 right-0 z-30"
          style={{ opacity: 0 }}
        >
          <div className="container-kits pb-12">
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/admissions/enquiry"
                className="btn-gold px-7 py-3.5 text-sm font-bold shadow-lg inline-flex items-center gap-2"
              >
                <GraduationCap size={17} />
                <span>Apply for Admission 2024-25</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/about/vision-mission"
                className="btn-outline px-6 py-3.5 text-sm font-medium border-2 border-white/80 text-white hover:bg-white hover:text-navy hover:border-white transition-all backdrop-blur-sm"
              >
                Institutional Credentials
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scene Dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
        <div
          className={cn(
            'w-2.5 h-2.5 border border-white/80 transition-all duration-300 rounded-xs',
            scrollProgress < 0.5 ? 'bg-gold scale-125 shadow-md shadow-gold/50' : 'bg-white/40 scale-100'
          )}
          title="Scene 1 — Campus Identity"
        />
        <div
          className={cn(
            'w-2.5 h-2.5 border border-white/80 transition-all duration-300 rounded-xs',
            scrollProgress >= 0.5 ? 'bg-gold scale-125 shadow-md shadow-gold/50' : 'bg-white/40 scale-100'
          )}
          title="Scene 2 — Institutional Recognition"
        />
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ opacity: showScrollIndicator ? 1 : 0, y: showScrollIndicator ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-30 pointer-events-none"
      >
        <span className="text-white/70 text-[11px] font-nav font-semibold tracking-widest uppercase">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-gold" size={20} />
        </motion.div>
      </motion.div>
    </div>
  );
};

// =========================================================================
// MAIN HERO COMPONENT: Instantly dispatches to responsive view without locking
// =========================================================================
const CinematicHero: React.FC = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(checkIsMobileOrTablet);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(checkIsMobileOrTablet());
      // Refresh ScrollTrigger calculations on window resize
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return isMobileOrTablet ? <MobileTabletHero /> : <DesktopHero />;
};

export default CinematicHero;
