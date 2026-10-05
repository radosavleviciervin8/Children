export interface CaseDetails {
  parentFullName: string;
  parentRole: 'Father' | 'Mother' | 'Guardian';
  parentAddress: string;
  parentPostcode: string;
  parentPhone: string;
  parentEmail: string;
  nationalInsuranceNumber: string;

  childFullName: string;
  childDateOfBirth: string;
  childCurrentPlacement: string;

  localAuthorityName: string;
  socialWorkerName: string;
  directorOfChildrenServices: string;
  councilAddress: string;

  housingOfficerName: string;
  housingOptionsAddress: string;
  currentAccommodationType: string;
  previousAccommodationType: string;
  threatOfEvictionDate: string;

  benefitsStoppedDate: string;
  dwpOfficeName: string;
  universalCreditRef: string;
  lastPaymentDate: string;

  primaryGoal: string;
  specialCircumstances: string;
}

export interface LegalTemplate {
  id: string;
  title: string;
  category: 'Section 17' | 'Benefits' | 'Housing' | 'Parental Rights' | 'Complaints';
  statute: string;
  description: string;
  recommendedRecipient: string;
  urgencyLevel: 'Emergency (24-48h)' | 'High (7 days)' | 'Standard (14-28 days)';
  generateContent: (data: CaseDetails) => string;
}

export interface OfficialResource {
  title: string;
  organization: string;
  phone?: string;
  website: string;
  category: 'Government & Statutory' | 'Housing & Homelessness' | 'Family Law & Rights' | 'Crisis & Subsistence' | 'Ombudsman & Justice';
  description: string;
  freeAndConfidential: boolean;
  actionGuidance: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  category: 'benefit' | 'housing' | 'social_services' | 'legal';
  description: string;
  status: 'pending' | 'completed' | 'urgent';
  deadlineDate?: string;
}

export interface StatutoryRightItem {
  id: string;
  right: string;
  statutoryBasis: string;
  appliesTo: 'Both Parents' | 'Child in Need' | 'Homeless Household';
  plainEnglishExplanation: string;
  actionableStep: string;
  govUkTopic: string;
}
