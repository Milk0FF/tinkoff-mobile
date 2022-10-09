import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {FC, PropsWithChildren} from 'react';
import {useTailwind} from 'tailwind-rn'

interface ILayout{
  isScrollView?: boolean
}

const Layout: FC<PropsWithChildren<ILayout>> = ({children, isScrollView = true}) => {
  const tw = useTailwind()
  return (
    <View style={tw('h-full w-full bg-white pt-16')}>
        {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  )
}

export default Layout