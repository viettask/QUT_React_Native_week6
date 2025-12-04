import React from "react"; 
import { Text, Button } from "react-native"; 
import { useNavigation } from '@react-navigation/native';

export default function LogScreen () {
    return (
        <Button
          title="New"
          onPress={() => {
            navigation.push("New");
          }}
        />
      );
}