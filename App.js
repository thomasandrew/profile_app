import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ backgroundColor: '#eb2f06', height: 60, padding: 25 }}>
          <Text style={styles.profiles}>
            Profile
          </Text>
        </View>
        <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.img} />
        <Text style={styles.name}>
          Clark Kent
        </Text>
        <View>
          <Text style={styles.about}>
          About me: 
          </Text>
          <Text style={styles.me}>
           Meu nome e Clark, sou estudante de Sistema de Informacao na Unilasalle. 
   
           Adoro programacao e web, nasci nos Estados Unidos e os idiomas que sei
    
           falar sao ingles e portugues, falo ambos fluentemente. Sou uma pessoa
  
           esforeada e eu estou disposto a ajudar e contribuir muito com sua empresa.
          </Text>
          <Text style={styles.edu}>
          Education:
          </Text>
          <Text style={styles.edu_me}>
          Centro Universitario Unilasalle, Niteroi/Rio de Janeiro
  
          Cursando Sistema de Informacao, conclusao em junho 2023.
          </Text>   
        </View>
        <TouchableOpacity style={styles.btn}>
           <Text style={styles.textBtn}>
            Contact Me
           </Text>   
        </TouchableOpacity>
        <Text>
        {"\n\n"}
        </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40739e',
  },
  profiles: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Verdana',
  },
  img: {
    width: 90,
    height: 90,
    top: 30,
    left: 80,
    borderWidth: 4,
    borderRadius: 100,
    borderColor: '#218c74',
  },
  name: {
    marginTop: 50,
    marginLeft: 73,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#f9ca24',
    fontSize: 23,
    color: '#fff',
    fontFamily: 'Arial',
  },
  about: {
    color: '#f9ca24',
    marginTop: 20,
    marginLeft: 10,
    fontFamily: 'Verdana',
    fontSize: 20,
  },
  me: {
    color: '#fff',
    width: 225,
    textAlign: 'center',
    marginLeft: 15,
    marginTop: 10,
  },
  edu: {
    color: '#f9ca24',  
    fontFamily: 'Verdana',
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20,
  },
  edu_me: {
    color: '#fff',
    width: 200,
    marginLeft: 15,
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#eb2f06',
    borderWidth: 1,
    borderColor: '#fff',
    margin: 5,
    width: 150,
    height: 30,
    top: 15,
    left: 40,
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Verdana',
    textAlign: 'center',
  }, 
})

