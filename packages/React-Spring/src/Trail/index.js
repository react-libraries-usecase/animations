import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const trail = useTrail(users.length, {
    from: { marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { marginLeft: 20, opacity: 1, transform: 'translate3d(0,0px,0)' }
  });

  return (
    <React.Fragment>
      <h1>Random User</h1>
      {trail.map((props, index) => {
        return (
          <animated.div key={users[index]} style={props} className="box">
            {users[index].username}
          </animated.div>
        );
      })}
    </React.Fragment>
  );
};

export default App;
