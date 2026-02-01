export type Role = 'customer' | 'carrier';

export type ProfileData = {
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  iinOrBin: string;
};

export type AuthState = {
  phone: string;
  role: 'customer' | 'carrier' | null;
  profile: ProfileData | null;
  reset: () => void;
};
