import "./Explore.css"
import { useState } from "react";

const treks = [
  {
    name: 'Rajgad Fort',
    location: 'Pune, Maharashtra',
    difficulty: 'Moderate',
    elevation: 1376,
    duration: '4–6 hrs',
    image:'',
    description: 'Explore the historic capital of Chhatrapati Shivaji Maharaj.',
  },
  {
    name: 'Torna Fort',
    location: 'Velhe, Pune',
    difficulty: 'Difficult',
    elevation: 1405,
    duration: '5–7 hrs',
    image:'',
    description: 'A challenging climb with beautiful mountain views.',
  },
  {
    name: 'Kalsubai Peak',
    location: 'Ahmednagar district',
    difficulty: 'Difficult',
    elevation: 1646,
    duration: '5–7 hrs',
    image:"",
    description: 'Trek to the highest peak in Maharashtra.',
  },
  {
    name: 'Harishchandragad',
    location: 'Ahmednagar district',
    difficulty: 'Difficult',
    elevation: 1422,
    duration: '6–9 hrs',
    image:'',
    description: 'Discover ancient caves and the famous Konkan Kada.',
  },
  {
    name: 'Lohagad Fort',
    location: 'Lonavala, Maharashtra',
    difficulty: 'Easy',
    elevation: 1033,
    duration: '2–3 hrs',
    image:'',
    description: 'A scenic fort trek suitable for beginners.',
  },
  {
    name: 'Visapur Fort',
    location: 'Near Lonavala',
    difficulty: 'Moderate',
    elevation: 1084,
    duration: '3–5 hrs',
    image:'',
    description: 'Enjoy forest trails and beautiful monsoon scenery.',
  },
];


function Explore() {

      const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState('All');
  const [saved, setSaved] = useState([]);

  const filteredTreks = treks.filter((trek) => {
    const matchesSearch =
      trek.name.toLowerCase().includes(search.toLowerCase()) ||
      trek.location.toLowerCase().includes(search.toLowerCase());

    const matchesDifficulty =
      difficulty === 'All' || trek.difficulty === difficulty;

    return matchesSearch && matchesDifficulty;
  });

  function toggleSaved(name) {
    setSaved((previous) =>
      previous.includes(name)
        ? previous.filter((item) => item !== name)
        : [...previous, name]
    );
  }

    return(
        <>
        <main className="explore-page">
            <section className="explore-hero">
                <p className="explore-tagline">
                    FEEL MORE · ENJOY MORE
                </p>
                <h1>Find your next mountain story</h1>
                <p className="explore-description">from misty monsoon triail to ancient hills forts, discover the wild beauty of the sahyadris - one trek at a time</p>

                <div className="explore-search">
                    <input type="text" 
                    placeholder="Search treks, forts, or destinations..."/>
                    <button type="button">Search</button>
                </div>
        </section>
          <section className="explore-content">
        <div className="explore-heading">
          <h2>Find Your Next Adventure</h2>
          <p>{filteredTreks.length} treks found</p>
        </div>

        <div className="explore-filters">
          {['All', 'Easy', 'Moderate', 'Difficult'].map((level) => (
            <button
              key={level}
              className={
                difficulty === level ? 'filter active' : 'filter'
              }
              onClick={() => setDifficulty(level)}
            >
              {level === 'All' ? 'All Treks' : level}
            </button>
          ))}
        </div>

        <div className="trek-grid">
          {filteredTreks.map((trek) => (
            <article className="trek-card" key={trek.name}>
              <div className="trek-image">
                <img src={trek.image} alt={trek.name} />

                <span
                  className={`difficulty ${trek.difficulty.toLowerCase()}`}
                >
                  {trek.difficulty}
                </span>

                <button
                  className={`save-button ${
                    saved.includes(trek.name) ? 'saved' : ''
                  }`}
                  onClick={() => toggleSaved(trek.name)}
                  aria-label={`Save ${trek.name}`}
                >
                  {saved.includes(trek.name) ? '♥' : '♡'}
                </button>
              </div>

              <div className="trek-info">
                <p className="trek-location">⌖ {trek.location}</p>
                <h3>{trek.name}</h3>
                <p className="trek-description">{trek.description}</p>

                <div className="trek-meta">
                  <span>▲ {trek.elevation} m</span>
                  <span>◷ {trek.duration}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredTreks.length === 0 && (
          <p className="no-results">
            No treks found. Try another search or difficulty.
          </p>
        )}
      </section>
        </main>    
        
        </>
    )
}

export default Explore;