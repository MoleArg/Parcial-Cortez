import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieList from '../Movie/MovieList';
import MovieDetail from '../Movie/MovieDetail';
import MovieNew from '../Movie/MovieNew';
import MovieDelete from '../Movie/MovieDelete';
import MovieEdit from '../Movie/MovieEdit';
import GenreList from '../Genre/GenreList';
import GenreDetail from '../Genre/GenreDetail';
import NotFound from '../NotFound';

const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={MovieList}/>
                <Route exact path="/detail/:id" component={MovieDetail}/>
                <Route exact path="/new" component={MovieNew}/>
                <Route exact path="/delete/:id" component={MovieDelete}/>
                <Route exact path="/edit/:id" component={MovieEdit}/>
                <Route exact path="/genre" component={GenreList}/>
                <Route exact path ="/genre/detail/:id" component={GenreDetail}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default Routes;