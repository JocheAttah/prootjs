import React, { Component } from 'react';
import Counter from './Counter'


class Counters extends Component {
    render(){     
        const {counters, increment, decrement, ondelete, refresh, restart }= this.props;


        function ToRefresh(){
            return refresh();
        }
        
        function ToRestart(){
            return restart();
        }
        return (
            <div>
                <div class="inline-flex">
                <button onClick={ToRefresh} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 rounded-l">
                    Refresh
                </button>
                <button  onClick={ToRestart} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 rounded-r">
                    Restart
                </button>
                </div>
                {/* <button onClick={ToRefresh}>Refresh</button>
                <button onClick={ToRestart}>Restart</button> */}
                {counters.map(counter => (
                    <Counter 
                        key= {counter.id}
                        counter = {counter}
                        increment = {increment}
                        decrement = {decrement}
                        ondelete= {ondelete} 
                    />
                ))}
                
            </div>
            
        )
    }
}

export default Counters;