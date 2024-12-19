import {ScrollView, Text, View} from 'react-native';

import styles from './style';
import Header from '../../Component/commen/Header';

const TermAndCondition = (props: any) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Header
        title="Terms and Conditions"
        firstOnpress={() => navigation.openDrawer()}
      />
        <ScrollView style={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>1. Definitions</Text>
        <Text style={styles.text}>
          - "App" refers to the Sim Detailing Mobile App, its services, and content.
          - "User" refers to any individual or entity who downloads, installs, or uses the App.
          - "Service" refers to the features and functionalities provided through the App.
        </Text>

        <Text style={styles.sectionTitle}>2. Usage of the App</Text>
        <Text style={styles.text}>
          The App is intended for lawful purposes only. Users must provide accurate and up-to-date
          information where required. The App is for personal use only and must not be used for
          unauthorized commercial purposes.
        </Text>

        <Text style={styles.sectionTitle}>3. User Obligations</Text>
        <Text style={styles.text}>
          Users must not misuse the App by transmitting harmful code, accessing unauthorized data, or
          engaging in activities that disrupt the App's services. Users are responsible for the security
          of their devices and ensuring that the App is installed on devices free from malware.
        </Text>

        <Text style={styles.sectionTitle}>4. Privacy Policy</Text>
        <Text style={styles.text}>
          Your use of the App is governed by our Privacy Policy, which outlines how we collect, use,
          and store your data. Please review our Privacy Policy for more information.
        </Text>

        <Text style={styles.sectionTitle}>5. Intellectual Property</Text>
        <Text style={styles.text}>
          The App and its content, including but not limited to logos, text, and software, are the
          intellectual property of Engineer Wahid Blouch. Users are granted a limited,
          non-transferable license to use the App. This license does not transfer ownership or grant
          permission to modify, sell, or distribute the App.
        </Text>

        <Text style={styles.sectionTitle}>6. Disclaimer of Warranties</Text>
        <Text style={styles.text}>
          The App is provided on an "as-is" basis without any warranties, express or implied. We do not
          guarantee that the App will be error-free, uninterrupted, or meet your specific requirements.
        </Text>

        <Text style={styles.sectionTitle}>7. Limitation of Liability</Text>
        <Text style={styles.text}>
          Under no circumstances will Engineer Wahid Blouch be liable for any indirect, incidental,
          consequential, or punitive damages arising from the use of the App. Our liability is limited
          to the maximum extent permitted by law.
        </Text>

        <Text style={styles.sectionTitle}>8. Updates and Modifications</Text>
        <Text style={styles.text}>
          We reserve the right to modify or update the App or these Terms at any time. Continued use of
          the App after modifications constitutes acceptance of the updated Terms.
        </Text>

        <Text style={styles.sectionTitle}>9. Termination</Text>
        <Text style={styles.text}>
          We may terminate or suspend access to the App at any time without prior notice if a user
          violates these Terms or engages in unauthorized activities. Upon termination, all rights
          granted to the user under these Terms will cease.
        </Text>

        <Text style={styles.sectionTitle}>10. Governing Law</Text>
        <Text style={styles.text}>
          These Terms are governed by and construed under the laws of Pakistan. Any disputes
          arising under these Terms shall be subject to the jurisdiction of the courts located in.
        </Text>

        <Text style={styles.sectionTitle}>11. Contact Information</Text>
        <Text style={styles.text}>
          For any queries regarding these Terms, please contact us at:
          Email: engineerwahidbalouch@gmail.com
        </Text>
      </ScrollView>


    </View>
  );
};
export default TermAndCondition;
