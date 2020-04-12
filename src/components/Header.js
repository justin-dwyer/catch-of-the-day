import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
    <header className="top">
      <h1>Catch
        <span className="ofThe">
          <span className="of">O'</span>
          <span className="the">The</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        <span>{props.storeName}</span>
      </h3>
    </header>
);

Header.propTypes = {
  storeName: PropTypes.string.isRequired
}

export default Header;
