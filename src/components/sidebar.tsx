import React from 'react';

interface SidebarItemProps {
  label: string;
  muted?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, muted = false }) => {
  return (
    <div
      className={`px-2 py-1 rounded cursor-pointer transition
        ${muted ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-200'}`}
    >
      {label}
    </div>
  );
};

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => {
  return (
    <div>
      <div className="text-xs uppercase text-gray-400 mb-2">{title}</div>
      <div className="space-y-1">{children}</div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 border-r bg-gray-50 p-4 flex flex-col gap-6">
      <div className="text-lg font-semibold">TRANSLINE</div>

      <nav className="space-y-6">
        <SidebarSection title="Заявки">
          <SidebarItem label="Активные" />
          <SidebarItem label="Архивные" muted />
        </SidebarSection>

        <SidebarSection title="Контрагенты">
          <SidebarItem label="Заказчики" />
          <SidebarItem label="Перевозчики" />
        </SidebarSection>

        <SidebarSection title="Автопарк">
          <SidebarItem label="Транспорт" />
        </SidebarSection>

        <SidebarSection title="Управление">
          <SidebarItem label="Справочники" />
          <SidebarItem label="Менеджеры" />
        </SidebarSection>
      </nav>
    </aside>
  );
};

export default Sidebar;
