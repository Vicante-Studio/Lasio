import { type RootState } from '@/state/store';

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectAuthToken = (state: RootState) => state.auth.token;

export const selectIsAdmin = (state: RootState) => state.auth.user?.role === 'admin';
export const selectIsAgent = (state: RootState) => state.auth.user?.role === 'agent'

export const selectUserRole = (state: RootState) => state.auth.user?.role;