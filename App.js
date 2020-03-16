/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from './NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>About Me</Text>
              <Text style={styles.sectionDescription}>
                I am a Chicago based Solution Architect / Software Engineer,
                currently employed by Aon where I work on E-commerce and Data
                Integration projects.
              </Text>
              <Text style={styles.sectionDescription}>
                I graduated from DePaul University with a degree in Software
                Interface Design (Human Computer Interaction). My first role out
                of college was with AT&T as a Software Engineer. I enjoy
                developing software professionly and as a personal hobby. After
                8 years of software development, I became a Solution Architect
                at AT&T and still continue to work hands-on with code.
              </Text>
              <Text style={styles.sectionDescription}>
                In addition to software development my other hobbies are hiking,
                bonsai, investing & classical music.
              </Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.sectionContainerWork}>
              <Text style={styles.sectionTitle}>Work</Text>
              <Text style={styles.sectionDescriptionWork}>
                Aon - Solution Architect • 3/2019 - Present
              </Text>
              <Text style={styles.sectionDescriptionWork}>
                Abbott Principal Software Engineer • 1/2017 - 3/2019
              </Text>
              <Text style={styles.sectionDescriptionWork}>
                AT&T Solution Engineer • 7/2000 - 12/2016
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 35,
    marginBottom: 10,
    paddingHorizontal: 24,
  },
  sectionContainerWork: {
    marginTop: 5,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'center',
  },
  sectionDescriptionWork: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'center',
  },
  sectionDescriptionEmail: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'blue',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  separator: {
    marginVertical: 18,
    backgroundColor: Colors.light,
    height: 1,
  },
});

export default App;
