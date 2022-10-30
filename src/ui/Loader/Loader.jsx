import { BallTriangle } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';
export const Loader = () => {
  return (
    <LoaderWrap>
      <BallTriangle
        height={200}
        width={200}
        radius={5}
        color="#3f51b5"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </LoaderWrap>
  );
};
