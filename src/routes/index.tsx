import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes, AppStackParamList } from './app.routes';

export type RoutesParamList = AppStackParamList;

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
