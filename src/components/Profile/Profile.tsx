import { Avatar } from '@mui/material';

import useStyles from './styles';

import AvatarImage from '../assets/images/avatar.png';

function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.profile}>
      <Avatar
        style={{ width: 150, height: 150 }}
        alt="Profile"
        src={AvatarImage}
      />
    </div>
  );
}

export default Profile;
