import { useEffect } from "react";

export default function Filter({
  setActiveGenre,
  activeGenre,
  setFiltered,
  popular,
}) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      <button
        className={activeGenre === 27 ? "active" : ""}
        onClick={() => setActiveGenre(27)}
      >
        Horror
      </button>
      <button
        className={activeGenre === 16 ? "active" : ""}
        onClick={() => setActiveGenre(16)}
      >
        Cartoon
      </button>
      <button
        className={activeGenre === 12 ? "active" : ""}
        onClick={() => setActiveGenre(12)}
      >
        Adventure
      </button>
    </div>
  );
}
