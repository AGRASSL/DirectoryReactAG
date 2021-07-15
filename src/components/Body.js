import React from "react";
import Row from "./table-row";

function Table(props) {
    return (
        <body>
            {
                props.rows.map(row => {
                    return (
                        <Row values={row} />
                    )
                })
            }
        </body>
    )
}

export default Table;