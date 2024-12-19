import React from 'react';
import {View, Text, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import {styles} from './style';
import Header from '../../Component/commen/Header';

const About = (props: any) => {
    const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
             <Header
        title="About"
        firstOnpress={() => navigation.openDrawer()}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.sectionHeader}>Sim Owner Details & Packages </Text>
        <Text style={styles.text}>
          Are you looking for an easy way to check your SIM card details and
          explore all the available mobile packages? Look no further than the
          Sim Owner Details & Packages app, designed to make managing your
          mobile network services simpler and more convenient.
        </Text>

        <Text style={styles.sectionHeader}>About the App</Text>
        <Text style={styles.text}>
          Created by Engineer Wahid Balouch, this app brings you all the
          essential information you need about your SIM cards and mobile
          packages. With over 3 years of experience in the field, Wahid Balouch
          has crafted an app that serves as a one-stop solution for all your
          mobile data needs. Whether you're a Jazz, Zong, Telenor, or Ufone
          user, this app has got you covered.
        </Text>

        <Text style={styles.sectionHeader}>Key Features of the App</Text>
        <Text style={styles.text}>
          1) <Text style={styles.bold}>Sim Details</Text> - This feature helps
          you retrieve essential details about your SIM card, including
          ownership information, registration status, and network provider
          details. You can quickly access this information anytime, making it a
          handy tool for users who need to verify their SIM's status.
        </Text>

        <Text style={styles.text}>
          2) <Text style={styles.bold}>All Sim Packages Details</Text> - Whether
          you're using Jazz, Zong, Telenor, or Ufone, the app provides complete
          details of the available mobile packages from each network provider.
          From daily, weekly, and monthly packages to special data bundles and
          voice offers, this feature helps you find the best plan for your
          needs.
        </Text>
        <Text style={styles.text}>
          • Jazz Packages: Stay updated with the latest voice and data plans for
          Jazz customers.
        </Text>
        <Text style={styles.text}>
          • Zong Packages: Explore exciting data and call packages from Zong for
          seamless connectivity.
        </Text>
        <Text style={styles.text}>
          • Telenor Packages: Check out Telenor's special offers for both data
          and voice services.
        </Text>
        <Text style={styles.text}>
          • Ufone Packages: Get details about Ufone's prepaid and postpaid
          plans, tailored to your needs.
        </Text>

        <Text style={styles.text}>
          3) <Text style={styles.bold}>User-Friendly Interface</Text> - The app
          is designed with simplicity in mind. You don’t need to be tech-savvy
          to navigate through it. The clean and easy-to-use interface ensures
          that you can quickly find the information you're looking for without
          any hassle.
        </Text>

        <Text style={styles.text}>
          4) <Text style={styles.bold}>Regular Updates</Text> - The app is
          regularly updated with the latest packages and offers from the mobile
          networks. This means you always have access to the most current data,
          ensuring that you don’t miss out on any new offers or changes to
          existing packages.
        </Text>

        <Text style={styles.text}>
          5) <Text style={styles.bold}>Simple and Fast</Text> - The app provides
          fast access to SIM details and package information. Whether you're
          checking your SIM status or browsing through the available packages,
          everything loads quickly, saving you time.
        </Text>

        <Text style={styles.text}>
          6) <Text style={styles.bold}>No Extra Charges</Text> - The Sim Owner
          Details & Packages app is completely free to use. You won't have to
          pay anything to get all the features. Simply download the app, and
          you’ll have access to a wealth of useful information at no cost.
        </Text>

        <Text style={styles.sectionHeader}>Disclaimer:</Text>
        <Text style={styles.text}>
          SIM Owner Details & Packages is an independent app, developed
          privately, and is not connected to any government or official
          organization. It is not a government app. The information in the app
          comes from public websites, and the owners of those sites hold the
          rights to this data. We don’t own any of the information provided in
          the app.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
