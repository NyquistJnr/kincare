# KinCare — Key Design Decisions

**Designer:** Jennifer Azubuko
**Buildathon:** Interswitch × Enyata 2026
**Last updated:** March 26, 2026

---

These are the five decisions that shaped the product most. Each one had an alternative. Here is why we chose what we chose.

---

## Decision 1: Wallet balance is the first element on both dashboards

**What we did:** On the diaspora dashboard and the family dashboard, the wallet balance is the hero element — the largest, most prominent element above the fold, before any navigation, notifications, or action items.

**Why:** Both users share a single primary emotional need when they open the app: *is the money there?* The diaspora member needs to know the wallet is funded before she can feel calm. The family member needs to know the balance covers the emergency before she can act. Every other element on the dashboard is secondary to this. Showing notifications, claims history, or navigation first would force the user to scan to find the answer to the question they are already asking.

**The alternative we rejected:** Showing summary cards first (a common dashboard pattern). This prioritises aesthetics over the user's actual mental state at the moment of opening.

---

## Decision 2: The AI brief appears before the approve button, not after

**What we did:** On the claim approval screen, the AI brief — which tells the diaspora member whether the invoice amount is within normal range or flagged as suspicious — is displayed above the approve button. The user must see it before they can approve.

**Why:** The diaspora member is often approving at a moment of panic. Her instinct is to approve immediately to get treatment started. The AI brief exists to interrupt that reflex with information — specifically to protect her from inflated invoices. If the brief appeared after the approve button, most users would never read it. Placing it before the CTA means the information is absorbed, even passively, before any action is taken.

**The alternative we rejected:** A collapsed "view AI analysis" section the user can optionally expand. Optional means it gets skipped. In a crisis, it always gets skipped.

---

## Decision 3: The family member's raise-claim flow removes financial decision-making entirely

**What we did:** The family member never sees a field to enter or confirm an amount. She uploads the invoice (which contains the amount) and enters the hospital's account number. The amount is surfaced to the diaspora member for approval, not to the family member for decision.

**Why:** The PRD's north star is explicit: money should never touch the family member's hands. The design extends this principle to decision-making. In a crisis, asking the family member to enter or confirm an amount introduces a point where error, manipulation, or panic-driven input can corrupt the transaction. Removing this from her flow entirely — and keeping it in the invoice photo and the diaspora member's approval screen — protects the integrity of the payment.

**The alternative we rejected:** Letting the family member type in a claim amount directly. This is simpler to build but introduces the exact failure mode the product was designed to prevent.

---

## Decision 4: Account name resolution is always shown, never hidden, and colour-coded by risk

**What we did:** After the family member or diaspora member enters a hospital account number, the Interswitch Account Lookup API response is displayed immediately as a chip: green for a verified business account, amber for a personal name. The personal name variant includes a plain-language warning and requires explicit confirmation before submission.

**Why:** The account name is the single most important trust signal in the payment flow. Hiding it behind a "verified" checkmark would remove the information that distinguishes "Reddington Hospital Ltd" from "Emmanuel Chukwu." The PRD explicitly identifies the personal account name scenario as a critical edge case. The design must surface this difference visibly, not resolve it silently. The amber chip and warning do not block the payment — this is intentional. Many legitimate small clinics in Nigeria use personal accounts. We inform, we do not obstruct.

**The alternative we rejected:** Showing only a green or red "verified / unverified" status icon. This collapses a nuanced situation (personal accounts are common and often legitimate) into a binary that would either block valid payments or give false confidence.
