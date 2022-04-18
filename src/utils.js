export const getMaintenance = (fatPercentage, weightKg, activityMultiplier) =>
  Math.round((370 + 21.6 * (1 - fatPercentage / 100) * weightKg) * activityMultiplier);

export const getWeightGainObjective = (weightGainPercentage, maintenance) =>
  Math.round((1 + weightGainPercentage / 100) * maintenance);

export const getWeightLossObjective = (weightLossPercentage, maintenance) =>
  Math.round((1 - weightLossPercentage / 100) * maintenance);
