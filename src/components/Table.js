
import React from "react";
import Header from "./Header";
import Body from "./Body";

function Table(props) {
    // Store key names of first row of data, to be used as column headers for table
    const fields = Object.keys({ ...props.rows[0] });

    return (
        <table className="w-100">
            <Header fields={fields} />
            <Body rows={props.rows} />
        </table>
    )
}

export default Table;