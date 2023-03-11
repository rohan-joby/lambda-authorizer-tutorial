export function lambdaSuccess(data) {
  return { statusCode: 200, body: JSON.stringify(data) };
}
export function lambdaFailure(error, statusCode = 500) {
  return { statusCode, body: JSON.stringify(error) };
}
