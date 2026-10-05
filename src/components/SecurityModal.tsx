import React from 'react';
import { ShieldCheck, Lock, Trash2, X, AlertTriangle, EyeOff, ServerOff } from 'lucide-react';

interface SecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurgeData: () => void;
}

export const SecurityModal: React.FC<SecurityModalProps> = ({ isOpen, onClose, onPurgeData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs no-print">
      <div 
        className="bg-white rounded-lg shadow-xl max-w-lg w-full border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="security-dialog-title"
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h2 id="security-dialog-title" className="font-serif-legal font-bold text-base">
              Security, Privacy & Data Protection
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Close security modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 text-xs text-slate-700">
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-md flex items-start gap-2.5">
            <ServerOff className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-emerald-900">Zero Remote Server Storage:</span>
              <p className="mt-0.5 text-emerald-800 leading-relaxed">
                All case facts, names, National Insurance numbers, child details, and legal notices remain 100% inside your local device browser. Nothing is ever sent to or stored on an external cloud database.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-slate-900 uppercase tracking-wider text-[11px]">
              How Your Data is Handled:
            </h3>
            
            <div className="flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <strong>Local HTML5 Storage:</strong> Your form drafts and timeline events are saved solely to your browser's private local storage so you do not lose your work if you refresh the page.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <EyeOff className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <strong>Zero Tracking & Zero Ads:</strong> There are no Google Analytics, advertising pixels, or third-party beacons monitoring your visits.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <strong>Shared Computer Warning:</strong> If you are using a public library or jobcentre computer, make sure to click "Purge Local Case Data" below before leaving.
              </div>
            </div>
          </div>

          {/* Purge Local Data Action */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              onClick={onPurgeData}
              className="px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Purge My Local Case Data</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
