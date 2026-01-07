import { motion } from "framer-motion";
import "../styles/section.css";

export default function ImageSection({ image1, image2, reverse }) {
  const img1 = require(`../assets/images/${image1}`);
  const img2 = require(`../assets/images/${image2}`);

  return (
    <motion.section
      className={`image-section ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="image-row">
        <div className="img-box">
          <img src={img1} alt="" />
        </div>

        <div className="img-box">
          <img src={img2} alt="" />
        </div>
      </div>
    </motion.section>
  );
}
