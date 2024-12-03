import React from 'react';
import PropTypes from 'prop-types';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import './MenuButton.css';

const MenuButton = ({ onMenuClick }) => {
  return (
    <div className="menu-button" onClick={onMenuClick}>
      <ViewCompactIcon style={{ fontSize: 40 }} />
      {/* <p>View Menu</p> */}
    </div>
  );
};

MenuButton.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default MenuButton;

