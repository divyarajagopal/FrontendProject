import * as React from "react";
import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { HeaderUI } from "../components/styled-ui-controls/HeaderUI/HeaderUI";
import { Containerstyles } from "../components/styled-ui-controls/ContainerStyles";

import { Bitcoin, Ether, Rippel, Link } from "../Assets/Assets";

const HomeUI = ({ navigation }: { navigation: any }) => {

  

  // API URLs to Hit 
  let apiurl1 = "https://data.exchange.coinjar.com/products/BTCAUD/ticker";
  let apiurl2 = "https://data.exchange.coinjar.com/products/ETHAUD/ticker";
  let apiurl3 = "https://data.exchange.coinjar.com/products/XRPAUD/ticker";
  let apiurl4 = "https://data.exchange.coinjar.com/products/LINK-AUD/ticker";

  const [fp, setfp] = useState<any[]>([]);

  useEffect(() => {
    //getProductsApi();

    Promise.all([
      fetch(apiurl1),
      fetch(apiurl2),
      fetch(apiurl3),
      fetch(apiurl4),
    ])
      .then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then(function (data) {
        // Holding all the values needed for display in one single array
        // Note - hard coding are due to missing values from the api call

        const PRODUCTS = [
          {
            name: "Bitcoin",
            sname: "BTC/AUD",
            VALUE: Math.round(data[0].prev_close * 10000) / 10000,
            id: "BTCAUD",
            image: Bitcoin,
          },
          {
            name: "Ether",
            sname: "ETH/AUD",
            VALUE: Math.round(data[1].prev_close * 10000) / 10000,
            id: "ETHAUD",
            image: Ether,
          },
          {
            name: "Ripple",
            sname: "XRP/AUD",
            VALUE: Math.round(data[2].prev_close * 10000) / 10000,
            id: "XRPAUD",
            image: Rippel,
          },
          {
            name: "Link",
            sname: "LNK/AUD",
            VALUE: Math.round(data[3].prev_close * 10000) / 10000,
            id: "LINK-AUD",
            image: Link,
          },
        ];

        setfp(PRODUCTS);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#F2F3F8" }}>
      <HeaderUI title="Markets" />

      <View style={{ height: 70, backgroundColor: "#F2F3F8" }}>
        <Text style={Containerstyles.sectionHeader}>Current Market Prices</Text>
      </View>

      {fp?.map((item:any, i:any) => (
        <React.Fragment key={i}>
          <TouchableOpacity
            key={i}
            style={Containerstyles.container}
            onPress={() =>
              navigation.navigate("TradeHistory", {
                name: item.id,
                sname: item.sname,
              })
            }
          >
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={Containerstyles.textMedium}>
                <Image source={item.image} />
                {item.name}
              </Text>
              <Text style={Containerstyles.textRegular}>{item.sname}</Text>
            </View>
            <View
              style={{
                flex: 1,
                marginLeft: 20,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontFamily: "SFProTextRegular", fontSize: 15 }}>
                ${item.VALUE} AUD
              </Text>
            </View>
          </TouchableOpacity>

          {/* </> */}
        </React.Fragment>
      ))}
    </View>
  );
};

export default HomeUI;
