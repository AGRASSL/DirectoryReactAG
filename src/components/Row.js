import React from "react";

function Row(props) {
    return (
        <tr key={props.values.id}>
            {
                Object.keys(props.values).map(field => {
                    return (
                        <td>{props.values[field]}</td>
                    )
                })
            }
        </tr>
    )
}

export default Row;