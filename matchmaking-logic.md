# Matchmaking Logic

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

Once eligibility is confirmed, each program receives a **score** based on how well it matches the user's profile. More matching criteria result in a higher score.

**Factors that boost the score:**

| Match Type | Example |
|------------|---------|
| **Perfect stage match** | A user in the "Seed stage" matched to a program specifically designed for Seed-stage ventures |
| **NYCHA resident** | Exclusive NYCHA programs receive a significant score boost for eligible residents |
| **Demographic match** | Programs designed for women, veterans, Black entrepreneurs, or individuals 50+ are prioritized when applicable |
| **Industry match** | A tech entrepreneur matched to a tech-focused program scores higher |
| **Needs match** | A user seeking "Funding" matched to a program that provides funding receives a boost |

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
