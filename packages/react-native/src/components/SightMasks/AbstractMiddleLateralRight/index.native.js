import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import PropTypes from 'prop-types';

const xml = (color) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="503" height="376" fill="none">
    <path stroke="${color}" stroke-linecap="round" stroke-width="3.35132" d="M434.907 133.537 34.4236 108.96c-7.2612-.558-23.6827-3.239-31.27907-9.4952"/>
    <path stroke="${color}" stroke-width="3.35132" d="m514.22 139.681-35.189-2.793M226.566 19.5911l20.667 102.2159c9.123 30.348 23.906 100.986 10.054 140.755l4.468 28.486-9.495 29.045"/>
    <path stroke="${color}" stroke-linecap="round" stroke-width="3.35132" d="M505.284 105.05c-41.333-29.0448-154.719-87.1344-277.601-87.1344C189.887 15.4952 90.8371 14.1174-3 27.9696"/>
    <path stroke="${color}" stroke-linecap="round" stroke-width="3.35132" d="M6.49658 12.3301C84.8803 3.39325 265.442-6.66072 360.62 24.6183c25.135 6.3304 96.071 31.7261 178.737 82.6667M-.206055 218.436C18.7848 223.65 58.3304 250.609 64.5862 316.742l450.7528 6.703c1.676-16.385 8.044-51.052 20.108-58.649"/>
    <path stroke="${color}" stroke-width="3.35132" d="m431.555 100.023 5.027-6.1442c40.216 0 44.312 28.6722 41.333 43.0082h-41.333l-5.027-12.288v-24.576Z"/>
    <rect width="56.9437" height="10.7111" x="272.776" y="159.771" stroke="${color}" stroke-width="2.89134" rx="5.35555" transform="rotate(1.78 272.776 159.771)"/>
    <rect width="56.9437" height="10.7111" x="41.6453" y="144.893" stroke="${color}" stroke-width="2.89134" rx="5.35555" transform="rotate(1.78 41.6453 144.893)"/>
    <path stroke="${color}" stroke-linecap="round" stroke-width="3.35132" d="M5.37875 378c25.52795-13.026 43.00865-39.569 43.00865-70.195 0-31.511-18.5062-58.699-45.24287-71.29"/>
  </svg>
`;

export default function AbstractMiddleLateralRight({ color, ...props }) { return (<SvgXml xml={xml(color)} height="100%" {...props} />); }

AbstractMiddleLateralRight.propTypes = {
  color: PropTypes.string,
};
AbstractMiddleLateralRight.defaultProps = {
  color: '#fff',
};
