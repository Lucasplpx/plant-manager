import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import Button from '../components/Button';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😁',
};

const Confirmation: React.FC = () => {
  const navigation = useNavigation();

  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Params;

  function handleInit() {
    navigation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={sytles.container}>
      <View style={sytles.content}>
        <Text style={sytles.emoji}>{emojis[icon]}</Text>

        <Text style={sytles.title}>{title}</Text>

        <Text style={sytles.subtitle}>{subtitle}</Text>

        <View style={sytles.footer}>
          <Button title={buttonTitle} onPress={handleInit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20,
  },
});

export default Confirmation;
