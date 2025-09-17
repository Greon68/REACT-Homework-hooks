import S from './Data.module.css'


export const Data = ({data})=>{

    // console.log ("data Data - ",data);
    
    return( 
        <div className={S.container}>           
            <h2> Статус запроса : <em>{data.status}</em></h2>
        </div> 
    )

}