import { motion } from "framer-motion";
import "../styles/gallery.css";

export default function Gallery() {
  return (
    <section className="gallery-vertical">

      <div className="gallery-item">
        <h2>MOMENTS FRAMED BY THE SEA</h2>
        <p>The Residences at The Dubai Beach EDITION comprise four towers with 165 full-service homes, each meticulously designed for elevated beachfront living. Floor-to-ceiling windows frame sunrise-to-sunset views, while every detail reflects EDITION’s global design philosophy, making every home a modern collector’s piece in its own right.</p>
        <motion.img 
          src={require("../assets/images/sunset.jpg")} 
          alt="Sunset"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <div className="gallery-item">
        <h2>AN EXTRAORDINARY SEAFRONT DISTRICT</h2>
        <p>Dubai Harbour is a landmark seafront district developed by Shamal Holding, purpose-built for maritime living. It offers an extraordinary blend of beachfront residences, world-class harbour facilities, curated retail, hospitality and seamless connectivity.</p>
        <motion.img 
          src={require("../assets/images/entrance.jpg")} 
          alt="Entrance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <div className="gallery-item">
        <h2>DWELL WITH DISTINCTION</h2>
        <p>Thoughtfully curated interiors, high-end appliances, and state-of-the-art technology create a seamless blend of luxury and comfort. The outdoors gently flow inward, making light the centrepiece of each room. Paired with textures and tones that feel like a natural extension of life, The Residences become the perfect backdrop for your most memorable moments.</p>
        <motion.img 
          src={require("../assets/images/skyline.jpg")} 
          alt="Skyline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <div className="gallery-item">
        <h2>STAY OCEAN FRONT & CENTRE</h2>
        <p>Located between the waterfronts of Dubai Harbour and its own private beach, The Residences offer refined living in the resort within the vibrant rhythm of modern Dubai. Positioned along JBR’s shoreline, it is the only development in the area with its own exclusive private beach.</p>
        <p><b>To discover more, please visit our Sales Centre located at the Dubai International Financial Centre.</b></p>
      </div>

    </section>
  );
}
