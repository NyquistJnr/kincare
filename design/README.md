# KinCare — Design Notes

**Designer:** Jennifer Azubuko
**Buildathon:** Interswitch × Enyata 2026
**Last updated:** March 26, 2026

---

## What I was designing for

KinCare gets opened at 11pm when someone's mother is bleeding in a hospital corridor and a nurse is asking for a deposit before treatment begins. That is the actual context of use. Every design decision in this product flows from that single truth.

This is not a fintech dashboard. It is not a payments utility. It is a product that has to absorb panic and return calm, in seconds, on a small screen, by someone who has not slept and cannot think clearly.

That framing changed everything.

---

## The diaspora dashboard

The diaspora member, Ifunaya, in the PRD's scenario, carries a specific kind of dread. Not the dread of something happening right now, but the background dread of the next call. The feeling of being 5,000 miles away from people you are responsible for, with no system in place.

The dashboard is designed to relieve that dread before anything else happens.

The first element she sees is the wallet balance, large, with a safe balance progress bar underneath it. Because the primary emotional need when she opens this app on a calm Tuesday morning — or at 11pm in a crisis — is the same: *is the money there?*

The warm dark theme (deep navy, amber accents) was a deliberate rejection of clinical white. Banking apps are white. Hospital admin systems are white. White communicates transaction. Amber communicates warmth and preparedness. The palette had to feel like a steady hand, not a terminal.

The to-do cards — "Set up auto-approval", "Link your kin" — are present but not dominant. They use an amber left border to signal importance without screaming.

---

## The family member UI

The family member is under acute stress at the moment of use. She is at the hospital. Someone she loves may be waiting for treatment. She may be in a noisy waiting room on poor data.

The design priorities for the family UI were, in order:

**1. Reduce decisions.** The family member should never have to figure out what to do. The dashboard has one primary action — Raise a Claim — and it is large, high contrast, and unambiguous. There is no navigation clutter, no analytics, no secondary content competing for attention.

**2. Make the wallet balance the first thing she sees.** Not because she controls it — she doesn't — but because seeing it immediately answers the question she has been asking herself since the emergency started: *is there money? will this be covered?* The caption "Funded by Ifunanya 💛" is deliberate. It is a reminder that someone who loves her already prepared for this.

**3. Remove financial decision-making from her hands entirely.** The raise claim flow never asks her to choose an amount, approve a transfer, or interact with money directly. Her job is to upload the invoice and enter the account number. The financial decision stays with the diaspora member. This is both the product mechanic and the design principle.

**4. Show status, not silence.** After submitting a claim, the family member should not stare at a blank screen wondering if anything happened. The "Claim submitted — waiting for Ifunanya" state shows a live status timeline with three nodes: submitted, awaiting approval, payment sent. She can see exactly where she is in the process. The pulsing amber dot on the waiting node communicates that the system is active, not stuck.

---

## The approval screen

The claim approval screen — the moment Ifunaya sees the invoice and decides whether to pay — is the most consequential screen in the product. A bad decision here costs money. No decision here costs treatment.

The AI brief is placed before the approve button, not after it. It must interrupt the panic reflex. The visual range bar (green = normal, amber = flagged) communicates faster than any text. The account name resolution — "St. Mary's Hospital Ltd" in green, or "Emmanuel Chukwu" in amber — is the single most important trust signal on the page.

The approve button is green and large. The decline button is a ghost This is intentional. In an emergency, friction on the primary action is the enemy.

---

## Type and colour choices

**DM Sans** handles everything functional: headings, labels, navigation, instructions. It is clean without being cold.

**Amber** (#F59E1A) is the primary action colour because it sits between urgency (red) and reassurance (green). It says "this matters, and it's handled." Green is reserved for confirmed success states only. Red appears only for genuine alerts: flagged invoices, low balance warnings, declined claims.

No purple. No gradients on white. No generic fintech aesthetic. This product exists in a specific emotional context — it deserved a visual language built for that context.

---

## What I would do next

With more time I would conduct usability testing specifically on the claim submission flow with family members who are not tech-savvy. The invoice upload step and the account number entry are the two highest-anxiety moments in the family journey. I would want to see a real person attempt these steps under simulated stress before this ships.

I would also revisit the auto-approval deactivation flow. Currently it has a friction prompt ("Deactivate Anyway") but I would want to explore whether a stronger reminder — showing the family members currently covered by the rule — would reduce accidental deactivations.
