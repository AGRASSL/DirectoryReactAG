import React from "react";

function PeopleDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Age(s): {props.age}</h3>
      <h3>Phone Number: {props.phone}</h3>
      <h3>Full Name: {props.fullName}</h3>
    </div>
  );
}

export default PeopleDetail;
