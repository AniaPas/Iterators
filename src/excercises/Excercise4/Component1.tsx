import React from "react";
import { FC } from "react";
import style from "./Component1.module.scss";
export const Component1: FC = () => {
  return (
    <div className={style.container}>
      <button className={style.plusBtn}>+</button>
      <div className={style.imageContainer}></div>
      <h1 className={style.name}>Monica Doe</h1>

      <div className={style.breakLine}></div>
      <h2 className={style.positionName}>Position</h2>
      <h2 className={style.position}>Front-end developer</h2>
      <h2 className={style.companyName}>Company</h2>
      <h2 className={style.company}>Adobe</h2>
      <p className={style.number}>Employee # 2901346</p>
      <button className={style.moreBtn}>...</button>
    </div>
  );
};
