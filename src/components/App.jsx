import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searcbar } from './Searchbar/Searchbar';

export const App = () => {
  return (
    <div>
      <Searcbar />
      <ImageGallery />
      <Button buttonText={'Load more'} />
    </div>
  );
};
