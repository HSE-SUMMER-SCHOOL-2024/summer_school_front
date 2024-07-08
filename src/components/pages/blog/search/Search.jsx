import React, {useState} from 'react';
import './search.css'
import {useDispatch} from "react-redux";
import {setSearchStringAction} from "../../../../store/postReducers.js";

const Search = () => {

    const dispatch = useDispatch()

    const [search, setSearch] = useState('')

  const handleSearch = () => {
      console.log('dispatch', search)
    dispatch(setSearchStringAction(search));
  }

  return (
    <div className='searchContainer'>
      <input onInput={event => setSearch(event.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search