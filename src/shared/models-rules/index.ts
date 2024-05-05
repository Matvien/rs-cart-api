import { AppRequest } from '../models';

/**
 * @param {AppRequest} request
 */
export function getUserIdFromRequest(request: AppRequest) {
  return (
    (request.query['userId'] as string) ||
    'c19ad543-7ad9-4c1f-86ae-35e3a54e9e1f'
  );

  // return request.user && request.user.id;
}
