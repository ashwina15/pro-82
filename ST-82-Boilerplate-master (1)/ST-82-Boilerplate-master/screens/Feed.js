import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  FlatList
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import StoryCard from "./StoryCard";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

let stories = require("./temp_stories.json");

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  renderItem = ({ item: story }) => {
    return <StoryCard story={story} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
            source={require("../assets/logo.png")}
            style={styles.iconImage}>
              </Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Spectagram</Text>
          </View>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Flatlist 
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
            />
            </View>
            </View>

          )
          }
return(
<View style={styles.container}>
  <SafeAreaView style={styles.droidSafeArea}/>
  <View style={styles.appTitle}>
  <View style={styles.appIcon}>
    <Image
    source={require("../assets/logo.png")}
    styles={styles.iconImage}
    ></Image>
    </View>
    <View style={styles.appTitleTextContainer}

<View style={styles.container}>
<View style={styles.cardContainer}>
<View style={styles.authorContainer}></View>
<View style={styles.authorImageContainer}>
<Image 
source={require("../assets/profile_img.png")}
style={styles.profileImage}
></Image>
</View>
<View style={styles.authorNameContainer}>
<Text style={styles.authorNameText}>{this.props.post.author}</Text>  
</View>
</View>
<Image source={require("../assests/post.jpeg")} styles={styles.postImage}/>
<View style = {styles.captionContainer}>
  <Text style={styles.captionText}>
    {this.props.post.caption}
  </Text>
</View>
<View style={styles.actionContainer}>
<View style={styles.like button}>
  <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
  <Text style={styles.likeText}>12k</Text>
  </View>
  </View>
</View>
</View>
)

  }


    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Storytelling App</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={stories}
              renderItem={this.renderItem}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93
  }
});
