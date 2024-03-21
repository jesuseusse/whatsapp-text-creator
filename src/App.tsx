import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/TextCreator';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import Midnightrunnes from './pages/Midnightrunners';
import { ChatWith } from './pages/ChatWith';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: green[500],
			dark: '#124100'
		},
		secondary: {
			main: purple[500],
			dark: '#520c43'
		}
	}
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <ChatWith />
	},
	{
		path: '/midnight-runners',
		element: <Midnightrunnes />
	},
	{
		path: '/text-creator',
		element: <Home />
	}
]);
function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
