import React, { Component } from 'react'
import { Modal, StyleSheet, Animated } from 'react-native'

class BottomSheet extends Component{
    constructor(props) {
        super(props);
        this.state = {
          panY: new Animated.Value(Dimensions.get('screen').height)
        };
        this._resetPositionAnim = Animated.timing(this.state.panY, {
          toValue: 0,
          duration: 300,
        })
        this._closeAnim = Animated.timing(this.state.panY, {
          toValue: Dimensions.get('screen').height,
          duration: 500,
        })
      }
    render(){
        const top = this.state.panY.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [0, 0, 1],
          });
        return(
            <Modal
                animated
                animationType="fade"
                visible={this.props.visible}
                transparent
                onRequestClose={() => this._handleDismiss()}>
                <View style={styles.overlay}>
                <Animated.View style={[styles.container, {top}]}>
                    {this.props.children}
                </Animated.View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      flex: 1,
      justifyContent: 'flex-end',
    },
  });