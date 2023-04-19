import "react-native-gesture-handler"
import { StyleSheet, View, StatusBar } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Main from "~/navigations/Main"

import { useFonts } from "expo-font"

export default function App() {
  const [fontsLoaded] = useFonts({
    Avenir: "https://fonts.cdnfonts.com/css/avenir",
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>

      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
