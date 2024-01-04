import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const fields: Record<string, string> = {
  location: 'Ubicación',
  date: 'Fecha',
  time: 'Hora',
  crew_on_board: 'Crew on board',
  helpers: 'Apoyos',
  mc: 'MC',
  playlist: 'Descarga playlist y checar orden entre capis',
  position_fast: 'Fast',
  position_center: 'Centro',
  positions_back: 'Escoba',
  positions_float: 'Flotador',
  warm_up_by: 'Warm-up by',
  warm_up_location: 'Warm-up ubicación',
  warm_up_song: 'Warm-up song',
  stop_nro1_by: '1ra parada by',
  stop_nro1_location: 'Ubicación',
  stop_nro1_song: 'Song',
  stop_nro2_by: '2da parada by',
  stop_nro2_location: 'Ubicación',
  stop_nro2_song: 'Song',
  stop_nro3_by: '3da parada by',
  stop_nro3_location: 'Ubicación',
  stop_nro3_song: 'Song',
  cool_down: 'Final Cool Down by',
  cool_down_location: 'Ubicación',
  cool_down_song: 'Song'
}

function Midnightrunnes() {
  const { register, watch } = useForm()

  const onCopy = () => {
    const html = document.getElementById('gamePlan')
    html?.focus()
    console.log(html)
  }

  return (
    <Container>
      <Typography
        sx={{ margin: 2, fontSize: 48 }}
        variant="h1"
        align="center"
        color="primary"
      >
        Template Game Plan
      </Typography>
      <Button onClick={onCopy}>Copy</Button>
      <Paper
        id="gamePlan"
        sx={{
          padding: 4,
          marginY: 2,
          marginX: 1,
          width: 'calc( 100% - 16px)',
          boxSizing: 'border-box'
        }}
      >
        <p>*Game Plan MR*</p>

        {Object.keys(fields).map((fieldName) => {
          return (
            <>
              *{fields[fieldName]}:* {watch(fieldName)}
              <br />
              {fieldName === 'positions_float' && <br />}
              {fieldName === 'playlist' && <br />}
              {fieldName === 'mc' && (
                <>
                  <br />
                  _Bienvenida Comenzar con energía y hacer que los runners se
                  prendan_ 🔈
                  <br /> 1 - Quiénes llegaron nuevos
                  <br /> 2 - En qué consiste MR.
                  <br /> 3 - Quienes son los capis
                  <br /> 4 - Los esperamos si corren, no esperamos si caminan
                  (Reforzar) 🚨
                  <br /> 5 - Indicar ruta
                  <br /> 6 - Enfatizar reglas y cuidados antes de salir!
                  <br /> Check-in: ¡Todos los capis vamos haciendo check-in a
                  conocidos y hablamos con nuevos!
                  <br />
                </>
              )}
            </>
          )
        })}
      </Paper>
      {Object.keys(fields).map((fieldName) => {
        return (
          <TextField
            sx={{
              marginX: 1,
              marginY: 2,
              width: 'calc( 100% - 16px)'
            }}
            id="fieldName"
            label={fields[fieldName]}
            fullWidth
            margin="dense"
            {...register(fieldName)}
          />
        )
      })}
    </Container>
  )
}

export default Midnightrunnes
