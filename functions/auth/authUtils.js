export const generatePolicy = (principalId, effect, resource, protectedData) => {
  const authResponse = {};

  authResponse.principalId = principalId;
  if (effect && resource) {
    const policyDocument = {
      Version: '2012-10-17'
    };
    policyDocument.Statement = [];
    const statementOne = {};
    statementOne.Action = 'execute-api:Invoke';
    statementOne.Effect = effect;
    statementOne.Resource = resource;
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }

  // optional output with custom properties of the String, Number or Boolean type.
  authResponse.context = protectedData;
  return authResponse;
};
