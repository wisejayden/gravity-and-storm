import React from 'react';
const FilterDropdown = (props) => {
    return(
        <label>
            <select value={props.dropdownValue} onChange={props.dropdownHandleChange}>
                <option value="date">Date</option>
                <option value="importance">Importance</option>
            </select>
        </label>
     )
}

export default FilterDropdown;
