import * as React from "react";
import BasicTable from "../BasicTable/BasicTable";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const columns = [
    {name: "Desert", key: "name"},
    {name: "Calories", key: "calories"},
    {name: "Fat", key: "fat"},
    {name: "Carbs", key: "carbs"},
    {name: "Protein", key: "protein"}
]

export default function(props) {
    return (
        <BasicTable rows={rows} columns={columns}/>
    );
}
