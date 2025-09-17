
import './App.css'

import { Main } from './components/Main/Main';

function App() {

  // пути для тестирования работы программы:
  const url1 = '/data';
  const url2 = '/error';
  const url3 = '/loading'

  return (
    <>
     <h2>Homework: Hooks - useJsonFetch </h2>

     <Main url = {url1}/>
     {/* <Main url = {url2}/> */}
     {/* <Main url = {url3}/> */}

    </>
  )



}

export default App
