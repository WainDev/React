import React from "react";

import styles from "./Post.module.css";
import Button from "../UI/button/Button";

function PostItems({ title, print }) {
  return (
    <>
      <div className={styles.post}>
        <div className={styles.post__info}>
          <h2 className={styles.post__title}>{title}</h2>
          <p className={styles.post__print}>{print}</p>
        </div>
        <Button disabled>Удалить</Button>
      </div>
    </>
  );
}

export default PostItems;
