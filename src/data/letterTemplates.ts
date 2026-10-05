import { CaseDetails, LegalTemplate } from '../types/welfare';

export const initialCaseDetails: CaseDetails = {
  parentFullName: 'Ervin Radosavlevici',
  parentRole: 'Father',
  parentAddress: 'Flat 3, Temporary Accommodation, 14 St. Jude Court',
  parentPostcode: 'E1 4PQ',
  parentPhone: '07123 456789',
  parentEmail: 'radosavleviciervin8@gmail.com',
  nationalInsuranceNumber: 'QQ 12 34 56 A',

  childFullName: 'Daughter / Child in Need',
  childDateOfBirth: '14/05/2018',
  childCurrentPlacement: 'Currently separated under Children\'s Social Care interim arrangements',

  localAuthorityName: 'Local Council Children\'s Services',
  socialWorkerName: 'Allocated Social Worker / Team Manager',
  directorOfChildrenServices: 'The Director of Children\'s Services',
  councilAddress: 'Town Hall / Civic Centre, Directorate for Children & Families',

  housingOfficerName: 'Housing Options Duty Officer',
  housingOptionsAddress: 'Housing Options Team, Homelessness Prevention Services',
  currentAccommodationType: 'Single-room temporary accommodation (Unsuitable for child visits)',
  previousAccommodationType: 'Family-sized temporary accommodation (Suitable for 2 persons / parent and child)',
  threatOfEvictionDate: 'Notice to vacate expired / immediate threat of eviction',

  benefitsStoppedDate: 'Over 12 months ago (stoppage since 2025)',
  dwpOfficeName: 'Department for Work and Pensions - Universal Credit Service Centre',
  universalCreditRef: 'UC-REF-994821',
  lastPaymentDate: 'Over 12 months ago',

  primaryGoal: 'Immediate reinstatement of benefits, emergency Section 17 accommodation suitable for child reunification/contact, and equal support for both parents under Human Rights Law.',
  specialCircumstances: 'Single-room downgrade prevented overnight contact; benefits abruptly halted without adequate notification; extreme risk of street homelessness; parent experiencing acute psychological distress due to prolonged separation.'
};

