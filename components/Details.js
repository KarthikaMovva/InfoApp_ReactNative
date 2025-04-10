import { Text, View, ScrollView } from "react-native";
import '../global.css';

const Details=({route})=>{

    const {objects}=route.params;

    return(
        <ScrollView className="flex-1 bg-blue-50 p-6">
        <View className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <Text className="text-4xl font-bold text-blue-800 mb-2">{objects.name}</Text>
          <Text className="text-lg mb-4">Username: <Text className="font-semibold text-purple-500">{objects.username}</Text></Text>
  
          <View className="mb-6">
            <Text className="font-semibold text-green-600 mb-3 text-2xl">Contact Info</Text>
            <Text className="text-gray-700 text-xl">Email: <Text className="text-blue-600">{objects.email}</Text></Text>
            <Text className="text-gray-700 text-xl">Phone: <Text className="text-blue-600">{objects.phone}</Text></Text>
            <Text className="text-gray-700 text-xl">Website: <Text className="text-blue-600">{objects.website}</Text></Text>
          </View>
 
          <View className="mb-6">
            <Text className="text-2xl font-semibold text-green-600 mb-3">Address</Text>
            <Text className="text-gray-700 text-xl">Street: <Text className="text-blue-600">{objects.address.street}</Text></Text>
            <Text className="text-gray-700 text-xl">Suite: <Text className="text-blue-600">{objects.address.suite}</Text></Text>
            <Text className="text-gray-700 text-xl">City: <Text className="text-blue-600">{objects.address.city}</Text></Text>
            <Text className="text-gray-700 text-xl">Zipcode: <Text className="text-blue-600">{objects.address.zipcode}</Text></Text>
            <Text className="text-gray-700 text-xl">Latitude: <Text className="text-blue-600">{objects.address.geo.lat}</Text></Text>
            <Text className="text-gray-700 text-xl">Longitude: <Text className="text-blue-600">{objects.address.geo.lng}</Text></Text>
          </View>
 
          <View className="mb-6">
            <Text className="text-2xl font-semibold text-green-600 mb-3">Company</Text>
            <Text className="text-gray-700 text-xl">Name: <Text className="text-blue-600">{objects.company.name}</Text></Text>
            <Text className="text-gray-700 text-xl">Catchphrase: <Text className="text-blue-600">{objects.company.catchPhrase}</Text></Text>
            <Text className="text-gray-700 text-xl">Business: <Text className="text-blue-600">{objects.company.bs}</Text></Text>
          </View>
        </View>

        {/* <View className="bg-white p-6 rounded-xl shadow-lg">
          <Text className="text-xl font-semibold text-blue-600">More Details</Text>
        </View> */}
      </ScrollView>
    )
}

export default Details;