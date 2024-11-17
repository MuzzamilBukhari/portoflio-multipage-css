import { FC } from 'react';
import { FiPenTool } from 'react-icons/fi';
import { LuFolderCog } from "react-icons/lu";
import { GiLaptop } from 'react-icons/gi';
import "../../styles/services/Services.page.css"
const Service: FC = () => {
  return (
    <div className="service-container">
      <div className="animate-slide-left">
        <section className="service-title-section">
          <h1 className="service-title">
            My <span className='color'>Services</span>
          </h1>
          <p className="service-subtitle">
            We specialize in offering solutions designed to meet your goals.
          </p>
        </section>

        <section className="service-grid">
          <div className="service-card">
            <div className="service-icon-wrapper">
              <GiLaptop className="service-icon" />
            </div>
            <h2 className="service-card-title">Web Development</h2>
            <p className="service-card-description">
              We build high-performance websites with modern designs that offer seamless user experiences across all devices.
            </p>
          </div>

          <div className="service-card1">
            <div className="service-icon-wrapper1">
              <FiPenTool className="service-icon" />
            </div>
            <h2 className="service-card-title">Graphic Design</h2>
            <p className="service-card-description">
              We create visually striking graphics that capture your brand’s essence and leave a lasting impression on your audience.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon-wrapper">
              <LuFolderCog className="service-icon" />
            </div>
            <h2 className="service-card-title">UI/UX Design</h2>
            <p className="service-card-description">
              We design user-friendly interfaces that ensure smooth navigation and a delightful experience, keeping your users engaged and satisfied.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;
