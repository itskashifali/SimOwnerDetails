import React from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {DisclaimerModalProps} from '../../../data/Types';
import {COLOR} from '../../../themes/StyleGuides';

const DisclaimerModal = (props: DisclaimerModalProps) => {
  const {onDisagree, onAgree, visible} = props;
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onDisagree}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Accept Terms and Disclaimer</Text>
          <Text style={styles.content}>
            Before Using Our App, You have to Accept Terms and Policies
          </Text>
          <Text style={styles.content}>
            Disclaimer: We are not affiliated with any government. All the
            information in this app is publicly available and owned by its
            respective sources. We don't claim ownership of any of this
            information. The details you search here are temporarily stored in
            the backend, and we will never share your data with any third party.
            If you're okay with this, feel free to use our app. If not, that's
            perfectly fine too!
          </Text>
          <Text style={styles.content}>
            We just make it easier for you to find information, but we can't
            guarantee it's always 100% accurate. Also, we don’t store or use any
            information you enter in the app.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btn} onPress={onAgree}>
              <Text style={styles.btnText}>Agree</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onDisagree}
              style={{...styles.btn, marginRight: 0, borderColor: COLOR.red}}>
              <Text style={{...styles.btnText, color: COLOR.red}}>
                Disagree
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DisclaimerModal;
