import * as React from 'react';
import { View } from 'react-native';
import  HomeUI  from '../containers/HomeUI';
import * as Font from 'expo-font';
export class Home extends React.Component {
  constructor(public props: any) {
    super(props);
  }
  state = {
    fontsLoaded: false,
  };

  //Load custom font files
  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      MarkProBold: require('../../Fonts/MarkPro-Bold.otf'),
      MarkProHeavy: require('../../Fonts/MarkPro-Heavy.otf'),

      
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <HomeUI navigation={this.props.navigation}/>
      </View>
    );
  }
}