import React, { Component } from 'react';
import Library from './LibraryComponent';
import BookInfo from './BookInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BOOKS } from '../shared/books';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: BOOKS,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    book={this.state.books.filter(book => book.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        };

        const BookWithId = ({match}) => {
            return (
                <BookInfo 
                    book={this.state.books.filter(book => book.id === +match.params.bookId)[0]}
                    comments={this.state.comments.filter(comment => comment.bookId === +match.params.bookId)}
                />
            );
        };  

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/library' render={() => <Library books={this.state.books} />} />   
                    <Route path='/library/:bookId' component={BookWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route path='/aboutus' render={() => <About partners={this.state.partners}/>}/>
                    <Redirect to='/home' /> 
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
