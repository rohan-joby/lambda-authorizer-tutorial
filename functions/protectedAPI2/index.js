import { lambdaSuccess, lambdaFailure } from '../../utils/index.js';
import { formatResponse } from './utils.js';

export const handler = async (event) => {
  try {
    const authorizerContext = event.requestContext.authorizer;
    const role = authorizerContext?.role;
    if (!role) {
      return lambdaFailure({ message: 'Unauthorized access' }, 403);
    }

    const response = formatResponse(role);
    return lambdaSuccess(response);
  } catch (error) {
    return lambdaFailure({ message: error.message });
  }
};
