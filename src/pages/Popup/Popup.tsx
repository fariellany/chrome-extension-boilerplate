import React from 'react';

import styles from './index.scss';

const Popup: React.FC = () => {
  return (
    <div className={styles.content}>
      <h1>Popup</h1>
      <h2 className='global-style'>全局classname</h2>
    </div>
  );
};

export default Popup;
