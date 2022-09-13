import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchDateBox from "./SearchDateBox";

export default {
  title: 'Molecules',
  component: SearchDateBox
} as ComponentMeta<typeof SearchDateBox>;

export const DefaultSearchDateBox: ComponentStory<typeof SearchDateBox> = () => <SearchDateBox />
