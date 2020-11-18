//@ts-check
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../container/Home';
import PostContent from '../container/PostContent';
import SearchScreen from '../container/Search';
import CreatePostScreen from '../container/CreatePost';
import FavoriteScreen from '../container/Favorite';
import UserProfileScreen from '../container/UserProfile';

import Icon from 'react-native-vector-icons/Foundation';

const TabIcons = {
  HomeStack: 'home',
  Search: 'magnifying-glass',
  CreatePost: 'plus',
  Favorite: 'heart',
  UserProfile: 'torso',
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen component={HomeScreen} name="Home" />
    <Stack.Screen component={PostContent} name="PostContent" />
  </Stack.Navigator>
);

const RootNavigation = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color}) => {
        const iconName = TabIcons[route.name];
        return <Icon name={iconName} color={color} size={26} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
      tabStyle: {
        backgroundColor: '#000',
      },
      showLabel: false,
    }}>
    <Tab.Screen component={HomeStack} name="HomeStack" />
    <Tab.Screen component={SearchScreen} name="Search" />
    <Tab.Screen component={CreatePostScreen} name="CreatePost" />
    <Tab.Screen component={FavoriteScreen} name="Favorite" />
    <Tab.Screen component={UserProfileScreen} name="UserProfile" />
  </Tab.Navigator>
);

export default RootNavigation;
