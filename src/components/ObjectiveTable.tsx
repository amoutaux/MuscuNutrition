import React from 'react';
import {View, Text} from 'react-native';
import {DataTable} from 'react-native-paper';

import {ObjectiveEntry} from '../types';

type Props = {
  objective: string;
  totalKcal: string;
  entries: ObjectiveEntry[];
};

const COLUMNS = {
  type: 'TYPE',
  gram: 'G',
  kcal: 'KCAL',
  totalKcalPercentage: '% kcal total',
};

const ObjectiveTable: React.FC<Props> = props => {
  return (
    <View>
      <Text>{(props.objective || '') + ' ' + props.totalKcal + ' kcal'}</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>{COLUMNS.type}</DataTable.Title>
          <DataTable.Title>{COLUMNS.gram}</DataTable.Title>
          <DataTable.Title>{COLUMNS.kcal}</DataTable.Title>
          <DataTable.Title>{COLUMNS.totalKcalPercentage}</DataTable.Title>
        </DataTable.Header>
        {props.entries
          ? props.entries.map((entry, index) => {
              return (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{entry.type}</DataTable.Cell>
                  <DataTable.Cell>{entry.gram}</DataTable.Cell>
                  <DataTable.Cell>{entry.kcal}</DataTable.Cell>
                  <DataTable.Cell>{entry.totalKcalPercentage + '%'}</DataTable.Cell>
                </DataTable.Row>
              );
            })
          : null}
      </DataTable>
    </View>
  );
};

export default ObjectiveTable;
