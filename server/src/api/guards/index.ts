import { validateJwt } from './validate-jwt.guard'

export const isAuthenticatedGuard = [validateJwt];

// export const isAdminGuard = [...isAuthenticatedGuard, isAdmin];





