import * as React from 'react'
import { Button } from 'react-native'

const Screen_Landing = ({ navigation }) => {
  return (
    <React.Fragment>
      <Button
        title="Sign Up"
        onPress={() =>
          navigation.navigate('Screen_SignUp')
        }
      />
      <Button
        title="Sign In"
        onPress={() =>
          navigation.navigate('Screen_SignIn')
        }
      />
    </React.Fragment>
  )
}

export default Screen_Landing
