import React, { useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Input from '../components/Input';
import Header from '../components/Header';
import InfoBar from '../components/InfoBar';
import Image from '../components/Image';
import Error from '../components/Error';
import Loading from '../components/Loading';

import styled from 'styled-components';
import useFetchImage from '../utils/Hooks/useFetchImage';

import Container from '@material-ui/core/Container';
import InfiniteScroll from 'react-infinite-scroll-component';

const Gallery = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const removeImage = (index) => {
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  };
  const searchTerm = (term) => setQuery(term);
  const addPageNumber = () => setPageNumber(pageNumber + 1);
  const [images, setImages, errors, isLoading] = useFetchImage(
    pageNumber,
    query
  );

  return (
    <>
      {errors.length > 0 ? (
        <Error errors={errors} />
      ) : (
        <AppWrapper>
          <Header />
          <Input searchTerm={searchTerm} />
          <StyledMain>
            <Container>
              <InfoBar images={images} addPageNumber={addPageNumber} />

              <AnimateSharedLayout type='crossfade'>
                {/* infinite scroll */}
                <StyledInfiniteScroll
                  dataLength={images.length}
                  next={addPageNumber}
                  hasMore={true}>
                  {/* mapping */}
                  {images.map((image, index) => (
                    <motion.div key={index} layoutId={index}>
                      <Image
                        index={index}
                        imageSize={image.urls.small}
                        alt={image.alt_description}
                        removeImage={removeImage}
                        show={() => setShowPreview(index)}
                      />
                    </motion.div>
                  ))}
                </StyledInfiniteScroll>

                {/* module */}
                <AnimatePresence>
                  {showPreview && (
                    <StyledModule
                      layoutId={showPreview}
                      onClick={() => setShowPreview(false)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}>
                      <StyledModuleImage
                        src={images[showPreview].urls.regular}
                        width='600px'
                        height='600px'
                        alt={images[showPreview].alt_description}
                      />
                    </StyledModule>
                  )}
                </AnimatePresence>
              </AnimateSharedLayout>
            </Container>

            {isLoading && <Loading />}
          </StyledMain>
        </AppWrapper>
      )}
    </>
  );
};

// Styles

const StyledModuleImage = styled.img`
  border-radius: 10px;
  object-fit: cover;
  max-width: 95%;
`;
const StyledModule = styled(motion.div)`
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AppWrapper = styled.div`
  min-height: 100.5vh;
`;
const StyledInfiniteScroll = styled(InfiniteScroll)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
const StyledMain = styled.main`
  margin: 40px 0;
`;

export default Gallery;
