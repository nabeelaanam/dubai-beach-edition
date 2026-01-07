import "../styles/map.css";

export default function MapSection() {
  return (
    <section className="map-wrapper">
      <iframe
        title="Dubai Beach Edition Residences Location"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3613.36440772269!2d55.13823000000001!3d25.089523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA1JzIyLjMiTiA1NcKwMDgnMTcuNiJF!5e0!3m2!1sen!2sin!4v1767738075127!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      
    </section>
  );
}
