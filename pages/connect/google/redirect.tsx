import { useRouter } from 'next/router';

import { useEffect } from 'react';

import Spinner from 'components/common/spinner';

import { useSocialSigninQuery } from 'queries/useAuthQuery';

const GoogleRedirect = () => {
  const router = useRouter();
  const { userData } = useSocialSigninQuery({
    providerName: 'google',
    search: router.asPath.split('/redirect')[1],
  });

  useEffect(() => {
    if (userData) {
      // Todo: jwt 저장장소 바꾸기 (쿠키와 조합)
      localStorage.setItem('jwt', userData.jwt);
      localStorage.setItem('username', userData.user.username);
      router.push('/');
    }
  }, [userData, router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <Spinner />
    </div>
  );
};

export default GoogleRedirect;
