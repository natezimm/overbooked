import React from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CardBody from 'reactstrap/lib/CardBody';
import Button from 'reactstrap/lib/Button';

function RenderLibraryItem({book}) {
    return (
        <Card> 
                <CardImg width="100%" src={book.image} alt={book.name} />
                <CardBody>
                    <CardTitle>{book.name}</CardTitle>
                </CardBody>
                <Button>
                    <Link to={`/library/${book.id}`}></Link>    
                </Button>
        </Card>        
    )
}

function Library(props) {
    const library = props.books.map(book => {
        return (
            <div key={book.id} className="col-md-5 m-1 library-book-card">
                <RenderLibraryItem book={book} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Library</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Library</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {library}
            </div>
        </div>
    );
}

export default Library;