import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';

const HomePage = () => (
<AppBar
	title="Sawtor"
	iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
  	zDepth={0}/>
);

export default HomePage;