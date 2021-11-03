import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLibraryItem({book}) {
    return (
        <Card>
            <Link to={`/library/${book.id}`}>
                <CardImg width="100%" src={book.image} alt={book.name} />
                <CardImgOverlay>
                    <CardTitle>{book.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>        
    )
}

function Library(props) {
    const library = props.books.map(book => {
        return (
            <div key={book.id} className="col-md-5 m-1">
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