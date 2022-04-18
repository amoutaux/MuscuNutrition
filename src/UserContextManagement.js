import React, {useState, useEffect} from 'react';

import {getMaintenance, getWeightGainObjective, getWeightLossObjective} from './utils.js';

// Create empty context
export const UserContext = React.createContext({
  weightKg: '',
  fatPercentage: '',
  activityMultiplier: '',
  weightGainPercentage: '',
  weightLossPercentage: '',
  protMultipler: '',
  lipMultiplier: '',
  maintenance: 0,
  weightGainObjective: 0,
  weightLossObjective: 0,

  setWeightKg: () => {},
  setFatPercentage: () => {},
  setActivityMultiplier: () => {},
  setWeightGainPercentage: () => {},
  setWeightLossPercentage: () => {},
  setProtMultiplier: () => {},
  setLipMultiplier: () => {},
});

/* Provide children with the UserContext with a value corresponding to the
 state and setState methods of this specific component. The values are thus
 stored high level and can be updated by any child. */
export const UserContextProvider = ({children}) => {
  const [weightKg, setWeightKg] = useState('');
  const [fatPercentage, setFatPercentage] = useState('');
  const [activityMultiplier, setActivityMultiplier] = useState('');
  const [weightGainPercentage, setWeightGainPercentage] = useState('');
  const [weightLossPercentage, setWeightLossPercentage] = useState('');
  const [protMultipler, setProtMultiplier] = useState('');
  const [lipMultiplier, setLipMultiplier] = useState('');
  const [maintenance, setMaintenance] = useState(0);
  const [weightGainObjective, setWeightGainObjective] = useState(0);
  const [weightLossObjective, setWeightLossObjective] = useState(0);

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
    protMultipler,
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
