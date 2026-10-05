import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Home, 
  DollarSign, 
  Users, 
  Clock, 
  HelpCircle,
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CaseDetails } from '../types/welfare';

interface EmergencyTriageProps {
  caseDetails: CaseDetails;
  onOpenDraftsman: (templateId: string) => void;
  onOpenBothParents: () => void;
  onOpenOmbudsman: () => void;
}

export const EmergencyTriage: React.FC<EmergencyTriageProps> = ({
  caseDetails,
  onOpenDraftsman,
  onOpenBothParents,
  onOpenOmbudsman
}) => {
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
  });

  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');

  const toggleStep = (stepKey: string) => {
    setCompletedSteps(prev => ({ ...prev, [stepKey]: !prev[stepKey] }));
  };

  return (
    <div className="space-y-8">
      {/* High Alert Banner for User's Exact Situation */}
      <section className="bg-amber-50 border-l-4 border-amber-600 p-5 md:p-6 rounded-r-lg shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-100 rounded-md text-amber-800 shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-serif-legal text-xl md:text-2xl font-bold text-slate-900">
                Emergency Action Plan: Benefit Stoppage, Eviction Risk & Child Separation
              </h1>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed max-w-3xl">
                Having your benefits stopped for over 12 months while at imminent risk of eviction from temporary accommodation is a critical emergency. Under UK statutory law (Children Act 1989 & Housing Act 1996), public authorities owe immediate duties to you and your child to prevent destitution and support family reunification.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="font-medium text-slate-900">Immediate Priorities:</span>
                <span>1. Prevent Eviction</span>
                <span aria-hidden="true">·</span>
                <span>2. Emergency S.17 Cash/Housing</span>
                <span aria-hidden="true">·</span>
                <span>3. Reinstate 12+ Months UC Arrears</span>
                <span aria-hidden="true">·</span>
                <span>4. Equal Both-Parent Rights</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col gap-2">
            <button
              onClick={() => onOpenDraftsman('section-17-housing')}
              className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold rounded-md shadow-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Draft Section 17 Notice</span>
            </button>
            <button
              onClick={() => onOpenDraftsman('dwp-mandatory-reconsideration')}
              className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold rounded-md shadow-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Draft DWP Arrears Appeal</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4-Step Crisis Execution Sequence */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif-legal text-lg md:text-xl font-bold text-slate-900">
              The 4 Immediate Statutory Steps
            </h2>
            <p className="text-xs md:text-sm text-slate-600">
              Execute these actions in order. Each step engages a legally binding duty on public authorities.
            </p>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            <span>{Object.values(completedSteps).filter(Boolean).length} of 4 Completed</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Step 1: Section 17 Housing & Subsistence */}
          <div className={`p-5 rounded-lg border transition-all ${
            completedSteps.step1 ? 'bg-emerald-50/50 border-emerald-300' : 'bg-white border-slate-200 shadow-xs'
          }`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0">
                  01
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  Children's Social Care
                </span>
              </div>
              <button 
                onClick={() => toggleStep('step1')}
                className="text-slate-400 hover:text-emerald-600 transition-colors"
                title="Mark step completed"
              >
                <CheckCircle2 className={`w-5 h-5 ${completedSteps.step1 ? 'text-emerald-600 fill-emerald-100' : ''}`} />
              </button>
            </div>

            <h3 className="mt-3 font-serif-legal font-bold text-slate-900 text-base">
              Demand Section 17 Housing & Emergency Subsistence
            </h3>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              Section 17 of the Children Act 1989 places a mandatory duty on your council to support a "child in need" and their family. This includes providing accommodation capable of hosting your child and emergency cash subsistence—<strong>even if your daughter is not currently sleeping with you full-time</strong>.
            </p>

            <div className="mt-3 pt-3 border-t border-slate-100 text-xs space-y-1.5">
              <div className="text-slate-700">
                <strong>Recipient:</strong> Director of Children's Services at {caseDetails.localAuthorityName}
              </div>
              <div className="text-slate-700">
                <strong>Key Argument:</strong> Single-room accommodation blocks reunification and breaches Article 8 ECHR.
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-2">
              <button
                onClick={() => onOpenDraftsman('section-17-housing')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 hover:underline"
              >
                <span>Draft Section 17 Formal Demand</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Step 2: DWP Mandatory Reconsideration & Arrears */}
          <div className={`p-5 rounded-lg border transition-all ${
            completedSteps.step2 ? 'bg-emerald-50/50 border-emerald-300' : 'bg-white border-slate-200 shadow-xs'
          }`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0">
                  02
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  DWP Universal Credit
                </span>
              </div>
              <button 
                onClick={() => toggleStep('step2')}
                className="text-slate-400 hover:text-emerald-600 transition-colors"
                title="Mark step completed"
              >
                <CheckCircle2 className={`w-5 h-5 ${completedSteps.step2 ? 'text-emerald-600 fill-emerald-100' : ''}`} />
              </button>
            </div>

            <h3 className="mt-3 font-serif-legal font-bold text-slate-900 text-base">
              Submit Late Mandatory Reconsideration & Hardship Claim
            </h3>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              If your benefits stopped over a year ago, you can still apply for a <strong>Late Mandatory Reconsideration</strong> under Regulation 36 by citing "Good Cause" (severe mental distress, child separation, and lack of means). Successful reconsideration triggers full backdating of all missed payments.
            </p>

            <div className="mt-3 pt-3 border-t border-slate-100 text-xs space-y-1.5">
              <div className="text-slate-700">
                <strong>Recipient:</strong> Universal Credit Service Centre / Journal Post
              </div>
              <div className="text-slate-700">
                <strong>Immediate Relief:</strong> Request a DWP Hardship Advance under Reg 116 while the review is pending.
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-2">
              <button
                onClick={() => onOpenDraftsman('dwp-mandatory-reconsideration')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 hover:underline"
              >
                <span>Draft Late MR & Arrears Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Step 3: Housing Options Homelessness Challenge */}
          <div className={`p-5 rounded-lg border transition-all ${
            completedSteps.step3 ? 'bg-emerald-50/50 border-emerald-300' : 'bg-white border-slate-200 shadow-xs'
          }`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0">
                  03
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  Housing Options Team
                </span>
              </div>
              <button 
                onClick={() => toggleStep('step3')}
                className="text-slate-400 hover:text-emerald-600 transition-colors"
                title="Mark step completed"
              >
                <CheckCircle2 className={`w-5 h-5 ${completedSteps.step3 ? 'text-emerald-600 fill-emerald-100' : ''}`} />
              </button>
            </div>

            <h3 className="mt-3 font-serif-legal font-bold text-slate-900 text-base">
              Halt Eviction & Assert Priority Need under Housing Act 1996
            </h3>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              If your temporary accommodation provider has served notice or threatens eviction, the Council Housing Options team has a <strong>Section 188 duty</strong> to secure interim accommodation. Challenge the downgrade to a single room—housing must be suitable for child contact.
            </p>

            <div className="mt-3 pt-3 border-t border-slate-100 text-xs space-y-1.5">
              <div className="text-slate-700">
                <strong>Statutory Ground:</strong> Priority Need under Section 189(1)(c) (dependent children) and vulnerability.
              </div>
              <div className="text-slate-700">
                <strong>Suitability:</strong> Accommodation must allow staying contact and be near the child's school/support.
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-2">
              <button
                onClick={() => onOpenDraftsman('housing-act-review')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 hover:underline"
              >
                <span>Draft Housing Act Review Notice</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Step 4: Both Parents Equality & Free Legal Aid */}
          <div className={`p-5 rounded-lg border transition-all ${
            completedSteps.step4 ? 'bg-emerald-50/50 border-emerald-300' : 'bg-white border-slate-200 shadow-xs'
          }`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0">
                  04
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  Human Rights & Equality
                </span>
              </div>
              <button 
                onClick={() => toggleStep('step4')}
                className="text-slate-400 hover:text-emerald-600 transition-colors"
                title="Mark step completed"
              >
                <CheckCircle2 className={`w-5 h-5 ${completedSteps.step4 ? 'text-emerald-600 fill-emerald-100' : ''}`} />
              </button>
            </div>

            <h3 className="mt-3 font-serif-legal font-bold text-slate-900 text-base">
              Assert Equal Parental Rights (UNCRC & ECHR Art 8/14)
            </h3>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              Social services cannot selectively assist only one parent (e.g., mother only or father only). Under UNCRC Articles 9 & 18 and ECHR Article 14, <strong>both parents have common responsibilities</strong> and are entitled to equal state assistance to maintain meaningful relationships.
            </p>

            <div className="mt-3 pt-3 border-t border-slate-100 text-xs space-y-1.5">
              <div className="text-slate-700">
                <strong>Statutory Presumption:</strong> Children Act 1989 s.1(2A) involvement of both parents.
              </div>
              <div className="text-slate-700">
                <strong>Civil Legal Advice:</strong> You qualify for free legal aid representation given destitution.
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-2">
              <button
                onClick={onOpenBothParents}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 hover:underline"
              >
                <span>View Both Parents Equality Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Free Helplines Card */}
      <section className="bg-slate-900 text-white p-5 md:p-6 rounded-lg shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5" />
              <span>Free, Confidential Immediate Helplines</span>
            </div>
            <h3 className="font-serif-legal text-lg md:text-xl font-bold">
              Speak to a Qualified UK Statutory Advocate Today
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              These specialist services are independent of your local council and DWP. They will verify your Section 17 rights, check your Legal Aid entitlement, and advise on challenging eviction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0">
            <div className="bg-slate-800/80 p-3 rounded-md border border-slate-700">
              <div className="text-xs text-slate-400">Social Care & Section 17</div>
              <div className="font-semibold text-sm text-white mt-0.5">Family Rights Group</div>
              <div className="text-amber-400 font-mono text-xs font-bold mt-1">0808 801 0366</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Mon–Fri 9:30am–3pm</div>
            </div>

            <div className="bg-slate-800/80 p-3 rounded-md border border-slate-700">
              <div className="text-xs text-slate-400">Eviction & Homelessness</div>
              <div className="font-semibold text-sm text-white mt-0.5">Shelter England</div>
              <div className="text-amber-400 font-mono text-xs font-bold mt-1">0808 800 4444</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Free 365 Days a Year</div>
            </div>

            <div className="bg-slate-800/80 p-3 rounded-md border border-slate-700">
              <div className="text-xs text-slate-400">Free Legal Aid Check</div>
              <div className="font-semibold text-sm text-white mt-0.5">Civil Legal Advice</div>
              <div className="text-amber-400 font-mono text-xs font-bold mt-1">0345 345 4 345</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Gov Legal Aid Agency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Statutory Explanations Accordion */}
      <section className="bg-white border border-slate-200 rounded-lg p-5 md:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="font-serif-legal text-lg font-bold text-slate-900">
            Frequently Addressed Legal Questions in Your Case
          </h3>
          <p className="text-xs text-slate-600">
            Accurate answers derived from primary UK legislation, court rulings, and GOV.UK statutory guidance.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {/* Question 1: Benefits stopped > 1 year */}
          <div className="py-3">
            <button
              onClick={() => setExpandedFaq(expandedFaq === 'faq-1' ? null : 'faq-1')}
              className="w-full flex items-center justify-between text-left text-sm font-semibold text-slate-900 hover:text-amber-800"
            >
              <span>Can I really challenge a benefit stoppage after more than 12 months?</span>
              {expandedFaq === 'faq-1' ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>
            {expandedFaq === 'faq-1' && (
              <div className="mt-2 text-xs text-slate-600 space-y-2 leading-relaxed pl-2 border-l-2 border-amber-600">
                <p>
                  <strong>Yes.</strong> While the standard deadline is 1 month, under Regulation 36 of the Social Security and Child Support (Decisions and Appeals) Regulations 1999, the DWP has the statutory discretion to admit a Late Mandatory Reconsideration up to 13 months, or even beyond if exceptional circumstances exist.
                </p>
                <p>
                  "Good Cause" includes acute psychological distress, trauma arising from child separation proceedings, destitution preventing access to IT equipment or postage, and administrative error by the DWP. Once accepted and revised in your favour, the DWP must calculate and disburse <strong>100% of all backdated arrears</strong> from the original date of stoppage.
                </p>
              </div>
            )}
          </div>

          {/* Question 2: Section 17 when child not sleeping with you */}
          <div className="py-3">
            <button
              onClick={() => setExpandedFaq(expandedFaq === 'faq-2' ? null : 'faq-2')}
              className="w-full flex items-center justify-between text-left text-sm font-semibold text-slate-900 hover:text-amber-800"
            >
              <span>Can Social Services give housing and money if my daughter is not living with me full-time?</span>
              {expandedFaq === 'faq-2' ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>
            {expandedFaq === 'faq-2' && (
              <div className="mt-2 text-xs text-slate-600 space-y-2 leading-relaxed pl-2 border-l-2 border-amber-600">
                <p>
                  <strong>Yes.</strong> Under Section 17(1)(b) of the Children Act 1989, the local authority has a duty "to promote the upbringing of such children by their families." The Supreme Court and High Court have confirmed that Section 17 support can be used to prevent a parent from being forced into single-room homelessness that would make contact or reunification impossible.
                </p>
                <p>
                  Furthermore, if the council’s own actions (such as initiating separation) led to you losing your family accommodation, the council cannot use that very separation as an excuse to refuse family-suitable housing.
                </p>
              </div>
            )}
          </div>

          {/* Question 3: Both parents equality */}
          <div className="py-3">
            <button
              onClick={() => setExpandedFaq(expandedFaq === 'faq-3' ? null : 'faq-3')}
              className="w-full flex items-center justify-between text-left text-sm font-semibold text-slate-900 hover:text-amber-800"
            >
              <span>Does the law require social services to give the same help to both parents?</span>
              {expandedFaq === 'faq-3' ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>
            {expandedFaq === 'faq-3' && (
              <div className="mt-2 text-xs text-slate-600 space-y-2 leading-relaxed pl-2 border-l-2 border-amber-600">
                <p>
                  <strong>Yes.</strong> Under UK and international law:
                </p>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>Children Act 1989 Section 1(2A):</strong> Explicit statutory presumption that involvement of both parents promotes the child's welfare.</li>
                  <li><strong>UN Convention on the Rights of the Child (UNCRC) Article 18:</strong> State parties must recognize the common responsibility of both parents and render appropriate assistance to both.</li>
                  <li><strong>Human Rights Act 1998 Article 14 read with Article 8:</strong> Social services cannot discriminate on grounds of gender or parental status by treating one parent as the sole recipient of family support.</li>
                </ul>
              </div>
            )}
          </div>

          {/* Question 4: The 25 million compensation claim */}
          <div className="py-3">
            <button
              onClick={() => setExpandedFaq(expandedFaq === 'faq-4' ? null : 'faq-4')}
              className="w-full flex items-center justify-between text-left text-sm font-semibold text-slate-900 hover:text-amber-800"
            >
              <span>What is the truth about seeking compensation (like the £25 million claim)?</span>
              {expandedFaq === 'faq-4' ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>
            {expandedFaq === 'faq-4' && (
              <div className="mt-2 text-xs text-slate-600 space-y-2 leading-relaxed pl-2 border-l-2 border-amber-600">
                <p>
                  In the UK legal system, damages against public bodies are based strictly on <strong>"just satisfaction"</strong> (proven financial loss and distress) rather than American-style punitive fines. Suing for £25 million has no legal basis in English law and will result in the court striking out the claim with potential cost orders.
                </p>
                <p>
                  Instead, the proven and effective route is filing a formal complaint culminating in the <strong>Local Government and Social Care Ombudsman (LGSCO)</strong>. The Ombudsman regularly orders councils to pay financial remedies for distress (£500–£5,000+), write off rent arrears, reinstate housing priority, and reverse unfair social work decisions—completely free of legal costs.
                </p>
                <button
                  onClick={onOpenOmbudsman}
                  className="mt-1 font-semibold text-amber-800 hover:underline flex items-center gap-1"
                >
                  <span>Learn how the Ombudsman remedy process works</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
