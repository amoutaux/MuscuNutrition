export const getMaintenance = (fatPercentage, weightKg, activityMultiplier) =>
  Math.round((370 + 21.6 * (1 - fatPercentage / 100) * weightKg) * activityMultiplier);

export const getWeightGainObjective = (weightGainPercentage, maintenance) =>
  Math.round((1 + weightGainPercentage / 100) * maintenance);

export const getWeightLossObjective = (weightLossPercentage, maintenance) =>
  Math.round((1 - weightLossPercentage / 100) * maintenance);

export const getObjectives = (
  protMultiplier,
  lipMultiplier,
  fatPercentage,
  weightKg,
  totalKcal,
) => {
  const prot_g = protMultiplier * (1 - fatPercentage / 100) * weightKg;
  const prot_kcal = prot_g * 4;
  const lip_g = lipMultiplier * (1 - fatPercentage / 100) * weightKg;
  const lip_kcal = lip_g * 9;
  const glu_kcal = totalKcal - prot_kcal - lip_kcal;
  const glu_g = glu_kcal / 4;

  return [
    {
      type: 'Protéines',
      gram: Math.round(prot_g),
      kcal: Math.round(prot_kcal),
      totalKcalPercentage: Math.round((prot_kcal * 100) / totalKcal),
    },
    {
      type: 'Lipides',
      gram: Math.round(lip_g),
      kcal: Math.round(lip_kcal),
      totalKcalPercentage: Math.round((lip_kcal * 100) / totalKcal),
    },
    {
      type: 'Glucides',
      gram: Math.round(glu_g),
      kcal: Math.round(glu_kcal),
      totalKcalPercentage: Math.round((glu_kcal * 100) / totalKcal),
    },
  ];
};
