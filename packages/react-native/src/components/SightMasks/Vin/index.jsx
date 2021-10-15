import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
  <svg width="502" height="376" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity=".3" fill-rule="evenodd" clip-rule="evenodd" d="M502 0H0v376h502V0ZM388 149H113v78h275v-78Z" fill="#000"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M114.033 149c-.571 0-1.033.462-1.033 1.033v16.934a1.032 1.032 0 1 0 2.065 0v-15.902h15.902a1.032 1.032 0 1 0 0-2.065h-16.934ZM114.033 227a1.032 1.032 0 0 1-1.033-1.033v-16.934a1.032 1.032 0 1 1 2.065 0v15.902h15.902a1.032 1.032 0 1 1 0 2.065h-16.934ZM386.967 227c.571 0 1.033-.462 1.033-1.033v-16.934a1.032 1.032 0 1 0-2.065 0v15.902h-15.902a1.032 1.032 0 1 0 0 2.065h16.934ZM386.967 149c.571 0 1.033.462 1.033 1.033v16.934a1.032 1.032 0 1 1-2.065 0v-15.902h-15.902a1.032 1.032 0 1 1 0-2.065h16.934Z" fill="#fff"/>
  </svg>
`;

export default (props) => <SvgXml xml={xml} height="100%" {...props} />;
