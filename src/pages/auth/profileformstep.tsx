import type { ProfileData } from '../../types/auth';
import { useForm } from 'react-hook-form';
import { profileSchema, type ProfileFormValues } from '../../utils/formatters';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '../../utils/localstorage';
import { useNavigate } from 'react-router';

export function ProfileFormStep() {
  const setProfile = useAuthStore((state) => state.setProfile);
  const role = useAuthStore((state) => state.role);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data: ProfileFormValues) => {
    const profileData: ProfileData = {
      firstName: data.firstName,
      lastName: data.lastName,
      middleName: data.middleName,
      email: data.email,
      password: data.password,
    };
    setProfile(profileData);
    navigate('/profile');
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
          onSubmit={handleSubmit(onSubmit)}
          className="relative w-full flex flex-col gap-4 mb-4"
        >
          <input
            {...register('lastName')}
            placeholder="Фамилия*"
            className="flex-1 px-4 py-3 border rounded"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}

          <input
            {...register('firstName')}
            placeholder="Имя*"
            className="flex-1 px-4 py-3 border rounded"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}

          <input
            {...register('middleName')}
            placeholder="Отчество"
            className="flex-1 px-4 py-3 border rounded"
          />
          <input
            {...register('iinOrBin')}
            placeholder={`${role === 'customer' ? 'ИИН*' : 'БИН*'}`}
            className="flex-1 px-4 py-3 border rounded"
          />

          <input
            {...register('email')}
            placeholder="Email*"
            className="flex-1 px-4 py-3 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input
            {...register('password')}
            type="password"
            placeholder="Пароль*"
            className="flex-1 px-4 py-3 border rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <input
            {...register('confirmPassword')}
            type="password"
            placeholder="Подтверждение пароля*"
            className="flex-1 px-4 py-3 border rounded"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-500! text-black rounded font-semibold hover:bg-blue-700!"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}
