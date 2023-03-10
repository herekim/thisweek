import HeaderContainer from 'components/container/headerContainer';
import MainContainer from 'components/container/mainContainer';
import Navigator from 'components/navigator/navigator';
import Title from 'components/title/title';

import useWindowSize from 'customs/useWindowSize';

import { SETTING_TITLE } from 'constants/title/title';

const Setting = () => {
  const { type } = useWindowSize();
  return (
    <>
      <MainContainer>
        <HeaderContainer>
          <Title text={SETTING_TITLE[type]} />
        </HeaderContainer>
      </MainContainer>
    </>
  );
};

export default Setting;
