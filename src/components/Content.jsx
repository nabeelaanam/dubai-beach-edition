import { motion } from "framer-motion";
import "../styles/content.css";

export default function Content({ onRegister }) {
  return (
    <motion.section
      className="content"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1><b>A COAST OF ITS OWN</b></h1>
      <p>
        Introducing the only EDITION in the world with its own private beach. An extension of the Dubai Beach EDITION hotel, the Residences offer the rare experience of living in a resort. With an exclusive shoreline and uninterrupted views of the sea and the harbour, serenity and sophistication are yours to own.</p>

      <p>
        Composed of four interconnected buildings and 165 residences, this low-rise sets a high standard for coastal living. As architecture by RSHP and interiors by Rockwell Group come together, the outdoors effortlessly flow inward, turning each moment into a mosaic of light and luxury.</p>

      <div className="actions">
        <button onClick={onRegister}>BROCHURE</button>
        <button onClick={onRegister}>FACTSHEET</button>
        <button onClick={onRegister}>PAYMENT PLAN</button>
      </div>
    </motion.section>
  );
}
