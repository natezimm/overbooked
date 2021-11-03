import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderPartner({partner}) {
    if (partner) {
        return (
            <React.Fragment>
                <Media object="true" src={partner.image} alt={partner.name} width="150" />
                <Media body="true" className="ml-5 mb-4">
                    <Media heading="true">{partner.name}</Media>
                    {partner.description}
                </Media>
            </React.Fragment>
        )
    } else {
        return (
            <div></div>
        )
    }
}

function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <Media tag="li" key={partner.id}>
                <RenderPartner partner={partner}/>
            </Media>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Club Mission</h3>
                    <p>We are a group of individuals who love a good book. We have no problem becoming 'overbooked' with weekend plans to read. We welcome discussions about all books and look to learn from each other's viewpoints. We read one book per month and have an online video discussion of the book at the end of the month. We welcome any newcomers who want to have elaborate talks about interesting novels in their leisure. Please feel free to contact us if you would like to join in our next monthly call!</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">April 2nd, 2020</dd>
                                <dt className="col-6">Books Read in {new Date().getFullYear()}</dt>
                                <dd className="col-6">12</dd>
                                <dt className="col-6">Reviews in {new Date().getFullYear()}</dt>
                                <dd className="col-6">99</dd>
                                <dt className="col-6">Members</dt>
                                <dd className="col-6">42</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book! -- When I have a house of my own, I shall be miserable if I have not an excellent library.</p>
                                <footer className="blockquote-footer">Jane Austen,{' '}
                                    <cite title="Source Title">"Pride and Prejudice" -
                                    United Kingdom, 1813</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Community Partners</h3>
                </div>
                <div className="col mt-4 partners">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;