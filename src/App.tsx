import { Route, Routes, useLocation } from 'react-router';
import { AuthLayout } from './pages/auth/authlayout';
import { PhoneStep } from './pages/auth/phonestep';
import { RoleStep } from './pages/auth/rolestep';
import { OtpStep } from './pages/auth/otpstep';
import { ProfileFormStep } from './pages/auth/profileformstep';
import { Profile } from './pages/profile';

function App() {
  const location = useLocation();
  const showLayout = !location.pathname.startsWith('/profile');
  return (
    <div className="min-w-screen min-h-screen overflow-hidden grid grid-cols-2">
      {showLayout && <AuthLayout />}
      <Routes>
        <Route path="/" element={<PhoneStep />} />
        <Route path="/role" element={<RoleStep />} />
        <Route path="/otp" element={<OtpStep />} />
        <Route path="/form" element={<ProfileFormStep />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
