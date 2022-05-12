import * as React from 'react';
import { View } from 'react-native';
import  TradesPage  from '../containers/TradesPage';
export class TradeHistory extends React.Component {
  constructor(public props: any) {
    super(props);
  }
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <TradesPage navigation={this.props.navigation} route={this.props.route} />
      </View>
    );
  }
}