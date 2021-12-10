import React from 'react';

import styles from './index.scss';

const Newtab: React.FC = () => {
  return (
    <div className={styles.content}>
      <h1>Newtab</h1>
      <h2 className='global-style'>全局classname</h2>
    </div>
  );
};

export default Newtab;
