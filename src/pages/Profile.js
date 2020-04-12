import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../actions/user.action";

const Profile = (props) => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(profileUser());
  }, []);

  if (usersData.detail === null) {
    return <h1>Loading. . .</h1>;
  }

  return (
    <div className="page">
      <h1 className="page-title">My Profile</h1>
      <div className="profile">
        <div className="avatar">
          <img src={usersData.detail.picture} />
        </div>
        <div className="profile-detail">
          <div>
            <h3>{usersData.detail.name}</h3>
            <hr />
            <span>{usersData.detail.label}</span>
            <p style={{ marginTop: "3rem" }}> {usersData.detail.phone}</p>
            <p style={{ marginTop: "1rem" }}> {usersData.detail.email}</p>
            <p style={{ marginTop: "1rem" }}> {usersData.detail.website}</p>
            <p style={{ marginTop: "3rem" }}>
              Summary: {usersData.detail.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
