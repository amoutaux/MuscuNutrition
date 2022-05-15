import React, {useState, useEffect} from 'react';

import {UserContextType} from './types';
import {getMaintenance, getWeightGainObjective, getWeightLossObjective} from './utils';

// Create empty context
export const UserContext = React.createContext<UserContextType>({} as UserContextType);

/* Provide children with the UserContext with a value corresponding to the
 state and setState methods of this specific component. The values are thus
 stored high level and can be updated by any child. */
export type Props = {
  children: React.ReactNode;
};
export const UserContextProvider: React.FC<Props> = ({children}) => {
  const [weightKg, setWeightKg] = useState<number | undefined>();
  const [fatPercentage, setFatPercentage] = useState<number | undefined>();
  const [activityMultiplier, setActivityMultiplier] = useState<number | undefined>();
  const [weightGainPercentage, setWeightGainPercentage] = useState<number | undefined>();
  const [weightLossPercentage, setWeightLossPercentage] = useState<number | undefined>();
  const [protMultiplier, setProtMultiplier] = useState<number | undefined>();
  const [lipMultiplier, setLipMultiplier] = useState<number | undefined>();
  const [maintenance, setMaintenance] = useState<number | undefined>();
  const [weightGainObjective, setWeightGainObjective] = useState<number | undefined>();
  const [weightLossObjective, setWeightLossObjective] = useState<number | undefined>();

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
