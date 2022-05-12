import {  StyleSheet } from 'react-native';

export const TradeStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: "8%",
        paddingTop: 30,
        paddingLeft: 30,
        marginBottom: 20,
        backgroundColor: "#f2f3f8",
    },
    textHeader:{
       fontFamily: "MarkProBold",
       color:'#1058A1', 
       fontSize: 17, 
       flex: 1,
    },
    textTitle:{
      marginLeft:16,
      marginTop:24,
      marginBottom:8,
      color:'#1058A1',
      fontFamily:'MarkProBold',
      fontSize:17
  
    },
    textRegular:{
        fontFamily: "SFProTextRegular",
                  fontSize: 15,
                  color: "#828D96",
                  flex: 1,
    },
    touchContainer:{
        flexDirection: "row",
                height: 50,
                paddingLeft: 20,
                backgroundColor: "#ffffff",
                paddingTop: 20,
    }
  });
  
  