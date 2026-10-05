import React from 'react';
import { 
  Users, 
  Scale, 
  Globe, 
  Home, 
  BookOpen, 
  HeartHandshake, 
  FileText, 
  CheckCircle,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { STATUTORY_RIGHTS_MATRIX } from '../data/legalGuides';

interface BothParentsRightsProps {
  onDraftNotice: () => void;
}

export const BothParentsRights: React.FC<BothParentsRightsProps> = ({ onDraftNotice }) => {
  return (
    <div className="space-y-8">
      {/* Hero / Overview */}
      <section className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Equal Parental Parity & International Ethics</span>
          </div>
          <h1 className="font-serif-legal text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
            Both Parents Have an Equal Right to Social Services Support, Housing & Ongoing Contact
          </h1>
          <p className="text-sm text-slate-700 leading-relaxed">
            Under both UK statutory law and international human rights treaties, <strong>Children’s Social Services cannot selectively assist one parent while neglecting or excluding the other</strong>. Children have an inherent legal and ethical right to regular, meaningful care from both their mother and their father, and public authorities are legally obligated to provide the necessary housing and practical support to make this possible.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={onDraftNotice}
            className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold rounded-md shadow-xs flex items-center gap-2 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Draft Both Parents Equality Notice</span>
          </button>
        </div>
      </section>

      {/* 4 Pillars of Both Parents Equality */}
      <section className="space-y-4">
        <div>
          <h2 className="font-serif-legal text-xl font-bold text-slate-900">
            The 4 Statutory Pillars of Parental Parity
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            Binding legal principles that every UK local authority and social worker must uphold.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pillar 1: Housing Suitable for Staying Contact */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-md bg-amber-100 text-amber-900 flex items-center justify-center">
              <Home className="w-4 h-4" />
            </div>
            <h3 className="font-serif-legal font-bold text-slate-900 text-base">
              1. Housing Must Accommodate Overnight Child Contact
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If social services or housing options downgrade you into a single room or hostel where children are prohibited from visiting, they are creating an artificial barrier to family life.
            </p>
            <div className="bg-slate-50 p-3 rounded text-xs text-slate-700 border-l-2 border-amber-600">
              <strong>The Law:</strong> The Supreme Court in <em>R (G) v Southwark LBC [2011]</em> and the <em>Homelessness (Suitability of Accommodation) Order 2012</em> mandate that accommodation is unsuitable if it breaks parental contact or prevents the child from staying.
            </div>
          </div>

          {/* Pillar 2: Proximity & Moving Close to the Child */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-md bg-amber-100 text-amber-900 flex items-center justify-center">
              <Globe className="w-4 h-4" />
            </div>
            <h3 className="font-serif-legal font-bold text-slate-900 text-base">
              2. Right to Be Housed Near Your Child's School & Community
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Councils often attempt to place vulnerable parents out-of-borough in distant towns. Both parents have the right to be located within reasonable proximity to the child.
            </p>
            <div className="bg-slate-50 p-3 rounded text-xs text-slate-700 border-l-2 border-amber-600">
              <strong>The Law:</strong> Housing Act 1996 Code of Guidance (Chapter 17) requires authorities to secure accommodation as close as possible to the child's school and family ties, avoiding disruption to the child's established relationships.
            </div>
          </div>

          {/* Pillar 3: Equal Involvement in School & Health */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-md bg-amber-100 text-amber-900 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="font-serif-legal font-bold text-slate-900 text-base">
              3. Right to Complete Inclusion in Child's Activities
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Both mother and father are entitled to full information regarding the child’s education, extracurricular activities, doctor appointments, and social care decisions.
            </p>
            <div className="bg-slate-50 p-3 rounded text-xs text-slate-700 border-l-2 border-amber-600">
              <strong>The Law:</strong> Under <em>Education Act 1996 s.576</em> and Department for Education regulations, schools must supply independent report cards and invite both parents to parents' evenings, irrespective of residence.
            </div>
          </div>

          {/* Pillar 4: Non-Discrimination Between Mother & Father */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-md bg-amber-100 text-amber-900 flex items-center justify-center">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <h3 className="font-serif-legal font-bold text-slate-900 text-base">
              4. Human Rights Parity (ECHR Art 8 & 14)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Social services cannot operate a "two-tier" support system where one parent receives council housing and subsistence grants while the other is left in street destitution.
            </p>
            <div className="bg-slate-50 p-3 rounded text-xs text-slate-700 border-l-2 border-amber-600">
              <strong>The Law:</strong> <em>Article 14 ECHR</em> strictly prohibits discrimination in the enjoyment of <em>Article 8</em> (family life). Section 149 of the Equality Act 2010 requires public bodies to advance equality of opportunity.
            </div>
          </div>
        </div>
      </section>

      {/* International Human Rights Law & Treaties */}
      <section className="bg-slate-900 text-slate-100 rounded-lg p-6 md:p-8 space-y-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Binding International Treaties
          </div>
          <h2 className="font-serif-legal text-xl md:text-2xl font-bold text-white mt-1">
            United Nations Convention on the Rights of the Child (UNCRC)
          </h2>
          <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-3xl">
            The UK ratified the UNCRC in 1991. The UK Courts and Ombudsman regularly hold local authorities to the ethical and legal standards enshrined in these articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-800 p-4 rounded-md border border-slate-700 space-y-2">
            <div className="text-xs font-bold text-amber-400 font-mono">UNCRC ARTICLE 9</div>
            <h4 className="font-serif-legal font-bold text-sm text-white">Separation from Parents & Direct Contact</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              <em>"States Parties shall ensure that a child shall not be separated from his or her parents against their will... States Parties shall respect the right of the child who is separated from one or both parents to maintain personal relations and direct contact with both parents on a regular basis."</em>
            </p>
          </div>

          <div className="bg-slate-800 p-4 rounded-md border border-slate-700 space-y-2">
            <div className="text-xs font-bold text-amber-400 font-mono">UNCRC ARTICLE 18</div>
            <h4 className="font-serif-legal font-bold text-sm text-white">Common Parental Responsibilities & State Support</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              <em>"States Parties shall use their best efforts to ensure recognition of the principle that both parents have common responsibilities for the upbringing and development of the child... States Parties shall render appropriate assistance to parents in the performance of their child-rearing responsibilities."</em>
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-800/60 rounded border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-300">
            <span className="font-bold text-white">What this means in practice:</span> When social services intervene, their statutory duty is to support <strong>both</strong> parents to co-parent safely, rather than picking one parent and disenfranchising the other.
          </div>
          <button
            onClick={onDraftNotice}
            className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded text-xs font-medium shrink-0 flex items-center gap-1.5"
          >
            <span>Serve Human Rights Notice</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Statutory Rights Matrix Table */}
      <section className="bg-white border border-slate-200 rounded-lg p-5 md:p-6 shadow-xs space-y-4">
        <div>
          <h2 className="font-serif-legal text-lg md:text-xl font-bold text-slate-900">
            Complete Statutory Rights Comparison for Parents
          </h2>
          <p className="text-xs text-slate-600">
            Official provisions governing child welfare, housing, benefits, and co-parenting in England.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                <th className="py-2.5 px-3">Statutory Right</th>
                <th className="py-2.5 px-3">Legal Basis</th>
                <th className="py-2.5 px-3">Applies To</th>
                <th className="py-2.5 px-3">What You Can Legally Demand</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {STATUTORY_RIGHTS_MATRIX.map(item => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-3 font-semibold text-slate-900 align-top">
                    {item.right}
                  </td>
                  <td className="py-3 px-3 font-mono text-[11px] text-amber-800 align-top">
                    {item.statutoryBasis}
                  </td>
                  <td className="py-3 px-3 text-slate-600 align-top whitespace-nowrap">
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-medium text-slate-700">
                      {item.appliesTo}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-slate-600 align-top">
                    <p>{item.plainEnglishExplanation}</p>
                    <p className="mt-1 text-slate-900 font-medium">Action: {item.actionableStep}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
