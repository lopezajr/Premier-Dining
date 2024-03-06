import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Drink({ drinks, cantFind }) {
  const { id } = useParams();


  let drink = drinks.find(drink => drink.id === id);
  if (!drink) return <Redirect to={cantFind} />;
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {drink.name}
          </CardTitle>
          <CardText className="font-italic">{drink.description}</CardText>
          <p>
            <b>Recipe:</b> {drink.recipe}
          </p>
          <p>
            <b>Served:</b> {drink.serve}
          </p>
        </CardBody>
      </Card>

    </section>
  );
}

export default Drink;