import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link to={"details/" + movie.id}>
      <h2 key={movie.id} className="movie-title">{movie.title}</h2>
      <img
        className="img-post"
        src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
        alt=""
      />
      </Link>
      </motion.div>
    </motion.div>
  );
}
