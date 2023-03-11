import { generatePolicy } from './authUtils.js';
import { AUTH_TOKEN_TYPES } from '../../utils/constants.js';

export const handler = async (event) => {
  try {
    const token = event.headers?.Authorization || event.headers?.authorization;

    if (!token) {
      return 'Unauthorized'; // Return a 401 Unauthorized response
    }
    const { admin, operations, user } = AUTH_TOKEN_TYPES;

    switch (token) {
      case admin:
      case operations:
      case user:
        return generatePolicy('user', 'Allow', event.methodArn, { role: token });

      case 'deny':
        return generatePolicy('user', 'Deny', event.methodArn);

      default:
        return 'Unauthorized'; // Return a 401 Unauthorized response
    }
  } catch (error) {
    return 'Unauthorized';
  }
};
