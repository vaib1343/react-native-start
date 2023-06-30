import React, { useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import AppPro from './AppPro';
function App() {
  const [state, setState] = useState(false)
  const onPress = () => {
    setState(!state)
  }
  return (
    <SafeAreaView>
      <AppPro/>
      <View>
        {
          state && <React.Fragment>
            <Text>Garima pagal hai</Text>
            <Text>Garima pagal hai</Text>
            <Text>Garima pagal hai</Text>
            <Text>Garima pagal hai</Text>
          </React.Fragment>
        }
        <Button title='Sachai sunni hai toh us button par click kre' onPress={onPress} />
      </View>
    </SafeAreaView>
  );
}

export default App;
