import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'

import AddLivro from './screens/AddLivro'
import ListaLivros from './screens/ListaLivros'

const MenuRoutes = {
    AddLivro: {
        name: 'AddLivro',
        screen: AddLivro,
    },
    ListaLivros: {
        name: 'ListaLivros',
        screen: ListaLivros
    },
}

const MenuConfig = {
    initialRouteName: 'ListaLivros'
}

const switchNavigator = createSwitchNavigator(MenuRoutes, MenuConfig)
const App = createAppContainer(switchNavigator)
export default App

