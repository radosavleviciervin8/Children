import { OfficialResource, StatutoryRightItem } from '../types/welfare';

export const OFFICIAL_RESOURCES: OfficialResource[] = [
  {
    title: 'Family Rights Group (FRG)',
    organization: 'Family Rights Group Charity',
    phone: '0808 801 0366',
    website: 'https://frg.org.uk',
    category: 'Family Law & Rights',
    freeAndConfidential: true,
    description: 'The premier UK charity advising parents whose children are involved with or in need of children\'s social care. Expert legal advocates can review your case and explain your Section 17 rights.',
    actionGuidance: 'Call free Mon–Fri 9:30am–3pm. Ask specifically about "Section 17 support for separated parents" and "Family Group Conferences".'
  },
  {
    title: 'Shelter England - Emergency Housing Helpline',
    organization: 'Shelter Housing & Homelessness Charity',
    phone: '0808 800 4444',
    website: 'https://england.shelter.org.uk',
    category: 'Housing & Homelessness',
    freeAndConfidential: true,
    description: 'Specialist emergency legal advice for anyone facing eviction from temporary accommodation or street homelessness. Advises on Council Part VII duties and Section 188 emergency housing.',
    actionGuidance: 'Call immediately if your notice to quit has expired or if the council refuses to provide family-suitable temporary accommodation.'
  },
  {
    title: 'Civil Legal Advice (CLA) - Legal Aid Eligibility',
    organization: 'Ministry of Justice Legal Aid Agency',
    phone: '0345 345 4 345',
    website: 'https://checklegalaid.service.gov.uk',
    category: 'Government & Statutory',
    freeAndConfidential: true,
    description: 'Official UK government service to check if you qualify for free Legal Aid in housing, family separation, and judicial review proceedings against public authorities.',
    actionGuidance: 'Because your benefits have stopped and you face eviction, you meet the low-income/destitution criteria for urgent legal aid representation.'
  },
  {
    title: 'Citizens Advice - Benefits & Mandatory Reconsideration',
    organization: 'Citizens Advice Bureau',
    phone: '0800 144 8848',
    website: 'https://www.citizensadvice.org.uk/benefits',
    category: 'Crisis & Subsistence',
    freeAndConfidential: true,
    description: 'Nationwide network of advisors offering in-person and telephone guidance on lodging Late Mandatory Reconsiderations, challenging UC sanctions, and claiming Discretionary Housing Payments.',
    actionGuidance: 'Request an urgent appointment for a "Late Mandatory Reconsideration for Universal Credit" with evidence of mental health/trauma impact.'
  },
  {
    title: 'Local Government and Social Care Ombudsman (LGSCO)',
    organization: 'Independent Statutory Ombudsman',
    phone: '0300 061 0614',
    website: 'https://www.lgo.org.uk',
    category: 'Ombudsman & Justice',
    freeAndConfidential: true,
    description: 'The independent body that investigates council and social care maladministration. Can award financial remedies and force councils to change housing and contact decisions.',
    actionGuidance: 'Use when the Council fails to resolve your Stage 1 or Stage 2 complaint within 20 working days. No lawyers or court fees required.'
  },
  {
    title: 'GOV.UK - Universal Credit: Challenge a Decision',
    organization: 'Department for Work and Pensions (DWP)',
    phone: '0800 328 5644',
    website: 'https://www.gov.uk/mandatory-reconsideration',
    category: 'Government & Statutory',
    freeAndConfidential: true,
    description: 'Official GOV.UK portal for submitting a Mandatory Reconsideration request online through your UC journal or by phone.',
    actionGuidance: 'Message your work coach on the journal using the heading "MANDATORY RECONSIDERATION - URGENT FINANCIAL DESTITUTION".'
  },
  {
    title: 'Coram Children\'s Legal Centre (CCLC)',
    organization: 'Child Law Advice Service',
    phone: '0300 330 5480',
    website: 'https://childlawadvice.org.uk',
    category: 'Family Law & Rights',
    freeAndConfidential: true,
    description: 'Dedicated legal advice on child law, parental responsibility, local authority assessments, contact with children in care, and school/medical parental rights.',
    actionGuidance: 'Check their legal factsheets on "Local Authority Duties under Section 17" and "Parental Responsibility for Fathers".'
  },
  {
    title: 'Turn2us - Crisis Grants & Welfare Search',
    organization: 'Turn2us Charitable Service',
    phone: '0808 802 2000',
    website: 'https://www.turn2us.org.uk',
    category: 'Crisis & Subsistence',
    freeAndConfidential: true,
    description: 'National charity providing a searchable directory of emergency benevolent funds, council Local Welfare Assistance schemes, and utility crisis grants.',
    actionGuidance: 'Search for grants tailored to parents with health or housing difficulties to receive emergency cash while DWP reconsiderations process.'
  },
  {
    title: 'Equality Advisory and Support Service (EASS)',
    organization: 'Equality & Human Rights Commission Support',
    phone: '0808 800 0082',
    website: 'https://www.equalityadvisoryservice.com',
    category: 'Ombudsman & Justice',
    freeAndConfidential: true,
    description: 'Government-funded advisory body on Human Rights Act 1998 breaches (Article 8 and Article 14 discrimination) by public authorities including social services.',
    actionGuidance: 'Contact for expert legal arguments if you are treated unequally compared to the other parent.'
  }
];

