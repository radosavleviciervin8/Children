import React, { useState } from 'react';
import { 
  Copy, 
  Printer, 
  Download, 
  Check, 
  RotateCcw, 
  Send, 
  FileText, 
  Info,
  Clock,
  ShieldCheck,
  Edit3
} from 'lucide-react';
import { CaseDetails, LegalTemplate } from '../types/welfare';
import { LEGAL_TEMPLATES, initialCaseDetails } from '../data/letterTemplates';

interface LetterDraftsmanProps {
  caseDetails: CaseDetails;
  setCaseDetails: React.Dispatch<React.SetStateAction<CaseDetails>>;
  selectedTemplateId: string;
  setSelectedTemplateId: (id: string) => void;
}

export const LetterDraftsman: React.FC<LetterDraftsmanProps> = ({
  caseDetails,
  setCaseDetails,
  selectedTemplateId,
  setSelectedTemplateId
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'edit'>('preview');

  const activeTemplate = LEGAL_TEMPLATES.find(t => t.id === selectedTemplateId) || LEGAL_TEMPLATES[0];
  const generatedText = activeTemplate.generateContent(caseDetails);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${activeTemplate.id}-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleReset = () => {
    if (window.confirm('Reset all case form details back to defaults?')) {
      setCaseDetails(initialCaseDetails);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCaseDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Intro & Template Selector */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif-legal text-xl md:text-2xl font-bold text-slate-900">
              Statutory Legal Notice Draftsman
            </h1>
            <p className="mt-1 text-xs md:text-sm text-slate-600">
              Generate fully articulated, court-compliant formal representations under UK legislation. Personalize your case facts and export print-ready legal notices.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'preview' 
                  ? 'bg-amber-800 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Legal Preview</span>
            </button>
            <button
              onClick={() => setActiveTab('edit')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'edit' 
                  ? 'bg-amber-800 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Case Facts</span>
            </button>
          </div>
        </div>

        {/* Template Tabs */}
        <div className="mt-5 border-t border-slate-100 pt-4">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Select Statutory Notice to Generate:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            {LEGAL_TEMPLATES.map(template => {
              const isSelected = template.id === activeTemplate.id;
              return (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplateId(template.id)}
                  className={`p-3 text-left rounded-md border transition-all text-xs flex flex-col justify-between ${
                    isSelected
                      ? 'bg-amber-50/70 border-amber-800 text-amber-950 font-semibold ring-1 ring-amber-800'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-medium text-slate-900 line-clamp-2 leading-snug">
                    {template.title}
                  </span>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-mono text-amber-700">{template.category}</span>
                    <span>{template.urgencyLevel.split(' ')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Workspace: Left Side Editor / Right Side Preview or Full View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Editor Column (visible on tab 'edit' on mobile or split on desktop if desired) */}
        <div className={`lg:col-span-4 space-y-4 ${activeTab === 'preview' ? 'hidden lg:block' : 'block'}`}>
          <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-amber-800" />
                <h2 className="font-serif-legal font-bold text-sm text-slate-900">Case Information Form</h2>
              </div>
              <button
                onClick={handleReset}
                className="text-[11px] text-slate-500 hover:text-rose-700 flex items-center gap-1 transition-colors"
                title="Reset to defaults"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            <div className="space-y-3 text-xs max-h-[700px] overflow-y-auto pr-1">
              {/* Parent Details */}
              <div className="space-y-2">
                <div className="font-semibold text-slate-900 uppercase tracking-wider text-[11px]">
                  Parent Details
                </div>
                <div>
                  <label className="block text-slate-600 mb-0.5">Your Full Name</label>
                  <input
                    type="text"
                    name="parentFullName"
                    value={caseDetails.parentFullName}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-600 mb-0.5">Parent Role</label>
                    <select
                      name="parentRole"
                      value={caseDetails.parentRole}
                      onChange={handleChange}
                      className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none bg-white"
                    >
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Guardian">Guardian</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-0.5">NI Number</label>
                    <input
                      type="text"
                      name="nationalInsuranceNumber"
                      value={caseDetails.nationalInsuranceNumber}
                      onChange={handleChange}
                      className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none font-mono"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-600 mb-0.5">Address & Postcode</label>
                  <input
                    type="text"
                    name="parentAddress"
                    value={caseDetails.parentAddress}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-600 mb-0.5">Phone</label>
                    <input
                      type="text"
                      name="parentPhone"
                      value={caseDetails.parentPhone}
                      onChange={handleChange}
                      className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-0.5">Email</label>
                    <input
                      type="email"
                      name="parentEmail"
                      value={caseDetails.parentEmail}
                      onChange={handleChange}
                      className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Child Details */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="font-semibold text-slate-900 uppercase tracking-wider text-[11px]">
                  Child Details
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-600 mb-0.5">Child Full Name</label>
                    <input
                      type="text"
                      name="childFullName"
                      value={caseDetails.childFullName}
                      onChange={handleChange}
                      className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-0.5">Date of Birth</label>
                    <input
                      type="text"
                      name="childDateOfBirth"
                      value={caseDetails.childDateOfBirth}
                      onChange={handleChange}
                      placeholder="DD/MM/YYYY"
                      className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Public Authority Details */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="font-semibold text-slate-900 uppercase tracking-wider text-[11px]">
                  Local Council & DWP Details
                </div>
                <div>
                  <label className="block text-slate-600 mb-0.5">Local Authority Name</label>
                  <input
                    type="text"
                    name="localAuthorityName"
                    value={caseDetails.localAuthorityName}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-0.5">Allocated Social Worker</label>
                  <input
                    type="text"
                    name="socialWorkerName"
                    value={caseDetails.socialWorkerName}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-0.5">Benefits Stoppage Duration</label>
                  <input
                    type="text"
                    name="benefitsStoppedDate"
                    value={caseDetails.benefitsStoppedDate}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-0.5">Eviction Notice / Threat Date</label>
                  <input
                    type="text"
                    name="threatOfEvictionDate"
                    value={caseDetails.threatOfEvictionDate}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Document Preview & Service Advice Column */}
        <div className={`space-y-4 ${activeTab === 'edit' ? 'hidden lg:block lg:col-span-8' : 'col-span-1 lg:col-span-8'}`}>
          {/* Action Header for Legal Document */}
          <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs flex flex-wrap items-center justify-between gap-3 no-print">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-700">Notice Urgency:</span>
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                {activeTemplate.urgencyLevel}
              </span>
              <span className="hidden sm:inline text-slate-400">|</span>
              <span className="hidden sm:inline text-xs text-slate-500 font-mono">
                {activeTemplate.statute}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-medium flex items-center gap-1.5 transition-colors"
                title="Copy entire letter text to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Notice'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded text-xs font-medium flex items-center gap-1.5 transition-colors"
                title="Print formal legal document"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Notice</span>
              </button>

              <button
                onClick={handleDownload}
                className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded text-xs font-medium flex items-center gap-1.5 transition-colors"
                title="Download as text file"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .txt</span>
              </button>
            </div>
          </div>

          {/* Authentic Legal Document Paper View */}
          <div className="bg-white border border-slate-300 rounded-lg shadow-sm p-6 md:p-10 font-serif-legal text-slate-900 leading-relaxed text-xs md:text-sm whitespace-pre-wrap select-text print-page">
            {generatedText}
          </div>

          {/* Service & Delivery Instructions */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-xs text-slate-700 space-y-3 no-print">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>How to Serve This Notice for Maximum Legal Impact:</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded border border-slate-200">
                <div className="font-semibold text-slate-900">1. By Email (Instant)</div>
                <div className="mt-1 text-slate-600">
                  Find the direct email for the Director of Children's Services or your social worker. Put the exact subject line: <strong>"URGENT STATUTORY NOTICE - S.17 CHILDREN ACT 1989"</strong>.
                </div>
              </div>

              <div className="bg-white p-3 rounded border border-slate-200">
                <div className="font-semibold text-slate-900">2. By Recorded Post</div>
                <div className="mt-1 text-slate-600">
                  Send via Royal Mail "Signed For" or "Special Delivery" to the Civic Centre / Town Hall. Keep your post office receipt and tracking code safely stored.
                </div>
              </div>

              <div className="bg-white p-3 rounded border border-slate-200">
                <div className="font-semibold text-slate-900">3. Universal Credit Journal</div>
                <div className="mt-1 text-slate-600">
                  For the DWP notice, paste the full text directly into a new message in your Universal Credit online account under the category "A message for my work coach".
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
