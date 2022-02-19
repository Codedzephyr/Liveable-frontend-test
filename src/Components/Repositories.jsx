import React, {useState, useEffect} from 'react';
 
const Repositories = () => {
    const [storerepositories, setstoreRepositories] = useState("");
    const getApiData = async () => {
  const response = await fetch(
    "'GET /orgs/{org}/repos'"
  ).then((response) => response.json());
  // update the state
  setstoreRepositories(response);
};

useEffect(() => {
  getApiData();
}, []);
  return (
    <div>repositories</div>
  )
}

export default Repositories;