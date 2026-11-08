import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, X, MessageSquare, Send, ShieldAlert, ArrowRight } from 'lucide-react';

interface FutureAiService {
  name: string;
  description: string;
  status: 'Ready for LLM Integration' | 'Architecture Prepared';
}

const futureAiServices: FutureAiService[] = [
  { name: 'AI Admission Assistant', description: 'Interactive course recommendation & eligibility Q&A', status: 'Ready for LLM Integration' },
  { name: 'AI Academic Search', description: 'Semantic retrieval across R20, R19 syllabus & regulations', status: 'Architecture Prepared' },
  { name: 'AI Document Assistant', description: 'Natural language search across academic circulars & timetable PDFs', status: 'Ready for LLM Integration' },
  { name: 'AI Student Support Bot', description: '24/7 automated campus navigation, bus routes & hostel FAQs', status: 'Architecture Prepared' },
];

const FutureAiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<string>('');

  const samplePrompts = [
    'What engineering courses are offered in 2024-25?',
    'What is the counseling code for KITS Divili?',
    'How do I reach the campus from Rajahmundry or Kakinada?',
    'Where can I download the R20 B.Tech Syllabus?',
  ];

  return (
    <>
      {/* Floating 3D AI Assistant Pill Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-navy via-navy-800 to-royal text-white border-2 border-gold/70 shadow-[0_8px_24px_rgba(11,31,58,0.3)] hover:shadow-[0_12px_32px_rgba(214,168,79,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
          aria-label="Open KITS AI Campus Assistant Preview"
        >
          <div className="relative">
            <Bot size={20} className="text-gold" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
          </div>
          <span className="text-xs font-nav font-bold tracking-wide">
            KITS AI Assistant
          </span>
          <span className="bg-gold/20 text-gold text-[10px] font-bold px-1.5 py-0.2 rounded uppercase">
            Preview
          </span>
        </button>
      </div>

      {/* AI Assistant Drawer Shell */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] bg-white rounded-lg border-2 border-slate-200 shadow-[0_20px_50px_rgba(11,31,58,0.25)] overflow-hidden flex flex-col"
            style={{ maxHeight: '580px' }}
          >
            {/* Header */}
            <div className="bg-navy p-4 text-white flex items-center justify-between border-b-2 border-gold">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/60 flex items-center justify-center text-gold">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-white">
                    KITS AI Digital Campus Shell
                  </h3>
                  <p className="text-[10px] text-amber-200 font-nav">
                    Future AI Architecture Ready
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white p-1 rounded hover:bg-white/10"
                aria-label="Close Assistant"
              >
                <X size={18} />
              </button>
            </div>

            {/* Architecture Readiness Notice */}
            <div className="bg-amber-50 border-b border-amber-200 p-3 flex items-start gap-2 text-xs text-amber-800 font-body">
              <ShieldAlert size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold font-nav text-[11px] text-amber-900 uppercase">
                  Frontend Architecture Preview Only
                </p>
                <p className="text-[11px] leading-tight">
                  External AI API integrations and LLM endpoints are prepared in the service layer for future college deployment.
                </p>
              </div>
            </div>

            {/* Simulated Chat Interface */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-slate-50/70 text-xs font-body">
              {/* Bot Welcome Bubble */}
              <div className="bg-white border border-slate-200 p-3 rounded-lg shadow-xs max-w-[90%]">
                <p className="font-semibold text-navy mb-1 flex items-center gap-1 font-nav">
                  <Bot size={13} className="text-gold" />
                  KITS Digital Assistant
                </p>
                <p className="text-secondary-text leading-relaxed">
                  Welcome to KAKINADA INSTITUTE OF TECHNOLOGY &amp; SCIENCE! Once linked to the campus knowledge base, I will answer questions regarding admissions, syllabus, bus routes, and exam timetables.
                </p>
              </div>

              {/* Sample Prompts */}
              <div className="space-y-1.5 pt-2">
                <p className="text-[10px] font-nav font-bold text-slate-500 uppercase tracking-wider">
                  Future Sample Queries:
                </p>
                {samplePrompts.map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelectedPrompt(p)}
                    className="w-full text-left p-2 rounded bg-white hover:bg-light-blue border border-slate-200/80 text-[11px] text-primary-text font-nav transition-colors"
                  >
                    &ldquo;{p}&rdquo;
                  </button>
                ))}
              </div>

              {/* Prepared Services Checklist */}
              <div className="pt-2 border-t border-slate-200">
                <p className="text-[10px] font-nav font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Prepared Service Modules:
                </p>
                <div className="space-y-1">
                  {futureAiServices.map((s) => (
                    <div key={s.name} className="flex items-center justify-between bg-white p-2 rounded border border-slate-100 text-[11px]">
                      <span className="font-medium text-navy font-nav">{s.name}</span>
                      <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-nav font-bold">
                        {s.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Disabled Input Field */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                disabled
                value={selectedPrompt}
                placeholder="AI query shell (Endpoint disabled in demo)..."
                className="flex-1 px-3 py-2 border border-slate-200 rounded text-xs bg-slate-50 text-slate-400 cursor-not-allowed outline-none"
              />
              <button
                disabled
                className="bg-slate-300 text-white p-2 rounded cursor-not-allowed"
                aria-label="Send query"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FutureAiAssistant;
