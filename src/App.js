import Usergrid from './Components/Usergrid'
import Orggrid from './Components/Orggrid'
import Header from './Components/Header'
import Searchcontext from "./Context/Searchcontext";
import { Fragment, useState } from 'react';

function App() {

  const [searchTerm,setsearchTerm] =useState()

  function getSearch(search){
    setsearchTerm(search)
  }

  return (
    <Searchcontext.Provider value={searchTerm}>
    <Fragment >
      <Header searchTerm={getSearch}/>
      <Usergrid />
      <Orggrid />
    </Fragment>
    </Searchcontext.Provider>
  )
}

export default App;
