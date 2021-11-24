import React from 'react';

function RenderPromo({item}) {
    return (
        <div className="promo">
            <img className="promo-img" src={item.image} alt={item.name}></img>
            <p className="promo-description">{item.description}</p>
        </div>
    );
}

function RenderBookOfMonth({book}) {
    return (
        <div className="book-of-the-month m-1">
            <div className="col col-xs-4">
                <h1>Book of the Month</h1>
                <h3>{book.name}</h3>                   
                <p>{book.description}</p>
            </div>
            <div className="col col-xs-4">
                <img top src={book.image} alt={book.name} />
            </div>            
        </div>
    );
}

function RenderCurrentBook({book}) {
    return (
        <div className="current-book m-1">
            <div className="col col-xs-4">
                <img top src={book.image} alt={book.name} />
            </div>              
            <div className="col col-xs-4">
                <h1>What are we reading now?</h1>
                <h3>{book.name}</h3>                   
                <p>{book.description}</p>
            </div>
          
        </div>
    );
}

function Home(props) {
    return (
        <div className="container">
            <h1 className="greeting"><span>You can't be overbooked, only under-read.</span></h1>
            <div className="row">
                <RenderCurrentBook book={props.currentBook}/>
            </div>
            <div className="row">
                <RenderBookOfMonth book={props.bookOfTheMonth}/>
            </div>
            <div className="row">
                <div className="col-xs-2 promos m-1">
                    {props.promotions.map((promo) => <RenderPromo item={promo} />)}
                </div>
            </div>
        </div>
    );
}

export default Home;