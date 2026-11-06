import { useState } from 'react';
import filter from '/search-icons/filter.svg';

export default function PlantSearch() {
        
    return (
        <button className="filter-button">
            <img className="filter-icon" src={filter}></img>
        </button>
    )
}
