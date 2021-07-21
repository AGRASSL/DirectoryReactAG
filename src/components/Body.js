import React from "react";
import Row from "./Row";

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