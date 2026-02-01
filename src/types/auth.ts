export type Role = 'customer' | 'carrier';

export type ProfileData = {
  firstName: string;
  lastName: string;
  middleName?: string;
  iinOrBin?: number;
  email: string;
  password: string;
};

export type AuthState = {
  phone: string;
  role: 'customer' | 'carrier' | null;
  profile: ProfileData | null;
  reset: () => void;
};
