import { useMutation } from 'react-query';

import { createUser } from 'lib/apis';

export const useSocialSigninMutation = () => {
  return useMutation(createUser, {
    onSuccess: () => {
      console.log('create user success!');
    },
    onError: () => {
      console.log('create user fail!');
    },
  });
};
