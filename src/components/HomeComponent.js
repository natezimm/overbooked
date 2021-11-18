import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <h1>Come join our book club</h1>
            <div className="row promos">
                <div className="col col-md-4">
                    {props.promotions.map((promo) => <RenderCard item={promo} />)}
                </div>
            </div>
        </div>
    );
}

export default Home;