export const LEGAL_TEMPLATES: LegalTemplate[] = [
  {
    id: 'section-17-housing',
    title: 'Section 17 Children Act 1989: Urgent Request for Housing & Subsistence',
    category: 'Section 17',
    statute: 'Children Act 1989 s.17(1), s.17(6) & R (G) v Southwark LBC [2011]',
    urgencyLevel: 'Emergency (24-48h)',
    recommendedRecipient: 'Director of Children\'s Services & Allocated Social Worker',
    description: 'Forces local authority to provide emergency accommodation and cash support for a family with a child in need, preventing destitution and facilitating family reunification.',
    generateContent: (data: CaseDetails) => {
      const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      return `FORMAL STATUTORY NOTICE UNDER SECTION 17 CHILDREN ACT 1989
URGENT: PRE-ACTION NOTICE REGARDING IMMINENT HOMELESSNESS & DESTITUTION
AND REQUEST FOR FAMILY-SUITABLE ACCOMMODATION TO FACILITATE PARENTAL CARE

DATE: ${today}

TO:
${data.directorOfChildrenServices}
cc: ${data.socialWorkerName} (Children's Social Care)
${data.localAuthorityName}
${data.councilAddress}

FROM:
${data.parentFullName} (${data.parentRole})
${data.parentAddress}, ${data.parentPostcode}
Telephone: ${data.parentPhone} | Email: ${data.parentEmail}
National Insurance No: ${data.nationalInsuranceNumber}

RE: STATUTORY SUPPORT FOR CHILD IN NEED: ${data.childFullName} (DOB: ${data.childDateOfBirth})
AND FORMAL APPLICATION FOR SECTION 17 ACCOMMODATION AND SUBSISTENCE

Dear Director of Children's Services,

1. INTRODUCTION & STATUTORY BASIS
I am writing to submit an urgent formal application for statutory support under Section 17 of the Children Act 1989 on behalf of my child, ${data.childFullName} (DOB: ${data.childDateOfBirth}), and myself as their ${data.parentRole.toLowerCase()}.

As you are aware, Section 17(1) of the Children Act 1989 places a mandatory general duty on your local authority:
  "(a) to safeguard and promote the welfare of children within their area who are in need; and
   (b) so far as is consistent with that duty, to promote the upbringing of such children by their families,
   by providing a range and level of services appropriate to those children's needs."

Under Section 17(6), assistance may be given in kind or, in exceptional circumstances, in cash, which explicitly includes the provision of accommodation (confirmed by the Supreme Court in R (G) v Southwark LBC [2011] UKSC 26).

2. FACTUAL BACKGROUND & SEVERE HARDSHIP
My current circumstances have reached a catastrophic emergency:
  a) My welfare benefits (Universal Credit) have been completely stopped for ${data.benefitsStoppedDate}. I have had zero income or support, leaving me destitute, unable to heat my home, and reliant on crisis charities.
  b) I am currently residing in ${data.currentAccommodationType}, under imminent threat of eviction (${data.threatOfEvictionDate}).
  c) Previously, I was accommodated in ${data.previousAccommodationType}, which was capable of accommodating my child. My subsequent transfer into single-occupancy accommodation was directly caused by the ongoing state intervention and separation.
  d) This single-room accommodation is structurally unsuitable for my daughter to visit, stay overnight, or for us to work meaningfully toward full family reunification.

3. THE BEST INTERESTS OF THE CHILD & FAMILY REUNIFICATION
My daughter is recognized as a "child in need" under Section 17(10) of the 1989 Act. It is established law that the local authority's duty to promote upbringing by the family applies equally whether the child is currently with the parent or temporarily separated while working toward rehabilitation.

By failing to provide accommodation capable of hosting my daughter, and by allowing me to face homelessness and destitution:
  - The local authority is actively frustrating the possibility of family life and contact;
  - The local authority is in direct breach of its duty to promote family upbringing under s.17(1)(b);
  - The local authority is acting incompatibly with Article 8 of the European Convention on Human Rights (Right to respect for family life), as incorporated by the Human Rights Act 1998.

4. EQUALITY OF PARENTAL SUPPORT
I emphasize that under Section 1(2A) of the Children Act 1989, there is an explicit presumption that the involvement of both parents in the life of the child will further the child's welfare. Social services cannot selectively support only one parent while leaving the other parent in destitute, unsuitable housing that makes parental care impossible. Under Article 14 read with Article 8 ECHR, public bodies must not discriminate between parents in the provision of supportive services.

5. ACTION REQUIRED & RESPONSE TIMEFRAME
In light of the extreme urgency and imminent risk of street homelessness, I formally request that ${data.localAuthorityName}:
  1. Immediately exercise its Section 17 powers to prevent my eviction and secure suitable accommodation with sufficient space for my daughter to stay and spend regular time with me;
  2. Provide immediate Section 17 financial subsistence (cash or vouchers) to alleviate my complete lack of income while benefit issues are resolved;
  3. Convene an urgent Child in Need / Family Support meeting to agree a clear rehabilitation and contact schedule.

Please respond in writing within 48 hours of receipt of this notice. If you decline to assess or provide support under Section 17, please provide full written reasons so that my legal advisers can consider an immediate application for Judicial Review in the Administrative Court.

Yours sincerely,

___________________________________
${data.parentFullName}
${data.parentRole} of ${data.childFullName}`;
    }
  },
  {
    id: 'dwp-mandatory-reconsideration',
    title: 'DWP Mandatory Reconsideration: Benefit Stoppage, Late Submission & Full Arrears',
    category: 'Benefits',
    statute: 'Social Security Act 1998 s.9, Universal Credit Regulations 2013 & Late MR Rules',
    urgencyLevel: 'High (7 days)',
    recommendedRecipient: 'Department for Work and Pensions (Universal Credit Mail Handling Centre)',
    description: 'Demands urgent reconsideration of stopped Universal Credit/benefits, asserts good cause for late challenge (>12 months), and demands full backdated arrears and hardship payments.',
    generateContent: (data: CaseDetails) => {
      const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      return `FORMAL REQUEST FOR MANDATORY RECONSIDERATION
WITH APPLICATION TO EXTEND TIME LIMIT UNDER REGULATION 36 (GOOD CAUSE)
AND APPLICATION FOR IMMEDIATE HARDSHIP PAYMENTS & FULL REINSTATEMENT OF ARREARS

DATE: ${today}

TO:
${data.dwpOfficeName}
Universal Credit Service Centre
Post Handling Site B, Wolverhampton, WV99 1AJ

FROM:
Claimant Name: ${data.parentFullName}
Address: ${data.parentAddress}, ${data.parentPostcode}
National Insurance Number: ${data.nationalInsuranceNumber}
Universal Credit Reference: ${data.universalCreditRef}
Contact Phone: ${data.parentPhone} | Email: ${data.parentEmail}

RE: MANDATORY RECONSIDERATION OF DECISION TO TERMINATE / SUSPEND UNIVERSAL CREDIT PAYMENTS
DATE OF STOPPAGE: ${data.benefitsStoppedDate}
REQUEST FOR RETROACTIVE REINSTATEMENT & FULL ARREARS COVERING 12+ MONTHS

Dear Decision Maker,

1. NOTICE OF APPLICATION
I am writing to formally request a Mandatory Reconsideration under Section 9 of the Social Security Act 1998 against the decision to terminate, suspend, or sanction my Universal Credit award, which resulted in my payments being stopped for ${data.benefitsStoppedDate}.

2. APPLICATION FOR EXTENSION OF TIME / SPECIAL CIRCUMSTANCES (GOOD CAUSE)
I am aware that standard requests for Mandatory Reconsideration should be made within one month of the decision notification. Pursuant to Regulation 36 of the Social Security and Child Support (Decisions and Appeals) Regulations 1999 (as amended) and DWP Decision Makers' Guide Chapter A3:
  a) I hereby apply for an extension of time on grounds of exceptional hardship, severe mental distress, and overwhelming state proceedings involving Children's Social Services.
  b) Throughout this period, I was dealing with the traumatic separation of my daughter, ${data.childFullName}, and complex statutory proceedings with ${data.localAuthorityName}.
  c) The removal or suspension of my housing element and standard allowance left me destitute, without funds for postage, phone credit, or legal advice, severely impeding my ability to navigate the online UC portal or lodge this challenge earlier.
  d) It is in the interests of natural justice to admit this reconsideration out of time, as the cessation of my award has caused catastrophic harm and threatens to make me street homeless.

3. GROUNDS FOR RECONSIDERATION & ILLEGALITY OF STOPPAGE
  a) Erroneous Stoppage: My entitlement to the Standard Allowance and Housing Costs Element did not cease to exist. Even if the child element was adjusted due to interim care proceedings, my underlying status as an eligible claimant facing severe housing vulnerability remained unchanged.
  b) Lack of Adequate Notice: I was not provided with reasoned written notification complying with statutory standards, nor given an opportunity to provide representations or medical mitigation before payments were cut off.
  c) Severe Vulnerability: Ceasing benefits for over a year has exposed me to eviction from my temporary accommodation (${data.threatOfEvictionDate}), causing severe mental anguish and preventing me from exercising parental responsibility.

4. INTERIM REMEDY & HARDSHIP ADVANCE
While this Mandatory Reconsideration is being processed:
  1. I request an immediate urgent Hardship Payment / Section 13/14 Emergency Advance under the Universal Credit Regulations 2013 to cover essential food, utilities, and rent arrears;
  2. I request the immediate recalculation and payment in full of all backdated arrears for the entire duration of the unlawful stoppage;
  3. I request written confirmation of the date of this request and a full Mandatory Reconsideration Notice (MRN) should you decline to revise the decision immediately.

Please confirm receipt of this application on my Universal Credit journal and by post/email within 7 working days.

Yours sincerely,

___________________________________
${data.parentFullName}
Claimant`;
    }
  },
  {
    id: 'housing-act-review',
    title: 'Housing Act 1996 Part VII: Homelessness Prevention & Priority Need Challenge',
    category: 'Housing',
    statute: 'Housing Act 1996 s.177, s.188, s.189 & Homelessness Reduction Act 2017',
    urgencyLevel: 'Emergency (24-48h)',
    recommendedRecipient: 'Council Housing Options Lead & Homelessness Review Team',
    description: 'Challenges imminent eviction from temporary housing, demands accommodation suitable for a parent with a separated child, and asserts priority need.',
    generateContent: (data: CaseDetails) => {
      const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      return `FORMAL HOUSING APPLICATION & LEGAL REPRESENTATION UNDER HOUSING ACT 1996 (PART VII)
AS AMENDED BY THE HOMELESSNESS REDUCTION ACT 2017
URGENT: IMMINENT EVICTION, THREAT OF STREET HOMELESSNESS & SUITABILITY CHALLENGE

DATE: ${today}

TO:
${data.housingOfficerName}
Housing Options / Homelessness Team
${data.localAuthorityName}
${data.housingOptionsAddress}

FROM:
${data.parentFullName} (${data.parentRole})
Current Address: ${data.parentAddress}, ${data.parentPostcode}
Telephone: ${data.parentPhone} | Email: ${data.parentEmail}
Date of Imminent Eviction/Notice: ${data.threatOfEvictionDate}

RE: URGENT HOMELESSNESS RELIEF DUTY (SECTION 189B) & INTERIM ACCOMMODATION DUTY (SECTION 188)
CHALLENGE TO DOWNGRADE FROM FAMILY ACCOMMODATION TO SINGLE ROOM
PARENT OF CHILD IN NEED: ${data.childFullName} (DOB: ${data.childDateOfBirth})

Dear Housing Options Team,

1. IMMEDIATE RISK OF HOMELESSNESS
I am writing to formally place you on notice that I am threatened with immediate homelessness pursuant to Section 175 of the Housing Act 1996. My temporary accommodation provider has initiated eviction proceedings (${data.threatOfEvictionDate}), and I have nowhere safe, lawful, or suitable to reside.

2. STATUTORY DUTIES ENGAGED
Under Part VII of the Housing Act 1996:
  a) Section 188(1) Interim Duty to Accommodate: You have a non-discretionary duty to secure accommodation if you have reason to believe I may be homeless, eligible for assistance, and have a priority need.
  b) Section 189 Priority Need & Vulnerability: Under Section 189(1)(c) and Section 189(1)(b), I have a priority need for accommodation. I am a parent to ${data.childFullName} who is subject to Children Act 1989 Section 17 support. Furthermore, I am significantly more vulnerable than an ordinary person as a consequence of prolonged benefit cessation (${data.benefitsStoppedDate}), severe destitution, and the mental health trauma of family separation (Pereira / Hotak tests applied).

3. CHALLENGE TO SUITABILITY OF ACCOMMODATION (SECTION 206 & 210)
I previously occupied ${data.previousAccommodationType}, which allowed for parent-child interaction and privacy. I was subsequently downgraded to ${data.currentAccommodationType}.
Under the Homelessness (Suitability of Accommodation) (England) Order 2012 and the Homelessness Code of Guidance for Local Authorities (Chapter 17):
  - Accommodation is not suitable if it prevents a parent from exercising their parental role, hosting contact, or facilitating reunification with their child;
  - Accommodation must be within reasonable proximity to the child's educational, social, and healthcare networks;
  - Forcing a parent into single hostel/B&B accommodation where children cannot visit breaches the public sector equality duty and Article 8 of the ECHR.

4. JOINT WORKING BETWEEN HOUSING AND CHILDREN'S SERVICES
Under Section 213A of the Housing Act 1996 and Section 27 of the Children Act 1989, Housing Authorities and Children's Social Services are required by law to cooperate. Where Children's Social Services are actively involved with a family, Housing Options cannot discharge its duty by dumping the parent onto the street or into substandard single rooms.

5. RELIEF REQUESTED WITHIN 24 HOURS
  1. Confirmation that an interim accommodation duty is accepted under Section 188(1);
  2. Prevention of eviction or immediate transfer to suitable temporary accommodation capable of accommodating parent-child contact;
  3. Liaison with ${data.socialWorkerName} (Children's Social Care) to ensure housing plans harmonize with family reunification plans;
  4. An emergency assessment under the Homelessness Reduction Act 2017 with a written Personalised Housing Plan (PHP).

Yours sincerely,

___________________________________
${data.parentFullName}
Applicant`;
    }
  },
  {
    id: 'both-parents-equality',
    title: 'Both Parents Equality & Human Rights Act Notice (Art 8 & 14 Parity)',
    category: 'Parental Rights',
    statute: 'Human Rights Act 1998 Art 8 & 14, UNCRC Art 9 & 18, Children Act 1989 s.1(2A)',
    urgencyLevel: 'Standard (14-28 days)',
    recommendedRecipient: 'Director of Children\'s Services, Independent Reviewing Officer (IRO) & Social Work Team',
    description: 'Demands parity of esteem and equal practical assistance for both mother and father, invoking international human rights law, housing proximity, and equal involvement in child activities.',
    generateContent: (data: CaseDetails) => {
      const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      return `FORMAL STATUTORY & HUMAN RIGHTS REPRESENTATION
REGARDING EQUAL PARENTAL SUPPORT, HOUSING PARITY & CO-PARENTING RIGHTS
UNDER HUMAN RIGHTS ACT 1998 (ARTICLES 8 & 14) AND UN CONVENTION ON THE RIGHTS OF THE CHILD (ARTICLES 9 & 18)

DATE: ${today}

TO:
${data.directorOfChildrenServices}
The Independent Reviewing Officer (IRO) Team
${data.socialWorkerName}, Allocated Social Worker
${data.localAuthorityName}

FROM:
${data.parentFullName} (${data.parentRole})
Address: ${data.parentAddress}, ${data.parentPostcode}
Child: ${data.childFullName} (DOB: ${data.childDateOfBirth})
Current Social Care Reference: CIN / CP Case File

RE: PARITY OF STATUTORY SUPPORT FOR BOTH PARENTS
UNLAWFUL ASYMMETRIC TREATMENT & RIGHT TO SUITABLE ACCOMMODATION NEAR CHILD

Dear Social Care Directorate and Independent Reviewing Officer,

1. PURPOSE OF THIS REPRESENTATION
I am writing to formalize my serious concerns regarding systemic disparities in the treatment, assistance, and resources provided by ${data.localAuthorityName} to both parents of ${data.childFullName}.

The welfare and best interests of our child require that BOTH parents receive equal, robust statutory assistance to maintain a loving, stable, and active presence in our daughter's life. State intervention must never serve to marginalize one parent or relegate them to homelessness while providing assistance exclusively to the other.

2. THE GOVERNING LEGAL & HUMAN RIGHTS FRAMEWORK
Your attention is directed to the binding legal frameworks governing your decisions:

  a) Presumption of Both Parents' Involvement (Children Act 1989 Section 1(2A)):
     The statute mandates a clear presumption that unless proven otherwise to the contrary, the involvement of each parent in the life of the child will further the child's welfare.

  b) Article 8 ECHR (Right to Respect for Private and Family Life):
     Public authorities owe a positive operational duty to take all necessary measures to maintain and restore family ties between a parent and their child (see Neulinger v Switzerland [2010]; K & T v Finland [2001]). Withholding housing assistance, reducing a parent to single-room living where contact is prohibited, or failing to assist with subsistence is an unlawful state interference with Article 8.

  c) Article 14 ECHR (Prohibition of Discrimination):
     Enjoyment of the right to family life must be secured without discrimination on any ground including sex, gender, or status. Local authorities cannot apply different thresholds of housing and financial help to fathers compared to mothers, or treat one parent as a secondary caregiver.

  d) UN Convention on the Rights of the Child (UNCRC) Articles 9 & 18:
     - Article 9: States Parties shall ensure that a child shall not be separated from their parents against their will, and shall respect the right of the child who is separated from one or both parents to maintain personal relations and direct contact with both parents on a regular basis.
     - Article 18: States Parties shall use their best efforts to ensure recognition of the principle that both parents have common responsibilities for the upbringing and development of the child, and shall render appropriate assistance to parents.

3. REQUIRED ACTION & CORRECTIONS
In accordance with international human rights law, ethics, and UK statutory guidance:
  1. Equal Housing Support: I must be supported into accommodation suitable for my child to stay overnight and spend quality family time, situated within reasonable proximity so that travel does not prejudice school attendance or contact;
  2. Inclusion in All Child Activities: As a parent with parental responsibility, I require direct notification and inclusion in all school events, parents' evenings, medical/dental appointments, and extracurricular activities;
  3. Copies of All Statutory Records: I formally request complete copies of all Child in Need plans, Child Protection Conference minutes, LAC reviews, and Core Group assessments;
  4. Non-Discriminatory Assistance: Any financial, practical, or parenting capacity support offered to one parent must be mirrored and made equally available to me.

Please acknowledge receipt of this formal representation within 5 working days and confirm the steps being implemented to ensure full parental parity.

Yours sincerely,

___________________________________
${data.parentFullName}
${data.parentRole} of ${data.childFullName}`;
    }
  },
  {
    id: 'council-complaint-ombudsman',
    title: 'Formal Council Stage 1/2 Complaint & Pre-Ombudsman (LGSCO) Notice',
    category: 'Complaints',
    statute: 'Local Government Act 1974 & Children Act 1989 Representations Procedure',
    urgencyLevel: 'Standard (14-28 days)',
    recommendedRecipient: 'Council Complaints Manager & Monitoring Officer',
    description: 'Lodges a formal corporate complaint against social services and housing maladministration, laying the evidentiary foundation for the Local Government Ombudsman (LGSCO).',
    generateContent: (data: CaseDetails) => {
      const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      return `FORMAL STATUTORY COMPLAINT UNDER THE CHILDREN ACT 1989 COMPLAINTS PROCEDURE
AND LOCAL AUTHORITY CORPORATE COMPLAINTS POLICY
NOTICE OF INTENDED ESCALATION TO LOCAL GOVERNMENT AND SOCIAL CARE OMBUDSMAN (LGSCO)

DATE: ${today}

TO:
Complaints Manager & Monitoring Officer
${data.localAuthorityName}
${data.councilAddress}

FROM:
Complainant: ${data.parentFullName} (${data.parentRole})
Address: ${data.parentAddress}, ${data.parentPostcode}
Contact: ${data.parentPhone} | ${data.parentEmail}
Child: ${data.childFullName} (DOB: ${data.childDateOfBirth})

RE: FORMAL COMPLAINT - MALADMINISTRATION CAUSING SEVERE INJUSTICE
DEALINGS OF CHILDREN'S SOCIAL CARE & HOUSING OPTIONS

Dear Complaints Team,

1. GROUNDS OF COMPLAINT
I hereby submit a formal complaint regarding severe administrative failures, unlawful delays, and neglect by ${data.localAuthorityName} which have caused profound financial hardship, emotional trauma, and prolonged separation between myself and my child:

  a) Failure to Assess under Section 17 Children Act 1989:
     Despite my child being a child in need, and despite my repeated notices of destitution following benefit cessation (${data.benefitsStoppedDate}), Children's Social Services failed to provide adequate subsistence or accommodation support.

  b) Unlawful Demotion of Housing & Disruption of Family Life:
     Moving me from ${data.previousAccommodationType} into ${data.currentAccommodationType}, which is inadequate for child contact, directly obstructed family rehabilitation, in breach of Section 17(1)(b) Children Act 1989 and Article 8 ECHR.

  c) Unequal Treatment Between Parents:
     The local authority has failed to provide equal support, communication, or resources to both parents, breaching the core requirements of parental parity and anti-discrimination standards under Article 14 ECHR.

  d) Inter-Departmental Failure between Housing and Children's Services:
     The local authority breached its duty of inter-agency cooperation under Section 27 Children Act 1989 and Section 213A Housing Act 1996, allowing me to face imminent eviction without a coordinated safety net.

2. REMEDIES SOUGHT
To resolve this complaint at Stage 1, I require:
  1. Immediate provision of emergency accommodation suitable for parent-child staying contact;
  2. Emergency financial grant under Section 17 to address immediate destitution;
  3. A formal written apology acknowledging the delay and maladministration;
  4. A financial remedy for distress, lost contact time, and financial loss in accordance with Local Government and Social Care Ombudsman (LGSCO) remedy guidance.

If this complaint is not satisfactorily resolved within statutory timeframes, I will escalate to Stage 2 / Stage 3 and submit a formal referral to the Local Government and Social Care Ombudsman.

Yours sincerely,

___________________________________
${data.parentFullName}`;
    }
  }
];
