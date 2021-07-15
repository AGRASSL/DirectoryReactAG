import React from "react";

function Head(props) {
    return (
        <head>
            <tr>
                {
                    props.fields.map(field => {
                        return (
                            <th>{field}</th>
                        )
                    })
                }
            </tr>
        </head>
    )
}

export default Head;