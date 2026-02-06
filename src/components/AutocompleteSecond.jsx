import React from 'react';
import { Autocomplete } from '@react-google-maps/api';

function AutocompleteComponent({ onLoad, onPlaceChanged, placeholder = "Enter location", className = "" }) {
    return (
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
                type="text"
                placeholder={placeholder}
                className={className || "w-full bg-white/10 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"}
            />
        </Autocomplete>
    );
}

export default AutocompleteComponent;