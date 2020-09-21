import React, { Component } from 'react';
import {  
    TouchableOpacity, FlatList, 
    ActivityIndicator,
    StyleSheet, View, Text } from 'react-native'

//Redux
import { connect } from 'react-redux'
import { changeView, fetchData } from './Redux/Action'

//Components
import ImageComponent from './Components/ImageComponent'

class Main extends Component {

  componentDidMount() {
      this.props.fetchData
  }

  render() {    
    return (
      <View style={styles.container} >
        {
          (this.props.loading)
            ?
            (<View style={styles.loadingContainer}>
              <ActivityIndicator size="large" />
              <Text style={styles.loadingText}>Please Wait...</Text>
            </View>)
            :
            (<View style={{ flex: 1 }}>
              <TouchableOpacity activeOpacity={0.8} style={styles.buttonDesign} onPress={this.changeView}>
                <Text style={styles.buttonText}>{this.props.gridView ? 'Show List' : 'Show Grid' }</Text>
              </TouchableOpacity>

              <FlatList keyExtractor={(item) => item.id.toString()}
                key={(this.props.gridView) ? 1 : 0}
                numColumns={this.props.gridView ? 2 : 1}
                data={this.props.imagesData}
                renderItem={({ item }) =>
                  <ImageComponent imageURI={item.url} name={item.title.toUpperCase()} />
                } />
            </View>)
        }
      </View>
    );
  }        
}

const mapStateToProps = state => {
  return { 
    gridView: state.imageState.gridView,
    loading: state.dataState.loading,
    imagesData: state.dataState.imagesData,
  }
};

const mapDispatchToProps = dispatch => (
  {
    fetchData: dispatch(fetchData()),
    changeView: dispatch(changeView())
  }
);

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
   textViewHolder: {
     position: 'absolute',
     left: 0,
     bottom: 0,
     right: 0,
     backgroundColor: '#ffffff',
     paddingHorizontal: 10,
     paddingVertical: 13,
     alignItems: 'center'
   },
   textOnImage: {
     color: 'white'
   },
   loadingContainer: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
   loadingText: {
     paddingTop: 10,
     fontSize: 18,
     color: 'black'
   },
   buttonDesign: {
     marginTop: 30,
     padding: 15,
     backgroundColor: '#e91e63'
   },
   buttonText: {
     color: 'white',
     fontSize: 20,
     textAlign: 'center',
     alignSelf: 'stretch'
   }
 });

export default connect(mapStateToProps, mapDispatchToProps) (Main)