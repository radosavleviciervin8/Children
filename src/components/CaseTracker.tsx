import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  Trash2, 
  FileCheck, 
  ShieldAlert, 
  Save,
  ArrowRight
} from 'lucide-react';
import { CaseDetails, TimelineEvent } from '../types/welfare';

interface CaseTrackerProps {
  caseDetails: CaseDetails;
  onOpenDraftsman: (templateId: string) => void;
}

const DEFAULT_TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'evt-1',
    date: '12 Months Ago',
    title: 'Benefits Stopped by DWP',
    category: 'benefit',
    description: 'Universal Credit stopped or suspended without adequate prior written warning or hearing.',
    status: 'urgent',
    deadlineDate: 'Urgent: Apply for Late MR under Reg 36'
  },
  {
    id: 'evt-2',
    date: '6 Months Ago',
    title: 'Downgraded to Single Room Accommodation',
    category: 'housing',
    description: 'Moved from family-suitable temporary housing into single hostel room, disrupting contact with daughter.',
    status: 'urgent',
    deadlineDate: 'Section 17 accommodation request pending'
  },
  {
    id: 'evt-3',
    date: 'Recent Notice',
    title: 'Notice to Vacate / Eviction Threatened',
    category: 'housing',
    description: 'Temporary accommodation provider served notice; imminent risk of street homelessness.',
    status: 'urgent',
    deadlineDate: 'Apply under Housing Act 1996 s.188'
  },
  {
    id: 'evt-4',
    date: 'Today',
    title: 'Statutory Section 17 Notice Prepared',
    category: 'social_services',
    description: 'Demand for emergency housing and subsistence ready for submission to Director of Children\'s Services.',
    status: 'pending',
    deadlineDate: '48-hour response expected'
  }
];

const AUDIT_DOCUMENTS = [
  { id: 'doc-1', title: 'Universal Credit Stoppage Notice / Journal Export', requiredFor: 'DWP Mandatory Reconsideration' },
  { id: 'doc-2', title: 'Notice to Quit / Eviction Letter from Temporary Accommodation', requiredFor: 'Housing Options Section 188 duty' },
  { id: 'doc-3', title: 'Child Birth Certificate / Parental Responsibility proof', requiredFor: 'Section 17 and school/medical rights' },
  { id: 'doc-4', title: 'Previous Family Accommodation Tenancy / Allocation', requiredFor: 'Proof of suitability reduction' },
  { id: 'doc-5', title: 'GP or Medical Letter on Psychological Distress & Hardship', requiredFor: 'Good Cause for Late MR & Vulnerability Priority Need' },
  { id: 'doc-6', title: 'Proof of Recorded Delivery / Email Send Receipts', requiredFor: 'Evidentiary record for LGSCO Ombudsman' }
];

