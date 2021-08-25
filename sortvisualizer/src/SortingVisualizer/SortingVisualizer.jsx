import React from 'react';
import './sortingAlgo/mergeSort.js';
import "./SortingVisualizer.css"

export default class SortingVisualizer extends React.Component {
    constructor(props){
        //cant use this yet
        super(props);
        //now use this
        this.state = {
            array: [], //set the array to be used, should be empty at first.
        };
    }

    componentDidMount(){ //when the app load, reset the array
        this.resetArray();
    }

    //this method create an empty array then populize the array with random integer.
    resetArray(){
        const array = [];
        for(let i = 0; i < 310; i++){
            //this allows duplicate number
            array.push(randomIntFromInterval(5,1000)); //start at 5 because the visulization of 1 is too small to see
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;

        return (

            <div>
                <div className = "side-bar">
                    <div className = "sort-button">
                        <button onClick={()=> this.mergeSort()}>Merge Sort</button>
                        <button onClick={()=> this.quickSort()}>Quick Sort</button>
                        <button onClick={()=> this.heapSort()}>Heap Sort</button>
                        <button onClick={()=> this.bubleSort()}>Buble Sort</button>
                    </div>

                    <div className = "newarray-button">
                        <button onClick={()=> this.resetArray()}>New Array</button>
                    </div>
                </div>
                
                <div className = "array-container">
                {array.map((value, idx) => (
                    <div className = "array-bar" key = {idx} style = {{ height: `${value*0.8}px`}}> 
                        
                    </div>
                ))}

                
            </div>

                
            </div>
            

            
        );
    }
}

//From: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
//Comment from author: "What it does "extra" is it allows random intervals that do not start with 1. So you can get a random number from 10 to 15 for example. Flexibility."
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max - min +1)+min);
}