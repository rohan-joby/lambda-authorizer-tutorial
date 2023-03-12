import { lambdaSuccess, lambdaFailure } from '../../utils/index.js';

export const handler = async (event) => {
  try {
    const authorizerContext = event.requestContext.authorizer;
    const role = authorizerContext?.role;
    if (!role) {
      return lambdaFailure({ message: 'Unauthorized access' }, 403);
    }

    const response = { message: 'Hello from protected resource' };
    return lambdaSuccess(response);
  } catch (error) {
    return lambdaFailure({ message: error.message });
  }
};
