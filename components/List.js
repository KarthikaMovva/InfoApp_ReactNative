import { Text, View, FlatList, TouchableOpacity } from "react-native";
import objects from "./data";
import Icon from 'react-native-vector-icons/FontAwesome'; 

const List = ({navigation}) => {
  return (
    <View className="flex-1 bg-white p-4 bg-blue-50">
      {objects?.length ? (
        <FlatList
          data={objects}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-300 bg-white mt-3" onPress={()=>navigation.navigate('Details',{id:item.id})}>
              <View className="w-20 h-20 bg-blue-500 rounded-full overflow-hidden mr-4 border-blue-500 border-2">
                  <Icon name="user" size={80} color="white" className="ml-2"/>
              </View>
              <View>
                <Text className="text-lg font-semibold text-gray-900">
                  {item.name}
                </Text>
                <Text className="text-gray-600">{item.email}</Text>
              </View>
            </TouchableOpacity>
          )}
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