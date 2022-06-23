import { Dia } from "../../types/dia";
import Box from '@mui/material/Box';
import { Card, CardContent, Typography, Stack, Chip, Divider, Paper, styled} from "@mui/material";
import { useState } from "react";
import { notStrictEqual } from "assert";
import { Semana } from "../../types/semana";

interface Props {
    semanas: Semana[],
    dias: Dia[];
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));

function Lista ({dias, semanas} : Props) {
    

    const [num, setNum] = useState<number>(0);

    function deletar() {

    }

    function pularLinha(numeroDaSemana: number = 0) : boolean {
        if (num === numeroDaSemana) {
            return false;
        } else {
            setNum(numeroDaSemana);
            return true;
        }
    }

    function nomeDoDiaDaSemana(data: string) {
        const num = new Date(Number(data.split("-")[2]), Number(Number(data.split("-")[1])-1), Number(data.split("-")[0])).getDay();
        var days = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
        return days[ num];
    }

    return (
        <div>
            {dias.map((d, index) => (
                    <Box sx={{ m: 2 }} key={index}>
                        <Typography gutterBottom variant="body1">
                            <b>{d.data}</b> - {nomeDoDiaDaSemana(d.data)}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            {d.registros.map((r, key) => (<Chip key={key} label={r} onDelete={deletar}/>))}
                            <Chip label={d.soma} color="success" variant="outlined" />
                        </Stack>
                    </Box>
            ))}
        </div>
    );
}

export default Lista;