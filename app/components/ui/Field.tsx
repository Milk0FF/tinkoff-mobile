import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, {FC} from 'react'

interface IField{
  onChange: (val: string) => void
  val:string
  placeholder: string
  isSecure?: boolean
}

const Field: FC<IField> = ({onChange, placeholder, val, isSecure}) => {
  return (
    <TextInput 
      style={styles.input}
      placeholder={placeholder} 
      onChangeText={onChange} 
      value={val} 
      secureTextEntry={isSecure} 
      autoCapitalize='none'
      />
  )
}

const styles = StyleSheet.create({
  input:{
    backgroundColor: '#E1E1E1',
    color: 'black',
    placeholderTextColor: '#D0D0D0',
    borderRadius: 20,
    marginTop: 30,
    padding: 15,
    width: '100%'
  }
})

export default Field