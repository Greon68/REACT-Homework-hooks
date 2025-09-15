import { useEffect, useState } from 'react'
import { loadData } from '../../api/loadData';
import S from './Details.module.css'

export const Details = ({id,name}) => {

    console.log('id-',id);
    console.log('name-',name);

    const [data , setData]= useState({});

    useEffect(()=>{
        loadData(`${id}.json`)
            .then( json => setData(json))
    },[id] )

    console.log("Данные о пользователе data -",data)
    console.log("data.name - ", data.name)
    console.log("data.id - ", data.id)
    console.log("data.details - ", data.details)
    // console.log("data.details.city - ", data.details.city)

 
    return ( 
            data && (
                <div className={S.user}>
                    <img src={data.avatar} className={S.image} />
    
                    <h2> Name : {data.name}</h2>
                     <h2> Id: {data.id}</h2>
                     <h2> avatar: {data.avatar}</h2>

                     {/* *** Код ниже не срабатывает *** */}
                    {/* <h2> Company : {data.details.company}</h2> */}     
                    {/* <h2> City: {data.details.city}</h2> */}
                    
                </div>
            )
        )
}

