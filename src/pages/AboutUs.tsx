import HeroSection from "../components/HeroSection";

const AboutUs = () => {
  return (
    <div>
      <HeroSection
        title="About Us"
        description="Learn more about our vision, mission, and values."
        imageUrl="/path/to/about-us-hero-image.jpg"
      />
      <section>
        <h2>Timeline of Tellida</h2>
        <p>Explore our journey and milestones over the years.</p>
      </section>
    </div>
  );
};

export default AboutUs;
