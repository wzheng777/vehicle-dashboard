import React from 'react';
import PropTypes from 'prop-types';
import './MenuButton.css';

const MenuButton = ({ onMenuClick }) => {
  return (
    <div className="menu-button" onClick={onMenuClick}>
    </div>
  );
};

MenuButton.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default MenuButton;

