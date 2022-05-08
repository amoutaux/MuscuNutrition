import React, {useState, useEffect} from 'react';

import {UserContextType} from './types';
import {getMaintenance, getWeightGainObjective, getWeightLossObjective} from './utils.js';

// Create empty context
export const UserContext = React.createContext<UserContextType | null>(null);

/* Provide children with the UserContext with a value corresponding to the
 state and setState methods of this specific component. The values are thus
 stored high level and can be updated by any child. */
export type Props = {
  children: React.ReactNode;
}
export const UserContextProvider: React.FC<Props> = ({children}) => {
  const [weightKg, setWeightKg] = useState<string>('');
  const [fatPercentage, setFatPercentage] = useState<string>('');
  const [activityMultiplier, setActivityMultiplier] = useState<string>('');
  const [weightGainPercentage, setWeightGainPercentage] = useState<string>('');
  const [weightLossPercentage, setWeightLossPercentage] = useState<string>('');
  const [protMultiplier, setProtMultiplier] = useState<string>('');
  const [lipMultiplier, setLipMultiplier] = useState<string>('');
  const [maintenance, setMaintenance] = useState<number>(0);
  const [weightGainObjective, setWeightGainObjective] = useState<number>(0);
  const [weightLossObjective, setWeightLossObjective] = useState<number>(0);

  useEffect(() => {
    setMaintenance(getMaintenance(fatPercentage, weightKg, activityMultiplier));
  }, [fatPercentage, weightKg, activityMultiplier]);

  useEffect(() => {
    setWeightGainObjective(getWeightGainObjective(weightGainPercentage, maintenance));
  }, [weightGainPercentage, maintenance]);

  useEffect(() => {
    setWeightLossObjective(getWeightLossObjective(weightLossPercentage, maintenance));
  }, [weightLossPercentage, maintenance]);

  const value = {
    weightKg,
    fatPercentage,
    activityMultiplier,
    weightGainPercentage,
    weightLossPercentage,
    protMultiplier,
    lipMultiplier,
    maintenance,
    weightGainObjective,
    weightLossObjective,

    setWeightKg,
    setFatPercentage,
    setActivityMultiplier,
    setWeightGainPercentage,
    setWeightLossPercentage,
    setProtMultiplier,
    setLipMultiplier,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
