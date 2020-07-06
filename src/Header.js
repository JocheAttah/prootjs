import React, { Component } from 'react';

class Header extends Component {
    render() {
        const {totalCounters} = this.props;
 

        return (
            <div>
            <nav class="flex items-center  flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
               <span class="font-semibold text-xl tracking-tight">ICON</span>
            </div>
            <span class="flex text-white uppercase px-2 py-1 text-xl font-bold mr-3">{totalCounters}</span>
            <h3 class="font-semibold text-white text-xl tracking-tight">Items</h3>
            </nav>
            </div>
        )
    }
}

export default Header;