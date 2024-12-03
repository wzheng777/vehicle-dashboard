import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Settings';
import './MenuButton.css';

const MenuButton = ({ onMenuClick }) => {
  return (
    <div className="menu-button" onClick={onMenuClick}>
      <MenuIcon style={{ fontSize: 40 }} />
      <p>View Menu</p>
    </div>
  );
};

MenuButton.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default MenuButton;

