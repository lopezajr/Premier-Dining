import React from "react";
import { Link } from "react-router-dom";
import "../style/FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Menu({ snacks }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
          Entrées
          </CardTitle>
          <CardText>
           Click on a Entrée to see more details.
          </CardText>
          <ListGroup>
            {snacks.map(snack => (
              <Link to={`/snacks/${snack.id}`} key={snack.id}>
                <ListGroupItem>{snack.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>

  
    </section>

    
    
  );
}

export default Menu;