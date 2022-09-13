import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from './Label';

export default {
  title: 'Atoms',
  component: Label
} as ComponentMeta<typeof Label>;

export const DefaultLabel: ComponentStory<typeof Label> = () => <Label>SEARCH THE SITE</Label>
