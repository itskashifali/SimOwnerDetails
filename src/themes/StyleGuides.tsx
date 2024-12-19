import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ACTIVEOPACITY = 0.5;

const COLOR = {
  primary: "#003049",
  primarya_Light:"#4c956c",
  Primaray_light1:"#a8dadc",
  DarkBlue: "#222751",
  errorRed: "#FF0000",
  black: "#1A171B",
  lightBlack: "rgba(0, 0, 0, 0.7)",
  jetBlack: "#000000",
  darkGray: "#626262",
  gray: "#BBBBBB",
  SkyBlue: "#4799FF",
  white2: "#EEEEEE",
  white: "#FFFFFF",
  green:'#28a745',
  red:"#dc3545",
  Blur:"' rgba(0, 0, 0, 0.4)'"
};


const FONT = {
  Poppins_Regular: "Poppins-Regular",
  Poppins_Medium: "Poppins-Medium",
  Poppins_SemiBold: "Poppins-SemiBold",
  Poppins_Bold: "Poppins-Bold",
};

const TEXT_STYLE = StyleSheet.create({
  text_regular: {
    fontSize: 14,
    fontFamily: FONT.Poppins_Regular,
    color: COLOR.black,
  },
  regular: {
    fontSize: 14,
    fontFamily: FONT.Poppins_Regular,
    color: COLOR.darkGray,
  },
  text_medium: {
    fontSize: 14,
    fontFamily: FONT.Poppins_Medium,
    color: COLOR.black,
  },
  text_small: {
    fontSize: 14,
    fontFamily: FONT.Poppins_SemiBold,
    color: COLOR.black,
  },
  subTitle: {
    fontSize: 18,
    fontFamily: FONT.Poppins_SemiBold,
    color: COLOR.black,
  },
  title: {
    fontSize: 22,
    fontFamily: FONT.Poppins_Bold,
    color: COLOR.black,
  },
  text_smallSemiBold: {
    fontSize: 10,
    fontFamily: FONT.Poppins_SemiBold,
    color: COLOR.black,
  },
  AuthWellComeText: {
    fontSize: 20,
    fontFamily: FONT.Poppins_SemiBold,
    color: COLOR.black,
    marginLeft: "5%",
    marginTop: "10%",
    marginBottom: "3%",
  },
});

const commonStyles = StyleSheet.create({
  BlurContainer:{ flex: 1,backgroundColor:COLOR.Blur},
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.Primaray_light1,
  },
  horizontalView: {
    flexDirection: "row",
    alignItems: "center",
  },
  verticleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  justifyView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export { width, height, ACTIVEOPACITY, FONT, COLOR, TEXT_STYLE, commonStyles };


