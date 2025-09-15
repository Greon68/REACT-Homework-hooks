import { useEffect, useState } from 'react'
import { loadData } from '../../api/loadData';
import S from './Details.module.css'



export const Details = ({id}) => {
    console.log('id-',id);
    
    const qyeryParam = `?key=${Math.random()}`

    const [data , setData]= useState(null);

    useEffect(()=>{
        loadData(`${id}.json`)
            .then( json => setData(json))
    },[id] )

    console.log("Данные о пользователе data -",data)
  
    return ( 
            data && (
                <div className={S.user}>
                    <img src={data.avatar + qyeryParam} className={S.image} />
                    <h2> Name : {data.name}</h2>
                    <h2> Company : <em className={S.details}>{data.details.company}</em> </h2>      
                    <h2> City: <em className={S.details}>{data.details.city}</em> </h2>
                    <h2> Position : <em className={S.details}>{ data.details.position }</em> </h2>

                </div>
            )
        )
}

