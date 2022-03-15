import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import { ClipPath, Defs, Ellipse, Polygon, Svg, Text } from 'react-native-svg';

import { Platform } from 'react-native';
import DamageImage from '../DamageImage';

export const DEFAULT_OPTIONS = {
  background: {
    opacity: 0.35,
  },
  label: {
    fontSize: 5,
  },
  polygons: {
    opacity: 1,
    stroke: {
      strokeWidth: 2.5,
    },
  },
  ellipses: {
    opacity: 1,
    stroke: {
      strokeWidth: 2.5,
    },
  },
};

export default function DamageHighlight({
  damages,
  image,
  options,
  ...passThroughProps
}) {
  const [ref, setRef] = useState(null);

  const handlePress = useCallback(() => (
    Platform.OS === 'native' ? onSavePicture(ref, image.width, image.height) : onSavePicture(image)
  ), [image, onSavePicture, ref]);

  const measureText = useCallback((str, fontSize) => {
    // eslint-disable-next-line max-len
    const widths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2796875, 0.2765625, 0.3546875, 0.5546875, 0.5546875, 0.8890625, 0.665625, 0.190625, 0.3328125, 0.3328125, 0.3890625, 0.5828125, 0.2765625, 0.3328125, 0.2765625, 0.3015625, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.2765625, 0.2765625, 0.584375, 0.5828125, 0.584375, 0.5546875, 1.0140625, 0.665625, 0.665625, 0.721875, 0.721875, 0.665625, 0.609375, 0.7765625, 0.721875, 0.2765625, 0.5, 0.665625, 0.5546875, 0.8328125, 0.721875, 0.7765625, 0.665625, 0.7765625, 0.721875, 0.665625, 0.609375, 0.721875, 0.665625, 0.94375, 0.665625, 0.665625, 0.609375, 0.2765625, 0.3546875, 0.2765625, 0.4765625, 0.5546875, 0.3328125, 0.5546875, 0.5546875, 0.5, 0.5546875, 0.5546875, 0.2765625, 0.5546875, 0.5546875, 0.221875, 0.240625, 0.5, 0.221875, 0.8328125, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.3328125, 0.5, 0.2765625, 0.5546875, 0.5, 0.721875, 0.5, 0.5, 0.5, 0.3546875, 0.259375, 0.353125, 0.5890625];
    const avg = 0.5279276315789471;
    return str
      .split('')
      .map((c) => (c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg))
      .reduce((cur, acc) => acc + cur) * fontSize;
  }, []);

  const checkCollisions = (lb1, lb2) => {
    if (lb1.x + lb1.width >= lb2.x
      && lb1.x + lb1.width <= lb2.x + lb2.width
      && lb1.y + lb1.height >= lb2.y
      && lb1.y + lb1.height <= lb2.y + lb2.height) {
      return true;
    }

    return (lb1.x >= lb2.x
      && lb1.x <= lb2.x + lb2.width
      && lb1.y >= lb2.y
      && lb1.y <= lb2.y + lb2.height);
  };

  const renderDamages = useCallback(() => {
    const damageFigures = [];
    const labels = [];
    const polygonsLabel = [];

    damages.forEach((damage) => {
      const { ellipse, damageType, polygons } = damage;
      const { ellipses: ellipsesStyle, polygons: polygonsStyle, label } = options;

      const strokeType = (polygons ? polygonsStyle : ellipsesStyle);

      const strokes = {
        stroke: strokeType.stroke.color,
        strokeDasharray: damageType === 'dent' ? '5, 5' : '',
        strokeWidth: strokeType.stroke.strokeWidth,
      };

      const boundingBox = {
        xMin: ellipse ? (ellipse.cx - ellipse.rx) : polygons.reduce((polygon, xMinPolygon) => (
          Math.min(polygon.reduce((points, xMin) => (
            Math.min(points[0], xMin)
          ), Number.MAX_VALUE), xMinPolygon)), Number.MAX_VALUE),
        yMin: ellipse ? (ellipse.cy - ellipse.ry) : polygons.reduce((polygon, yMinPolygon) => (
          Math.min(polygon.reduce((points, yMin) => (
            Math.min(points[1], yMin)
          ), Number.MAX_VALUE), yMinPolygon)), Number.MAX_VALUE),
        yMax: ellipse ? (ellipse.cy - ellipse.ry) : polygons.reduce((polygon, yMaxPolygon) => (
          Math.max(polygon.reduce((points, yMax) => (
            Math.max(points[1], yMax)
          ), 0), yMaxPolygon)), 0),
      };

      const labelPosition = {
        x: boundingBox.xMin,
        y: ((boundingBox.yMin - label.fontSize) <= 0
          ? boundingBox.yMax
          : boundingBox.yMin) - label.fontSize / 2,
        textAnchor:
          (boundingBox.xMin + measureText(damage.damageType, label.fontSize)) >= image.width
            ? 'end'
            : 'start',
      };

      const color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;

      const labelInfo = {
        ...labelPosition,
        width: measureText(damageType, label.fontSize),
        height: label.fontSize,
        damageType,
        color,
      };

      const collision = polygonsLabel.filter((lb) => checkCollisions(labelInfo, lb));

      const t = (collision
        .map((c) => c.damageType === damageType)
        .reduce((prev, curr) => prev || curr, false)) === false;

      if ((collision.length <= 0) || t) {
        while (polygonsLabel.filter((lb) => checkCollisions(labelInfo, lb)).length > 0) {
          labelPosition.y -= label.fontSize;
          labelInfo.y -= label.fontSize;
        }
        polygonsLabel.push(labelInfo);

        labels.push(
          <Text
            paintOrder="stroke"
            stroke={color}
            strokeWidth={5}
            fill="white"
            fontSize={label.fontSize}
            {...labelPosition}
          >
            {`${damage.damageType.charAt(0)
              .toUpperCase() + damage.damageType.slice(1)
              .replaceAll('_', ' ')}`}
          </Text>,
        );
      }

      if (polygons) {
        damageFigures.concat(polygons.map((p, index) => (
          <Polygon
            key={`image-${image.id}-polygon-${String(index)}`}
            fillOpacity={0}
            points={p.map((card) => `${card[0]},${card[1]}`).join(' ')}
            {...strokes}
            stroke={collision.length > 0 ? collision[0].color : color}
          />
        )));
      }

      if (ellipse) {
        damageFigures.push(<Ellipse
          key={`image-${image.id}-damage-${damage.id}-ellipse`}
          fillOpacity={0}
          {...ellipse}
          {...strokes}
          stroke={collision.length > 0 ? collision[0].color : color}
        />);
      }
    });

    return [damageFigures, labels];
  }, [damages, image.id, image.width, measureText, options]);

  const [Polygons, Labels] = renderDamages();

  return (
    <Svg
      id={`svg-${image.id}`}
      ref={(rf) => setRef(rf)}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${image.width} ${image.height}`}
      onPress={handlePress}
      onClick={handlePress}
      {...passThroughProps}
    >
      <Defs>
        <ClipPath id={`clip${image.id}`}>{Polygons}</ClipPath>
      </Defs>
      {/* Show background image with a low opacity */}
      <DamageImage
        name={image.id}
        source={image.source}
        opacity={isEmpty(Polygons) ? 1 : options.background.opacity}
      />
      {Labels}
      <DamageImage name={image.id} source={image.source} clip opacity={options.polygons.opacity} />
      {Polygons}
    </Svg>
  );
}

DamageHighlight.propTypes = {
  damages: PropTypes.arrayOf(PropTypes.shape({
    damageType: PropTypes.string,
    ellipse: PropTypes.shape({
      cx: PropTypes.number,
      cy: PropTypes.number,
      rx: PropTypes.number,
      ry: PropTypes.number,
    }),
    id: PropTypes.string,
    polygons: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))),
  })),
  image: PropTypes.shape({
    height: PropTypes.number,
    id: PropTypes.string,
    source: PropTypes.shape({
      uri: PropTypes.string,
    }),
    width: PropTypes.number,
  }).isRequired,
  options: PropTypes.shape({
    background: PropTypes.shape({
      opacity: PropTypes.number,
    }),
    ellipses: PropTypes.shape({
      opacity: PropTypes.number,
      stroke: PropTypes.shape({
        color: PropTypes.string,
        strokeWidth: PropTypes.number,
      }),
    }),
    label: {
      fontSize: PropTypes.number,
    },
    polygons: PropTypes.shape({
      opacity: PropTypes.number,
      stroke: PropTypes.shape({
        color: PropTypes.string,
        strokeWidth: PropTypes.number,
      }),
    }),
  }),
};

DamageHighlight.defaultProps = {
  damages: [],
  options: DEFAULT_OPTIONS,
};
