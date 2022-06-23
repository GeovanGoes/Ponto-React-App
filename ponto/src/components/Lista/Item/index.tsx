import { Chip } from "@mui/material";


function Item () {

    function deletar(){}

    return (
        <Chip label="10:20" onDelete={deletar}/>
    )
}