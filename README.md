# UK Parental Welfare & Statutory Rights Advocacy Portal

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.x-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![Jurisdiction](https://img.shields.io/badge/Jurisdiction-England_%26_Wales-darkgreen.svg)](https://www.legislation.gov.uk/)

A production-ready, open-source statutory advocacy portal and legal notice draftsman for parents navigating UK Social Services proceedings, severe welfare benefit stoppages (Universal Credit), imminent eviction from temporary housing, and parental separation under UK Statutory and International Human Rights Law.

---

## Table of Contents

- [The Core Crisis Addressed](#the-core-crisis-addressed)
- [Key Features](#key-features)
- [Statutory Frameworks Enforced](#statutory-frameworks-enforced)
- [The 5 Automated Legal Notice Drafts](#the-5-automated-legal-notice-drafts)
- [Both Parents Equality & International Human Rights](#both-parents-equality--international-human-rights)
- [Realistic Compensation & Ombudsman (LGSCO) Navigator](#realistic-compensation--ombudsman-lgsco-navigator)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Getting Started](#getting-started)
- [Client-Side Privacy & Security Architecture](#client-side-privacy--security-architecture)
- [Important Legal Disclaimer](#important-legal-disclaimer)
- [License](#license)

---

## The Core Crisis Addressed

This application directly addresses the devastating compounded emergency faced by separated parents:

1. **Benefit Cessation for 12+ Months**: Universal Credit payments (standard allowance and housing element) halted due to state intervention or administrative sanctions, plunging the parent into destitution.
2. **Imminent Threat of Eviction**: Eviction notice or notice to quit served on temporary accommodation, risking immediate street homelessness.
3. **Unlawful Downgrade to Single-Room Accommodation**: Moving a parent from family accommodation (suitable for two persons) into a single hostel/room where children cannot visit or stay overnight.
4. **Parental Disenfranchisement**: Social services failing to provide equal support, housing, and communication to both parents (treating fathers or separated parents as secondary caregivers).

---

## Key Features

- **Emergency Action Navigator (4-Step Crisis Triage)**: Immediate, sequential statutory workflow prioritizing eviction prevention, Section 17 emergency funds, DWP arrears recovery, and equal parental representation.
- **Formal Legal Notice Draftsman**: Interactive letter builder with pre-configured legal arguments, statutory citations, live editing, one-click clipboard copy, print-to-letterhead styling, and `.txt` file export.
- **Both Parents Equality Matrix**: Detailed comparative guide showing statutory duties owed to both mother and father regarding housing suitability, school records, healthcare involvement, and child protection conferences.
- **Realistic Compensation & LGSCO Escalator**: Clear, honest education on why "£25 million" claims fail in UK courts, contrasted with how to legitimately recover 100% backdated Universal Credit arrears and secure £500–£5,000+ Ombudsman compensation for council maladministration.
- **Official Statutory & Charity Directory**: Verified, one-click click-to-call links to Family Rights Group (`0808 801 0366`), Shelter England (`0808 800 4444`), Civil Legal Advice (`0345 345 4 345`), Citizens Advice, and the LGSCO Ombudsman.
- **Case Chronology & Document Vault**: Interactive timeline, statutory deadline countdown (48h Section 17, 21-day Housing Review, 13-month Late MR), and evidence checklist persisted in browser `localStorage`.
- **Quick Safety Exit**: Instant panic button redirecting to neutral news/weather sites for parents using shared or monitored devices.

---

## Statutory Frameworks Enforced

| Legislation / Treaty | Key Provisions & Impact |
| -------------------- | ----------------------- |
| **Children Act 1989** | **Section 17(1) & (6)**: Mandatory duty to safeguard children in need and promote family upbringing through accommodation and cash support.<br>**Section 1(2A)**: Explicit presumption that involvement of both parents furthers child welfare. |
| **Housing Act 1996 (Part VII)** | **Section 188(1)**: Non-discretionary interim accommodation duty.<br>**Section 189**: Priority need assessment for parents with children in need.<br>**Suitability Order 2012**: Housing must permit parental contact and be near the child's school/community. |
| **Social Security Act 1998 & UC Regs** | **Section 9**: Statutory right to Mandatory Reconsideration.<br>**Regulation 36**: Late reconsideration with "Good Cause" (mental trauma, destitution).<br>**Regulation 116**: Emergency hardship advances. |
| **Human Rights Act 1998** | **Article 8 ECHR**: Right to respect for private and family life; positive state duty to facilitate reunification.<br>**Article 14 ECHR**: Prohibition of discrimination between mother and father in public support. |
| **UNCRC (1989)** | **Article 9**: Child's right not to be separated from parents and to maintain regular personal contact.<br>**Article 18**: Recognition of common parental responsibility and state duty to assist both parents. |
| **Local Government Act 1974** | Jurisdiction of the Local Government and Social Care Ombudsman (LGSCO) to award financial remedies for injustice and maladministration. |

---

## The 5 Automated Legal Notice Drafts

1. **Section 17 Children Act 1989 Demand for Housing & Subsistence**
   - Addressed to: Director of Children's Services
   - Focus: Demanding family-suitable accommodation to allow child staying contact and emergency cash subsistence to relieve destitution.
2. **DWP Late Mandatory Reconsideration & Arrears Backdating Notice**
   - Addressed to: Universal Credit Service Centre
   - Focus: Establishing "Good Cause" under Reg 36 for submitting after 12+ months, requesting immediate hardship advance and 100% retroactive backpay.
3. **Housing Act 1996 Part VII Eviction Prevention & Suitability Challenge**
   - Addressed to: Council Housing Options Lead
   - Focus: Halting eviction from temporary accommodation, asserting priority need, and challenging single-room demotion.
4. **Both Parents Equality & Human Rights Act Notice (Art 8 & 14 Parity)**
   - Addressed to: Children's Social Care & Independent Reviewing Officer (IRO)
   - Focus: Demanding parity of esteem, suitable accommodation near the child, and full inclusion in all school and healthcare activities.
5. **Formal Council Stage 1/2 Complaint & Pre-Ombudsman Notice**
   - Addressed to: Council Complaints Manager & Monitoring Officer
   - Focus: Establishing maladministration causing severe injustice as the prerequisite for a formal LGSCO Ombudsman complaint.

---

## Both Parents Equality & International Human Rights

Social services and local councils often make the unlawful assumption that only the primary resident parent requires support, relegating the other parent to single-room hostel accommodation where children are prohibited from visiting.

This portal equips parents with binding legal authorities proving:
- **Parity of Esteem**: Both mother and father have equal status as parents unless restricted by a specific court order.
- **Housing for Contact**: Accommodation that prevents overnight visits or staying contact is legally "unsuitable" under the *Homelessness Code of Guidance*.
- **Geographic Proximity**: Councils have an obligation to house parents within reasonable traveling distance of the child's school and daily life.
- **School & Healthcare Inclusion**: Under *Education Act 1996 s.576*, schools must provide duplicate reports and notices directly to both parents.

---

## Realistic Compensation & Ombudsman (LGSCO) Navigator

### The Reality of the "£25 Million" Question
Under English tort and administrative law, damages against public authorities are strictly **compensatory ("just satisfaction")**, not punitive. Unrealistic multimillion-pound claims are struck out by courts, wasting critical time and money.

### How Parents Actually Recover Funds:
1. **DWP Mandatory Reconsideration**: Pays 100% of missed Universal Credit payments in a single lump-sum backdated payment.
2. **Local Welfare Provision & Section 17 Grants**: Non-repayable cash or vouchers provided directly by the local authority for emergency utilities and food.
3. **Local Government and Social Care Ombudsman (LGSCO)**: Free, independent adjudication awarding £500–£5,000+ for distress, loss of contact, and maladministration, alongside rent write-offs.
4. **Judicial Review / Human Rights Act s.8**: Free public funding via Legal Aid (Civil Legal Advice) to quash unlawful council policies and claim statutory damages.

---

## Architecture & Tech Stack

- **Framework**: React 19 SPA (Strict functional components and custom hooks)
- **Tooling**: Vite 8 with ES2022 module bundling
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";`) with bespoke legal typography
- **Typography**: Google Fonts (`Libre Baskerville` serif for authentic legal documents; `Plus Jakarta Sans` for responsive reading)
- **Icons**: Lucide React
- **Print Engine**: Dedicated `@media print` CSS engine for borderless, clean letterhead document printing

---

## Getting Started

### Prerequisites
- Node.js (version 20 or higher recommended)
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/uk-parental-welfare-portal.git

# Navigate into project directory
cd uk-parental-welfare-portal

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```
The application will launch at `http://localhost:3000`.

### Type Checking & Linting

```bash
npm run lint
```

### Production Build

```bash
npm run build
```
Generates an optimized static distribution in `/dist`.

---

## Client-Side Privacy & Security Architecture

- **Zero Remote PII Storage**: All form fields (names, National Insurance numbers, addresses, child details) reside strictly in the user's browser memory and local storage.
- **No Remote Telemetry**: No third-party analytics or tracker scripts.
- **Quick Safety Exit**: Built-in instant button redirecting to BBC Weather / News for personal safety in shared environments.
- Consult [SECURITY.md](SECURITY.md) for complete threat modeling and safety guidelines.

---

## Important Legal Disclaimer

*This portal provides free statutory information, legal frameworks, and document drafts based on primary legislation in England and Wales. It does not constitute formal legal advice or create a solicitor-client relationship. If you are facing imminent eviction or child care proceedings, contact Civil Legal Advice (`0345 345 4 345`) or the Family Rights Group (`0808 801 0366`) immediately for professional legal representation.*

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
