import HeroSection from "../components/HeroSection";

const Services = () => {
  return (
    <div>
      <HeroSection
        title="Our Services"
        description="Discover how Tellida can support your business with tailored solutions."
        imageUrl="/path/to/services-hero-image.jpg"
      />
      <section>
        <h2>Key Factors of Tellida's Service</h2>
        <ul>
          <li>Customized solutions for every business type</li>
          <li>Focus on quality and efficiency</li>
          <li>Comprehensive support and training</li>
        </ul>
      </section>
      <section>
        <h2>Legal Process Outsourcing</h2>
        <p>
          Explore our expertise in legal process outsourcing, delivering accuracy
          and speed for legal operations.
        </p>
      </section>
    </div>
  );
};

export default Services;
