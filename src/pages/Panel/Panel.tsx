import React from 'react';

import styles from './index.scss';

const Panel: React.FC = () => {
  return (
    <div className={styles.content}>
      <h1>Panel</h1>
      <h2 className='global-style'>全局classname</h2>
    </div>
  );
};

export default Panel;
