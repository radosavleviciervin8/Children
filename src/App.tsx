import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { EmergencyTriage } from './components/EmergencyTriage';
import { LetterDraftsman } from './components/LetterDraftsman';
import { BothParentsRights } from './components/BothParentsRights';
import { CompensationGuide } from './components/CompensationGuide';
import { OfficialDirectory } from './components/OfficialDirectory';
import { CaseTracker } from './components/CaseTracker';
import { CaseDetails } from './types/welfare';
import { initialCaseDetails } from './data/letterTemplates';
import { ShieldCheck, Scale, PhoneCall, ExternalLink, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('emergency');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('section-17-housing');

  const [caseDetails, setCaseDetails] = useState<CaseDetails>(() => {
    const saved = localStorage.getItem('uk_welfare_case_details');
    return saved ? JSON.parse(saved) : initialCaseDetails;
  });

  useEffect(() => {
    localStorage.setItem('uk_welfare_case_details', JSON.stringify(caseDetails));
  }, [caseDetails]);

  const handleOpenDraftsmanWithTemplate = (templateId: string) => {
    setSelectedTemplateId(templateId);
    setActiveTab('draftsman');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100/70 text-slate-900 font-sans">
      {/* Top Header Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onEmergencyClick={() => {
          setActiveTab('emergency');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-6 md:py-8">
        {activeTab === 'emergency' && (
          <EmergencyTriage
            caseDetails={caseDetails}
            onOpenDraftsman={handleOpenDraftsmanWithTemplate}
            onOpenBothParents={() => {
              setActiveTab('both-parents');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenOmbudsman={() => {
              setActiveTab('ombudsman');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'draftsman' && (
          <LetterDraftsman
            caseDetails={caseDetails}
            setCaseDetails={setCaseDetails}
            selectedTemplateId={selectedTemplateId}
            setSelectedTemplateId={setSelectedTemplateId}
          />
        )}

        {activeTab === 'both-parents' && (
          <BothParentsRights
            onDraftNotice={() => handleOpenDraftsmanWithTemplate('both-parents-equality')}
          />
        )}

        {activeTab === 'ombudsman' && (
          <CompensationGuide
            onDraftComplaint={() => handleOpenDraftsmanWithTemplate('council-complaint-ombudsman')}
            onDraftDwp={() => handleOpenDraftsmanWithTemplate('dwp-mandatory-reconsideration')}
          />
        )}

        {activeTab === 'directory' && <OfficialDirectory />}

        {activeTab === 'tracker' && (
          <CaseTracker
            caseDetails={caseDetails}
            onOpenDraftsman={handleOpenDraftsmanWithTemplate}
          />
        )}
      </main>

      {/* Clean, Non-Slop Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8 px-4 md:px-8 text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="font-serif-legal font-bold text-slate-800 text-sm">
              UK Parental Welfare & Statutory Rights Advocacy
            </div>
            <p className="leading-relaxed text-[11px] text-slate-500">
              This independent legal guidance system is grounded in the Children Act 1989, Housing Act 1996, Social Security Act 1998, Human Rights Act 1998, and UN Convention on the Rights of the Child. All generated notices are processed entirely within your browser for absolute privacy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-[11px] text-slate-500">
            <a
              href="https://checklegalaid.service.gov.uk"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <span>Legal Aid Checker</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>·</span>
            <a
              href="https://frg.org.uk"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <span>Family Rights Group</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>·</span>
            <a
              href="https://www.lgo.org.uk"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <span>LGSCO Ombudsman</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
