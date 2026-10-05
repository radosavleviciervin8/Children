import React, { useState } from 'react';
import { 
  Phone, 
  ExternalLink, 
  Search, 
  Filter, 
  ShieldCheck, 
  Building2, 
  Heart, 
  Scale, 
  DollarSign, 
  LifeBuoy
} from 'lucide-react';
import { OFFICIAL_RESOURCES } from '../data/legalGuides';

export const OfficialDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Government & Statutory',
    'Housing & Homelessness',
    'Family Law & Rights',
    'Crisis & Subsistence',
    'Ombudsman & Justice'
  ];

  const filteredResources = OFFICIAL_RESOURCES.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Directory Header */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800">
            <Building2 className="w-3.5 h-3.5" />
            <span>Verified UK Government & Statutory Directory</span>
          </div>
          <h1 className="font-serif-legal text-xl md:text-2xl font-bold text-slate-900">
            Official Helplines, Legal Aid Services & Public Bodies
          </h1>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            All listed resources are verified against official UK standards. They provide free, confidential advice for parents facing social care intervention, eviction from temporary housing, and benefit stoppages.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-6 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by organization, legal topic, or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-md text-xs focus:ring-1 focus:ring-amber-800 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.map((resource, idx) => (
          <div 
            key={idx}
            className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all space-y-4"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[11px] font-mono text-amber-800 font-medium">
                    {resource.category}
                  </span>
                  <h3 className="font-serif-legal font-bold text-slate-900 text-base mt-0.5">
                    {resource.title}
                  </h3>
                </div>
                {resource.freeAndConfidential && (
                  <span className="shrink-0 text-[10px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded">
                    Free
                  </span>
                )}
              </div>

              <div className="text-xs text-slate-500 font-medium mt-1">
                {resource.organization}
              </div>

              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                {resource.description}
              </p>

              <div className="mt-3 p-2.5 bg-slate-50 rounded border border-slate-100 text-xs text-slate-700">
                <span className="font-semibold text-slate-900">How to use: </span>
                {resource.actionGuidance}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              {resource.phone ? (
                <a
                  href={`tel:${resource.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {resource.phone}</span>
                </a>
              ) : (
                <span className="text-xs text-slate-400">Online only</span>
              )}

              <a
                href={resource.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-amber-800 transition-colors"
              >
                <span>Official Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Direct GOV.UK Quick Jump Card */}
      <div className="bg-slate-900 text-white rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
            Official UK Central Government Portals
          </div>
          <h3 className="font-serif-legal text-lg font-bold">
            Need Direct Access to GOV.UK Benefit & Council Directories?
          </h3>
          <p className="text-xs text-slate-300 max-w-2xl">
            GOV.UK provides online lookup tools to locate your exact council's Children's Services email and check your Universal Credit account directly.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <a
            href="https://www.gov.uk/find-local-council"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-xs font-medium border border-slate-700 flex items-center gap-1.5"
          >
            <span>Find Your Local Council</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.gov.uk/sign-in-universal-credit"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 bg-amber-700 hover:bg-amber-600 text-white rounded text-xs font-medium flex items-center gap-1.5"
          >
            <span>GOV.UK Universal Credit Sign-in</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