export const CaseTracker: React.FC<CaseTrackerProps> = ({ caseDetails, onOpenDraftsman }) => {
  const [events, setEvents] = useState<TimelineEvent[]>(() => {
    const saved = localStorage.getItem('uk_welfare_case_events');
    return saved ? JSON.parse(saved) : DEFAULT_TIMELINE_EVENTS;
  });

  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('uk_welfare_checked_docs');
    return saved ? JSON.parse(saved) : {};
  });

  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventCategory, setNewEventCategory] = useState<'benefit' | 'housing' | 'social_services' | 'legal'>('benefit');
  const [newEventDescription, setNewEventDescription] = useState('');

  useEffect(() => {
    localStorage.setItem('uk_welfare_case_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('uk_welfare_checked_docs', JSON.stringify(checkedDocs));
  }, [checkedDocs]);

  const toggleDoc = (id: string) => {
    setCheckedDocs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle.trim()) return;

    const newEvt: TimelineEvent = {
      id: `evt-${Date.now()}`,
      date: newEventDate || new Date().toLocaleDateString('en-GB'),
      title: newEventTitle.trim(),
      category: newEventCategory,
      description: newEventDescription.trim() || 'Custom case milestone',
      status: 'pending'
    };

    setEvents(prev => [newEvt, ...prev]);
    setNewEventTitle('');
    setNewEventDate('');
    setNewEventDescription('');
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800">
            <Clock className="w-3.5 h-3.5" />
            <span>Evidentiary Audit Trail & Statutory Deadlines</span>
          </div>
          <h1 className="font-serif-legal text-xl md:text-2xl font-bold text-slate-900">
            Case Timeline, Document Vault & Deadline Tracker
          </h1>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            Public bodies rely on dates and statutory deadlines. Maintaining a precise audit log of when benefits were halted, when notices were served, and when requests were submitted is vital to winning an Ombudsman complaint or Judicial Review.
          </p>
        </div>
      </div>

      {/* Statutory Deadline Calculators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-xs space-y-2">
          <div className="text-[11px] font-mono text-rose-700 font-semibold uppercase">Section 17 Urgent Request</div>
          <div className="text-lg font-serif-legal font-bold text-slate-900">48 Hours</div>
          <p className="text-xs text-slate-600">
            Emergency response standard where child is in need and parent faces street homelessness.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-xs space-y-2">
          <div className="text-[11px] font-mono text-amber-800 font-semibold uppercase">Housing Review (s.202)</div>
          <div className="text-lg font-serif-legal font-bold text-slate-900">21 Days</div>
          <p className="text-xs text-slate-600">
            Strict statutory deadline from receipt of an adverse council homelessness decision.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-xs space-y-2">
          <div className="text-[11px] font-mono text-slate-700 font-semibold uppercase">Late DWP Reconsideration</div>
          <div className="text-lg font-serif-legal font-bold text-slate-900">Up to 13 Months</div>
          <p className="text-xs text-slate-600">
            Special circumstances limit under Regulation 36 (trauma & hardship qualify as Good Cause).
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-xs space-y-2">
          <div className="text-[11px] font-mono text-slate-700 font-semibold uppercase">Council Stage 1 Complaint</div>
          <div className="text-lg font-serif-legal font-bold text-slate-900">20 Working Days</div>
          <p className="text-xs text-slate-600">
            Council must deliver written adjudication before you escalate to Ombudsman (LGSCO).
          </p>
        </div>
      </div>

      {/* Two Column Layout: Timeline vs Document Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Timeline (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="font-serif-legal font-bold text-base text-slate-900">
                Case Chronology & Milestones
              </h2>
              <span className="text-xs text-slate-500">
                {events.length} Recorded Events
              </span>
            </div>

            {/* Add Event Form */}
            <form onSubmit={handleAddEvent} className="p-3 bg-slate-50 rounded border border-slate-200 text-xs space-y-2.5">
              <div className="font-semibold text-slate-800">Add New Milestone to Timeline:</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  type="text"
                  placeholder="Date (e.g. 12 Oct 2026)"
                  value={newEventDate}
                  onChange={(e) => setNewEventDate(e.target.value)}
                  className="px-2.5 py-1.5 border border-slate-300 rounded bg-white"
                />
                <input
                  type="text"
                  placeholder="Milestone Title"
                  value={newEventTitle}
                  onChange={(e) => setNewEventTitle(e.target.value)}
                  className="px-2.5 py-1.5 border border-slate-300 rounded bg-white sm:col-span-2"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <select
                  value={newEventCategory}
                  onChange={(e) => setNewEventCategory(e.target.value as any)}
                  className="px-2.5 py-1.5 border border-slate-300 rounded bg-white"
                >
                  <option value="benefit">Benefit / DWP</option>
                  <option value="housing">Housing / Eviction</option>
                  <option value="social_services">Social Services</option>
                  <option value="legal">Legal Notice</option>
                </select>
                <input
                  type="text"
                  placeholder="Description / Notes"
                  value={newEventDescription}
                  onChange={(e) => setNewEventDescription(e.target.value)}
                  className="px-2.5 py-1.5 border border-slate-300 rounded bg-white sm:col-span-2"
                />
              </div>
              <button
                type="submit"
                className="px-3 py-1.5 bg-amber-800 hover:bg-amber-900 text-white rounded font-medium flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Event to Timeline</span>
              </button>
            </form>

            {/* Timeline Stream */}
            <div className="relative pl-6 border-l-2 border-slate-200 space-y-4 pt-1">
              {events.map((evt) => (
                <div key={evt.id} className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-amber-700 border-2 border-white ring-2 ring-slate-100" />
                  
                  <div className="p-3 bg-white border border-slate-200 rounded-md hover:border-slate-300 transition-colors shadow-xs">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-[11px] font-mono text-slate-500 font-medium">
                          {evt.date} · <span className="uppercase text-amber-800">{evt.category.replace('_', ' ')}</span>
                        </div>
                        <h4 className="font-serif-legal font-bold text-slate-900 text-sm mt-0.5">
                          {evt.title}
                        </h4>
                      </div>
                      <button
                        onClick={() => handleDeleteEvent(evt.id)}
                        className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                        title="Delete milestone"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="mt-1 text-xs text-slate-600">
                      {evt.description}
                    </p>

                    {evt.deadlineDate && (
                      <div className="mt-2 text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded inline-block">
                        {evt.deadlineDate}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Evidence Vault & Document Checklist (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-4">
            <div>
              <h2 className="font-serif-legal font-bold text-base text-slate-900">
                Evidentiary Document Checklist
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Check off documents you have secured to present to solicitors and the Ombudsman:
              </p>
            </div>

            <div className="space-y-2.5">
              {AUDIT_DOCUMENTS.map((doc) => {
                const isChecked = Boolean(checkedDocs[doc.id]);
                return (
                  <button
                    key={doc.id}
                    onClick={() => toggleDoc(doc.id)}
                    className={`w-full text-left p-3 rounded-md border transition-all text-xs flex items-start gap-2.5 ${
                      isChecked 
                        ? 'bg-emerald-50/60 border-emerald-300 text-slate-800' 
                        : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 transition-colors ${
                      isChecked ? 'text-emerald-600 fill-emerald-100' : 'text-slate-300'
                    }`} />
                    <div>
                      <div className="font-semibold text-slate-900">{doc.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Required for: <span className="text-amber-800">{doc.requiredFor}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-3 bg-amber-50 rounded border border-amber-200 text-xs text-slate-700 space-y-1">
              <div className="font-bold text-amber-900">Next Action Tip:</div>
              <p>
                Once you have gathered these documents, attach copies (never originals!) to the Section 17 and DWP notices generated in our draftsman.
              </p>
              <button
                onClick={() => onOpenDraftsman('section-17-housing')}
                className="mt-2 text-xs font-semibold text-amber-900 hover:underline flex items-center gap-1"
              >
                <span>Go to Legal Draftsman</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
