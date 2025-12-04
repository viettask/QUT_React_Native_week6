import React from "react"; 
import { Text } from "react-native";

export default function NewScreen () {
    return (
        <Button
          title="Go Back"
          onPress={() => {
            navigation.pop("New");
          }}
        />
      );
}