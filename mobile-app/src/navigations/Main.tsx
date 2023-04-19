import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import Home from "~/screens/Home"
import Topics from "~/screens/Topics"
import Topic from "~/screens/Topic"

type RootStackParamList = {
  Home: undefined
  Topics: { subjectId: string }
  Topic: { topicId: string }
}

export type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">
export type TopicsScreenProps = StackScreenProps<RootStackParamList, "Topics">
export type TopicScreenProps = StackScreenProps<RootStackParamList, "Topic">

const Stack = createStackNavigator<RootStackParamList>()

function Main() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Topics" component={Topics} />
      <Stack.Screen name="Topic" component={Topic} />
    </Stack.Navigator>
  )
}

export default Main
