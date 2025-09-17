
import { Data } from '../Data/Data';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';
import { useJsonFetch } from '../../hooks/useJsonFetch';


export const Main =({url}) =>{
  // console.log ( 'Main props - ', url)
   
  const [data, loading, error] = useJsonFetch(url);

  return (
    <>
    
      { loading && <Loader />}
      { data &&  <Data data={data}/>}
      { error && <Error errorObject={error}/>  }


    </>
  )
}


