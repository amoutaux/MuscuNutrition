export interface UserContextType {
  weightKg: string;
  fatPercentage: string;
  activityMultiplier: string;
  weightGainPercentage: string;
  weightLossPercentage: string;
  protMultiplier: string;
  lipMultiplier: string;
  maintenance: number;
  weightGainObjective: number;
  weightLossObjective: number;

  setWeightKg: React.Dispatch<React.SetStateAction<string>>;
  setFatPercentage: React.Dispatch<React.SetStateAction<string>>;
  setActivityMultiplier: React.Dispatch<React.SetStateAction<string>>;
  setWeightGainPercentage: React.Dispatch<React.SetStateAction<string>>;
  setWeightLossPercentage: React.Dispatch<React.SetStateAction<string>>;
  setProtMultiplier: React.Dispatch<React.SetStateAction<string>>;
  setLipMultiplier: React.Dispatch<React.SetStateAction<string>>;
}

export interface MealEntry {
  aliment: string;
  quantity: string;
  prot: string;
  lip: string;
  glu: string;
  kcal: string;
}

export interface ObjectiveEntry {
  type: string;
  gram: string;
  kcal: string;
  totalKcalPercentage: string;
}
