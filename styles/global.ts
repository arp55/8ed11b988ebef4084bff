import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      padding:60
    },
    textInput:{
        borderBottomWidth:1,
        borderBottomColor:'#777',
        padding:4,
        marginBottom:10
    },
    button:{
        paddingHorizontal:15,
        paddingVertical:10
    },
    infoCard:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:20,
        borderColor:"#777",
        borderRadius:10,
        borderWidth:1,
        margin:40
    },
    heading:{
        fontWeight:'700',
        color:"#777",
        fontSize:20
    },
    value:{
        fontSize:21,
        marginBottom:20
    }
  });
  