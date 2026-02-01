// src/store/useAuthStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ProfileData, Role } from '../types/auth';

type AuthState = {
  phone: string;
  role: Role | null;
  profile: ProfileData | null;

  setPhone: (phone: string) => void;
  setRole: (role: Role) => void;
  setProfile: (profile: ProfileData) => void;
  reset: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      phone: '',
      role: null,
      profile: null,

      setPhone: (phone) => set({ phone }),
      setRole: (role) => set({ role }),
      setProfile: (profile) => set({ profile }),

      reset: () =>
        set({
          phone: '',
          role: null,
          profile: null,
        }),
    }),
    {
      name: 'auth-storage',
    },
  ),
);
