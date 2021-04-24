import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelection } from '../pages/PlantSelection';

import colors from '../styles/colors';
import { PlantSave } from '../pages/PlantSave';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white
        },
      }}
    >
      <stackRoutes.Screen
        name="Welcome"
        component={Welcome}
      />
      <stackRoutes.Screen
        name="UserIdentification"
        component={UserIdentification}
      />
      <stackRoutes.Screen
        name="Confirmation"
        component={Confirmation}
      />
      <stackRoutes.Screen
        name="PlantSelection"
        component={PlantSelection}
      />
      <stackRoutes.Screen
        name="PlantSave"
        component={PlantSave}
      />

    </stackRoutes.Navigator>
  )
}

export default AppRoutes;
