import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import CustomButton from '../components/CustomButton';
import { getAsteroid, getRandom } from '../redux/actions/asteroid';
import Styles from '../styles/global'

type Props={
    navigation:{
        navigate:Function
    }
}

function Home({navigation}:Props) {
    const [val, setVal] = useState('')
  return (
    <View style={Styles.container} testID="home-wrapper">
        <TextInput placeholder="Enter Asteroid ID" style={Styles.textInput} onChangeText={setVal} value={val} />
        <CustomButton title="Submit" func={getAsteroid} val={val} setVal={setVal} navigation={navigation} disabled={!val} />
        <CustomButton title="Random Asteroid" func={getRandom} setVal={setVal} navigation={navigation} />
    </View>
  );
}

export default Home