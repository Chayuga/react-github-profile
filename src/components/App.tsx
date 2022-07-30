import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import useStyles from './styles';
import {
  PullRequests,
  Issues,
  Market,
  Explore,
  Overview,
  Repositories,
  Stars,
  Followers,
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
            <Route path="/pull-request" element={<PullRequests />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/market" element={<Market />} />
            <Route path="/" element={<Explore />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/stars" element={<Stars />} />
            <Route path="/followers" element={<Followers />} />
          </Routes>
        </main>
      </MainScreen>
    </div>
  );
}

export default App;
