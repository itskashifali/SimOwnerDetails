import {showMessage} from 'react-native-flash-message';
import React from 'react';
import {COLOR} from '../../themes/StyleGuides';
import {Image} from 'react-native';
import {IMAGES} from '../../assets';

const showSuccessToast = (message: string, type: any = 'success') => {
  showMessage({
    message: message,
    type: type,
    floating: true,
    icon: props => (
      <Image
        source={IMAGES.checked}
        style={{
          paddingRight: 10,
          width: 23,
          height: 23,
          tintColor: COLOR.white,
        }}
      />
    ),
    style: {
      marginTop: 0,
      backgroundColor: COLOR.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

const showErrorToast = (message: string, type: any = 'error') => {
  showMessage({
    message: message,
    type: type,
    floating: true,
    icon: props => (
      <Image
        source={IMAGES.exclamation_circle}
        style={{
          paddingRight: "5%",
          width: 23,
          height: 23,
          tintColor: COLOR.white,
        }}
      />
    ),
    style: {
      marginTop: 0,
      backgroundColor: COLOR.red,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export {showSuccessToast, showErrorToast};
