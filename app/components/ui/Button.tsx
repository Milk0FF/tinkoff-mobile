import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import React, {PropsWithChildren, FC} from 'react'

interface IButton{
  onPress: () => void,
  title: string,
  colors?: [string, string]
}

const Button: FC<PropsWithChildren<IButton>> = ({onPress, title, colors}) => {
  return (
    <TouchableHighlight 
      onPress={onPress} 
      underlayColor={colors ? colors[1] : ''}
      style={[{backgroundColor: colors ?  colors[0] : ''}, styles.button]}
      >
      <Text>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button:{
    color: ''
  },
})

export default Button