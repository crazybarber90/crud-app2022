import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/disc/css/bootstrap.min.css";

import Employees from "./Employees";

function Home() {
  return (
    <div>
      <Fragment>
        <div style={{ margin: "10rem" }}></div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                    </tr>
                  );
                })
              : "No date available"}
          </tbody>
        </Table>
      </Fragment>
    </div>
  );
}

export default Home;
