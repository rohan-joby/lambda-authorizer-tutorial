import { AUTH_TOKEN_TYPES } from '../../utils/constants.js';

const { admin, operations, user } = AUTH_TOKEN_TYPES;
export function formatResponse(role) {
  switch (role) {
    case admin:
      return { message: `Hello from protected resource to the ADMIN` };
    case user:
      return { message: `Hello from protected resource to the USER` };
    case operations:
      return { message: `Hello from protected resource to OPS` };
    default:
      return { message: `Hello from protected resource` };
  }
}
