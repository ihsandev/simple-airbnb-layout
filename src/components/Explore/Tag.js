import React from "react";
import { View, Text } from "react-native";

class Tag extends React.Component {
  render() {
    return (
      <View
        style={{
          minHeight: 20,
          minWidth: 40,
          padding: 5,
          backgroundColor: "white",
          borderColor: "#ddd",
          borderWidth: 1,
          borderRadius: 4,
          marginRight: 5
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 10 }}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

export default Tag;
