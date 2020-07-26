import { useState, useEffect } from "react"
import { GetGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading:true
    });

    useEffect(() =>{
        GetGifs(category)
        .then( imgs => {
           
        
            setstate({
                    data: imgs,
                    loading:false
                })
      
        } );
    },[category])

    return state;
}
