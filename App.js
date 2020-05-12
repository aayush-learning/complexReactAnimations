/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  TouchableHighlight,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView> */}
        <Panel/>
      </SafeAreaView>
    </>
  );
};

class Panel extends Component {
  constructor(props){
    super(props);
    this.icons={
      'up'    : 'up',
      'down'  : 'down'
    };
    this.state={
      title       : "A Panel with short content text",
      expanded    : true,
      animation: new Animated.Value(100)
    };
  }

  toggle = () =>{
    let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight;
    let finalValue = this.state.expanded? this.state.minHeight : this.state.minHeight + this.state.maxHeight;
    this.setState({expanded: !this.state.expanded});
    this.state.animation.setValue(initialValue);
    Animated.spring(
      this.state.animation,{toValue: finalValue, useNativeDriver: false}
    ).start();
  }

  _setMaximumHeight = (event) =>{
    this.setState({
      maxHeight   : event.nativeEvent.layout.height
  });
  }

  _setMinimumHeight = (event) =>{
    this.setState({
      minHeight   : event.nativeEvent.layout.height
  });
  }

  render(){
    let icon = this.icons['down'];
    if (this.state.expanded) {``
      icon = this.icons['up'];
    }

    return (
      <Animated.View style={[styles.container, {height: this.state.animation}]} >
                <View style={styles.titleContainer} onLayout={this._setMinimumHeight}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableHighlight 
                        style={styles.button} 
                        onPress={this.toggle}
                        underlayColor="#f1f1f1">
                        <Text
                        >{icon}</Text>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.body} onLayout={this._setMaximumHeight} >
                <Text>Lorem ipsum dolor hgbhgbjhgbjgbjgjhjgbjgbjhgbjgjgbj gbbg jibgibg jbgigj gbhjgb gbigbihgjh amet, consectetur adipiscing elit.</Text>
                </View>

            </Animated.View>
    ) ;
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container   : {
    backgroundColor: '#fff',
    margin:10,
    overflow:'hidden'
},
titleContainer : {
    flexDirection: 'row'
},
title       : {
    flex    : 1,
    padding : 10,
    color   :'#2a2f43',
    fontWeight:'bold'
},
button      : {

},
buttonImage : {
    width   : 30,
    height  : 25
},
body        : {
    padding     : 10,
    paddingTop  : 0
}
});

export default App;
