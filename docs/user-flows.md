## User Flows

### 1 Diaspora Member

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

### 2 Family Member

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

### 3 Admin [MOCK — For Demo Day]

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
