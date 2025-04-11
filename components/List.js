import { Text, View, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const List = ({ navigation }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true); 

  const getlist = async () => {
    try {
      const server = "https://jsonplaceholder.typicode.com/users";
      let response = await fetch(server);

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      setLoading(false)
      let data = await response.json();

      setList(data);
    } catch (error) {
      setLoading(false);
      setList([]);
    }
  };

  useEffect(() => {
    getlist();
  }, []);

  return (
    <View className="flex-1 bg-blue-50 p-4">
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="blue" />
          <Text className="text-gray-600 mt-2">Loading Contacts...</Text>
        </View>
      ) : list.length > 0 ? (
        <FlatList
          data={list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="flex-row items-center p-4 border-b border-gray-300 bg-white mt-3 rounded-lg"
              onPress={() => navigation.navigate("Details", { objects: item })}
            >
              <View className="w-16 h-16 bg-blue-500 rounded-full items-center justify-center border-2 border-blue-500">
                <Icon name="user" size={32} color="white" />
              </View>
              <View className="ml-4">
                <Text className="text-lg font-semibold text-gray-900">{item.name}</Text>
                <Text className="text-gray-600">{item.email}</Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 20 }} 
        />
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="text-red-500 text-lg">No Contacts Available</Text>
        </View>
      )}
    </View>
  );
};

export default List;
