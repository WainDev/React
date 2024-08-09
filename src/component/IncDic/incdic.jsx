import React, { useState } from "react";

import styles from "./IncDic.module.css";

export default function Incdic() {
  const [count, setCount] = useState(0);

  function setIncriment() {
    setCount(count + 1);
  }

  function setDincriment() {
    setCount(count - 1);
  }

  function setClear() {
    setCount(0);
  }

  return (
    <>
      <h1 className={`${styles.Incdic}`}>{count}</h1>
      <button onClick={setIncriment}> Прибавить</button>
      <button onClick={setDincriment}> Убавить</button>
      <button onClick={setClear}>Стереть</button>
    </>
  );
}
