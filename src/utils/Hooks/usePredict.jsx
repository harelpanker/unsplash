import { useState } from 'react';
import '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

export default function usePredict() {
  const [predicts, setPredicts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const predict = (img) => {
    setIsLoading(true);

    mobilenet.load().then((model) => {
      // Classify the image.
      model.classify(img).then((predictions) => {
        setPredicts(predictions);
        setIsLoading(false);
        // console.log(predictions);
      });
      setIsLoading(false);
    });
  };

  return [predict, predicts, isLoading];
}
