import HeroSection from "../components/HeroSection";

const CaseStudy = () => {
  return (
    <div>
      <HeroSection
        title="Case Studies"
        description="Explore our successful projects and learn how we deliver value."
        imageUrl="/path/to/case-study-hero-image.jpg"
      />
      <section>
        <h2>Service-Based Categories</h2>
        <p>
          Browse case studies by categories like technology, outsourcing, and
          innovation.
        </p>
      </section>
    </div>
  );
};

export default CaseStudy;
