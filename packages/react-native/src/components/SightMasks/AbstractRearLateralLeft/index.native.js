import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import PropTypes from 'prop-types';

const xml = (color) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="503" height="376" fill="none">
    <path stroke="${color}" stroke-width="3.16548" d="M21.0485 2.99994c75.268.52758 255.8765 4.95925 376.1645 18.46526l84.94 111.3198 10.552 109.209 7.386 7.386c0 19.696-5.593 61.093-27.962 69.113-8.863 0-49.065 6.682-68.058 10.024 5.98-37.81-4.326-113.43-93.381-113.43-30.424-.176-92.96 22.264-99.713 113.43H21.0485"/>
    <path stroke="${color}" stroke-width="3.16548" d="M367.668 378.539c16.537-15.143 26.907-36.911 26.907-61.102 0-45.745-37.085-82.83-82.83-82.83-45.746 0-82.83 37.085-82.83 82.83 0 24.191 10.369 45.959 26.906 61.102M17.355 15.1346c80.8956.7034 252.394 6.0144 291.224 21.6307 3.341 22.1584-3.165 67.8467-55.923 73.3337L17.355 123.288M371.361 21.4655c-4.924 6.8586-11.185 22.5804 3.165 30.5997l45.372 36.9305 38.514 12.6623m7.386 8.441-50.12-11.6068-3.694 34.2928 29.017 33.237 41.679-10.024"/>
  </svg>
`;

export default function AbstractRearLateralLeft({ color, ...props }) { return (<SvgXml xml={xml(color)} height="100%" {...props} />); }

AbstractRearLateralLeft.propTypes = {
  color: PropTypes.string,
};
AbstractRearLateralLeft.defaultProps = {
  color: '#fff',
};
