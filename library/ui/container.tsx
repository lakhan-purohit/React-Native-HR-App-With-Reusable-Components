import { View,StyleProp, ViewStyle } from 'react-native'
import React from 'react'

export interface IContainer extends ViewStyle  {
    children?:React.ReactNode,
    style?:StyleProp<ViewStyle>,
   
} 


const Container = ({children,style,...rest}:IContainer) => {
  return (
    <View style={[{...rest},style]}>
      {children}
    </View>
  )
}

export default Container