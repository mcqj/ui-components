import React from 'react';
import { QRCode } from './QRCode';

export default {
  title: 'Example/QRCode',
  component: QRCode,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <QRCode {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'QRCode',
};