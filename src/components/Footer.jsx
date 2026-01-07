import "../styles/footer.css";
import ShamalLogo from "../assets/images/shamal.png";
import DottedLogo from "../assets/images/dotted.png";
import EditionLogo from "../assets/images/edition-grey.png";

export default function Footer() {
  return (
    <footer className="footer">
      
      {/* LEFT COLUMN */}
      <div className="footer-left">
        <h4>SALES CENTRE</h4>

        <p>
          Located at Gate Village 8<br />
          Dubai International Financial Centre<br />
          Dubai, UAE
        </p>

        <p className="phone">+9714 5976000</p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="footer-right">
        
  

        <img src={EditionLogo} alt="Edition Logo" className="edition-logo" />
      </div>

      {/* SHAMAL + DEVELOPMENT */}
      <div className="footer-mid">
        <div>
          <p className="small-grey">OWNED BY</p>
          <img src={ShamalLogo} alt="Shamal Logo" className="shamal-logo" />
        </div>

        <div>
          <p className="small-grey">A DEVELOPMENT BY</p>
          <img src={DottedLogo} alt="Development Logo" className="dev-logo" />
        </div>
      </div>

      {/* DISCLAIMER */}
      <p className="disclaimer">
        Disclaimer: The Residences at The Dubai Beach EDITION are not owned, developed or sold by Marriott 
        International, Inc. or its affiliates (“Marriott”). ED RESIDENCES L.L.C and HARBOUR PROPCO L.L.C, 
        the project companies and subsidiaries of Shamal Holding L.L.C. use the EDITION trademarks under a 
        license from Marriott, which has not confirmed the accuracy of any of the statements or representations 
        made herein.
      </p>

    </footer>
  );
}
