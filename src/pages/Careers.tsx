import HeroSection from "../components/HeroSection";

const Careers = () => {
  return (
    <div>
      <HeroSection
        title="Join Our Team"
        description="Explore career opportunities and grow with Tellida."
        imageUrl="/path/to/careers-hero-image.jpg"
      />
      <section>
        <h2>Life at Tellida</h2>
        <p>
          At Tellida, we foster innovation and collaboration, ensuring a fulfilling
          work environment for all.
        </p>
      </section>
      <section>
        <h2>Current Openings</h2>
        <p>
          Browse our latest job openings and find your next career opportunity with
          us.
        </p>
      </section>
    </div>
  );
};

export default Careers;
