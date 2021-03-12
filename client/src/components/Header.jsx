import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const Header = ({
  searchValue, searchId, handleSearchIdChange, darkMode, handleDarkMode,
}) => (
  <>
    <div id="pageHeader" className={darkMode ? 'darkMode' : null}>
      <img
        id="logo"
        src={darkMode ? './hopr2invert.png' : './hopr2.png'}
        onClick={handleDarkMode}
      />
      <form
        onSubmit={searchId}
        id="headerSearch"
      >
        <input
          type="text"
          onChange={handleSearchIdChange}
          value={searchValue}
        />
        <BiSearchAlt2
          onClick={searchId}
        />
      </form>
    </div>
    <div>
      <h4 id="announcement">
        SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE/DISCOUNT OFFER -- NEW PRODUCT HIGHLIGHT
      </h4>
    </div>
  </>
);

export default Header;
