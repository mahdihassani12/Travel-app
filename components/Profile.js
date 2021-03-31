import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("profile");

export default function Profile({navigation }) {

  const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [data , setData] = useState([]);
	
	const addData = (name, phone, address) => {
		db.transaction(tx => {
			tx.executeSql('insert into data (name, phone, address) values(?, ?, ?);',[name, phone, address], () => console.log("data inserted!") );
		})	
	}

	

	useEffect(()=>{
		db.transaction((tx)=>{
			tx.executeSql('select * from data',[],(tx, {rows})=>{
				console.log(rows)
				var info = [];
				for(var i = 0; i < rows.length; i++){
					info.push(rows[i]);
				}
				setData(info)
			});
		})
	},[]);

	const updateData = (name, phone, address,id) => {
		db.transaction(tx => {
			tx.executeSql('update data set (name, phone, address) values(?, ?, ?) where id = id ;',[name, phone, address], () => console.log("data inserted!") );
		})	
	}	

  return (
    <View style={styles.formContainer} >
		{ data.length > 0 ? 
			<View>
				<TextInput placeholder="Name" style={styles.input} value={data.name}  />
				<TextInput placeholder="Phone" style={styles.input} value={data.phone}  />
				<TextInput placeholder="Address" style={styles.input} value={data.address} />
				<TouchableOpacity style={styles.btn} >
					<Text style={styles.txt}  >Save</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn} >
					<Text style={styles.txt}>Cancel</Text>
				</TouchableOpacity>
			</View>
		:
			<View>
				<TextInput placeholder="Name" style={styles.input} value={name} onChangeText={ (name) => setName(name) } />
				<TextInput placeholder="Phone" style={styles.input} value={phone} onChangeText={ (phone) => setPhone(phone) } />
				<TextInput placeholder="Address" style={styles.input} value={address} onChangeText={ (address) => setAddress(address) } />
				<TouchableOpacity style={styles.btn} >
					<Text style={styles.txt} onPress={ ()=> addData(name, phone, address)} >Save</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn} >
					<Text style={styles.txt} >Cancel</Text>
				</TouchableOpacity>
			</View>
		}
	</View>
  );
}
const styles = StyleSheet.create({

	formContainer:{
		borderRadius: 30,
		marginTop:60,
		paddingVertical: 20,
		paddingHorizontal:40
	},
	input:{
		paddingBottom:10,
		marginBottom:10,
		borderBottomColor: '#000',
		borderBottomWidth:1
	},
	btn:{
		padding:20,
		marginBottom:10,
		borderRadius:5,
		backgroundColor:'green'
	},
	txt:{
		color:'#000'
	}

});