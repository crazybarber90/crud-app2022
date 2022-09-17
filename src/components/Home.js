import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

import Employees from "./Employees";

function Home() {
  let history = useNavigate();

  // BY CLICKING ON EDIT BUTTON WE ARE GOING TO SET OUR PROPERTY IN LOCALSTORAGE
  const handleEdit = (id, name, age) => {
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("id", id);
  };

  // THIS FUNCTION IS USING SOME ARRAY MANIPULATION METHODS TO REMOVE CLICKED ITEM FROM ARRAY
  // NOT FILTER AS USALY
  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);

    history("/");
  };

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}></div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Employees && Employees.length > 0
            ? Employees.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>
                      <Link to={`/edit`}>
                        <Button
                          onClick={() =>
                            handleEdit(item.id, item.name, item.age)
                          }
                        >
                          Edit
                        </Button>
                      </Link>
                      &nbsp;
                      <Button onClick={() => handleDelete(item.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            : "No date available"}
        </tbody>
      </Table>
      <br></br>

      <Link className="d-grid gap-2" to={`/create`}>
        <Button size="lg">Create</Button>
      </Link>
    </Fragment>
  );
}

export default Home;
