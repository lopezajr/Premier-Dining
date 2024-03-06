import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
        <h2 className="font-weight-bold">
              Welcome to Aldo's Premier Dining!
            </h2>
            <p className="font-weight-bold">
              {snacks.length} Entrées
            </p>
            <p className="font-weight-bold">
             {drinks.length} CockTails
            </p>
          <CardTitle>

          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;