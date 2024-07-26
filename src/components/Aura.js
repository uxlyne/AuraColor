import React from 'react';
import PropTypes from 'prop-types';
import './Aura.css';

const applyAttributes = (attributes) => {
  const styles = {
    backgroundColor: attributes.fillColor,
    borderColor: attributes.rimBorderColor,
    borderStyle: attributes.borderType,
    filter: attributes.vibrancy > 7 ? 'brightness(1.2)' : 'none',
    opacity: 1 // Ensure high opacity for visibility
  };

  let classNames = 'aura-layer';

  if (attributes.texture === 'smooth') {
    classNames += ' smooth-texture';
  } else if (attributes.texture === 'rough') {
    classNames += ' rough-texture';
  }

  return { styles, classNames };
};

const Aura = ({ layers }) => {
  const layer1Attributes = applyAttributes(layers.layer1);
  const layer2Attributes = applyAttributes(layers.layer2);
  const layer3Attributes = applyAttributes(layers.layer3);
  const layer4Attributes = applyAttributes(layers.layer4);

  return (
    <div className="aura-container">
      <div className={`aura-layer layer1 ${layer1Attributes.classNames}`} style={layer1Attributes.styles}></div>
      <div className={`aura-layer layer2 ${layer2Attributes.classNames}`} style={layer2Attributes.styles}></div>
      <div className={`aura-layer layer3 ${layer3Attributes.classNames}`} style={layer3Attributes.styles}></div>
      <div className={`aura-layer layer4 ${layer4Attributes.classNames}`} style={layer4Attributes.styles}></div>
    </div>
  );
};

Aura.propTypes = {
  layers: PropTypes.shape({
    layer1: PropTypes.object.isRequired,
    layer2: PropTypes.object.isRequired,
    layer3: PropTypes.object.isRequired,
    layer4: PropTypes.object.isRequired,
  }).isRequired,
};

export default Aura;









