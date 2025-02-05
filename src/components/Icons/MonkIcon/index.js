import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, Polygon, Circle } from 'react-native-svg';

export default function MonkIcon({ color, hidePupil, ...passThroughProps }) {
  return (
    <Svg
      width={782}
      height={199}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 782 199"
      {...passThroughProps}
    >
      <Path
        fill={color}
        d="M334.35.69A98.65,98.65,0,1,0,433,99.33,98.64,98.64,0,0,0,334.35.69Zm0,165.12a66.48,66.48,0,1,1,66.48-66.48A66.48,66.48,0,0,1,334.35,165.81Z"
        transform="translate(-0.21 0.72)"
      />
      {!hidePupil ? <Circle cx="334.14" cy="100.05" r="22.52" fill="black" /> : null}
      <Polygon
        fill={color}
        points="0 0 97.98 100 198 0 198 198 165.94 198 165.48 79.5 99 144.45 0.48 46.5 0 0"
      />
      <Polygon
        fill={color}
        points="434.72 0 567.09 120.44 567.09 0 598.97 0 598.97 198 434.72 48.73 434.72 0"
      />
      <Polygon
        fill={color}
        points="781.59 0 736.59 0 638.72 99 737.34 198 781.59 198 682.97 99 781.59 0"
      />
    </Svg>
  );
}

MonkIcon.propTypes = {
  color: PropTypes.string,
  hidePupil: PropTypes.bool,
};

MonkIcon.defaultProps = {
  color: '#274b9f',
  hidePupil: false,
};
