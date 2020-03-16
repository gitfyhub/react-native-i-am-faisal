/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';
import Colors from './Colors';
import type {Node} from 'react';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const links = [
  {
    title: 'Personal website',
    link: 'http://www.faisal.cx',
    description: 'faisal.cx',
  },
  {
    title: 'Email',
    link: 'mailto:faisal.cx.web@gmail.com',
    description: 'faisal.cx.web@gmail.com',
  },
  {
    title: 'CV',
    link: 'https://www.linkedin.com/in/faisaly/',
    description:
      'Download Resume',
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/faisaly/',
    description: 'linkedin.com/in/faisaly/',
  },
  {
    title: 'GitHub',
    link: 'https://github.com/gitfyhub',
    description: 'github.com/gitfyhub',
  },
  {
    title: 'Education',
    link: '',
    description:
      'DePaul University - Bachelor\'s in Computer Science',
  },
  {
    title: 'Education',
    link: '',
    description:
      'DePaul University - Completed 2 Master\'s level degree courses in Java Development',
  },
  {
    title: 'Favorite Tech',
    link: '',
    description: 'React, Vue, Node, Python, Bootstrap, Java, AWS, & Git',
  },
  {
    title: 'Megan Schwarz - UX Design Lead at Aon',
    link: '',
    description: 'Faisal is a thoughtful and talented architect. He asks the right questions and thinks about a problem from the big picture - always looking ahead to how we might apply a solution to a larger goal, while staying agile in mindset and approach. Faisal is also just a genuinely nice person, and a pleasure to work with. I highly recommend Faisal, and hope to work with him again in the future.',
  },
  {
    title: 'Daniel Johnson - Sr. Global Informatics Product Manager - Business Intelligence',
    link: '',
    description: 'Faisal was amazing to work with on the AlinIQ BIS project at Abbott Diagnostics. He was my go-to person for creative solutions for complex issues regarding AWS, coding, new development, etc. One of his strengths was to be able to be adaptable and agile in his environment, as taking on responsibilities as needed such as scrum master, mini-project manager, AWS consultant, lead developer, and coach. I recommend Faisal since he was such an asset to my team and me.',
  },
  {
    title: 'Rommel Gandeza - Technology Professional - Business Analyst Abbott',
    link: '',
    description: 'Faisal is a motivated, broad-minded, and forward-thinking professional who has a lot of knowledge in his field. He is wonderful to work with and has exceptional expertise in software and technical aspects of wireless communications. Faisal is a dedicated, self-motivated, and very capable technical professional. He is able to adapt to changing work environments, and a very good team player.',
  },
];

const LinkList = (): Node => (
  <View style={styles.container}>
    {links.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <View style={styles.separator} />
          <TouchableOpacity
            accessibilityRole={'button'}
            onPress={() => item.link!=''? openURLInBrowser(item.link):'' }
            style={styles.linkContainer}>
            <Text style={styles.link}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        </React.Fragment>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 14,
    paddingHorizontal: 14,
    fontWeight: '400',
    fontSize: 14,
    color: Colors.dark,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});

export default LinkList;
