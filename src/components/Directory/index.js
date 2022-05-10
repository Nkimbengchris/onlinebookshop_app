import React from 'react';
import NewBooks from '../../assets/newbook.jpg';
import UsedBooks from '../../assets/oldbook.jpg';
import './styles.scss';

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${NewBooks})`,
          }}
        >
          <a href="jklkl">NewBooks</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${UsedBooks})`,
          }}
        >
          <a href="hjk"> Used Books </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
