import { useRef } from "react";

export interface produitImg {
  width?: number;
  height?: number;
  src: string;
  text: string;
}

function Produit(props: produitImg) {
  const {src, text } = props;
  let {height, width} = props;
  const imgRef=useRef<HTMLImageElement>(null);
  if (!height){
    height=imgRef.current?.clientHeight;
  }
  if (!width){
    width=imgRef.current?.clientWidth;
  }
  return (
    <>
      <div>
          <img
            style={{ position: "absolute", zIndex: -1 }}
            src={src}
            alt=""
            width={width}
            ref={imgRef}
            height={height}
          />
          <p style={{position: "absolute",left:0, transform: `translateY(${height}px)`}}>{text}</p>
      </div>
    </>
  );
}

export default Produit;
