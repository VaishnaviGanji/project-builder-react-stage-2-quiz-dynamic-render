import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import questions from './questions.json'

export default class QuizComponent extends Component {
    constructor(){    
        super();
        this.state = {
            questionId: 0
        };
    }
    getPrevious = () => {
        if(this.state.questionId>0)
            this.setState({questionId:this.state.questionId-1})
    }

    getNext = () => {
        if(this.state.questionId < 10)
            this.setState({questionId:this.state.questionId+1})
    }

    render() {
        return (
            <div>
                <h1>Question</h1>
                <div>
                    <h4>{questions[this.state.questionId].id} of {questions.length}</h4>
                    <h4>{questions[this.state.questionId].question}</h4>
                </div>
                <br/>
                <br/>
                <div>
                    <button>{questions[this.state.questionId].optionA}</button>
                    <button>{questions[this.state.questionId].optionB}</button>
                    <button>{questions[this.state.questionId].optionC}</button>
                    <button>{questions[this.state.questionId].optionD}</button>
                </div>
                <br/>
                <br/>
                <div>
                    <button onClick={this.getPrevious}>Previous</button>
                    <button onClick={this.getNext}>Next</button>
                    <button><Link to="/">Quit</Link></button> 
                </div>
            </div>
        )
    }
}