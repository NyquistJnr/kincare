# KinCare  
## Pre-Funded Emergency Health Payment Platform  
**Product Requirements Document (PRD) — MVP**  
Interswitch x Enyata Build-a-thon 2026  
Version 1.0  |  March 23, 2026  
Track: Health (H) + Cross-Border Payments (XB) + Payments (P) + AI/ML  

> "At least access to funding will never be the reason they lose a loved one."  
> — KinCare North Star  

---

## 1. Problem Statement
Nigerians and Africans in the diaspora are often the primary breadwinners for their families back home. Medical emergencies strike without warning and without mercy, and when they do, the diaspora member faces a cascade of failures: the money is not immediately available, the transfer takes hours, it lands in a relative's personal account and sometimes does not reach the hospital, or the family member spends it on something else under panic. The hospital, meanwhile, will not begin treatment without payment.

KinCare eliminates this cascade entirely. It allows diaspora members to pre-fund a dedicated health wallet for their family members in Nigeria. When a medical emergency occurs, the family raises a claim on the platform, the diaspora member approves with one tap — or a pre-set auto-approval rule activates, and Interswitch settles payment directly to the hospital's bank account in seconds. The money never touches the family member's hands. The hospital gets paid. Treatment begins.

KinCare also protects diaspora members from inflated hospital bills through an AI-powered fraud detection layer that flags statistically anomalous invoices before any payment is made.

---

## 2. Target Users

### User 1 — The Diaspora Member (Primary)

| Attribute        | Description |
|-----------------|-------------|
| Who they are     | Nigerian living abroad (UK, Canada, US). 30-40 years old. Working a 9-5 in corporate or tech. |
| Core burden      | Unpredictability — the dread of the next emergency call. Loss of control — sending money with no visibility on where it goes. |
| What they need to feel | Burden lifted. Prepared. In control, even from 5,000 miles away. |
| Role in KinCare  | Funds wallet. Sets approval rules. Approves claims. Views full audit trail. |

### User 2 — The Family Member in Nigeria (Secondary)

| Attribute        | Description |
|-----------------|-------------|
| Who they are     | Family member of the diaspora user on the ground in Nigeria during an emergency. |
| Core burden      | Panic. Navigating a hospital without funds confirmed. Fear of loved one not receiving care in time. |
| What they need to feel | Supported. Capable of acting fast without making financial decisions alone. |
| Role in KinCare  | Raises claims. Uploads hospital invoice. Enters hospital account details. Tracks payment status. |

### User 3 — Admin (Demo)
Pre-created account for system oversight and judge verification during demo day. Full visibility into all users, wallets, claims, transactions, and system status.

---

## 3. MVP Scope
KinCare's MVP does exactly these things and nothing else:

- Allow diaspora members to pre-fund a wallet dedicated solely to medical emergencies
- Ensure hospital payment is made directly to the hospital. Money never touches the family member's hands
- Enable instant payment settlement to any Nigerian hospital bank account via Interswitch
- Flag hospital bills that are statistically anomalous using AI before payment is approved
- Provide rules-based auto-approval so payments can proceed even when the diaspora member is unreachable
- Give diaspora members a full audit trail of every claim and every payment

---

## 4. User Journey Maps

### 4.1 Diaspora Member — Primary Flow (Family raises claim)
Ifunaya gets a call from her uncle in Anambra at 11pm. Her mother fell in the bathroom. Her head is bleeding. They have rushed her to the hospital but treatment will not start without payment. Her uncle has raised the claim on KinCare. Ifunaya's heart is racing. She opens KinCare. She feels immediate relief seeing the wallet balance. She views the invoice amount and the AI claim brief. She approves in one tap. She gets a payment confirmation. She exhales.

### 4.2 Diaspora Member — Secondary Flow (No kin linked yet)
Ifunaya gets a call at 11pm. Her mother has had an accident. She has not yet linked her uncle to KinCare. She opens the app, sees the wallet balance, clicks 'Raise Claim' herself, enters the claim details, the AI briefs her on the amount, she enters the hospital account number, verifies the account name, and approves. The hospital is paid. She exhales.

### 4.3 Family Member — Scenario A (Hospital business account)
Kemi is in Canada. Her brother Tunde in Lagos was hit by an okada rider. Their sister Lola rushes him to hospital. The hospital gives them a bill. Lola opens KinCare, sees the wallet balance, and is relieved it covers the deposit. She raises a claim, uploads the invoice photo, enters the hospital account number. The system resolves it as 'Reddington Hospital Ltd'. She confirms and submits. Kemi receives a notification, views the invoice and AI brief, and approves. Interswitch settles to the hospital account. Tunde receives immediate treatment.

