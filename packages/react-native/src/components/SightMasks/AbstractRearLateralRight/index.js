import * as React from 'react';
import PropTypes from 'prop-types';

export default function AbstractRearLateralRight({ color, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="503" height="376" fill="none" {...props}>
      <path stroke={color} strokeWidth="3.14976" d="M482.325 2.32562c-74.894.52496-254.605 4.93462-374.296 18.37358L23.5107 131.466 13.0115 240.132l-7.34939 7.35c0 19.598 5.56459 60.79 27.82289 68.769 8.8193 0 48.8212 6.65 67.72 9.975-5.9498-37.623 4.304-112.867 92.918-112.867 30.272-.175 92.497 22.154 99.217 112.867h188.985" />
      <path stroke={color} strokeWidth="3.14976" d="M137.427 376c-16.455-15.068-26.773-36.728-26.773-60.799 0-45.518 36.9-82.418 82.418-82.418 45.519 0 82.419 36.9 82.419 82.418 0 24.071-10.318 45.731-26.773 60.799M486 14.4c-80.494.6999-251.141 5.9845-289.778 21.5233-3.325 22.0483 3.15 67.5097 55.646 72.9697L486 122.017M133.752 20.6995c4.9 6.8245 11.129 22.4683-3.149 30.4476L85.456 87.8943 47.134 100.493m-7.3495 8.4 49.8712-11.5494 3.6747 34.1224-28.8728 33.072-41.4718-9.974" />
    </svg>
  );
}

AbstractRearLateralRight.propTypes = {
  color: PropTypes.string,
};
AbstractRearLateralRight.defaultProps = {
  color: '#fff',
};
