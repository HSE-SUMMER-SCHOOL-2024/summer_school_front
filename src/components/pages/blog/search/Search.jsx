import {useState} from "react";
import {getAllPosts} from "../../../../api/userApi.js";

const Search = () => {

  const [searchItem, setSearchItem] = useState('')

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
  }

  const [posts, setPosts] = useState([])
  const [filteredUsers, setFilteredUsers] = useState(posts)

  useState(() => {
    getAllPosts().then(data => {
      setPosts(data)
      console.log(data)
    })
  }, [])


  const filteredItems = posts.filter((user) =>
    user.firstName.toLowerCase().includes(setSearchItem.toLowerCase())
  );

  setFilteredUsers(filteredItems);

  return (
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
      {filteredUsers}
    </div>
  )
}

export default Search