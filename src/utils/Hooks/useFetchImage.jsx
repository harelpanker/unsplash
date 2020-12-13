import { useState, useEffect } from 'react';
import axios from 'axios';

const api = process.env.REACT_APP_UNSPLASH_API;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

const useFetchImage = (pageNumber, query) => {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetch() {
    const url = query === null ? 'photos?' : `search/photos?query=${query}&`;
    axios
      .get(`${api}/${url}client_id=${secret}&page=${pageNumber}`)
      .then((res) => {
        query === null ? fetchRandom(res) : fetchSearch(res);
        setIsLoading(false);
      })
      .catch((e) => {
        setErrors(['Unable to fetch images']);
        setIsLoading(false);
      });
  }

  function fetchSearch(res) {
    pageNumber > 1
      ? setImages([...images, ...res.data.results])
      : setImages([...res.data.results]);
  }

  function fetchRandom(res) {
    setImages([...images, ...res.data]);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch();
    // eslint-disable-next-line
  }, [pageNumber, query]);

  return [images, setImages, errors, isLoading];
};

export default useFetchImage;
