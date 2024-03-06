import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Snack({ snacks, cantFind }) {
  const { id } = useParams();

  let snack = snacks.find(snack => snack.id === id);
  if (!snack) return <Redirect to={cantFind} />;


  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Served:</b> {snack.serve}
          </p>
        </CardBody>
      </Card>

    </section>
  );
}

export default Snack;