import React from "react";
import { FC } from "react";
import style from "./Component2.module.scss";

export const Component2: FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.btnWrapper}>
        <div className={style.slideBtn}></div>
      </div>
      <div className={style.imgWrapper}></div>
      <p className={style.ideasText}>IDEAS</p>
    </div>
  );
};
