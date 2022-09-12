import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListenRedux from './pages/ListenRedux';
// import Listen from './pages/ListenJson';
import Map from './pages/MapPage';
import Login from './pages/LoginPage';

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'; 
import reportReducer from "./redux/reducers/reportReducer";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reportReducer);

const Stack = createStackNavigator();
const MyStack = () => {
   return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ListenRedux" component={ListenRedux} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
   );
};
export default MyStack;