import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';

import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Grid, Typography } from '@mui/material';

export const NavBar = ({ drawerWidth = 240 }) => {
	const dispatch = useDispatch();
	const onLogout = () => {
		dispatch(startLogout());
	};

	return (
		<AppBar
			position='fixed'
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px)` },
				ml: { sm: `${drawerWidth}px` },
			}}>
			<Toolbar>
				<IconButton
					color='inherit'
					edge='start'
					sx={{ mr: 2, mb: 1, display: { sm: 'none' } }}>
					<MenuOutlined />
				</IconButton>
				<Grid
					container
					direction='row'
					alignContent='center'
					justifyContent='space-between'>
					<Typography
						variant='h6'
						noWrap
						component='div'>
						Journal App
					</Typography>
					<IconButton
						onClick={onLogout}
						color='error'>
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
