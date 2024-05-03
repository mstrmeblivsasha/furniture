"use client";

import React from "react";
import styles from "./OrderBtn.module.scss";

type OrderBtnTypes = {
  type: any;
  className?: string;
  onClick?: () => void;
  title?: string;
  id?: any;
};

const OrderBtn = ({ className, title, onClick, id, type }: OrderBtnTypes) => {
  return (
    <button
      type={type}
      className={`hoverLink ${styles.btn} ${className}`}
      onClick={onClick}
      id={id}
    >
      {title}
    </button>
  );
};

export default OrderBtn;
