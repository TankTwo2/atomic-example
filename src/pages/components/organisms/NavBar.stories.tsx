import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavBar from "./NavBar";

export default {
  title: 'Organisms',
  component: NavBar
} as ComponentMeta<typeof NavBar>;

export const DefaultNavBar: ComponentStory<typeof NavBar> = () => <NavBar />
