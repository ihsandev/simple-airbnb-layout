import React from "react";
import { View, Text, Image } from "react-native";

class Home extends React.Component {
  render() {
    return (
      <View
        style={{
          width: this.props.width / 2 - 30,
          height: this.props.width / 2 - 30,
          borderWidth: 0.5,
          borderColor: "#dddddd",
          marginBottom: 10
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../../assets/home.jpg")}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover"
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            paddingLeft: 10,
            justifyContent: "space-evenly"
          }}
        >
          <Text style={{ fontSize: 10, color: "#b63838" }}>
            {this.props.type}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            {this.props.name}
          </Text>
          <Text style={{ fontSize: 10 }}>{this.props.price}$</Text>
        </View>
      </View>
    );
  }
}

export default Home;