### 4.4 Family Member — Scenario B (Personal account name)
Same scenario. Lola enters the account number. The system resolves it as 'Emmanuel Chukwu — GTBank'. A warning appears: 'This account is registered to an individual. This is common with small clinics in Nigeria. Please confirm with your family member before approving.' Kemi texts Lola to verify. Lola confirms it is the clinic owner's account. Kemi approves. Payment settles. Tunde receives care.

### 4.5 Admin
Chidi is the KinCare system administrator. At 11:45pm he receives an alert that an auto-approval triggered for a ₦380,000 claim at a hospital in Lagos. He opens the admin dashboard, sees the Interswitch transaction processing, reviews the AI brief confirming the amount is within normal range, and sees the auto-approval rule that triggered — diaspora member unreachable for 45 minutes, amount under ₦500,000. Everything checks out. He marks it reviewed. The family receives care.

---

## 5. User Flows

### 5.1 Diaspora Member

#### Onboarding [BUILD]
1. Install KinCare app
2. Select role: Diaspora Member
3. Register via Apple, Google, or email
4. Set up biometrics, PIN, or password. Accept Terms of Service
5. KYC: Submit full name, phone number, email address, and BVN
6. Link bank account or card
7. Fund the wallet
8. Complete 3-question wallet estimation: 
   - How many family members are you covering? 
   - Where in Nigeria are they located? 
   - What is your monthly contribution budget?  
   KinCare responds with a recommended minimum wallet balance and monthly top-up plan

#### Linking Flow — Invite Family Member [BUILD]
1. Land on dashboard. See card prompt: 'Invite your kin in 2 steps: 1. Share your unique pairing code. 2. Your kin downloads the app and uses the code to get started.'
2. Click 'Link your Kin'
3. Pairing code screen appears with 'Send Linking Code' button
4. Tap to share automated message containing code and app download link
5. Family member clicks link, installs app, selects 'Family Member' role, enters name and pairing code, taps Continue, and lands on family member dashboard

**Note:** Pairing codes expire after 48 hours. Diaspora member returns to 'Link your Kin' to generate a new code. [MOCK]

#### Top-Up Wallet [BUILD]
1. Open app, see dashboard with wallet balance and safe balance progress bar
2. Click 'Top Up'
3. Input amount
4. View total amount to be debited
5. Choose top-up method: card, bank transfer, or USSD
6. Complete top-up
7. Receive notification: wallet topped up successfully

#### Approving a Claim [BUILD]
1. Receive push notification of new claim
2. Tap notification and open claim detail screen
3. View invoice amount and AI claim brief (normal range indicator)
4. View verified hospital account name
5. If account is personal name: view warning prompt and confirm with family member before proceeding
6. Tap 'Approve'
7. Interswitch executes transfer
8. View payment confirmation screen with transaction reference

#### Auto-Approval Setup — From Dashboard To-Do Prompt [BUILD]
1. Land on dashboard, see to-do card: 'Set up auto-approval to ensure emergencies are covered even when you are unreachable'
2. Click card to open auto-approval page with feature explanation
3. Complete 3 configuration fields: 
   - Maximum auto-approve amount 
   - Activate after unreachable for: 30 mins / 1 hour / 2 hours 
   - Notify me when auto-approval triggers: Yes / No
4. Click 'Activate'
5. Auto-approval is live

#### Auto-Approval — Via Settings [MOCK]
1. Go to Settings > Auto-Approval
2. View current rules and two action buttons: 'Update' and 'Deactivate'
   - Update: Edit the 3 configuration fields and save
   - Deactivate: Friction prompt appears reminding user of importance. User taps 'Deactivate Anyway' to confirm

#### Low Balance Alert [MOCK]
- System detects wallet is below the recommended minimum balance
- Diaspora member receives push notification and sees alert card on dashboard
- Taps 'Top Up Now' — enters standard top-up flow

#### View Claim History [BUILD]
- Open app, see recent claim history on dashboard
- Tap 'See All' for full claims list
- Filter by: Last 30 days / 90 days / 6 months / 1 year / Custom date

#### Add Card Details [MOCK]
- On dashboard or via Profile > Bank & Card
- Input card details
- Card confirmed and saved

---

### 5.2 Family Member

