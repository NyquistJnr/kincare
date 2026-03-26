# KinCare
### Pre-funded emergency health payments for diaspora families.

---

## The Problem

Ifunanya, a Nigerian nurse in Manchester, gets a call at 2am. Her mother had a 
stroke in Anambra. She needs ₦800,000 for emergency surgery right now. She 
spends the next 4 hours on Western Union, calling relatives, converting 
currencies. The money arrives late, in the wrong account. Her mother dies 
waiting.

Africans in the diaspora carry the financial weight of their families back home. 
When medical emergencies hit, everything breaks at once. Money is not ready, 
transfers are slow, and even when funds arrive they may not reach the hospital 
in time. Meanwhile, the hospital will not start treatment until payment is 
confirmed.

KinCare removes that friction entirely. Diaspora members pre-fund a dedicated 
health wallet, and when emergencies happen, payment goes directly to the 
hospital in seconds. No intermediaries. No delays. Treatment starts immediately.

KinCare also protects diaspora members from inflated hospital bills using an AI 
layer that flags suspicious invoices before any payment is approved.

---

## What KinCare Does

- Allows diaspora members to pre-fund a wallet dedicated solely to medical 
  emergencies
- Ensures payment goes directly to the hospital. Money never touches the 
  family member's hands
- Enables instant settlement to any Nigerian hospital bank account via 
  Interswitch
- Flags statistically anomalous hospital bills using AI before payment is 
  approved
- Provides rules-based auto-approval so payments proceed even when the diaspora 
  member is unreachable
- Gives diaspora members a full audit trail of every claim and every payment

---

## How It Works

1. Diaspora member creates an account and pre-funds their KinCare health wallet
2. Diaspora member links a family member in Nigeria using a unique pairing code
3. When an emergency occurs, the family member raises a claim and uploads the 
   hospital invoice
4. AI checks the bill against Nigerian healthcare cost benchmarks and generates 
   a claim brief
5. Diaspora member receives a notification, reviews the AI brief, and approves 
   with one tap
6. Interswitch executes the payment directly to the hospital's bank account 
   within seconds
7. Both users receive payment confirmation. Treatment begins.

---

## Key Features

- **Pre-funded health wallet**: money set aside before emergencies happen, 
  not after
- **Direct hospital settlement**: Interswitch transfers funds straight to the 
  hospital's bank account
- **AI bill anomaly detection**: flags invoices that are statistical outliers 
  before approval
- **Claim approval intelligence**: plain-English AI brief shown to diaspora 
  member at the approval screen
- **Auto-approval rules**: configurable fallback so emergencies are covered 
  even when the diaspora member is unreachable
- **Pairing code family linking**: diaspora member generates a unique code; 
  family member uses it to connect to the wallet in minutes
- **Account name verification**: Interswitch resolves hospital account numbers 
  to verified account names before any payment moves

---

## Tech Stack

*(To be completed by development team)*

- **Frontend:** NextJs, Tailwind CSS, Typescript
- **Backend:** Django, Python
- **Database:** Postgres DB
- **Hosting:** Vercel

---

## Interswitch API Integration

*(To be completed by backend developer)*

KinCare integrates the following Interswitch APIs:

- **Account Name Lookup API** — [One sentence on how it is used in the product]
- **Payment Transfer API** — [One sentence on how it is used in the product]
- **Cross-Border Top-Up API** — [One sentence on how it is used in the product]

---

## Live Demo

**Live URL:** *(To be added on deployment)*

**Test Credentials:**

| Role | Email | Password |
|------|-------|----------|
| Diaspora Member | *(add on deployment)* | *(add on deployment)* |
| Family Member | *(add on deployment)* | *(add on deployment)* |
| Admin | *(add on deployment)* | *(add on deployment)* |

---

## How To Test KinCare

*(To be completed when build is deployed — due Thursday)*

A complete testing guide will be provided here including step-by-step 
instructions for judges to experience the full core user journey from wallet 
funding through to hospital payment confirmation.

---

## Team Contributions

### Jennifer Azubuko — Product Manager & Product Designer

- Defined the product vision, target user, and north star
- Conducted user research and developed user personas
- Wrote the full Product Requirements Document (PRD) — see docs/PRD.md
- Mapped all user journeys and user flows for three user types — see 
  docs/user-flows.md
- Created all product wireframes and UI designs for the diaspora member 
  dashboard, family member portal, and admin view
- Defined MVP scope and feature prioritisation — BUILD vs MOCK decisions
- Created and assigned all GitHub Issues for sprint management
- Wrote test cases for judge verification — see docs/test-cases.md
- Authored this README and all documentation in the docs/ folder

### Chidinma Njoku — Frontend Developer

- *(Chidinma to complete with specific features built)*

### Pedro Obi — Frontend Developer

- *(Pedro to complete with specific features built)*

### Nyquist Nwaukwa — Backend Developer

- *(Nyquist to complete with specific features built and APIs integrated)*

---

## Project Documentation

- [Product Requirements Document](docs/PRD.md)
- [User Flows](docs/user-flows.md)
- [Test Cases](docs/test-cases.md)

---

## Hackathon

**Competition:** Interswitch x Enyata Build-a-thon 2026
**Category:** AI/ML
**Tracks:** Health (H) · Cross-Border Payments (XB) · Payments (P) · 
Artificial Intelligence (AI/ML)
