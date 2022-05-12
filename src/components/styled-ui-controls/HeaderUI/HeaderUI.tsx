import * as React from "react";

import { Header } from "react-native-elements";
import { IHeaderUIProps } from "./HeaderUIProps";


import { View, Button, ActivityIndicator, TouchableOpacity,Text,StyleSheet,Image } from 'react-native';

export class HeaderUI extends React.Component<IHeaderUIProps> {
  constructor(props: IHeaderUIProps) {
    super(props);
  }
 
  public render() {
    return (
      <View>
        <Header
          
          
          centerComponent={{
            text: this.props.title,
            style: { fontFamily: "MarkProHeavy", fontSize: 18, color: "#fff" },
          }}
          containerStyle={{
          backgroundColor: "#1058A1",
          paddingBottom:16,
          }}
         
        />
      </View>
    );
  }
}
