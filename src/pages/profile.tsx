import RightPanel from '../components/rightpanel';
import Sidebar from '../components/sidebar';

export function Profile() {
  return (
    <div className="h-screen flex bg-gray-50 text-sm text-gray-800">
      <Sidebar />
      <main className="flex-1 bg-white" />
      <RightPanel />
    </div>
  );
}
