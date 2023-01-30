import React from "react";

const Profile = (props) => {
  console.log(props.children);
  return (
    <div>
      <h1>{props.fullName}</h1>;<p>{props.bio}</p>;<h2>{props.profession}</h2>;
      {props.children}
      {props.handleName(props.fullName)}
    </div>
  );
};

export default Profile;
