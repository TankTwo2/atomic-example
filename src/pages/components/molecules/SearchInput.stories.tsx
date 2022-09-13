import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBox from './SearchBox';

export default {
  title: 'Molecules',
  component: SearchBox
} as ComponentMeta<typeof SearchBox>;

export const DefaultSearchBox: ComponentStory<typeof SearchBox> = () => <SearchBox />
