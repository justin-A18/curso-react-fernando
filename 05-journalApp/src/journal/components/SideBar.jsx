import { useSelector } from 'react-redux';

import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';

import { SideBarItem } from './';

export const SideBar = ({ drawerWidth }) => {
	const { displayName } = useSelector((state) => state.auth);
	const { notes } = useSelector((state) => state.journal);

	return (
		<Box
			component='nav'
			sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
			<Drawer
				variant='permanent'
				open
				sx={{
					display: { xs: 'block' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
				}}>
				<Toolbar>
					<Typography
						variant='h6'
						component='div'>
						{displayName}
					</Typography>
					<Divider />
				</Toolbar>
				<List>
					{notes.map((note) => (
						<SideBarItem
							key={note.id}
							{...note}
						/>
					))}
				</List>
			</Drawer>
		</Box>
	);
};
