import React, { Component } from 'react';
import {   
  Image, 
  StyleSheet, View, Text, TouchableOpacity } from 'react-native'

class ImageZoom extends Component{
    constructor() {
        super();
    }
    render(){
        return(
            <View>  
                 <Image source={{ uri: this.props.imageURI }} style={styles.image} />
                <Text> {this.props.name} </Text>
            </View>
            
        )
    }
}

const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
      },
      image: {
        height: '100',
        width: '100',
      },
});

export default ImageZoom