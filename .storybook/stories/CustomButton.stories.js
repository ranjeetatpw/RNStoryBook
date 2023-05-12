import React from 'react'

import { CustomButton } from '../../components/Atoms/CustomButton'
import { View } from 'react-native';

const CustomButtonMeta = {
  title: 'Custom Button',
  component: CustomButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
}

export default CustomButtonMeta;

export const Confirm = {
  args: {
    text: "Confirm",
    colorModifier: "confirm"
  }
}

export const Cancel = {
  args: {
    text: "Cancel",
    colorModifier: "cancel"
  }
}

export const Complementary = {
  args: {
    text: "complementary",
    colorModifier: "complementary"
  }
}

export const Disabled = {
  args: {
    text: "Disabled",
    disabled: true
  }
}