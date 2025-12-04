import { Program, MatchResult, Stage, Demographic, Industry, ServiceNeed } from '../types';

export const calculateMatches = (
  programs: Program[],
  answers: Record<string, any>
): MatchResult[] => {
  const userStage = answers['stage'] as Stage;
  const isNycha = answers['nycha'] === true;
  const isRegistered = answers['registered'] === true;
  const revenue = answers['revenue'] || 0;
  const userDemographics = (answers['demographics'] || []) as Demographic[];
  const userIndustry = answers['industry'] as Industry;
  const userNeed = answers['needs'] as ServiceNeed;

  // Add derived demographics
  if (isNycha) userDemographics.push(Demographic.NYCHA);

  const results = programs.map(program => {
    const reqs = program.requirements;
    const reasons: string[] = [];
    let score = 0;
    let isEligible = true;

    // --- ELIGIBILITY CHECKS (The "Knockout" Logic) ---

    // 1. Stage Check
    // Hierarchy: Idea (0) < Pre-seed (1) < Seed (2) < Growth (3) < Scale (4)
    const stagesOrder = [Stage.IDEA, Stage.PRE_SEED, Stage.SEED, Stage.GROWTH, Stage.SCALE];
    const userStageIdx = stagesOrder.indexOf(userStage);
    const minStageIdx = reqs.minStage ? stagesOrder.indexOf(reqs.minStage) : 0;
    const maxStageIdx = reqs.maxStage ? stagesOrder.indexOf(reqs.maxStage) : 4;

    // KNOCKOUT: User stage must be >= Program Minimum Stage
    if (userStageIdx < minStageIdx) {
      isEligible = false;
    }
    // KNOCKOUT: User stage must be <= Program Maximum Stage
    if (userStageIdx > maxStageIdx) {
      isEligible = false;
    }

    if (isEligible) {
      // Bonus for being "at" the level rather than just "above" it? 
      // Actually, if a program is for "Seed+", and user is "Seed", that's a perfect match.
      if (userStageIdx === minStageIdx) {
        score += 10;
        reasons.push(`Perfect for ${userStage} ventures`);
      } else {
        reasons.push(`Suitable for ${userStage} stage`);
      }
    }

    // 2. NYCHA Requirement (Strict)
    if (reqs.requiredDemographics?.includes(Demographic.NYCHA)) {
      if (!isNycha) {
        isEligible = false;
      } else {
        score += 25; // Massive boost for NYCHA programs if eligible
        reasons.push("Exclusive to NYCHA residents");
      }
    }

    // 3. Registration Status
    // Only verify this if the program explicitly requires a status AND the user was asked about it
    // (User is asked about registration in SEED, GROWTH, SCALE)
    if (userStageIdx >= 2 && reqs.registeredBusiness !== undefined) {
      if (reqs.registeredBusiness !== isRegistered) {
        isEligible = false;
      } else {
        score += 5;
        reasons.push(isRegistered ? "Requires business registration" : "For unregistered businesses");
      }
    }

    // 4. Revenue Check
    if (reqs.minRevenue !== undefined && revenue < reqs.minRevenue) isEligible = false;
    if (reqs.maxRevenue !== undefined && revenue > reqs.maxRevenue) isEligible = false;

    if (isEligible && (reqs.minRevenue || reqs.maxRevenue !== undefined)) {
      score += 5;
      reasons.push("Matches your revenue profile");
    }

    // 5. Industry
    if (reqs.specificIndustry) {
      if (userIndustry !== reqs.specificIndustry) {
        isEligible = false;
      } else {
        score += 20; // High value for industry-specific match
        reasons.push(`Specialized for ${userIndustry}`);
      }
    }

    // 6. Demographics (Non-NYCHA)
    if (reqs.requiredDemographics) {
      for (const dem of reqs.requiredDemographics) {
        if (dem === Demographic.NYCHA) continue; // Handled above
        if (!userDemographics.includes(dem)) {
          isEligible = false;
        } else {
          score += 15;
          reasons.push(`Designed for ${dem} entrepreneurs`);
        }
      }
    }

    // --- SCORING BOOSTS (Soft Matches) ---

    if (isEligible) {
      // Boost for tech keywords if user is tech
      if (!reqs.specificIndustry && userIndustry === Industry.TECH && program.name.toLowerCase().includes('tech')) {
        score += 5;
      }

      // Boost for Service Needs
      if (userNeed && reqs.providedServices?.includes(userNeed)) {
        score += 15;
        reasons.push(`Provides ${userNeed} support`);
      }
    }

    return {
      program,
      score,
      reasons,
      isEligible
    };
  }).filter(r => r.isEligible).sort((a, b) => b.score - a.score);

  let sbsCount = 0;
  let reesFound = false;
  const reesRestricted = [
    "REES Dreamers",
    "REES Idealists",
    "REES Underground Entrepreneurs",
    "REES Go-getters",
    "REES Champions"
  ];

  return results.filter(r => {
    // SBS FastTrac Limit (Max 2)
    if (r.program.name.startsWith("SBS FastTrac")) {
      if (sbsCount >= 2) return false;
      sbsCount++;
    }

    // REES Limit (Max 1 from restricted list)
    if (reesRestricted.includes(r.program.name)) {
      if (reesFound) return false;
      reesFound = true;
    }

    return true;
  });
};