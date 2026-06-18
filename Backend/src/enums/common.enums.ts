export const NODE_ENV = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',    
} as const;

export const Users = {
  USER: 'user',
  VENDOR: 'vendor',
  ADMIN: 'admin',
} as const;

export type AuthRole = (typeof Users)[keyof typeof Users];

export type NonAdminRole = 'user' | 'vendor';

export interface AuthPayload {
  id: string;
  role: AuthRole;
}
