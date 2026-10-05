import React, { useState } from 'react';
import { 
  Scale, 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  DollarSign, 
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import { REALISTIC_COMPENSATION_GUIDE } from '../data/legalGuides';

interface CompensationGuideProps {
  onDraftComplaint: () => void;
  onDraftDwp: () => void;
}

export const CompensationGuide: React.FC<CompensationGuideProps> = ({
  onDraftComplaint,
  onDraftDwp
}) => {
  const [complaintStage, setComplaintStage] = useState<number>(1);

  return (
    <div className="space-y-8">
      {/* Honest Reality Check Banner */}
      <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-100 rounded-lg text-amber-900 shrink-0">
            <Scale className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800">
              <span>Legal Reality Check & Real Financial Remedies</span>
            </div>
            <h1 className="font-serif-legal text-xl md:text-2xl font-bold text-slate-900">
              Understanding Compensation: Moving Beyond the "£25 Million" Myth to Real Recovery
            </h1>
            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
              When facing extreme trauma, benefit stoppage, and separation from your child, it is completely understandable to feel that no amount of money could compensate for the pain caused by public bodies. However, English law operates on strict statutory principles of <strong>"Just Satisfaction"</strong> and actual financial loss. Pursuing unrealistic multimillion-pound claims will result in legal rejection and will distract from the real, immediate money you are legally owed today.
            </p>
          </div>
        </div>
      </section>

      {/* Myth vs Fact Comparison */}
      <section className="space-y-4">
        <div>
          <h2 className="font-serif-legal text-lg md:text-xl font-bold text-slate-900">
            Common Misconceptions vs Legal Facts in UK Law
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            Why courts strike out speculative claims, and what the law actually awards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REALISTIC_COMPENSATION_GUIDE.mythVsFact.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 uppercase tracking-wide">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>The Misconception</span>
                </div>
                <div className="font-serif-legal font-bold text-slate-900 text-sm mt-1">
                  {item.myth}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>The Legal Reality</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.fact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real Financial Remedies Table */}
      <section className="bg-white border border-slate-200 rounded-lg p-5 md:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-serif-legal text-lg md:text-xl font-bold text-slate-900">
              The 4 Legitimate Routes to Real Financial Compensation
            </h2>
            <p className="text-xs text-slate-600">
              How parents actually recover lost money and secure financial remedies from UK public bodies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REALISTIC_COMPENSATION_GUIDE.realRemedies.map((remedy, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif-legal font-bold text-sm text-slate-900">
                  {remedy.channel}
                </h3>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {remedy.cost}
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Expected Outcome:</strong> {remedy.expectedOutcome}
              </p>
              <div className="text-[11px] text-slate-500 flex items-center gap-2 pt-1 border-t border-slate-200/60">
                <span>Timeframe: {remedy.timeframe}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
          <button
            onClick={onDraftDwp}
            className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold rounded-md shadow-xs flex items-center gap-1.5 transition-colors"
          >
            <span>Claim 12+ Months DWP Backdated Arrears</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onDraftComplaint}
            className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold rounded-md shadow-xs flex items-center gap-1.5 transition-colors"
          >
            <span>Draft Council Stage 1 / Ombudsman Complaint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* The LGSCO Ombudsman 3-Stage Process */}
      <section className="bg-slate-900 text-white rounded-lg p-6 md:p-8 space-y-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Statutory Escalation Pathway
          </div>
          <h2 className="font-serif-legal text-xl md:text-2xl font-bold mt-1">
            How to Win Compensation from the Local Government Ombudsman (LGSCO)
          </h2>
          <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
            The Ombudsman is completely free, does not require a solicitor, and has statutory powers to investigate social care and housing maladministration. Follow this 3-stage process to secure an enforceable financial award:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Stage 1 */}
          <div className={`p-4 rounded-md border transition-all ${
            complaintStage === 1 ? 'bg-slate-800 border-amber-500' : 'bg-slate-800/60 border-slate-700'
          }`}>
            <div className="text-xs font-mono text-amber-400 font-bold">STAGE 1: LOCAL RESOLUTION</div>
            <h4 className="font-serif-legal font-bold text-sm text-white mt-1">Formal Council Complaint</h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Submit our drafted Formal Complaint letter to the Council's Complaints Manager. The council has <strong>20 working days</strong> to provide a formal written response addressing Section 17 failures and housing demotion.
            </p>
            <button
              onClick={() => setComplaintStage(1)}
              className="mt-3 text-[11px] text-amber-300 hover:underline flex items-center gap-1"
            >
              <span>Use Stage 1 Notice Template</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Stage 2 */}
          <div className={`p-4 rounded-md border transition-all ${
            complaintStage === 2 ? 'bg-slate-800 border-amber-500' : 'bg-slate-800/60 border-slate-700'
          }`}>
            <div className="text-xs font-mono text-amber-400 font-bold">STAGE 2: INDEPENDENT INVESTIGATION</div>
            <h4 className="font-serif-legal font-bold text-sm text-white mt-1">Children Act Procedure</h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              If the Stage 1 response rejects your complaint or fails to offer housing/money, escalate to Stage 2. The council must appoint an <strong>Independent Person (IP)</strong> and an <strong>Investigating Officer (IO)</strong> to produce an objective report.
            </p>
            <button
              onClick={() => setComplaintStage(2)}
              className="mt-3 text-[11px] text-amber-300 hover:underline flex items-center gap-1"
            >
              <span>View Stage 2 Escalation Rules</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Stage 3 */}
          <div className={`p-4 rounded-md border transition-all ${
            complaintStage === 3 ? 'bg-slate-800 border-amber-500' : 'bg-slate-800/60 border-slate-700'
          }`}>
            <div className="text-xs font-mono text-amber-400 font-bold">STAGE 3: THE OMBUDSMAN (LGSCO)</div>
            <h4 className="font-serif-legal font-bold text-sm text-white mt-1">Binding Financial Remedy</h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              If the council still refuses to remedy the harm, submit the complete bundle to the LGSCO (www.lgo.org.uk). The Ombudsman routinely orders councils to pay £1,000–£5,000 for distress, write off rent, and provide suitable accommodation.
            </p>
            <a
              href="https://www.lgo.org.uk/make-a-complaint"
              target="_blank"
              rel="noreferrer"
              className="mt-3 text-[11px] text-amber-300 hover:underline flex items-center gap-1"
            >
              <span>Visit Official LGSCO Portal</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
