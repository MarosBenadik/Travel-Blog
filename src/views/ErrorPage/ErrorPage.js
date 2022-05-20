import React from 'react';

import NavBar from '../../components/NavBar/NavBar';

const Error = () => {
  return (
    <div>
      {NavBar()}
        <p>Ops, Page does not exist</p>
    </div>
  );
}

export default Error;