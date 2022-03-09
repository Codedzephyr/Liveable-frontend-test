import React, {useState, useEffect} from 'react';
 
const Repositories = () => {
    const [storerepositories, setstoreRepositories] = useState("");
    const getApiData = async () => {
  const response = await fetch(
   "https://api.github.com/users"
  ).then((response) => response.json());
  // update the state
  console.log(response)
  setstoreRepositories(response);
};

useEffect(() => {
  getApiData();
}, []);

  return (
    <div className='container'>
        {
            storerepositories &&
            storerepositories.map((storerepository) => {
                return(
                <div className="itemContainer">
                    <div className="title">Title:{storerepository.login}</div>
                    <div className="image">Image: {storerepository.avatar_url}</div>
                    <div></div>
                </div>
                 ) }
            )}
    </div>
  )
}

export default Repositories;