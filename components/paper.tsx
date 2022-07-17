import React, { useEffect, useState } from "react";
import scss from "./paper.module.scss";
import logo1 from "../public/images/logo1.png";
import logo2 from "../public/images/logo2.png";
import logo3 from "../public/images/logo3.png";
import logo4 from "../public/images/logo4.png";

export default function Paper({ children }: any) {
  const [step, setStep] = useState(0);
  const images = [logo1, logo2, logo3, logo4];

  useEffect(() => {
    changeImage();
  }, []);

  const changeImage = () => {
    let _step = 0;
    setInterval(() => {
      if (_step < 3) {
        _step = _step + 1;
        setStep((prev) => _step);
      }
    }, 1000);
  };

  return (
    <div className={scss.paper}>
      {children}
      <div className={scss.icon}>
        {images[step] && <img src={images[step].src}></img>}
      </div>
    </div>
  );
}
