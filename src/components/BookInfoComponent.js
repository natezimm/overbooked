import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderBook({book}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={book.image} alt={book.name} />
                <CardBody>
                    <CardText>{book.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}


function RenderComments({comments}) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => 
                    <div key={comment.id}>
                        {comment.text}
                        <br />
                        -- {comment.author}, 
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        <p></p>
                    </div>
                    )}
            </div>
        )
    }
    return <div />;
}

function BookInfo(props) {
    if (props.book) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/library">Library</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.book.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.book.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderBook book={props.book} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default BookInfo;