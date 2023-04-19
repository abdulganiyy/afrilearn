import React, { FC, useState, useEffect } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import Axios from "axios"

import { HomeScreenProps } from "~/navigations/Main"

const Home: FC<HomeScreenProps> = ({ navigation }) => {
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    const fetchAllSubjects = async () => {
      try {
        const response = await Axios.get(`http:/192.168.53.17:6000/subjects`)
        // console.log(response.data)
        setSubjects(response.data.subjects)
      } catch (error: any) {
        console.log(error.message)
      }
    }

    fetchAllSubjects()
  }, [])

  return (
    <View className="p-2 h-screen">
      {subjects.map((subject: any) => (
        <TouchableOpacity
          onPress={() => {
            navigation.push("Topics", { subjectId: subject.id })
          }}
          key={subject.id}
          className="h-28 bg-green-300 mb-2 rounded-md relative overflow-hidden"
        >
          <Image source={{ uri: subject.uri }} className="absolute h-full w-full" />
          <View className="bg-red-400/40 absolute flex flex-col justify-center items-center  h-full w-full">
            <Text className="uppercase text-blue-600 font-bold text-2xl">{subject.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Home
