import profileInfoStyles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={profileInfoStyles.top_bg}></div>
      <figure>
        <div className={profileInfoStyles.avatar}>
          <img src="https://image.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg" alt=""/>
        </div>
        <figcaption>
          <h3>Alena B.</h3>
          <span>birthday: 2 may</span>
          <span>city: Nikolaev</span>
          <span>country: Ukraine</span>
        </figcaption>
      </figure>
    </div>
  );
}

export default ProfileInfo;