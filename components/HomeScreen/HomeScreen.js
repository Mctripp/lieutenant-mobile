import * as React from 'react'
import { Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Mike's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Mike'})
      }
    />
  )
}

export default HomeScreen
