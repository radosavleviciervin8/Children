# Security & Privacy Policy

## 1. Overview and Core Privacy Guarantee

The **UK Parental Welfare & Statutory Rights Advocacy Portal** is an open-source, client-side civic tech application designed to assist parents experiencing severe hardship, benefit stoppages, eviction threats, and child separation proceedings under UK law.

Because users enter sensitive personally identifiable information (PII)—including names, addresses, National Insurance numbers, social worker identities, and details of children in need—**the application is architected under a Zero-Remote-Storage Security Model**.

### Core Guarantees:
- **Zero Remote PII Transmission**: No personal data entered into case forms, document drafts, or timelines is ever transmitted to an external server or remote database.
- **Client-Side Processing Only**: Document generation, variable interpolation, deadline tracking, and file exports are executed entirely inside the user's browser runtime.
- **No Third-Party Analytics / Trackers**: The codebase contains zero third-party tracking scripts, advertising beacons, or telemetry collectors.
- **Local Persistence with Full User Control**: Saved case details and checklists are stored exclusively in the browser's HTML5 `localStorage`. Users can purge this data at any time with a single click.

---

## 2. Threat Model & Safety Guidelines for Users

Many parents accessing this tool may be using shared computers (such as at a public library, jobcentre, community hub, or hostel) or may be in situations of domestic duress:

### Safety Best Practices:
1. **Use Incognito / Private Browsing**: If accessing this portal from a public or shared device, open an Incognito/Private window. When closed, all session data and form entries are automatically wiped by the browser.
2. **Clear Case Vault Before Leaving**: Use the "Reset Data" or "Clear Vault" action in the Case Timeline & Vault before logging off a shared device.
3. **Quick Safety Exit**: The portal provides a one-click "Quick Safety Exit" button in the navigation header that redirects immediately to an innocuous neutral website (e.g. BBC Weather / News) to protect user safety if someone approaches.
4. **Physical Document Handling**: When printing formal notices, ensure printouts containing child details or National Insurance numbers are stored securely in a locked file or folder.

---

## 3. Data Protection Act 2018 & UK GDPR Compliance

Under the **UK General Data Protection Regulation (UK GDPR)** and the **Data Protection Act 2018**:
- The maintainers of this software do not act as Data Controllers or Data Processors for user input, as no user data is collected or processed on servers operated by the project.
- Users maintain 100% control over the retention, alteration, and deletion of their own case data.

---

## 4. Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

Security patches and dependency updates are continually audited against current npm advisories.

---

## 5. Reporting a Security Vulnerability

If you discover a security vulnerability, security flaw, or unintended data exposure risk in this repository, please report it responsibly:

- **Email**: Send vulnerability reports directly to `radosavleviciervin8@gmail.com`
- **Subject**: `[SECURITY VULNERABILITY] UK Parental Welfare Portal`
- **Details to Include**:
  - Description of the vulnerability
  - Steps to reproduce
  - Potential impact on client-side isolation
  - Any proposed remediation

Please allow 48 hours for a response before disclosing publicly. We are committed to resolving verified security vulnerabilities rapidly.
