import React, { PureComponent, Component } from 'react';
import { Image, 
  StyleSheet, View, 
  Text, TouchableOpacity,
  Dimensions } from 'react-native'

//Utils  
import RBSheet from "react-native-raw-bottom-sheet";
import ImageZoom from 'react-native-image-pan-zoom';

class ImageComponent extends Component {
    constructor() {
      super();
    }
    render() {
      return (
          <View style={styles.imageHolder}>
            <TouchableOpacity onPress={() => this.RBSheet.open()}>
            <Image source={{ uri: this.props.imageURI }} style={styles.image} />
            <View style={styles.textViewHolder}>
              <Text numberOfLines={1} style={styles.textOnImage}>
                {this.props.name}
              </Text>
            </View>
            </TouchableOpacity>
            <RBSheet
              ref={ref => {
                this.RBSheet = ref;
              }}
              height={450}
              openDuration={250}
              customStyles={{
                container: {
                  justifyContent: "center",
                  alignItems: "center"
                }
              }}
            >
              <ImageZoom cropWidth={Dimensions.get('window').width}
                        cropHeight={Dimensions.get('window').height}
                        imageWidth={400}
                        imageHeight={400}>
                  <Image style={{width:400, height:400}}
                        source={{ uri: this.props.imageURI }}/>
              </ImageZoom>
            </RBSheet>
          </View>
        
      );
    }
  }

  const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
      },
      imageHolder: {
        margin: 5,
        height: 160,
        flex: 1,
        position: 'relative'
      },
      image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
      },
      textOnImage: {
        color: 'white'
      },
      textViewHolder: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.75)',
        paddingHorizontal: 10,
        paddingVertical: 13,
        alignItems: 'center'
      },
    });

export default ImageComponent