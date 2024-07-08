import {useState} from "react";
import {getAllPosts} from "../../../../api/userApi.js";

// eslint-disable-next-line react/prop-types
const Search = ({posts = [], setPosts}) => {

  const [searchItem, setSearchItem] = useState('')

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
  }

  useState(() => {
    getAllPosts().then(data => {
      setPosts(data)
      posts = data
      console.log(data)
    })
  }, [])


  const data = posts.filter((post) =>
    post.toLowerCase().includes(setSearchItem.toLowerCase())
  )

  setPosts(data)

  return (
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
    </div>
  )
}

export default Search