export const STATUTORY_RIGHTS_MATRIX: StatutoryRightItem[] = [
  {
    id: 'right-1',
    right: 'Presumption of Both Parents\' Ongoing Involvement',
    statutoryBasis: 'Children Act 1989, Section 1(2A) (as inserted by Children & Families Act 2014)',
    appliesTo: 'Both Parents',
    plainEnglishExplanation: 'The law presumes that unless there is concrete evidence of risk of significant harm, having BOTH parents actively involved in a child\'s life directly promotes the child\'s welfare. Social services cannot dismiss one parent or treat them as secondary.',
    actionableStep: 'Insist that all social care plans include explicit strategies and support for you as a co-parent, not just the other parent.',
    govUkTopic: 'Family Law & Child Welfare'
  },
  {
    id: 'right-2',
    right: 'Right to Emergency Accommodation under Section 17',
    statutoryBasis: 'Children Act 1989, Section 17(1) & (6); R (G) v Southwark LBC [2011] UKSC 26',
    appliesTo: 'Both Parents',
    plainEnglishExplanation: 'Children\'s Services has the legal power and duty to provide family housing and financial support even when the child is temporarily not sleeping in the same bed every night, to safeguard the child from losing contact with their parent.',
    actionableStep: 'Send our generated Section 17 formal notice directly to the Director of Children\'s Services demanding housing suitable for contact.',
    govUkTopic: 'Local Authority Children\'s Services'
  },
  {
    id: 'right-3',
    right: 'Right to Family Life & Positive Duty of Reunification',
    statutoryBasis: 'European Convention on Human Rights (ECHR) Article 8; Human Rights Act 1998',
    appliesTo: 'Both Parents',
    plainEnglishExplanation: 'The State and Local Councils have a positive obligation to facilitate the reunion of children with both parents. Forcing a parent into single hostel accommodation where visits are banned directly interferes with this right.',
    actionableStep: 'Issue an Article 8 Human Rights representation notice warning the council that single-room placement frustrates reunification.',
    govUkTopic: 'Human Rights Act 1998'
  },
  {
    id: 'right-4',
    right: 'Non-Discrimination Between Mother and Father',
    statutoryBasis: 'ECHR Article 14 read with Article 8; Equality Act 2010 Public Sector Equality Duty (s.149)',
    appliesTo: 'Both Parents',
    plainEnglishExplanation: 'Public authorities cannot grant housing assistance, parenting packages, and allowances to mothers while leaving fathers in single-room destitution, or vice versa. Both parents must be afforded parity of esteem.',
    actionableStep: 'Formally request equal allocation of resources and support meetings under the Public Sector Equality Duty.',
    govUkTopic: 'Equality & Anti-Discrimination'
  },
  {
    id: 'right-5',
    right: 'Right to Accommodation Located Reasonably Near the Child',
    statutoryBasis: 'Homelessness (Suitability of Accommodation) Order 2012; Code of Guidance para 17.48',
    appliesTo: 'Homeless Household',
    plainEnglishExplanation: 'Housing provided by local councils must be suitable in location. If you are placed miles away, making it impossible to visit your child or take them to school, you can legally challenge the placement as "unsuitable".',
    actionableStep: 'Submit a Section 202 Housing Act review requesting transfer within 45 minutes travel time of your child\'s school/placement.',
    govUkTopic: 'Housing & Homelessness'
  },
  {
    id: 'right-6',
    right: 'Right to Education & Health Records for Both Parents',
    statutoryBasis: 'Education Act 1996 Section 576; Department for Education Parental Responsibility Guidance',
    appliesTo: 'Both Parents',
    plainEnglishExplanation: 'All parents with Parental Responsibility (or biological parents) have an independent right to receive school reports, attend parents\' evenings, and be notified of medical treatment, regardless of living arrangements.',
    actionableStep: 'Write directly to your child\'s headteacher quoting DfE guidance; the school is legally required to send duplicate reports to you.',
    govUkTopic: 'School & Education Rights'
  },
  {
    id: 'right-7',
    right: 'Emergency Hardship & Local Welfare Assistance',
    statutoryBasis: 'Universal Credit Regulations 2013 (Reg 116); Localism Act 2011 Welfare Schemes',
    appliesTo: 'Both Parents',
    plainEnglishExplanation: 'When benefits stop, you are legally entitled to apply for DWP Hardship Payments (recoverable at very low rates) and Council Local Welfare Provision (non-repayable crisis grants for food, gas, and electricity).',
    actionableStep: 'Apply directly to your local council\'s "Local Welfare Provision" or "Crisis Support Scheme" website today for emergency utility vouchers.',
    govUkTopic: 'Benefits & Financial Hardship'
  }
];

