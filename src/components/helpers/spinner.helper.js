import React, { useContext } from "react";
import ReactLoading from 'react-loading';
import LoadingContext from "../../contexts/loading.context";

const Spinner = () => {
  const { loading } = useContext(LoadingContext);

  return ( 
    <>
    {!loading && 
      <div className="spinner">
        <ReactLoading type={'spin'} color={'#5f45bb'} height={40} width={40} />
      </div>
    }
    </>
  );
};

export default Spinner;
