import React, { FC, useState, useEffect } from "react"
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import Axios from "axios"
import { Video, ResizeMode } from "expo-av"

import { TopicScreenProps } from "~/navigations/Main"

const Topic: FC<TopicScreenProps> = ({ route, navigation }) => {
  const [topic, setTopic] = useState<any>()

  const video = React.useRef(null)
  const [status, setStatus] = React.useState({})

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const response = await Axios.get(`http:/192.168.53.17:6000/topics/${route.params.topicId}`)
        // console.log(response.data)
        setTopic(response.data.topic)
      } catch (error: any) {
        console.log(error.message)
      }
    }

    fetchTopic()
  }, [])

  return (
    <View className="p-2 h-screen">
      <View className="border-[1px] border-gray-300 rounded-md">
        {topic && (
          <>
            <View className="h-72 justify-center">
              <Video
                className="h-72 w-full"
                ref={video}
                source={{
                  //   uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                  uri: topic.videoUrl,
                }}
                useNativeControls
                // resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
            </View>

            <Text>{topic.name}</Text>
            <Text>{topic.description}</Text>
          </>
        )}
      </View>
    </View>
  )
}

export default Topic
