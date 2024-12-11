type HeroSectionProps = {
    title: string;
    description: string;
    imageUrl: string;
  };
  
  const HeroSection: React.FC<HeroSectionProps> = ({ title, description, imageUrl }) => (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        padding: "100px 20px",
        color: "#ffffff",
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
  
  export default HeroSection;
  