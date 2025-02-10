import React, { useEffect, useState, useRef } from "react";
import "./Home.css";

const sliderData = [
  {
    image: "/images/bed.jpg",
    text: "Your Bright Future is Our Success",
    subtext: "Empowering future leaders at Nexora Academy",
  },
  {
    image: "/images/education2.jpg",
    text: "Innovation Meets Tradition",
    subtext: "Combining cutting-edge teaching methods with time-honored values for a balanced education.",
  },
  {
    image: "/images/education.jpg",
    text: "Where Every Student Matters",
    subtext: "Creating a supportive and inclusive environment to help every child achieve their full potential.",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const missionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Automatically cycle through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Observe when the Welcome section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => {
      if (missionRef.current) {
        observer.unobserve(missionRef.current);
      }
    };
  }, []);

  return (
    <div className="home">
      
      {/* Image Slider Section */}
      <div className="slider">
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>
            <div className="text-container">
              <h1>{slide.text}</h1>
              <p>{slide.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Welcome Section with Scroll Animation */}
      <section className={`mission-section ${isVisible ? "show" : ""}`} ref={missionRef}>
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="welcome-heading">Welcome</h2>
            <p>
              At Nexora Academy, we strive to nurture future leaders by instilling
              knowledge, values, and skills that drive success in academics and life...
            </p>
            <a href="/mission" className="discover-btn">Full Message</a>
          </div>
          <div className="mission-image">
            <img src="/images/principal.jpg" alt="Principal's Picture" />
            <p className="principal-name">
              Mrs. Fatima Umar<br /><span>Principal & CEO</span>
            </p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="news-section">
        <h2 className="news-title">Latest News & Events</h2>
        <div className="news-container">
          
          {/* Admissions 2025 */}
          <div className="news-card">
            <img src="/images/admission.jpg" alt="Admissions 2025" className="news-image"/>
            <div className="news-card-content">
              <h3>Admissions Open for 2025</h3>
              <p>We are now accepting applications for the 2025 academic year. Secure your spot today!</p>
              <a href="/admissions" className="news-btn primary-btn">Apply Now</a>
            </div>
          </div>

          {/* Inter-House Sports */}
          <div className="news-card">
            <img src="/images/sports.jpg" alt="Inter-House Sports" className="news-image"/>
            <div className="news-card-content">
              <h3>Inter-House Sports Competition</h3>
              <p>Get ready for an exciting sports event where students compete in various athletic activities!</p>
              <a href="/sports" className="news-btn primary-btn">Learn More</a>
            </div>
          </div>

        {/* Inter-House Sports */}
        <div className="news-card">
            <img src="/images/sports.jpg" alt="Inter-House Sports" className="news-image"/>
            <div className="news-card-content">
              <h3>Parent-Teacher Association Meeting</h3>
              <p>Join us for an important meeting where parents and teachers come together to discuss student progress, academic performance, and school improvements.</p>
              <a href="/sports" className="news-btn primary-btn">Learn More</a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
