import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import useStyles from './styles';

import {
  NavBar,
  PullRequests,
  Issues,
  Market,
  Explore,
  Overview,
  Repositories,
  Stars,
  Followers,
} from '.';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<PullRequests />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/market" element={<Market />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/stars" element={<Stars />} />
          <Route path="/followers" element={<Followers />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
