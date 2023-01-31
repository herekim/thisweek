import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { createUser } from 'lib/apis';

type UseSocialSigninQueryProps = {
  providerName: 'google';
  search: string;
};
type SocialUserType = {
  jwt: string;
  user: {
    id: number;
    confirmed: boolean;
    createdAt: string;
    email: string;
    blocked: boolean;
    provider: 'google';
    updatedAt: string;
    username: 'string';
  };
};

export const userKeys = {
  user: ({
    providerName,
    search,
  }: {
    providerName: 'google';
    search: string;
  }) => ['user', providerName, search] as const,
};

export const useSocialSigninQuery = ({
  providerName,
  search,
}: UseSocialSigninQueryProps) => {
  const { data: userData, isSuccess } = useQuery<SocialUserType, AxiosError>(
    userKeys.user({ providerName, search }),
    async () => {
      const { data } = await createUser({ providerName, search });
      return data;
    },
    {
      enabled: !!providerName && !!search,
      suspense: false, // Todo: true로 바꾸면 에러뜸.. 이유 찾아서 고치기
    },
  );

  return { userData, isSuccess };
};
