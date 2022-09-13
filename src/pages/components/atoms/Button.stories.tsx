import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Atoms',
  component: Button
} as ComponentMeta<typeof Button>;

export const DefaultButton: ComponentStory<typeof Button> = () => <Button/>;
