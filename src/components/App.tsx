import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import useStyles from './styles';
import {
  Page404,
  Overview,
  MainScreen,
  Sidebar,
} from '.';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar />
      <MainScreen>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes>
            <Route path="/pull-request" element={<Page404 page="Pull request Page" textColor="#f54242" />} />
            <Route path="/issues" element={<Page404 page="Issues Page" textColor="#29d6ae" />} />
            <Route path="/market" element={<Page404 page="Market Page" textColor="#035efc" />} />
            <Route path="/explore" element={<Page404 page="Explore Page" textColor="#a86522" />} />
            <Route path="/" element={<Overview />} />
            <Route path="/repositories" element={<Page404 page="Repository Page" textColor="#631313" />} />
            <Route path="/stars" element={<Page404 page="Stars Page" textColor="#f0c105" />} />
            <Route path="/followers" element={<Page404 page="Followers Page" textColor="#02de18" />} />
          </Routes>
        </main>
      </MainScreen>
    </div>
  );
}
export default App;
