import React, { FC, useState, useEffect } from "react"
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import Axios from "axios"

import { TopicsScreenProps } from "~/navigations/Main"

const Topics: FC<TopicsScreenProps> = ({ route, navigation }) => {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    const fetchAllTopics = async () => {
      try {
        const response = await Axios.get(`http:/192.168.53.17:6000/subjects/${route.params.subjectId}/topics`)
        // console.log(response.data)
        setTopics(response.data.topics)
      } catch (error: any) {
        console.log(error.message)
      }
    }

    fetchAllTopics()
  }, [])

  return (
    <ScrollView className="p-2 h-screen">
      {topics.map((topic: any) => (
        <TouchableOpacity
          onPress={() => {
            navigation.push("Topic", { topicId: topic.id })
          }}
          key={topic.id}
          className="border-[1px] border-gray-300 rounded-md p-2"
        >
          <Text>{topic.name}</Text>
          <Text>{topic.description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default Topics