export const REALISTIC_COMPENSATION_GUIDE = {
  mythVsFact: [
    {
      myth: '“I can sue social services or the DWP for £25 million in compensation.”',
      fact: 'In English law, damages against public bodies are compensatory, not punitive. The maximum awards in the UK high court for severe unlawful state detention or catastrophic negligence rarely exceed £20,000 to £100,000. Claims demanding £25 million are automatically struck out by judges and solicitors as misconceived.'
    },
    {
      myth: '“Going to court is the only way to get money back after benefits were stopped.”',
      fact: 'The fastest and most effective way to recover lost money is through DWP Mandatory Reconsideration (which pays 100% of backdated arrears in a lump sum) and the Local Government Ombudsman (LGSCO), which orders cash compensation for distress and council blunders without court costs.'
    },
    {
      myth: '“Social services can just decide to only help the mother and ignore the father.”',
      fact: 'Under Children Act 1989 s.1(2A) and ECHR Articles 8 & 14, social services must support both parents unless there is a formal court finding of harm. Discriminatory treatment is illegal and actionable via Ombudsman complaint and Judicial Review.'
    }
  ],
  realRemedies: [
    {
      channel: 'DWP Mandatory Reconsideration & Arrears Backdating',
      expectedOutcome: '100% full backpay of all suspended Universal Credit from the date of stoppage + hardship advance.',
      timeframe: '2 to 8 weeks',
      cost: 'Free'
    },
    {
      channel: 'Local Government and Social Care Ombudsman (LGSCO)',
      expectedOutcome: 'Statutory financial remedy (£500 – £5,000+ for distress/delay), rent arrears write-off, and re-housing.',
      timeframe: '3 to 6 months (after council complaint)',
      cost: 'Free'
    },
    {
      channel: 'Section 17 Children Act 1989 Emergency Subsistence',
      expectedOutcome: 'Immediate cash subsistence or vouchers (£50–£100/week) directly from Council Children\'s Services.',
      timeframe: '24 to 72 hours',
      cost: 'Free'
    },
    {
      channel: 'Human Rights Act 1998 Judicial Review (via Legal Aid)',
      expectedOutcome: 'Court quashes unlawful council decisions; orders proper family housing; "Just satisfaction" damages under s.8 HRA.',
      timeframe: '3 to 9 months',
      cost: 'Covered by Legal Aid if eligible'
    }
  ]
};
