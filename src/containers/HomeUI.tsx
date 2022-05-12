import * as React from "react";
import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { HeaderUI } from "../components/styled-ui-controls/HeaderUI/HeaderUI";
import { Containerstyles } from "../components/styled-ui-controls/ContainerStyles";

import { Bitcoin, Ether, Rippel, Link } from "../Assets/Assets";

const HomeUI = ({ navigation }: { navigation: any }) => {

  // Note - Ideally api must be dynamically built by filtering from "Trading Api".
  // Was able to call the products api and filter for the 4 crypto,
  // But not able to fetch the ids from the returning array. Code is below

  //Trading API call for products

  //const url = "https://api.exchange.coinjar.com/products";
  // const [productsData, setproductsData] = useState<any[]>([]);
  // const getProductsApi = () => {

  //     fetch(url,{
  //       method: 'GET',
  //       headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': 'Token token="iKUU9fvWtmuc0OVaorI-IPdHjCtwXXe7Nu-l1JfUY4E"'

  //       }
  //   })
  //     .then(response => response.json())
  //     .then(data => {

  //       data.forEach(item => setproductsData(prevState => ([
  //         ...prevState,
  //         {data: data.filter(d => d.id === "BTCAUD")},
  //         {data: data.filter(d => d.id === "ETHAUD")},
  //         {data: data.filter(d => d.id === "XRPAUD")},
  //         {data: data.filter(d => d.id === "LINK-AUD")}
  //        ])));

  //     })
  //     .catch(err => console.error(err));

  // };

  // API URLs to Hit  - This is just a hardcoding to get the funcationality working.
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

      {fp?.map((item, i) => (
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
