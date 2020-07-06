import React, {Component} from 'react';


class Counter extends Component {
    render() {

        const {counter, increment, decrement, ondelete}= this.props;

        function handleInc () {
            return increment(counter);
        }
        
        function handleDecr() {
            return decrement(counter);
        }

        function handleDel(){
            return ondelete(counter.id)
        }


        return (
            <div class ="flex flex-row justify-center mt-4">                
                <div class="text-2xl mr-2 bg-gray-500 rounded text-black p-2 "> {counter.value === 0 ? "Zero" : counter.value} </div>
                <button class="text-base bg-gray-900 rounded text-white uppercase mr-2 px-4 py-2 font-semibold" onClick={handleInc}> + </button>
                <button class="text-base bg-gray-900 rounded text-white uppercase mr-2 px-4 py-2 font-semibold" onClick={handleDecr} disabled={counter.value === 0}> - </button>
                <button class="text-base bg-red-700 rounded text-white uppercase p-2 font-semibold " onClick={handleDel}> delete </button>
            </div>
        )
    }    
}

export default Counter;