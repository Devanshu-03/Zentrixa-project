import "../styles/Services.css";

const Services: React.FC = () => {
  return (
    <div className="page">
      <h1>Our Services</h1>

      <div className="services-grid">
        <div className="service-card">
          <h3>Software Development</h3>
          <p>
            Custom software solutions designed to meet your business needs
            using modern, scalable, and secure technologies.
          </p>
          <div className="stars">★★★★★</div>
        </div>

        <div className="service-card">
          <h3>Web Application Development</h3>
          <p>
            End-to-end web application development focused on performance,
            responsiveness, and user experience.
          </p>
          <div className="stars">★★★★★</div>
        </div>

        <div className="service-card">
          <h3>Backend & API Development</h3>
          <p>
            Robust backend systems and RESTful APIs built for scalability,
            security, and seamless integration.
          </p>
          <div className="stars">★★★★★</div>
        </div>

        <div className="service-card">
          <h3>Cloud & Deployment</h3>
          <p>
            Secure cloud deployment and infrastructure setup on AWS,
            DigitalOcean, and other cloud platforms.
          </p>
          <div className="stars">★★★★★</div>
        </div>

        <div className="service-card">
          <h3>Data Analytics & BI Solutions</h3>
          <p>
            Data analytics solutions that convert raw data into actionable
            insights for better business decisions.
          </p>
          <div className="stars">★★★★★</div>
        </div>

        <div className="service-card">
          <h3>IT Support & Maintenance</h3>
          <p>
            Continuous monitoring, maintenance, and technical support to
            ensure system stability and performance.
          </p>
          <div className="stars">★★★★★</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
