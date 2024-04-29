import React from "react";
import styles from "./OrderBtn.module.scss";

type OrderBtnTypes = {
  className?: string;
  onClick?: () => {};
  title?: string;
  id?: any;
};

const OrderBtn = ({ className, title, onClick, id }: OrderBtnTypes) => {
  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick} id={id}>
      {title}
    </button>
  );
};

export default OrderBtn;