#### Onboarding [BUILD]
1. Click download link received from diaspora member
2. Install KinCare app
3. Select role: Family Member
4. Enter full name and unique pairing code from diaspora member
5. Set up biometrics, PIN, or password. Accept Terms of Service
6. Land on family member dashboard — wallet balance visible, linked to diaspora member's wallet

#### Raising a Claim [BUILD]
1. Open app, land on dashboard
2. See wallet balance with caption: 'Available for your care — funded by [Diaspora Member First Name]'
3. Tap 'Raise Claim'
4. Upload photo of hospital invoice
5. Enter hospital bank account number
6. System resolves and displays account name for confirmation
7. If personal account name: warning prompt shown — user confirms with hospital/family before proceeding
8. Confirm details and submit claim
9. Diaspora member receives notification
10. Diaspora member approves or auto-approval triggers
11. Family member receives payment confirmation notification

#### View Claim History [BUILD]
- Open app, see recent claims on dashboard
- Tap 'See All' for full list, filterable by date range

---

### 5.3 Admin [MOCK — For Demo Day]

#### Login
- Admin logs in with pre-created email and password
- Lands on admin dashboard

#### Dashboard Sections
**Summary Cards**
- Total registered users
- Total wallet value across all users
- Total claims processed
- Total amount disbursed

**User Management**
- List: name, role, registration date, wallet balance
- Click into any user to view full profile and transaction history

**Claims Management**
- List: user name, amount, hospital account, status (pending / approved / auto-approved / rejected)
- Click into any claim: AI brief, invoice photo, account verification result, approval timestamp

**Transaction Log**
- Every Interswitch transaction: amount, sender, recipient account, timestamp, status (success / failed)
- Critical for judges — proves real money movement

**System Status**
- Interswitch API connection status — green or red
- Last successful transaction timestamp
- Failed transactions flagged with reason

**Alerts**
- Low wallet balance alerts triggered
- Auto-approval events — when triggered and for how much
- AI anomaly flags raised

---

## 6. Interswitch API Integration

KinCare uses Interswitch as its payment infrastructure layer. Interswitch does not need to be the hospital's payment processor. The hospital only needs a standard Nigerian bank account. Interswitch handles the transfer regardless of which bank or POS provider the hospital uses.

| API | Purpose | Build Status |
|-----|--------|-------------|
| Account Name Lookup API | Resolves a bank account number to the registered account name before any payment is made. Displays to user for trust verification. Critical for the personal account name edge case. | BUILD |
| Payment / Transfer API | Executes the settlement from KinCare wallet directly to the hospital's bank account after claim is approved or auto-approval triggers. | BUILD |
| Cross-Border Top-Up API | Enables diaspora members to fund their wallet from a foreign bank account or card in GBP, USD, or CAD — converted and credited in NGN. | BUILD |

**Note:** KinCare is a product layer built on Interswitch's licensed infrastructure. KinCare does not hold, process, or move funds independently. All transactions are executed through Interswitch's CBN-licensed payment rails.

---

## 7. AI Layer

The AI in KinCare is the platform's trust and safety engine. It is not a recommendation widget. It protects diaspora members from fraud, panic-driven errors, and being financially underprepared.

| AI Feature | What It Does | Build Status |
|------------|--------------|-------------|
| Hospital Bill Anomaly Detection | Every incoming claim is run through an anomaly detection model trained on Nigerian healthcare cost benchmarks by procedure type and location. Bills that are statistical outliers are flagged before the diaspora member sees them. | BUILD |
| Claim Approval Intelligence | When a diaspora member opens a claim for approval, an AI-generated plain-English brief is displayed: whether the bill is within normal range, high, or suspicious. Reduces panic-driven decision errors at critical moments. | BUILD |
| Health Risk Scoring & Wallet Advisor | Uses family member profile inputs (age, location, pre-existing conditions, past claim history) to generate a recommended minimum wallet balance. Displayed during onboarding and on the dashboard. | MOCK — Use synthetic data. Flag clearly as illustrative in demo. |

---

## 8. Edge Cases & How KinCare Handles Them

