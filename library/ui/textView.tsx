import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { TextViewVerients } from '../../Utils/theme/themeProps'
import { useTheme } from '../../Utils/theme/themeContext'

interface ITextVIew extends TextStyle {
    varient? : TextViewVerients,
    style?:StyleProp<TextStyle>
    lable:string,
    numberOfLines?:number
}

const TextView = ({varient="body",style,lable,numberOfLines,...rest}:ITextVIew) => {
    const {theme} = useTheme();
  return (
      <Text numberOfLines={numberOfLines} style={[{...theme.textViewTheme![varient]},{...rest},style]}>{lable}</Text>
    
  )
}

export default TextView