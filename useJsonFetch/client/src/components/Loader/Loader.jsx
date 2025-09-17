import S from './Loader.module.css'

export const Loader =()=> {

    return (
        <div className={S.loaderBody}>
            <div className={S.loader}> Загрузка...</div>
          
        </div>
    )
}