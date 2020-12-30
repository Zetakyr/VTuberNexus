import React from 'react';
import '../css/app.css';

export const FilterButton = ({ filter, setFilter, filterType }) => {


    return (
        <div className="filters" onClick={setFilter}>
            <div className="checkBox"
                style={{
                    backgroundColor: filter ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.199)",
                    boxShadow: filter ? "inset 0px 0px 8px 3px #00ffff" : "inset 0px 0px 8px 3px #16062b57"
                }}
            >
            </div>
            <div>{filterType}</div>
        </div>
    )
}