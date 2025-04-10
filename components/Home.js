import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import '../global.css';

const Home = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center p-6 bg-blue-50">
      <Text className="mb-4 text-3xl font-bold text-gray-900">Welcome to User Info App</Text>
      <Text className="mb-6 text-center text-lg text-gray-600">
        This app helps you store and manage user details such as Name, Email, Address, Company,
        Contact, Username, and Website.
      </Text>
      <TouchableOpacity
        className="rounded-lg bg-blue-600 px-6 py-3"
        onPress={() => navigation.navigate('List')}>
        <Text className="text-lg font-semibold text-white">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;