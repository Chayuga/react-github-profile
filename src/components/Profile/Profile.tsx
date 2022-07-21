import React from 'react';
import { Avatar } from '@mui/material';

import useStyles from './styles';

function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.profile}>
      <Avatar
        style={{ width: 150, height: 150 }}
        alt="Profile"
        src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
      />
    </div>
  );
}

export default Profile;
