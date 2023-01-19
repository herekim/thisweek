import Image from 'next/image';

const Login = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10 bg-main-blue-10">
      <section className="flex flex-col items-center gap-10">
        <Image
          src={`/static/abstract3.png`}
          width="100"
          height="100"
          alt="empty"
        />
        <section className="flex flex-col items-center gap-2">
          <p className="text-xl">매주 성장하는 주간 회고 기록</p>
          <p className="text-3xl font-semibold">디스위크</p>
        </section>
      </section>
      <section className="flex w-full flex-col items-center gap-3">
        <button className="w-4/5 rounded-lg bg-kakao-yellow py-4">
          카카오로 로그인
        </button>
        <button className="w-4/5 rounded-lg bg-naver-green py-4 text-white">
          네이버로 로그인
        </button>
      </section>
    </div>
  );
};

export default Login;
