import HeroSection from "../components/HeroSection";

const ContactUs = () => {
  return (
    <div>
      <HeroSection
        title="Get in Touch"
        description="Contact us for inquiries, support, or collaboration."
        imageUrl="/path/to/contact-us-hero-image.jpg"
      />
      <section>
        <h2>Contact Points</h2>
        <p>
          <strong>Email:</strong> contact@tellida.com
        </p>
        <p>
          <strong>Phone:</strong> +1-800-555-1234
        </p>
      </section>
      <section>
        <h2>Global Contacts</h2>
        <p>We have representatives in multiple countries to assist you better.</p>
      </section>
    </div>
  );
};

export default ContactUs;
