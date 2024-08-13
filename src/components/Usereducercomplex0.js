import React, { useState } from 'react';

const firstUser = {
  id: '0391-3233-3201',
  firstName: 'Bill',
  lastName: 'Wilson',
  city: 'Missoula',
  state: 'Montana',
  email: 'bwilson@mtnwilsons.com',
  admin: false,
};

function User({ puser }) {
  const [user, setUser] = useState(puser); // Destructure puser for clarity

  const handleMakeAdmin = () => {
    setUser((prevUser) => ({ ...prevUser, admin: !prevUser.admin })); // Functional update
  };

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.admin ? 'Admin' : 'User'}
      </h1>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button onClick={handleMakeAdmin}>
        {user.admin ? 'Remove Admin' : 'Make Admin'} // Dynamic button text
      </button>
    </div>
  );
}

export default function Usereducercomplex0() {
  return <User puser={firstUser} />;
}
