import * as React from 'react';
import PropTypes from 'prop-types';

export default function AbstractRear({ color, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="502" height="376" fill="none" {...props}>
      <path stroke={color} strokeLinecap="round" strokeWidth="3.08516" d="m89.9834 162.484 3.5993 17.997H430.893l4.628-16.968M388.216 25.7097C264.398 3.9079 153.572 14.226 113.637 22.1103c-7.405 7.4044-24.6814 42.5066-32.3943 59.1321l3.5993 4.1135c141.506 33.3201 283.491 13.8832 336.796 0l-33.422-59.6462Z" />
      <path stroke={color} strokeLinecap="round" strokeWidth="3.08516" d="m63.7595 90.4977 38.5645 11.8263 49.877 34.451-4.628 24.167-94.0974 2.571-24.167-12.341M433.464 90.4977 394.9 102.324l-49.877 34.451 4.628 24.167 94.097 2.571 24.167-12.341" />
      <path stroke={color} strokeLinecap="round" strokeWidth="3.08516" d="M248.354.498657c41.773.548403 90.252 4.130073 143.46 12.870343l43.707 77.6429c9.941 4.7991 30.954 26.6351 35.479 75.5861V293.09c-3.599 7.712-13.266 24.269-23.139 28.794-30.258 4.181-100.451 9.436-199.507 8.528" />
      <path stroke={color} strokeLinecap="round" strokeWidth="3.08516" d="M249.897 0c-41.772.548403-90.251 4.13007-143.459 12.8704L62.7314 90.5133C52.7903 95.3124 31.777 117.148 27.2521 166.1v126.491c3.5993 7.713 13.2662 24.27 23.1387 28.795 30.2577 4.181 100.4512 10.148 199.5062 9.24" />
      <path stroke={color} strokeWidth="3.08516" d="M187.165 246.298h151.173v39.0786H187.165z" />
      <path stroke={color} strokeLinecap="round" strokeWidth="3.08516" d="M37.0211 309.039v51.251c-.1714 4.113 2.0568 12.443 12.3407 12.854h38.5645c2.9138-.514 8.7413-3.805 8.7413-12.854v-34.119M460.202 311.601v49.362c.172 4.114-2.056 12.444-12.34 12.855h-38.565c-2.913-.514-8.741-3.805-8.741-12.855v-34.451" />
    </svg>
  );
}

AbstractRear.propTypes = {
  color: PropTypes.string,
};
AbstractRear.defaultProps = {
  color: '#fff',
};
