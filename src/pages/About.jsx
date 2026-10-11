
import { Link } from 'react-router-dom';
import './About.css';

const features = [
  {
    number: '01',
    icon: '⛰️',
    title: 'Discover New Trails',
    description:
      'Explore beautiful forts, mountain peaks, forest paths, and hidden destinations.',
  },
  {
    number: '02',
    icon: '🥾',
    title: 'Find Your Next Adventure',
    description:
      'Learn about trek difficulty, duration, and elevation to find a trail that suits you.',
  },
  {
    number: '03',
    icon: '🌿',
    title: 'Explore Responsibly',
    description:
      'Respect nature, leave no trace, and help keep our mountains beautiful for everyone.',
  },
];

function About() {
  return (
    <main className="about-page">
      {/* Hero section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-eyebrow">
            MORE THAN JUST A DESTINATION
          </span>

          <h1>
            Find Your Trail.
            <br />
            <span>Feel the Wild.</span>
          </h1>

          <p>
            TrekMate helps you discover incredible trekking
            destinations, explore new trails, and find inspiration
            for your next mountain adventure.
          </p>

          <Link to="/explore" className="about-primary-btn">
            Explore Treks <span>↗</span>
          </Link>
        </div>

        <div className="about-hero-caption">
          <span>THE MOUNTAINS ARE CALLING</span>
          <span>WESTERN GHATS, INDIA</span>
        </div>
      </section>

      {/* Our story */}
      <section className="about-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85"
            alt="Mountain peaks surrounded by nature"
          />
          <div className="about-image-note">
            <span>Take the scenic route.</span>
          </div>
        </div>

        <div className="about-story-content">
          <span className="about-section-label">OUR STORY</span>

          <h2>
            Every great adventure
            <br />
            starts with a <em>trail.</em>
          </h2>

          <p>
            Sometimes, all you need is a destination, a little
            inspiration, and the courage to take the first step.
          </p>

          <p>
            TrekMate is designed to make discovering trekking
            destinations simpler. From iconic mountain forts to
            peaceful forest trails, we bring inspiration for your
            next outdoor experience into one place.
          </p>

          <p>
            Whether you are planning your first trek or looking
            for a new place to explore, your next adventure
            starts here.
          </p>

          <Link to="/explore" className="about-text-link">
            Find your next trail <span>→</span>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="about-discover">
        <div className="about-section-heading">
          <span className="about-section-label">THE TREKMATE WAY</span>
          <h2>Made for the love of the outdoors.</h2>
          <p>
            Less time wondering where to go. More time dreaming
            about where the trail will take you.
          </p>
        </div>

        <div className="about-feature-grid">
          {features.map((feature) => (
            <article className="about-feature-card" key={feature.number}>
              <div className="about-feature-top">
                <span className="about-feature-icon">
                  {feature.icon}
                </span>
                <span className="about-feature-number">
                  {feature.number}
                </span>
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}

export default About;
