import { useRef } from "react";
import style from "./Produit.module.css";
export interface produitImg {
  width?: number;
  height?: number;
  src: string;
  children?: React.ReactNode;
}

function Produit(props: produitImg) {
  const { src, children } = props;
  let { height, width } = props;
  const imgRef = useRef<HTMLImageElement>(null);
  if (!height) {
    height = imgRef.current?.clientHeight;
  }
  if (!width) {
    width = imgRef.current?.clientWidth;
  }
  return (
    <div
      className={style.produit}
    >
      <img
        src={src}
        alt=""
        width={width}
        ref={imgRef}
        height={height}
      />
      <div className={style.overlay}>
        <div className={`${style.description} pProperty`}>{children}</div>
      </div>
    </div>
  
  );
}

export default Produit;
