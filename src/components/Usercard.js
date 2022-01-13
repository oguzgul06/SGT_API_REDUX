import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addUser, removeUser } from "../redux/reducer";
import "./Usercard.css";
import { motion } from "framer-motion";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteIcon from "@mui/icons-material/Delete";

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (obj) => dispatch(addUser(obj)),
    removeUser: (id) => dispatch(removeUser(id)),
  };
};

function Usercard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
        });
    };

    fetchData();
  }, [users]);

  //console.log(users.data);

  return (
    <div className="usercard__up">
      {users.map((user) => (
        <motion.div
          key={user.id}
          initial={{ x: "150vw", trasition: { type: "spring", duration: 2 } }}
          animate={{ x: 0, trasition: { type: "spring", duration: 1 } }}
          whileHover={{
            scale: 0.9,
            trasition: { type: "spring", duration: 0.5 },
          }}
          className="usercard"
        >
          <h2>
            <span className="bold">User Info:</span> {user.id}
          </h2>
          <p>
            <span className="bold">Name:</span> {user.name}
          </p>
          <hr />
          <p>
            <span className="bold">UserName:</span> {user.username}
          </p>
          <hr />
          <p>
            <span className="bold">Email: </span>
            {user.email}
          </p>
          <hr />
          <p>
            <span className="bold">City:</span> {user.address.city}
          </p>
          <hr />
          <div className="buttons">
            <motion.button
              className="button"
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => addUser(user.id)}
            >
              <AddTaskIcon />
            </motion.button>
            <motion.button
              className="button"
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => removeUser(user.id)}
            >
              <DeleteIcon />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Usercard);
