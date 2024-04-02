import React from 'react';
import store from './src/redux/store/CartStore';
import Cart from './src/screen/Cart';
import ListCart from './src/screen/ListCart';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  const prd = [
    {
      id: 1,
      img: 'https://i.pinimg.com/736x/2a/ee/2e/2aee2e591041921a48eb7774a2336c71.jpg',
      name: 'BMW'
    },
    {
      id: 2,
      img: 'https://i.pinimg.com/564x/a6/05/6a/a6056abbf81d3b3337b245f96aa2dec9.jpg',
      name: 'DUCATI'
    },
    {
      id: 3,
      img: 'https://i.pinimg.com/564x/75/c1/ce/75c1ce019de231ffaa9db7a4031a2ea1.jpg',
      name: 'R1M'
    }
  ];

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='List'>
          <Stack.Screen name='Cart' component={Cart} />
          {/* Passing props to ListCart */}
          <Stack.Screen name='List'>
            {(props) => <ListCart {...props} prd={prd}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
