import React, {useState, useEffect} from 'react';
 
const Repositories = () => {
    const [storerepositories, setstoreRepositories] = useState("");
    const getApiData = async () => {
  const response = await fetch(
   "https://api.github.com/users/octocat/repos"
  ).then((response) => response.json());
  // update the state
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
                <div className="itemContainer">
                    <div className="title">Title:{storerepository.repos}</div>
                </div>
            }
            )}
    </div>
  )
}

export default Repositories;