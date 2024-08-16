import React from "react";

import styles from "./Input.module.css";

function Input(props) {
  return <input {...props} type="text" className={styles.Input} />;
}

export default Input;
