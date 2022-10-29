import { useState } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { AppWrap } from './App.styled';

export const App = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(0);

  const handleFormSubmit = onSubmit => {
    setQuery(onSubmit);
    setCurrentPage(1);
  };
  const handleLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };
  const handleTotalHits = totalHits => {
    setTotal(totalHits);
  };
  return (
    <AppWrap>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery
        handleTotalHits={handleTotalHits}
        currentPage={currentPage}
        query={query}
        // dataList1={dataList}
      />
      {total > 12 && (
        <Button onClick={handleLoadMore} buttonText={'Load more'} />
      )}
    </AppWrap>
  );
  // }
};
