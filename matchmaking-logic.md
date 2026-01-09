# Compass Matchmaking Logic

Cambio Compass uses a **filtering + scoring system** to match users to resources. First, programs the user does not qualify for are removed. Then, remaining programs are ranked by how well each one fits the user's specific situation.

---

## Step 1: Eligibility Check (Yes or No)

Each program has requirements. If a user does not meet the requirements, the program is automatically filtered out — regardless of how applicable the program's benefits might be.

**Examples of knockout criteria:**

- **NYCHA Residency** — Some programs are exclusively for NYCHA residents. Non-residents will not see these programs.
- **Business Registration** — Some programs require an LLC or sole proprietorship. Others are specifically designed for entrepreneurs who have not yet registered.
- **Revenue Level** — Some programs target pre-revenue businesses, while others require $5,000+ in sales.
- **Industry** — Certain programs (e.g., cannabis entrepreneurship) only match to users in that specific industry.

---

## Step 2: Scoring (How Good Is the Fit?)

Once eligibility is confirmed, each program receives a **score** based on how well it aligns with the user's preferences and goals. More matching criteria result in a higher score.

**Factors that boost the score:**

| Match Type | Example |
|------------|---------|
| **Stage alignment** | A user in the "Seed stage" matched to a program specifically designed for Seed-stage ventures scores higher than a general program |
| **Industry match** | A tech entrepreneur matched to a tech-focused program scores higher than a general business program |
| **Resource type match** | A user seeking "Funding" is matched to a program that provides grants or capital. A user seeking "Mentorship" is matched to a program offering coaching or community support. Both users may be eligible for both programs, but each scores higher on the program that matches their stated needs |

---
> ### Reference for Step 1 & 2
>The full list of eligibility requirements and ideal matches for each program is documented in [this spreadsheet](https://docs.google.com/spreadsheets/d/1pfs2TlK7rdg22afjs39cnZe5QT41_KysafOhKfWz0I0).

---

## Step 3: Determining the Top Recommendation

After scoring, programs are **sorted by score** from highest to lowest. The program with the highest score becomes the "Top Recommendation."

Additional limits are applied for clarity:
- **Maximum 2 SBS FastTrac programs** — These programs are similar in nature, so the list is capped to avoid redundancy.
- **Maximum 1 REES program** from the main tier (Dreamers, Idealists, Go-getters, etc.) — This prevents overwhelming users with overlapping options.

---

## Summary

> **Eligibility determines IF a program appears. Score determines WHERE it ranks.**

The top recommendation is the program that passed all eligibility checks AND scored highest based on the user's unique combination of stage, industry, demographics, and needs.
