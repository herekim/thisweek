import HeaderContainer from 'components/container/headerContainer';
import MainContainer from 'components/container/mainContainer';
import Navigator from 'components/navigator/navigator';
import Title from 'components/title/title';
import { USER_TITLE } from 'constants/title/habitTitle';

const User = () => {
  return (
    <MainContainer>
      <HeaderContainer>
        <Title text={USER_TITLE.sm} />
      </HeaderContainer>
    </MainContainer>
  );
};

export default User;
