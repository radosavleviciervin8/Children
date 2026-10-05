import React from 'react';
import { Shield, AlertCircle, Scale, FileText, Users, PhoneCall, Calendar } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onEmergencyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onEmergencyClick }) => {
  const navLinks = [
    { id: 'emergency', label: 'Emergency Crisis Plan', icon: AlertCircle },
    { id: 'draftsman', label: 'Legal Notice Draftsman', icon: FileText },
    { id: 'both-parents', label: 'Both Parents Equality', icon: Users },
    { id: 'ombudsman', label: 'Ombudsman & Remedies', icon: Scale },
    { id: 'directory', label: 'Statutory Directory', icon: PhoneCall },
    { id: 'tracker', label: 'Case Timeline & Vault', icon: Calendar },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs no-print">
      {/* Official Standard Indicator Ribbon */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 md:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-amber-400">UK STATUTORY ADVOCACY</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Children Act 1989 · Housing Act 1996 · Human Rights Act 1998 · GOV.UK Standards</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <span>Free Public Legal Guidance</span>
            <span>·</span>
            <span className="text-emerald-400 font-medium">Confidential & Client-Side Only</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Brand - 4-6 Nav Links - Primary Action */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark in display face */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-amber-700 flex items-center justify-center text-white shrink-0">
            <Shield className="w-4 h-4" />
          </div>
          <button 
            onClick={() => setActiveTab('emergency')}
            className="text-left group"
          >
            <span className="font-serif-legal text-lg md:text-xl font-bold tracking-tight text-slate-900 group-hover:text-amber-800 transition-colors">
              Parental Welfare & Statutory Justice
            </span>
          </button>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`py-1.5 transition-colors whitespace-nowrap text-xs xl:text-sm ${
                  isActive
                    ? 'text-amber-800 font-semibold border-b-2 border-amber-800'
                    : 'hover:text-slate-900 border-b-2 border-transparent'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onEmergencyClick}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-800 active:bg-rose-900 rounded-md transition-colors shadow-xs flex items-center gap-1.5 whitespace-nowrap"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Crisis Action Plan</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Sub-Bar */}
      <div className="lg:hidden px-4 py-2 border-t border-slate-100 bg-slate-50 flex items-center gap-2 overflow-x-auto no-scrollbar">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activeTab === link.id;
          return (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{link.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
