import React from 'react';

import useStyles from './styles';

function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.profile}>Profile</div>
  );
}

export default Profile;
