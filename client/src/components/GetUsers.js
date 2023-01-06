import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { LOAD_USERS } from '../graphql/Queries';
import './form.css';

function GetUsers() {
  const { data } = useQuery(LOAD_USERS);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      {users.map((val) => {
        return (
          <ul key={val.id}>
            <li>{val.firstName}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default GetUsers;
