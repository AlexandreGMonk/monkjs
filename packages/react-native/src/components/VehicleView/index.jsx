import React, { useCallback, useState } from 'react';
import Svg, { G, Path, Ellipse, Defs, ClipPath, Rect } from 'react-native-svg';
import isBoolean from 'lodash.isboolean';

// eslint-disable-next-line import/prefer-default-export
export function VehicleViewFront() {
  const [activeParts, setActiveParts] = useState({});

  const handlePress = useCallback((name) => {
    const activePart = activeParts[name];

    setActiveParts((prev) => ({
      ...prev,
      [name]: isBoolean(activePart) ? !activePart : true,
    }));
  }, [activeParts]);

  const getFillColor = useCallback((name) => {
    const activePart = activeParts[name];
    return activePart ? '#FA603D' : '#d4dfe7';
  }, [activeParts]);

  return (
    <Svg width="572" height="368" viewBox="0 0 572 368" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#vehicleViewFront-clip0)">
        <Rect width="572" height="367.33" fill="white" />
        <Rect width="572" height="367.33" />
        <Path
          onClick={() => handlePress('rockerPanelLeft')}
          name="rockerPanelLeft"
          opacity="0.7"
          d="M446.505 157.812L361.135 223.522L358.442 239.68L444.081 171.277L446.505 157.812Z"
          fill={getFillColor('rockerPanelLeft')}
        />
        <Path
          opacity="0.7"
          d="M439.772 40.9341C438.91 40.0724 432.95 39.1388 430.077 38.7797C450.975 56.8769 458.534 80.9705 459.701 90.7552L461.586 116.878C466.972 114.723 471.37 119.391 472.896 121.994V85.6385C470.096 73.1428 449.647 50.629 439.772 40.9341Z"
          fill="#7AF7FF"
        />
        <Path
          opacity="0.7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M399.915 40.3955C405.301 39.3183 418.82 37.4332 429.808 38.5104C438.874 46.4997 457.546 68.3492 459.7 91.8324L461.585 116.878L446.504 157.812L422.537 176.394V120.917L399.915 40.3955ZM407.994 47.3974L421.19 91.8324C430.257 87.6133 448.013 76.4821 446.505 65.71C442.555 59.4263 433.309 46.5356 427.923 45.243C427.115 45.243 409.071 45.243 407.994 47.3974Z"
          fill="#F1F3F4"
        />
        <Path
          opacity="0.7"
          d="M420.92 91.8324L407.725 47.3974C408.802 45.243 426.845 45.243 427.653 45.243C433.039 46.5356 442.285 59.4263 446.235 65.71C447.743 76.4821 429.987 87.6133 420.92 91.8324Z"
          fill="black"
        />
        <Path
          opacity="0.7"
          d="M350.363 130.881L297.31 172.893C302.05 188.405 296.054 198.746 292.463 201.977L315.623 213.827C324.887 190.99 336.718 183.485 341.476 182.588C360.22 177.202 362.392 207.812 361.135 223.791L370.022 217.058V160.774L361.135 132.497C353.164 137.668 350.632 133.574 350.363 130.881Z"
          fill="#5CCC68"
        />
        <Path
          opacity="0.7"
          d="M89.4561 173.97C89.4561 168.584 91.6105 163.467 92.6877 161.582C111.862 185.712 173.568 192.642 202.025 193.09C199.87 196.771 195.562 204.293 195.562 204.94C180.05 198.477 162.168 214.994 155.166 224.06C153.012 228.154 147.446 228.1 144.933 227.561L109.654 214.904C105.991 213.827 104.537 209.608 104.268 207.633C102.76 188.243 93.7649 177.112 89.4561 173.97Z"
          fill="black"
        />
        <Path
          opacity="0.7"
          d="M195.292 205.209L202.025 192.821C247.806 192.821 284.072 179.625 296.55 172.354C303.444 185.712 296.37 197.13 291.972 201.17L224.915 218.674C211.342 220.829 199.511 210.595 195.292 205.209Z"
          fill="#FA603D"
        />
        <Path
          opacity="0.7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M81.0339 171.325C75.4701 181.67 67.7233 204.143 81.0599 211.672C77.7385 213.557 72.5499 223.091 78.3669 246.143L180.433 287.077H239.141L296.772 271.188C300.542 255.838 309.537 222.875 315.354 213.826L292.194 201.977L290.568 202.332L224.868 219.482C211.295 221.637 199.464 211.403 195.245 206.017L195.414 205.706C179.925 199.356 162.105 215.821 155.118 224.868C152.964 228.962 147.398 228.908 144.885 228.369L109.606 215.712C105.944 214.635 104.489 210.416 104.22 208.441C102.712 189.051 93.7173 177.92 89.4084 174.778C89.4084 174.749 89.4085 174.721 89.4086 174.692C89.4085 174.721 89.4084 174.75 89.4084 174.778C88.159 173.112 83.4548 171.815 81.0339 171.325ZM89.45 173.461C89.4591 173.315 89.4697 173.169 89.4816 173.023C89.4807 173.023 89.4799 173.023 89.479 173.023C89.468 173.173 89.4583 173.319 89.45 173.461ZM196.953 202.874L195.79 205.013C196.035 204.489 196.426 203.733 196.905 202.845L196.953 202.874Z"
          fill="#2B52BE"
        />
        <Path
          opacity="0.7"
          d="M80.8384 170.469C79.9767 149.786 91.072 141.205 96.7273 139.499C86.3861 150.056 89.9948 157.542 92.6878 161.313C90.1025 165.19 89.4562 171.277 89.4562 173.97C88.1635 172.246 83.1724 170.918 80.8384 170.469Z"
          fill="#FA603D"
        />
        <Path
          opacity="0.7"
          d="M370.022 114.185L363.828 92.6403C358.873 102.12 352.607 122.264 350.094 131.151C354.403 140.63 365.175 129.176 370.022 122.264H401.261C406.432 122.264 408.263 116.878 408.533 114.185C409.394 103.197 393.99 100.271 386.18 100.181C376.701 101.043 371.458 109.876 370.022 114.185Z"
          fill="#FA603D"
        />
        <Path
          opacity="0.7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M422.537 120.917L399.915 40.3955C377.563 46.8588 371.818 55.297 370.561 58.9774L346.863 110.145L342.554 114.454L349.825 131.151L350.176 131.132C352.741 122.104 358.926 102.288 363.829 92.9095L363.876 93.074C370.906 77.7819 387.551 48.0495 398.298 50.6289C402.518 62.209 410.633 87.9005 409.34 98.0263C407.303 99.6962 404.691 101.748 401.766 103.924C405.907 106.076 408.928 109.419 408.533 114.454C408.264 117.147 406.432 122.533 401.262 122.533H370.023C367.834 125.653 364.438 129.699 360.975 132.327C364.23 138.147 368.077 153.192 369.753 160.774V217.058L422.537 176.394V120.917Z"
          fill="black"
        />
        <Path
          opacity="0.7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M364.098 92.6928C371.128 77.4007 387.773 47.6685 398.52 50.2479C402.739 61.8279 410.854 87.5194 409.562 97.6452C407.525 99.3151 404.913 101.367 401.988 103.543C397.093 100.999 390.634 100.118 386.403 100.069C376.923 100.931 371.681 109.764 370.244 114.073L364.098 92.6928Z"
          fill="#F1F3F4"
        />
        <Path
          opacity="0.7"
          d="M370.83 58.4388C352.302 53.6991 279.447 48.3848 245.335 46.3202L293.271 32.5857C374.062 26.5534 423.614 32.855 438.156 40.1262C400.992 31.7778 372.177 50.8983 370.83 58.4388Z"
          fill="#FA603D"
        />
        <Path
          opacity="0.7"
          d="M178.279 99.9115C175.262 98.8343 175.226 95.5129 175.586 93.9868L212.211 67.0565L230.523 54.3993L245.335 46.3202C293.594 47.8283 349.107 54.8481 370.83 58.1695L346.862 110.145L342.284 114.723C332.32 124.149 315.085 124.598 307.813 124.149C234.832 116.878 191.295 105.657 178.279 99.9115Z"
          fill="#274B9F"
        />
        <Path
          opacity="0.7"
          d="M178.817 100.181C174.724 98.4574 175.137 95.3335 175.855 93.9869C134.921 107.991 105.836 130.881 96.4106 140.576C85.9077 151.887 91.0245 158.35 91.0245 159.428C104.597 185.927 174.598 193.45 207.902 193.898C249.913 192.606 284.474 179.715 296.503 173.431L349.825 131.151L342.554 114.723C331.566 123.987 315.534 124.867 308.891 124.149C252.876 118.093 198.207 108.345 178.817 100.181Z"
          fill="#7AF7FF"
        />
        <Path
          opacity="0.7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M333.666 186.627C341.835 188.243 357.15 199.931 353.056 233.755C350.722 248.118 342.5 278.136 328.28 283.307C318.047 286.808 295.91 289.663 289.231 273.074L296.503 271.188C302.427 246.861 318.155 195.891 333.666 186.627ZM324.912 263.573C330.935 264.926 338.197 255.436 341.132 242.376C344.068 229.316 341.565 217.631 335.542 216.278C329.52 214.924 322.258 224.414 319.322 237.474C316.387 250.534 318.89 262.219 324.912 263.573Z"
          fill="black"
        />
        <Ellipse
          opacity="0.7"
          cx="330.228"
          cy="239.925"
          rx="11.1771"
          ry="24.2373"
          transform="rotate(12.6672 330.228 239.925)"
          fill="#F1F3F4"
        />
        <Path
          opacity="0.7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M461.586 116.878C464.099 115.98 469.88 115.747 472.897 121.994C473.974 139.23 472.573 174.67 458.354 178.548H440.042C439.144 178.189 437.349 177.202 437.349 176.124L443.812 171.277L446.505 157.812L461.586 116.878ZM458.512 165.358C461.573 165.976 465.504 159.308 467.291 150.464C469.078 141.62 468.045 133.949 464.983 133.33C461.922 132.712 457.991 139.38 456.204 148.224C454.417 157.068 455.45 164.739 458.512 165.358Z"
          fill="black"
        />
        <Ellipse
          opacity="0.7"
          cx="461.747"
          cy="149.631"
          rx="5.65537"
          ry="16.3374"
          transform="rotate(11.4233 461.747 149.631)"
          fill="#F1F3F4"
        />
      </G>
      <Defs>
        <ClipPath id="vehicleViewFront-clip0">
          <Rect width="572" height="367.33" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
