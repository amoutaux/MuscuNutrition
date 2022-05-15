export interface UserContextType {
  weightKg: number | undefined;
  fatPercentage: number | undefined;
  activityMultiplier: number | undefined;
  weightGainPercentage: number | undefined;
  weightLossPercentage: number | undefined;
  protMultiplier: number | undefined;
  lipMultiplier: number | undefined;
  maintenance: number | undefined;
  weightGainObjective: number | undefined;
  weightLossObjective: number | undefined;

  setWeightKg: React.Dispatch<React.SetStateAction<number | undefined>>;
  setFatPercentage: React.Dispatch<React.SetStateAction<number | undefined>>;
  setActivityMultiplier: React.Dispatch<React.SetStateAction<number | undefined>>;
  setWeightGainPercentage: React.Dispatch<React.SetStateAction<number | undefined>>;
  setWeightLossPercentage: React.Dispatch<React.SetStateAction<number | undefined>>;
  setProtMultiplier: React.Dispatch<React.SetStateAction<number | undefined>>;
  setLipMultiplier: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export interface MealEntry {
  aliment: string;
  quantity: number;
  prot: number;
  lip: number;
  glu: number;
  kcal: number;
}

export interface ObjectiveEntry {
  type: string;
  gram: number;
  kcal: number;
  totalKcalPercentage: number;
}
