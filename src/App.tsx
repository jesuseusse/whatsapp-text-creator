import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/TextCreator';
import { ThemeProvider, createTheme } from '@mui/material';
import { green, purple } from '@mui/material/colors';
import Midnightrunnes from './pages/Midnightrunners';
import { ChatWith } from './pages/ChatWith';

const theme = createTheme({
	palette: {
		primary: green,
		secondary: purple
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
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
