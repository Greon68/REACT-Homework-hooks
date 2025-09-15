import S from './List.module.css'
import { loadData } from '../../api/loadData'
import { useEffect, useState } from 'react'
import { Details } from '../Details/Details';

export const List = ()=>{
    const [list, setList]= useState([]);
    const [selection, setSelection]=useState('')

    useEffect(()=>{
        loadData('users.json')
            .then( data => setList(data))
    },[]  )

    console.log("selection-", selection)

    return(
        <div className={S.container}>
            <div className={S.list}>
                {
                    list.map ( (item)=>(
                        <div 
                            key={item.id}
                            className={S.user}
                            onClick={ ()=>setSelection(item) }
                            
                            > 
                            {item.name} 
                        </div>
                    ))
                }
            </div>

            { selection && (
                 <div className={S.details}>
                    <Details {...selection}/>
                </div>
            )}
           

        </div>
    )
}