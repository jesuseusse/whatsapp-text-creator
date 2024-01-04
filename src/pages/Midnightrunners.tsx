import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography
} from '@mui/material'
import { Add } from '@mui/icons-material'
import { ChangeEvent, useState } from 'react'

function Midnightrunnes() {
  const [inputText, setInputText] = useState('')
  const [text, setText] = useState<string[] | JSX.Element[]>([])
  const [textType, setTextType] = useState('title')
  const [textStyle, setStyle] = useState('normal')

  const onClickAdd = () => {
    let textToAdd: string | JSX.Element = inputText
    if (textStyle === 'normal') textToAdd = `${textToAdd}`
    if (textStyle === 'bold') textToAdd = `*${textToAdd}*`
    if (textStyle === 'subrayado') textToAdd = `~${textToAdd}~`
    if (textStyle === 'cursive') textToAdd = `_${textToAdd}_`
    if (textStyle === 'mono') textToAdd = '```' + textToAdd + '```'
    textToAdd = ` ${textToAdd} `

    if (textType === 'title')
      textToAdd = (
        <p>
          {textToAdd}
          <br />
          <br />
        </p>
      )
    if (textType === 'subtitle')
      textToAdd = (
        <p>
          {textToAdd}
          <br />
        </p>
      )

    if (textType === 'paragraph') textToAdd = <p>{textToAdd}</p>
    const newText = [...text, textToAdd]
    setText(newText as JSX.Element[])
    setInputText('')
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
      <Paper
        sx={{
          padding: 4,
          marginY: 2,
          marginX: 1,
          width: 'calc( 100% - 16px)',
          boxSizing: 'border-box'
        }}
      >
        {text.map((t) => t)}
      </Paper>
      <TextField
        sx={{
          marginX: 1,
          marginY: 2,
          width: 'calc( 100% - 16px)'
        }}
        type="text"
        label="Su texto"
        multiline
        variant="outlined"
        fullWidth
        value={inputText}
        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          setInputText(e.target.value.trim())
        }
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.keyCode === 13) onClickAdd()
        }}
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          '& > :not(style)': { m: 1, width: 'calc( 100% / 3 - 16px )' }
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <FormControl fullWidth>
          <InputLabel id="text-type">Tipo de texto</InputLabel>
          <Select
            labelId="text-type"
            value={textType}
            label="Tipo de texto"
            onChange={(e: SelectChangeEvent<string>) => {
              setTextType(e.target.value)
            }}
          >
            <MenuItem value={'title'}>Título</MenuItem>
            <MenuItem value={'subtitle'}>Subtítulo</MenuItem>
            <MenuItem value={'paragraph'}>Párrafo</MenuItem>
            <MenuItem value={'text'}>Palabra u oración</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="text-style">Estilo</InputLabel>
          <Select
            labelId="text-style"
            value={textStyle}
            label="Estilo"
            onChange={(e: SelectChangeEvent<string>) => {
              setStyle(e.target.value)
            }}
          >
            <MenuItem value={'normal'}>normal</MenuItem>
            <MenuItem value={'bold'}>
              <Typography sx={{ fontWeight: 'bold' }}>Negrita</Typography>
            </MenuItem>{' '}
            <MenuItem value={'subrayado'}>
              <Typography sx={{ textDecoration: 'line-through' }}>
                Subrayado
              </Typography>
            </MenuItem>
            <MenuItem value={'cursive'}>
              <i>Cursiva</i>
            </MenuItem>
            <MenuItem value={'mono'}>
              <Typography sx={{ fontFamily: 'Space Mono' }}>Mono</Typography>
            </MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          sx={{ height: '56px' }}
          disabled={inputText === ''}
          onClick={onClickAdd}
        >
          <Add />
        </Button>
      </Box>
    </Container>
  )
}

export default Midnightrunnes
