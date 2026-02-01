import React from 'react';
import { useAuthStore } from '../utils/localstorage';

interface FieldProps {
  label: string;
  value: string;
}

const Field: React.FC<FieldProps> = ({ label, value }) => {
  return (
    <div className="grid grid-cols-2 gap-3 items-center">
      <span className="text-gray-400">{label}</span>

      <div className="flex items-center justify-between border-b border-dashed pb-1">
        <span>{value}</span>
        <button type="button" className="text-gray-400 hover:text-red-500">
          ×
        </button>
      </div>
    </div>
  );
};

const RightPanel: React.FC = () => {
  const { phone, role, profile } = useAuthStore((state) => state);
  return (
    <aside className="w-96 border-l bg-white p-6 flex flex-col gap-6">
      <button
        type="button"
        className="px-4 py-1.5 border border-sky-400 text-sky-500 rounded hover:bg-sky-50 w-fit"
      >
        сохранить
      </button>

      <div className="space-y-4">
        <Field label="Фамилия" value={profile?.lastName || ''} />
        <Field label="Имя" value={profile?.firstName || ''} />
        <Field label="Отчество" value={profile?.middleName || ''} />
        <Field label="Роль" value={role || ''} />
        <Field label="Номер телефона" value={phone} />
        <Field label="Email" value={profile?.email || ''} />
      </div>
    </aside>
  );
};

export default RightPanel;
