import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Atoms',
  component: Input
} as ComponentMeta<typeof Input>;

export const DefaultInput: ComponentStory<typeof Input> = () => <Input/>;
