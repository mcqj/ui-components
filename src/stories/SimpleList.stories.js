import React from 'react';

import { SimpleList } from './SimpleList';

export default {
  title: 'Example/SimpleList',
  component: SimpleList,
};

const Template = (args) => <SimpleList {...args} />;

export const Default = Template.bind({});
const items = [...new Array(10)].map((_val,index) => `Test ${index}`);
Default.args = {
  items,
};