import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const Header = ({ searchValue, searchId, handleSearchIdChange }) => (
  <>
    <div id="pageHeader">
      <h1>LOGO</h1>
      {/* <img
        src="public/HOPR.png"></img> */}
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
        SITE-WIDE ANNOUNCMENT MESSAGE! -- SALE/DISCOUNT OFFER -- NEW PRODUCT HIGHLIGHT
      </h4>
    </div>
  </>
);

export default Header;
