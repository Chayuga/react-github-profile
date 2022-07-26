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
      <div>Rodgers Chayuga</div>
      <p>@Chayuga</p>
      <p>
        Front-end engineer at DVT Ltd.<br />
        ReactJs, Typescript, Redux, Web3

      </p>
      <div>
        <p>Facebook Link</p>
        <p>Location: Nairobi-Kenya</p>
      </div>
      <button type="button">Follow</button>
    </div>
  );
}

export default Profile;
