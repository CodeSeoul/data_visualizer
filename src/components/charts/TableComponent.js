
import React from 'react'

const Table = data => {
    const rows = data.data.map((row, index) =>
        <li key={index}>
            {row}
        </li>
    );

    return (
        <div>
        <div>Table</div>
        <ul>
            {rows}
        </ul>
        </div>
    );
};

export default Table;