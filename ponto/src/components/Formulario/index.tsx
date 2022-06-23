import { Grid, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";




function Formulario () {



    return (
        
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Button variant="contained">Marcar Ponto Agora</Button>
            </Grid>
            <Grid item xs={3}>
                <TextField fullWidth  id="outlined-basic" label=" " variant="standard" type={"date"}/>
            </Grid>
            <Grid item xs={2}>
                <TextField id="filled-basic" label="Hora" variant="standard" type={"text"} inputProps={{ maxLength: 2 }}/>
            </Grid>
            <Grid item xs={2}>
                <TextField id="standard-basic" label="Minuto" variant="standard" type={"text"} inputProps={{ maxLength: 2 }}/>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained">Marcar</Button>
            </Grid>
        </Grid>
        /*
            <Grid container spacing={12}>
                <Grid item spacing={12}>
                    <TextField fullWidth  id="outlined-basic" label="" variant="standard" type={"date"} />
                </Grid>    
                <Grid item spacing={6}>
                    <TextField id="filled-basic" label="Hora" variant="standard" type={"text"} inputProps={{ maxLength: 2 }}/>
                </Grid>
                <Grid item spacing={6}>
                    <TextField id="standard-basic" label="Minutos" variant="standard" type={"text"} inputProps={{ maxLength: 2 }}/>
                </Grid>
            </Grid>
        */

    )
}

export default Formulario;