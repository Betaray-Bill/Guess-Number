import React from "react"
import { StyleSheet, View, Text } from 'react-native';

const Header = ({ title }) => {
    return(
        <View style={styles.header}> 
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles  = StyleSheet.create({
      header:{
          width:"100%",
          height:60,
          backgroundColor:"#272727",
          alignItems:"center",
          justifyContent:"center"
      },
      headerTitle:{
          color:"#fff",
          fontSize:18
      }
})


export default Header;

