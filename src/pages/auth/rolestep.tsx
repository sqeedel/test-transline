import { MapPin, Truck } from 'lucide-react';
import roleSelection from '@/assets/roleSelection.svg';
import { useState } from 'react';
import { useAuthStore } from '../../utils/localstorage';
import { useNavigate } from 'react-router';

export function RoleStep() {
  const [chooseRole, setChooseRole] = useState<'customer' | 'carrier' | null>(null);
  const setRole = useAuthStore((state) => state.setRole);
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col justify-center items-center p-8 bg-white">
      <h1 className="text-2xl font-bold mb-2">Регистрация</h1>
      <p className="text-gray-600 mb-6">Выберите, как вы хотите использовать приложение</p>

      <div
        className={`grid grid-cols-2 ${chooseRole === 'customer' ? 'bg-blue-50 border border-blue-400' : ''} p-4 mb-6 cursor-pointer hover:bg-blue-50 transition`}
        onClick={() => setChooseRole('customer')}
      >
        <div className="flex flex-col">
          <div className="">
            <Truck className="text-blue-400 w-12 h-12 px-1 py-0.5 rounded-xl bg-blue-50" />
          </div>
          <div>
            <p className="font-bold text-gray-800 text-lg">Как перевозчик</p>
            <p className="text-gray-800 text-sm">
              Получайте актуальную информацию о своих перевозках
            </p>
          </div>
        </div>
        <div className="ml-auto flex flex-col items-center">
          <img src={roleSelection} alt="role selection" />
        </div>
      </div>
      <div
        className={`grid grid-cols-2 p-4 mb-6 cursor-pointer ${chooseRole === 'carrier' ? 'bg-blue-50 border border-blue-400' : ''} hover:bg-blue-50 transition`}
        onClick={() => setChooseRole('carrier')}
      >
        <div className="flex flex-col">
          <div className="">
            <MapPin className="text-blue-400 w-12 h-12 px-1 py-0.5 rounded-xl bg-blue-50" />
          </div>
          <div>
            <p className="font-bold text-gray-800 text-lg">Как заказчик</p>
            <p className="text-gray-800 text-sm">Создавайте и отслеживайте свои перевозки</p>
          </div>
        </div>
        <div className="ml-auto flex flex-col items-center">
          <img src={roleSelection} alt="role selection" />
        </div>
      </div>

      <button
        className={`w-full py-3 font-semibold rounded-lg ${chooseRole ? 'opacity-100 cursor-pointer bg-blue-500 text-black hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'}`}
        disabled={!chooseRole}
        onClick={(e) => {
          e.preventDefault();
          setRole(chooseRole!);
          navigate('/otp');
        }}
      >
        Продолжить
      </button>
    </div>
  );
}
