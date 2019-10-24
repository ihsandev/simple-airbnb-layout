import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from "react-native";

import Category from "../components/Explore/Category";
import Home from "../components/Explore/Home";
import Tag from "../components/Explore/Tag";

import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");
class Explore extends Component {
  componentWillMount() {
    this.scrollY = new Animated.Value(0);
    this.startHeaderHeight = 80;
    this.endHeaderHeight = 50;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }
    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: "clamp"
    });
    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });
    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 10],
      extrapolate: "clamp"
    });
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: this.animatedHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                alignItems: "center",
                elevation: 1,
                marginTop: Platform.OS == "android" ? 30 : null
              }}
            >
              <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
              <TextInput
                placeholder="Try now.."
                placeholderTextColor="grey"
                style={{
                  flex: 1,
                  fontWeight: "700",
                  backgroundColor: "white"
                }}
              />
            </View>
            <Animated.View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                position: "relative",
                top: this.animatedTagTop,
                opacity: this.animatedOpacity
              }}
            >
              <Tag name="Guests" />
              <Tag name="Dates" />
            </Animated.View>
          </Animated.View>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              {
                nativeEvent: { contentOffset: { y: this.scrollY } }
              }
            ])}
          >
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                What can we help you find, Ihsan ?
              </Text>
              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imgUri={require("../../assets/home.jpg")}
                    name="Home"
                  />
                  <Category
                    imgUri={require("../../assets/experiences.jpg")}
                    name="Home"
                  />
                  <Category
                    imgUri={require("../../assets/restaurant.jpg")}
                    name="Home"
                  />
                </ScrollView>
              </View>
              <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 22, fontWeight: "700" }}>
                  Introduction Airbnb Plus!
                </Text>
                <Text style={{ fontWeight: "100", marginTop: 10 }}>
                  a new selection of homes verifiedfor quality and comfort
                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    source={require("../../assets/home.jpg")}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: "cover",
                      borderRadius: 4
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text
                style={{
                  fontSize: 22,
                  paddingHorizontal: 20,
                  fontWeight: "700"
                }}
              >
                Homes Around the world
              </Text>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}
              >
                <Home
                  width={width}
                  type="The Cozy place"
                  name="PRIVATE ROOM 2 BEDS"
                  price={82}
                />
                <Home
                  width={width}
                  type="The Show place"
                  name="SHOW ROOM 3 BEDS"
                  price={70}
                />
                <Home
                  width={width}
                  type="The Lazy place"
                  name="LAZY ROOM 1 BEDS"
                  price={90}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Explore;
