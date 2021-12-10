import React from 'react';

import styles from './index.scss';

const Options: React.FC = () => {
  return (
    <div className={styles.content}>
      <h1>Options</h1>
      <h2 className='global-style'>全局classname</h2>
    </div>
  );
};

export default Options;
