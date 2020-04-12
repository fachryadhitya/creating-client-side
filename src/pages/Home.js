import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/user.action";

const Home = (props) => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="page">
      <h1 className="page-title">Testing web Server</h1>
      {usersData.isLoading && <h1>Loading. . .</h1>}

      {usersData.isError && <h1>Error Getting Data. . .</h1>}
      <div className="users">
        {!usersData.isError &&
          usersData.data.length > 0 &&
          usersData.data.map((user, index) => (
            <div className="user" key={index}>
              <div className="user-img-container">
                <img src={user.picture} alt={user.picture} />
              </div>
              <div className="user-detail">
                <h3>{user.name}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
