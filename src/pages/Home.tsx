import HeroSection from "../components/HeroSection";
import HeroImage from "../assets/Hero.jpg"; 
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Welcome to Tellida"
        description="Innovative solutions for global business success."
        imageUrl={HeroImage}
      />

      {/* Brands Associated */}
      <section>
        <h2>Brands Associated</h2>
        <p>We collaborate with leading global brands to create value-driven solutions.</p>
        <ul>
          <li>Brand 1</li>
          <li>Brand 2</li>
          <li>Brand 3</li>
          <li>And more...</li>
        </ul>
      </section>

      {/* Who We Are */}
      <section>
        <h2>Who We Are</h2>
        <p>
          At Tellida, we specialize in delivering cutting-edge services and fostering
          innovation in every project we undertake. Our team is committed to excellence.
        </p>
      </section>

      {/* Services */}
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Customized Business Solutions</li>
          <li>Legal Process Outsourcing</li>
          <li>IT Consulting</li>
        </ul>
      </section>

      {/* Unique Selling Point */}
      <section>
        <h2>Unique Selling Point</h2>
        <p>
          We combine expertise, innovation, and global presence to offer unmatched
          solutions for your business.
        </p>
      </section>

      {/* Why Tellida and Positive Impact */}
      <section>
        <h2>Why Choose Tellida?</h2>
        <p>Our solutions positively impact businesses by improving efficiency, reducing costs, and driving growth.</p>
        <p>
          Positive Impact:
          <ul>
            <li>50% Efficiency Improvement</li>
            <li>30% Cost Reduction</li>
            <li>Enhanced Customer Experience</li>
          </ul>
        </p>
      </section>

      {/* Meet Our Staff */}
      <section>
        <h2>Meet Our Staff</h2>
        <p>
          Our team comprises industry-leading professionals dedicated to bringing your
          business vision to life.
        </p>
      </section>

      {/* Case Studies */}
      <section>
        <h2>Case Studies</h2>
        <p>Learn how we’ve helped businesses like yours achieve success.</p>
        <button>Explore Case Studies</button>
      </section>

      {/* Global Presence */}
      <section>
        <h2>Global Presence</h2>
        <p>
          Tellida operates in multiple countries, offering localized support and global
          expertise.
        </p>
        <img src="/path/to/global-map-image.jpg" alt="Global Presence Map" />
      </section>

      {/* Testimonials */}
      <section>
        <h2>Testimonials</h2>
        <blockquote>
          "Tellida transformed our operations and helped us achieve remarkable growth."
          - Happy Client
        </blockquote>
      </section>

      {/* Closure CTA and Corporate Video */}
      <section>
        <h2>Experience the Tellida Difference</h2>
        <p>Watch our corporate video to learn more about our vision and services.</p>
        <video controls>
          <source src="/path/to/corporate-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Tellida. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
