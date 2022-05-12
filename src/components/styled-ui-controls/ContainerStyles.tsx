import * as React from 'react';
import {  StyleSheet } from 'react-native';


export const Containerstyles = StyleSheet.create({
  container: {
    
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    flex: 0.08, flexDirection: "row"
  },
  textTitle:{
    marginLeft:16,
    marginTop:24,
    marginBottom:8,
    color:'#1058A1',
    fontFamily:'MarkProBold',
    fontSize:17

  },
  textMedium:{
    fontFamily:'SFProTextMedium', 
    fontSize:15
  },
  textRegular:{
    fontFamily:'SFProTextRegular', 
    fontSize:15,
    color:'#828D96'
  },
  sectionHeader:{
    marginLeft:16,
    marginTop:24,
    marginBottom:8,
    color:'#1058A1',
    fontFamily:'MarkProBold',
    fontSize:17,
    
  },
});

