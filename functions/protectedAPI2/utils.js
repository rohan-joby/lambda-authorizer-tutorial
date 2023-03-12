import { AUTH_TOKEN_TYPES } from '../../utils/constants.js';

const { admin, operations, user } = AUTH_TOKEN_TYPES;
export function formatResponse(role, administrator) {
  switch (role) {
    case admin:
      return { message: `Hello from protected resource to the ADMIN. Administrator privilege: ${administrator}` };
    case user:
      return { message: `Hello from protected resource to the USER. Administrator privilege: ${administrator}` };
    case operations:
      return { message: `Hello from protected resource to OPS. Administrator privilege: ${administrator}` };
    default:
      return { message: `Hello from protected resource` };
  }
}
