import { useState } from 'react';
import { Button, Container, Paper, Typography } from '@mui/material';
import { MuiPhone } from '../components/MiuPhoneInput';
import { useNavigate } from 'react-router-dom';

export const ChatWith = () => {
	const navigate = useNavigate();
	const [inputText, setInputText] = useState('');
	//   const [text, setText] = useState<string[] | JSX.Element[]>([])
	return (
		<Container>
			<Paper
				sx={{
					padding: 4,
					marginY: 2,
					marginX: 1,
					width: 'calc( 100% - 16px)',
					boxSizing: 'border-box'
				}}
			>
				<Typography
					sx={{ margin: 2, fontSize: 32 }}
					variant='h1'
					align='center'
					color='primary'
				>
					Whatsapp Chat With
				</Typography>
				<Typography
					sx={{ margin: 2, fontSize: 18 }}
					variant='subtitle1'
					align='center'
				>
					Introduce el número en formato internacional
				</Typography>
				<Typography
					sx={{ margin: 2, fontSize: 14 }}
					variant='subtitle2'
					align='center'
				>
					No incluyas ceros, paréntesis ni guiones cuando añadas el número de
					teléfono en este formato. Ejemplo: 524444444444
				</Typography>
				<MuiPhone
					value={inputText}
					onChange={phone => {
						setInputText(String(phone).trim().replace('+', ''));
					}}
				/>
				<Button
					sx={{
						marginX: 1,
						marginY: 2,
						width: 'calc( 100% - 16px)'
					}}
					variant='outlined'
					onClick={() => {
						// window.open(`https://web.whatsapp.com/send/?phone=${inputText}&text&type=phone_number&app_absent=0`)
						window.open('https://wa.me/' + inputText);
					}}
				>
					Abrir App Whatsapp
				</Button>
				<Button
					sx={{
						display: { xs: 'none', sm: 'block' },
						marginX: 1,
						marginY: 2,
						width: 'calc( 100% - 16px)'
					}}
					variant='outlined'
					onClick={() => {
						window.open(
							`https://web.whatsapp.com/send/?phone=${inputText}&text&type=phone_number&app_absent=0`
						);
					}}
				>
					Chat en Whatsapp Web
				</Button>
				<Button
					sx={{
						marginX: 1,
						marginY: 2,
						width: 'calc( 100% - 16px)'
					}}
					variant='outlined'
					onClick={() => navigate('/text-creator')}
				>
					Abrir Text Creator
				</Button>
			</Paper>
		</Container>
	);
};
