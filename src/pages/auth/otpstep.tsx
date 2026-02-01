import { useEffect, useState } from 'react';
import { useAuthStore } from '../../utils/localstorage';
import OTPInput from 'react-otp-input';
import { useNavigate } from 'react-router';

export function OtpStep() {
  const [otp, setOtp] = useState('');
  const [seconds, setSeconds] = useState(60);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const phone = useAuthStore((state) => state.phone);
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-xl font-semibold mb-2">Введите код из SMS</h1>

        <p className="text-sm text-gray-500 mb-8">
          Проверочный код был отправлен на номер:
          <br />
          <span className="font-medium text-gray-700">+{phone}</span>
        </p>

        <div className="flex justify-between gap-2 mb-8 w-full">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            containerStyle={{ width: '100%', justifyContent: 'space-between' }}
            inputStyle={{ justifyContent: 'space-between' }}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>

        <button
          disabled={otp.length !== 6}
          className={`w-full ${otp.length === 6 ? 'bg-blue-500 text-black' : 'bg-gray-200 text-gray-400'} py-3
        text-sm font-medium
        rounded-lg`}
          onClick={() => navigate('/form')}
        >
          {seconds > 0 ? `Отправить снова через ${seconds} сек` : 'Отправить код снова'}
        </button>
      </div>
    </div>
  );
}
