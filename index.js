import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';
import { Provider } from 'react-redux'
import ListaLivros from './src/screens/ListaLivros'
import storeConfig from './src/store/storeConfig'
import React from 'react'
// import AddLivro from './src/screens/AddLivro'
import App from './src/Navigation'
const store = storeConfig()
const Redux = () => (
  <Provider store={store }>
    <App/>
  </Provider>
)
if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(Redux);
