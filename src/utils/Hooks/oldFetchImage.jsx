import { useState, useEffect } from 'react';
import axios from 'axios';

const api = process.env.REACT_APP_UNSPLASH_API;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

const useFetchImage = (pageNumber, query) => {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSearch = async () => {
    try {
      const res = await axios.get(
        `${api}/search/photos/?client_id=${secret}&page=${pageNumber}&query=${query}`
      );
      pageNumber > 1
        ? setImages([...images, ...res.data.results])
        : setImages([...res.data.results]);
      setIsLoading(false);
    } catch (err) {
      const someErr = await err.response.data.errors[0];
      setErrors(someErr);
      setIsLoading(false);
    }
  };
  const fetchRandom = async () => {
    try {
      const res = await axios.get(
        `${api}/photos/?client_id=${secret}&page=${pageNumber}`
      );
      setImages([...images, ...res.data]);
      setIsLoading(false);
    } catch (err) {
      const someErr = await err.response.data.errors[0];
      setErrors(someErr);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    query !== null ? fetchSearch() : fetchRandom();
  }, [pageNumber]);

  useEffect(() => {
    setIsLoading(true);
    if (query === null) return;
    fetchSearch();
  }, [query]);

  return [images, setImages, errors, isLoading];
export default useFetchImage;
