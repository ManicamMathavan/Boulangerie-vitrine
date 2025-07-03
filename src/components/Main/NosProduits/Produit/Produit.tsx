import { motion } from 'framer-motion';
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
    <motion.div
      className={style.produit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.img
        src={src}
        alt="Produit artisanal de boulangerie"
        width={width}
        ref={imgRef}
        height={height}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div 
        className={style.overlay}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className={style.description}>{children}</div>
      </motion.div>
    </motion.div>
  );
}

export default Produit;
