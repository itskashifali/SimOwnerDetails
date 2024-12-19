import {ReactNode} from 'react';
import {KeyboardTypeOptions, TextStyle, ViewStyle} from 'react-native';

export const ACTIVE_OPACITY = 0.8;
export const BACKDROP_OPACITY = 0.2;

export interface HeadersProps{
firstOnpress?:()=>void,
title?:string,
secondOnpress?:()=>void,
icons?:any
}



export interface SelectorProps{
  onPress?:any,
  selector?:any,
  data?:any
}
export interface PackageListProps{

  name?:string,
  price?:any,
  validity?:any,
  offerDetails?:any,
  activationCode?:any,
  onpress?:()=>void

}



export interface SliderSheetProps{
  refRBSheet?:any,
  data?:any,
  onpress?:()=>void
}


export interface DisclaimerModalProps{
  visible?:any,
  onAgree?:()=>void,
  onDisagree?:()=>void
}