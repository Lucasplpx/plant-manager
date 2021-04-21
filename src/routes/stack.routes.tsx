import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../../styles/colors';
import Welcome from '../pages/Welcome';
import UserIdentification from '../pages/UserIdentification';
import Confirmation from '../pages/Confirmation';

const StackRoute = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoute.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <StackRoute.Screen name="Welcome" component={Welcome} />
    <StackRoute.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <StackRoute.Screen name="Confirmation" component={Confirmation} />
  </StackRoute.Navigator>
);

export default AppRoutes;
