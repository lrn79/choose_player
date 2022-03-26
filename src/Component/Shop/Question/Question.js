import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
    render() {
        return (
            <div>
                <div className='Question'>
                    <h1>How react works?</h1>
                    <p>React is a javascript library ...It’s a library. For building user interfaces
                        it is a component base language.... react is used for used for building user interfaces specifically for single-page applications.
                        ..we can make mobile app and also web applcation with this library .....React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
                        React.js is generally thought of as the view layer in an application. You might have used library like Handlebars,React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>
                    <h1>how usestate works?</h1>
                    <p>Basically useState is a Hook type which can allow you to create state variable in functional component ...and it have two type of componets is class and functional components

                        React Hooks are functions that add state variables to functional components and instrument the lifecycle methods of classes.Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine When React first runs your component, useState will return the two-element array as usual but will assign the initial value to the first element of the array and it is very useful to make a react app </p>
                </div>
            </div>
        );
    }
}

export default Question;