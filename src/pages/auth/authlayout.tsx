import logo from '@/assets/logo.svg';

export function AuthLayout() {
  return (
    <div className="w-full h-full px-16 py-8 bg-blue-400 text-white flex flex-col justify-between">
      <div className="mt-4">
        <div className="mb-8">
          <img src={logo} alt="Logo" className="w-32 mb-6" />
          <h1 className="text-3xl max-md:text-sm font-bold leading-snug">
            Добро пожаловать в личный кабинет для бизнеса!
          </h1>
        </div>
      </div>
    </div>
  );
}
