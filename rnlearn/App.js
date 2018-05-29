/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  SectionList,
} from 'react-native';

/** props */
/// Image: source
// export default class Bananas extends Component {

//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}}/>
//     );
//   }
// }

/// Text: name
// class Greeting extends Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }

// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//       <Greeting name='Rexxxa'/>
//       <Greeting name='YYYdda'/>
//       <Greeting name='VVVVle'/>
//     </View>
//     );
//   }
// }

/** state */
/// 文字闪烁
// class Blink extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {isShowingText: true};

//     setInterval(() => {
//       this.setState(previousState => {
//         return { isShowingText: !previousState.isShowingText };
//       });
//     }, 1000);
//   }

//   render() {
//     let display = this.state.isShowingText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink'/>
//         <Blink text='Yes blinking...is so great'/>
//         <Blink text='xxxxxxxxx'/>
//         <Blink text='yyyyyyyyy'/>
//       </View>
//     );
//   }
// }

/** style */
/// 文字样式
// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>just bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//     backgroundColor: 'yellow',
//   },
//   red: {
//     color: 'red',
//   },
// })

/** height and width */
/// 固定尺寸
// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
//         <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
//       </View>
//     );
//   }
// }

/// Flex尺寸
// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View style={{flex: 0.5}}>
//         <View style={{flex: 2, backgroundColor: 'powderblue'}}/>
//         <View style={{flex: 3, backgroundColor: 'skyblue'}}/>
//         <View style={{flex: 4, backgroundColor: 'steelblue'}}/>
//       </View>
//     );
//   }
// }

/** layout with flexbox */
// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View style={{
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         alignItems: 'flex-start',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
//       </View>
//     );
//   }
// }

/** Handling Text Input */
// export default class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {text: ''}
//   }

//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translte!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     )
//   }
// }

/** Handling Touches */
/// 按钮
// export default class BasicButton extends Component {

//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button 
//             onPress={this._onPressButton}
//             title='Press Me'
//           />
//         </View>


//         <View style={styles.buttonContainer}>
//           <Button 
//               onPress={this._onPressButton}
//               title='Press Me'
//               color='red'
//           />
//         </View>

//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button 
//               onPress={this._onPressButton}
//               title='This looks great!'
//           />
//           <Button
//             onPress={this._onPressButton}
//             title='OK!'
//             color='#841584'
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'lightgray'
//   },
//   buttonContainer: {
//     margin: 20,
//     backgroundColor: 'lightgreen'
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: 'lightyellow'
//   }
// })

/// 可触摸组件
// export default class Touchables extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the Button!')
//   }

//   _onLongPressButton() {
//     Alert.alert('You long-pressed the button!')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableHighlight</Text>
//           </View>
//         </TouchableHighlight>

//         <TouchableOpacity onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>

//         <TouchableWithoutFeedback onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>

//         <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor='red'>
//           <View style={styles.button}>
//             <Text style={styles.button}>
//               Touchable with long Press
//             </Text>
//           </View>
//         </TouchableHighlight>

//         <Text style={styles.buttonText}>Immmmmmmmm </Text>
//       </View>
//     )
//   }
// }



// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     padding: 20,
//     color: 'white'
//   }
// })

/** 使用ScrollView */
// export default class ScrollViewOfImages extends Component {
//   render() {
//     return (
//       <ScrollView>
//         <Text style={{ fontSize: 97 }}>Scroll Me Plz</Text>
//         <Image source={require('./img/favicon.png')} />
//         <Image source={require('./img/favicon.png')} />
//         <Image source={require('./img/favicon.png')} />
//         <Image source={require('./img/favicon.png')} />
//         <Text style={{ fontSize: 97 }}>Scrolling down</Text>
//         <Image source={require('./img/favicon.png')} />
//         <Image source={require('./img/favicon.png')} />
//         <Image source={require('./img/favicon.png')} />
//         <Image source={require('./img/favicon.png')} />
//         <Text style={{ fontSize: 97 }}>What the best</Text>
//         <Image source={require('./img/favicon.png')} />
//         <Image source={require('./img/favicon.png')} />
//         <Image source={require('./img/favicon.png')} />
//         <Image source={require('./img/favicon.png')} />
//         <Text style={{ fontSize: 97 }}>React Native</Text>
//       </ScrollView>
//     )
//   }
// }

/** 长列表 */
/// FlatList 长列表数据，可增删
// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             { key: 'Devin' },
//             { key: 'Jackon' },
//             { key: 'James' },
//             { key: 'Joles' },
//             { key: 'Jillian' },
//             { key: 'Julie' },
//             { key: 'Hepp' },
//             { key: 'Tiie' },
//             { key: 'Poop' }
//           ]}
//           renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44
//   }
// })

/// SectionList 分组列表

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
        sections={[
          {title: 'D', data: [{key: 'Devin'}]},
          {title: 'J', data: [{key: 'Jacken'}, {key: 'James'}, {key: 'Jack'}]}
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#444fff'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})