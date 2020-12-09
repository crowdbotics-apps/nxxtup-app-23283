import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ImageBackground style={styles.ImageBackground_1}>
      <Text style={styles.Text_3}>Hello User</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ImageBackground_1: { alignContent: "center", backgroundSize: "stretch" },
  Text_3: {
    marginLeft: 0,
    marginTop: 29,
    paddingLeft: 100,
    paddingTop: 368,
    paddingBottom: 13,
    alignSelf: "center",
    fontSize: 30,
    color: "#ffffff",
    fontFamily: "Montserrat-Regular"
  }
})
