import Image from 'next/image';

import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10">
      <section className="flex flex-col items-center gap-10">
        <Image
          src={`/static/abstract3.png`}
          width="100"
          height="100"
          alt="thisweek logo"
          priority
        />
        <section className="flex flex-col items-center gap-2">
          <p className="text-xl">매주 성장하는 주간 회고 기록</p>
          <p className="text-3xl font-semibold">디스위크</p>
        </section>
      </section>
      <section className="flex w-full flex-col items-center gap-3">
        <button
          onClick={() => signIn('kakao', { callbackUrl: '/' })}
          className="flex h-12 w-4/5 items-center justify-between rounded-lg bg-kakao-yellow px-5"
        >
          <div className="flex h-8 w-8 items-center justify-center">
            <Image
              src={`/static/kakao-logo.png`}
              width="20"
              height="20"
              alt="kakao logo"
            />
          </div>

          <p>카카오로 로그인</p>
          <div className="h-8 w-8"></div>
        </button>
        <button
          onClick={() => signIn('naver', { callbackUrl: '/' })}
          className="flex h-12 w-4/5 items-center justify-between rounded-lg bg-naver-green px-5 text-white"
        >
          <div className="flex h-8 w-8 items-center justify-center">
            <Image
              src={`/static/naver-logo.png`}
              width="30"
              height="30"
              alt="naver logo"
            />
          </div>
          <p>네이버로 로그인</p>
          <div className="h-8 w-8"></div>
        </button>
        <a href="http://localhost:1337/api/connect/google">
          <p>구글 로그인</p>
        </a>
      </section>
    </div>
  );
};

export default Login;
