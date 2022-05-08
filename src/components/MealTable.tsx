import React from 'react';
import {DataTable} from 'react-native-paper';

import {MealEntry} from '../types';

type Props = {
  entries: MealEntry[];
};

const COLUMNS = {
  aliment: 'ALIMENT',
  quantity: 'QTT',
  prot: 'PROT',
  lip: 'LIP',
  glu: 'GLUC',
  kcal: 'KCAL',
};

const MealTable: React.FC<Props> = props => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>{COLUMNS.aliment}</DataTable.Title>
        <DataTable.Title>{COLUMNS.quantity}</DataTable.Title>
        <DataTable.Title>{COLUMNS.prot}</DataTable.Title>
        <DataTable.Title>{COLUMNS.lip}</DataTable.Title>
        <DataTable.Title>{COLUMNS.glu}</DataTable.Title>
        <DataTable.Title>{COLUMNS.kcal}</DataTable.Title>
      </DataTable.Header>
      {props.entries
        ? props.entries.map((entry, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>{entry.aliment}</DataTable.Cell>
                <DataTable.Cell>{entry.quantity}</DataTable.Cell>
                <DataTable.Cell>{entry.prot}</DataTable.Cell>
                <DataTable.Cell>{entry.lip}</DataTable.Cell>
                <DataTable.Cell>{entry.glu}</DataTable.Cell>
                <DataTable.Cell>{entry.kcal}</DataTable.Cell>
              </DataTable.Row>
            );
          })
        : null}
    </DataTable>
  );
};

export default MealTable;
