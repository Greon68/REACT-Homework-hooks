import { useEffect, useState } from "react"
import { BASE_URL } from "../config/app";

export const useJsonFetch = ( url )=>{
       
    const [data, setData]= useState(null);
    const [hasError , setError]= useState(null);
    const [isLoading, setLoading] = useState(false);

    const newUrl = `${BASE_URL}${url}`;
    // console.log ( 'newUrl - ', newUrl) 
     
    const fetchData = async () => {

       setLoading(true);
  
      try {
        const response = await fetch(newUrl);
 
        if (!response.ok) {
          throw new Error(response.statusText);
        }
  
        const data= await response.json();
        
        setData(data);
        setError(null);
  
      } catch (e) {
         setError(e);
  
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();   
    }, []);

    return [data, isLoading, hasError]


}