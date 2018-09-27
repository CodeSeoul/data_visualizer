import React from 'react';

const Table = data => {
    const rows = data.data.map((row, rowI) =>
        <tr key={rowI}>
            {row.map((col,colI)=>
                <td key={rowI+'-'+colI}>{col}</td>
            )}
        </tr>
    );

    return (
        <div>
        {data.data.length === 0 && <div>Table</div>}
        <table>
            <tbody>
                {rows}
            </tbody>
        </table>
        </div>
    );
};

export default Table;