| Edge Case | How KinCare Handles It |
|-----------|----------------------|
| Diaspora member is unreachable during emergency | Auto-approval rules configured during onboarding trigger automatically based on set conditions: maximum amount threshold and unreachability duration. Diaspora member is notified immediately when auto-approval fires. |
| Hospital account name is a personal name, not a business | System resolves account name and displays a warning prompt: 'This account is registered to an individual. Common with small clinics in Nigeria. Confirm with your family member before approving.' Payment is not blocked — user makes informed decision. |
| Hospital bill is inflated | AI anomaly detection model flags the claim before it reaches the approval screen. Diaspora member sees a warning with the expected price range for that procedure. |
| Invoice does not show an account number | Family member manually enters the account number given verbally or displayed on the hospital's POS terminal. System resolves account name for verification before submission. |
| Wallet balance is insufficient for the claim | System displays current balance and shortfall amount on the approval screen. Diaspora member is prompted to top up immediately. Low balance alert was previously sent as a precaution. |
| Family member does not yet have KinCare | Diaspora member raises the claim themselves via the secondary flow: Raise Claim > Enter details > Verify hospital account > Approve. |
| Pairing code expires before family member installs app | Diaspora member regenerates a new pairing code from the 'Link your Kin' screen. New code valid for 48 hours. |

---

## 9. Success Criteria

KinCare is working if a judge can do all of the following during testing:

- Register as a diaspora member, complete onboarding, and fund a wallet
- Link a family member using the pairing code flow
- As a family member, raise a claim by uploading an invoice and entering a hospital account number
- As a diaspora member, receive a claim notification, view the AI brief, and approve the payment
- See a confirmed Interswitch transaction record in the admin transaction log proving payment reached the destination account
- Trigger auto-approval by simulating a diaspora member being unreachable
- See an anomaly flag raised on an intentionally inflated test invoice

---

## 10. Build vs Mock Summary

| Feature | Status | Notes |
|---------|--------|------|
| Diaspora member onboarding | BUILD |  |
| Family member onboarding via pairing code | BUILD |  |
| Wallet top-up via Interswitch | BUILD |  |
| Claim submission by family member | BUILD |  |
| Claim approval by diaspora member | BUILD |  |
| Interswitch account name lookup | BUILD | Core trust feature |
| Interswitch payment execution | BUILD | Core product feature |
| AI bill anomaly detection | BUILD | Trained on synthetic Nigerian healthcare cost data |
| AI claim approval brief | BUILD | Visible on approval screen |
| Auto-approval setup from dashboard | BUILD |  |
| Claim history for both users | BUILD |  |
| Admin dashboard | MOCK | Pre-seeded with realistic test data for judges |
| Auto-approval via settings (update/deactivate) | MOCK |  |
| Low balance alert flow | MOCK |  |
| Add card details | MOCK |  |
| Pairing code expiry regeneration | MOCK |  |
| AI health risk scoring / wallet advisor | MOCK | Use synthetic data, flag as illustrative |
| Cross-border top-up API | BUILD | Prioritise after core payment flow is stable |

---

## 11. Post-MVP Features
These features are documented for judges and investors as evidence of product vision beyond the hackathon. None of these are to be built for the MVP.

- Group funding — multiple diaspora contributors to one family wallet (e.g. siblings splitting responsibility)  
- KYC for family members — required when group funding introduces family-side contributions  
- USSD fallback — for family members without smartphone access or data during emergencies  
- Hospital partner network — curated list of verified hospitals for premium placement and streamlined onboarding  
- Micro-credit advance — short-term emergency credit against a diaspora member's top-up history  
- School fees and rent wallet — same infrastructure extended to other recurring family obligations  
- Multi-country expansion — same product on Interswitch equivalents in Ghana, Kenya, and Senegal

---

## 12. 4-Day Sprint Plan

| Day | PM | Designer | Developers |
|-----|----|---------|-----------|
| Day 1 — Mon 23 March | PRD finalised and shared. GitHub repo set up. Issues created. | Environment set up. Begin diaspora member dashboard UI. | Set up project repo. Read Interswitch API docs. Configure dev environment. |
| Day 2 — Tue 24 March | Review designs. Unblock team questions. | Complete diaspora member UI. Begin family member UI. | Dev 1: Interswitch account lookup working. Dev 2: Auth and wallet logic.
| Day 3 — Wed 25 March | README draft complete. Write test cases. Prepare demo script. | Complete family member UI. Begin admin view. Polish. | Dev 1: Payment transfer API working end to end. Dev 2: Claim flow complete. Dev 3: AI anomaly detection integrated.
| Day 4 — Thur 26 March | Final test cases. Demo script locked. Submit GitHub + live link. | Final UI polish. Responsive checks. | Integration testing. Fix critical bugs. Deploy to Vercel/Netlify/AWS. Freeze build by 6pm.
