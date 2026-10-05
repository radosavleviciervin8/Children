import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { EmergencyTriage } from './components/EmergencyTriage';
import { LetterDraftsman } from './components/LetterDraftsman';
import { BothParentsRights } from './components/BothParentsRights';
import { CompensationGuide } from './components/CompensationGuide';
import { OfficialDirectory } from './components/OfficialDirectory';
import { CaseTracker } from './components/CaseTracker';
import { SecurityModal } from './components/SecurityModal';
import { CaseDetails } from './types/welfare';
import { initialCaseDetails } from './data/letterTemplates';
import { ShieldCheck, Scale, PhoneCall, ExternalLink, Heart, Lock } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('emergency');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('section-17-housing');
  const [isSecurityOpen, setIsSecurityOpen] = useState<boolean>(false);

  const [caseDetails, setCaseDetails] = useState<CaseDetails>(() => {
    const saved = localStorage.getItem('uk_welfare_case_details');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Automatically migrate to user's updated verified details if still holding older placeholder
        if (parsed.nationalInsuranceNumber === 'QQ 12 34 56 A' || !parsed.nationalInsuranceNumber) {
          parsed.nationalInsuranceNumber = 'SR 64 90 74 C';
        }
        if (parsed.parentAddress === 'Flat 3, Temporary Accommodation, 14 St. Jude Court' || !parsed.parentAddress) {
          parsed.parentAddress = '78 Westbourne Terrace';
          parsed.parentPostcode = 'W2 6QA';
        }
        if (parsed.localAuthorityName === 'Local Council Children\'s Services') {
          parsed.localAuthorityName = 'Westminster City Council (Children\'s Services)';
          parsed.councilAddress = 'Westminster City Hall, 64 Victoria Street, London, SW1E 6QP';
        }
        return parsed;
      } catch (e) {
        return initialCaseDetails;
      }
    }
    return initialCaseDetails;
  });

  useEffect(() => {
    localStorage.setItem('uk_welfare_case_details', JSON.stringify(caseDetails));
  }, [caseDetails]);

  const handleOpenDraftsmanWithTemplate = (templateId: string) => {
    setSelectedTemplateId(templateId);
    setActiveTab('draftsman');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePurgeAllData = () => {
    if (window.confirm('Are you sure you want to permanently erase all saved case details, timeline events, and checklist data from this browser?')) {
      localStorage.removeItem('uk_welfare_case_details');
      localStorage.removeItem('uk_welfare_case_events');
      localStorage.removeItem('uk_welfare_checked_docs');
      setCaseDetails(initialCaseDetails);
      setIsSecurityOpen(false);
      window.location.reload();
    }
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
        onOpenSecurity={() => setIsSecurityOpen(true)}
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

      {/* Security & Privacy Modal */}
      <SecurityModal
        isOpen={isSecurityOpen}
        onClose={() => setIsSecurityOpen(false)}
        onPurgeData={handlePurgeAllData}
      />

      {/* Clean, Non-Slop Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8 px-4 md:px-8 text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="font-serif-legal font-bold text-slate-800 text-sm">
              UK Parental Welfare & Statutory Rights Advocacy
            </div>
            <p className="leading-relaxed text-[11px] text-slate-500">
              This independent civic legal guidance system is grounded in the Children Act 1989, Housing Act 1996, Social Security Act 1998, Human Rights Act 1998, and UNCRC. All generated notices are processed entirely within your browser for absolute privacy. Open source under MIT License.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-[11px] text-slate-500">
            <button
              onClick={() => setIsSecurityOpen(true)}
              className="hover:text-slate-900 transition-colors flex items-center gap-1 font-medium"
            >
              <Lock className="w-3 h-3 text-emerald-700" />
              <span>Zero-Cloud Security Policy</span>
            </button>
            <span>·</span>
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
