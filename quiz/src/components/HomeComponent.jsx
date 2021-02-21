import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class HomeComponent extends Component {
    render() {
        return (
            <div>
                <h1>Welcome!!</h1>
                <button><Link to='/QuizComponent'>Start Quiz</Link></button>
            </div>
        )
    }
}