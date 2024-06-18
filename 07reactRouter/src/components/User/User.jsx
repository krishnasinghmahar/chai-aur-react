import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="text-center text-5xl px-10 py-10 bg-gray-500 text-white">
      User: {userId}
    </div>
  );
}

export default User;
