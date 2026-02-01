import { MapPin } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { formatPhone } from '../../utils/formatters';
import { useAuthStore } from '../../utils/localstorage';

export function PhoneStep() {
  const countries = [
    {
      code: '+7',
      name: 'Kazakhstan',
      flag: 'https://flagcdn.com/w20/kz.png',
    },
    {
      code: '+7',
      name: 'Russia',
      flag: 'https://flagcdn.com/w20/ru.png',
    },
    {
      code: '+1',
      name: 'USA',
      flag: 'https://flagcdn.com/w20/us.png',
    },
  ];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(countries[0]);
  const [value, setValue] = useState('');
  const setPhone = useAuthStore((state) => state.setPhone);
  const navigate = useNavigate();
  const onSubmit = (data: { phone: string }) => {
    setPhone(data.phone);

    setTimeout(() => {
      navigate('/role');
    }, 1000);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-8 bg-white">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Для входа в личный кабинет введите свой номер телефона, на него будет отправлено SMS с
          проверочным кодом
        </p>
        <form
          className="space-y-4"
          onSubmit={() => onSubmit({ phone: `${selected.code} ${value}` })}
        >
          <div className="relative w-full">
            <div className="flex border border-gray-300 rounded overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 bg-gray-100 border-r"
              >
                <img src={selected.flag} alt="" className="w-5 h-4" />
                <span>{selected.code}</span>
              </button>
              <input
                type="tel"
                inputMode="numeric"
                value={value}
                placeholder="(000) 000-00-00"
                onChange={(e) => setValue(formatPhone(e.target.value))}
                className="flex-1 px-4 py-3 outline-none"
              />
            </div>
            {open && (
              <ul className="absolute left-0 mt-1 w-40 bg-white border rounded shadow z-10">
                {countries.map((c) => (
                  <li
                    key={c.name}
                    onClick={() => {
                      setSelected(c);
                      setOpen(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    <img src={c.flag} className="w-5 h-4" />
                    <span>{c.code}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="privacy"
              className="w-4 h-4 text-blue-400 border-gray-300 rounded focus:ring-blue-400"
            />
            <label htmlFor="privacy" className="text-gray-600 text-sm">
              Согласен с{' '}
              <a href="#" className="underline! text-gray-600!">
                политикой конфиденциальности
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-100 text-blue-700 rounded font-semibold hover:bg-blue-200 transition"
          >
            Далее
          </button>
        </form>
        <div className="mt-8 flex justify-end">
          <MapPin className="w-10 h-10 text-blue-400" />
        </div>
      </div>
    </div>
  );
}
