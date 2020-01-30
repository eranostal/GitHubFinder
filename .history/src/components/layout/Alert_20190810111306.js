import React from 'react';
import AlertContext from '../context/alert/AlertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  return (
    alert !== null && <div className={`alert-${alert.type}`}>{alert.msg}</div>
  );
};

export default Alert;
