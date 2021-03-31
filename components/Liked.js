import React from 'react';
import { StyleSheet, Text, View, FlatList,ImageBackground } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Liked() {

	const favorite = [
	    {id: "1", image: require('../assets/images/australia.png'), name: "australia", location:  "West of Australia Island" },
	    {id: "2", image: require('../assets/images/beach.png'), name: "beach", location:  "warm beach a guena" },
	    {id: "3", image: require('../assets/images/boatbeach.png'), name: "boatbeach", location:  "a sort of boatbeach in somewhere" },
	    {id: "4", image: require('../assets/images/canyon.png'), name: "canyon", location: "I dont know where this canyon is." },
	    {id: "5", image: require('../assets/images/kayak.png'), name: "kayak", location: "kayak, near the beach of manila island philliphen." },
	  ];

  return (
    <View style={styles.container}>
      	<FlatList 
      		numColumns={2}
      		data={favorite}
				renderItem = { ({item}) => {
				return (
			      <ImageBackground
			        source={item.image}
			        style={[
			          styles.learnMoreItem,
			          {
			            marginLeft: item.id === 'learnMore-1' ? 20 : 0,
			          },
			        ]}
			        imageStyle={styles.learnMoreItemImage}>
			        <Text style={styles.learnMoreItemText}>{item.location}</Text>
			      </ImageBackground>
			    );
			}}
      	/>
    </View>
  );
}

const styles = StyleSheet.create({
	container:{
		flex: 1
	},
	learnMoreItem: {
	    width: 150,
	    height: 180,
	    justifyContent: 'flex-end',
	    marginBottom: 20,
	    marginRight:20
	  },
	  learnMoreItemImage: {
	    borderRadius: 20,
	  },
	  learnMoreItemText: {
	    fontSize: 18,
	    color:'#fff',
	    marginHorizontal: 10,
	    marginVertical: 20,
	  }
});