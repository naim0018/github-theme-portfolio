
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMeModal = ({ isOpen, onClose }: HireMeModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-canvas-subtle border border-border-default rounded-lg w-full max-w-150 max-h-[90vh] overflow-y-auto p-6 md:p-8 relative custom-scrollbar"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-fg-muted hover:text-fg-default transition-colors p-2 rounded-full hover:bg-border-muted"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-fg-muted text-sm mb-8 leading-relaxed">
            I&apos;m currently available for full-time positions and consulting opportunities. 
            Fill out the form below and let&apos;s discuss how I can help your team.
          </p>
          
          <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); onClose(); }}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-fg-default">Name</label>
              <input 
                type="text" 
                required 
                className="bg-canvas-default border border-border-default rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-fg/20 focus:border-accent-fg transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-fg-default">Email</label>
              <input 
                type="email" 
                required 
                className="bg-canvas-default border border-border-default rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-fg/20 focus:border-accent-fg transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-fg-default">Company</label>
              <input 
                type="text" 
                className="bg-canvas-default border border-border-default rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-fg/20 focus:border-accent-fg transition-all"
                placeholder="Your company (optional)"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-fg-default">Message</label>
              <textarea 
                rows={4} 
                required 
                className="bg-canvas-default border border-border-default rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-fg/20 focus:border-accent-fg transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="github-btn-primary w-full justify-center py-3 mt-2 font-semibold text-white">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
