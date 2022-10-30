import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { apiPixabay } from 'api/apiPixabay';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGalleryS } from 'components/ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ currentPage, handleTotalHits, query }) => {
  const [dataList2, setDataList2] = useState(null);
  const [isLoadingGallery, setIsLoadingGallery] = useState(null);
  const [thisQuery, setThisQuerry] = useState(null);

  async function handleQueryData(query, currentPage) {
    try {
      setIsLoadingGallery(true);

      const response = await apiPixabay(query, currentPage);
      if (!response.data.hits.length) {
        toast.error('Your query is not correct. Please, input new query');
      } else if (dataList2 === null) {
        setDataList2(response.data.hits);
        setIsLoadingGallery(response.data.totalHits);
        handleTotalHits(response.data.totalHits);
        setThisQuerry(query);
      } else if (query !== thisQuery) {
        setDataList2(response.data.hits);
        setThisQuerry(query);
      } else {
        setDataList2([...dataList2, ...response.data.hits]);
        setThisQuerry(query);
      }
    } catch (e) {
      toast.error(
        'Response for you request is not correct. Please, send your request again'
      );
      console.log(e);
    } finally {
      setIsLoadingGallery(false);
    }
  }

  useEffect(() => {
    if (!query) {
      return;
    }
    handleQueryData(query, currentPage);
    // eslint-disable-next-line
  }, [query, currentPage]);

  return (
    <>
      {isLoadingGallery && <Loader />}
      {dataList2 && (
        <ImageGalleryS>
          {dataList2.map(({ id, largeImageURL, webformatURL, tags }) => (
            <ImageGalleryItem
              key={id}
              photoUrl={largeImageURL}
              photoPreviewUrl={webformatURL}
              tags={tags}
            />
          ))}
        </ImageGalleryS>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

ImageGallery.propTypes = {
  currentPage: PropTypes.number.isRequired,
  dataList1: PropTypes.array,
  handleTotalHits: PropTypes.func.isRequired,
  query: PropTypes.string,
};
