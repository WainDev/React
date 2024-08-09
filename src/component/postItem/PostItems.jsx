import React from "react";

import styles from "./Post.module.css";

function PostItems({ titile, print }) {
  return (
    <>
      <div className={styles.post}>
        <div className={styles.post__info}>
          <h2 className={styles.post__title}>{titile}</h2>
          <p className={styles.post__print}>{print}</p>
        </div>
        <div className={styles.post__btns}>
          <button className={styles.post__btn}>Удалить</button>
        </div>
      </div>
    </>
  );
}

export default PostItems;
