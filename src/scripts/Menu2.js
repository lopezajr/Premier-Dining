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

function Menu2({ drinks }) {
  return (
    <section className="col-md-4">

      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Specialty CockTails
          </CardTitle>
          <CardText>
           Click on a Cocktail to see more details.
          </CardText>
          <ListGroup>
            {drinks.map(drink => (
              <Link to={`/drinks/${drink.id}`} key={drink.id}>
                <ListGroupItem>{drink.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>

    
    
  );
}

export default Menu2;