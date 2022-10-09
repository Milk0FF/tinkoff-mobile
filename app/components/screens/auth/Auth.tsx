import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import {FC} from 'react';
import { useAuth } from '../../../hooks/useAuth';
import Loader from '../../ui/Loader';
import Field from '../../ui/Field';

const Auth: FC = () => {
  const {isLoading} = useAuth()
  const [isReg, setIsReg] = useState(false)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {isReg ? 'Sign Up' : 'Sign In'}
        </Text>

        <Field placeholder='Введите логин ...' isSecure={true} val={password} onChange={val => setLogin(val)}/>
        <Field placeholder='Введите пароль ...' isSecure={true} val={password} onChange={val => setPassword(val)}/>

        {isLoading ? <Loader/> : <>
        </>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
    paddingHorizontal: 40
  },
  title:{
    fontSize:24,
    fontWeight:'500',
    textAlign:'center',
  }
})

export default Auth