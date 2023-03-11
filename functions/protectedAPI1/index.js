import { lambdaSuccess, lambdaFailure } from '../../utils/index.js';

export const handler = async (event) => {
  try {
    console.log('in the fn');
    const authorizerContext = event.requestContext.authorizer;
    const role = authorizerContext?.role;
    if (!role) {
      return lambdaFailure({ message: 'Unauthorized access' }, 403);
    }

    const response = { message: 'Hello from protected resource' };
    console.log('forming response', response);
    return lambdaSuccess(response);
  } catch (error) {
    return lambdaFailure({ message: error.message });
  }
};
