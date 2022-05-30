import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from "react-native";


import * as Moment from "moment";
import * as React from "react";
import { useEffect, useState } from "react";
import { HeaderUI } from "../components/styled-ui-controls/HeaderUI/HeaderUI";
import { TradeStyles } from "../components/styled-ui-controls/TradeStyles";
import  {TrendDown,TrendUp}  from '../Assets/Assets';



// Passing the id value from Home screen and replacing it in the below api call to fetch trade history
// Upto 20 trades are fetched for any cryto
// Rounding off applied for price
// Buy and Sell differentiated with colour codes and arrow styles in the UI
// UI formatting applied as applicable

const TradesPage = ( {route}: {route: any} ) => {
  let tradeApi = "https://data.exchange.coinjar.com/products/id/trades?limit=20";

  let tradeApiStr = tradeApi.replace("id", route.params.name);
  
  const [fp, setfp] = useState<any[]>([]);

  useEffect(() => {
    fetch(tradeApiStr)
      .then((response) => response.json())
      .then((json) => setfp(json))
      .catch((error) => console.error(error));

  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#F2F3F8" } }>
      <HeaderUI title={route.params.sname + " Trade History"} />
      <View
        style={TradeStyles.container}
      >
        <Text style={TradeStyles.textHeader}>
          Time
        </Text>

        <Text style={TradeStyles.textHeader}>
          Price
        </Text>

        <Text style={TradeStyles.textHeader}>
          Size
        </Text>
      </View>

      <ScrollView>
        {fp?.map((item:any, i:any) => (
          // <>
          <React.Fragment key={i}>
            <TouchableOpacity
              style={TradeStyles.touchContainer}
              key={i}
            >
              <Text
                style={TradeStyles.textRegular}
              >
                {Moment.parseZone(item.timestamp).format("HH:mm:ss")}
              </Text>
              {item.taker_side == "buy" ? (
                <Text style={{ flex: 1, color: "green"}}>
                  <Image source={TrendUp} />
                  {Math.round(item.price * 10000) / 10000}
                </Text>
              ) : (
                <Text style={{ flex: 1, color: "red" }}>
                  <Image source={TrendDown} />
                  {Math.round(item.price * 10000) / 10000} 
                </Text>
              )}
              <Text
                style={{ fontFamily: "SFProTextMedium", fontSize: 15, flex: 1 }}
              >
                {item.size}
              </Text>
            </TouchableOpacity>
          {/* </> */}
        
        </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default TradesPage;
