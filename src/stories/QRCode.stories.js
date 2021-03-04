import React from 'react';
import { QRCode } from './QRCode';

export default {
  title: 'Example/QRCode',
  component: QRCode,
};

const Template = (args) => <QRCode {...args} />;

export const Default = Template.bind({});
