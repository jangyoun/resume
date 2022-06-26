import React from 'react';
import { useParams } from "react-router";

function User(props) {
  const { id } = useParams();
  return (
    <div>
      User : {id}
    </div>
  );
}

export default User;