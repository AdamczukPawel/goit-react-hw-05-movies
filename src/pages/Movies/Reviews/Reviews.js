import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../../services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      const movieReview = await fetchMovieReviews(movieId);
      setReviews(movieReview.results);
    };
    getMovieReviews();
  }, []);

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>Written by {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
