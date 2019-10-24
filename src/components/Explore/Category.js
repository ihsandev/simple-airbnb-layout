import React from "react";
import { View, Text, Image } from "react-native";

class Category extends React.Component {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "#ddd"
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imgUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover"
            }}
          />
        </View>
        <View style={{ flex: 1, paddingTop: 10, paddingLeft: 10 }}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

export default Category;
