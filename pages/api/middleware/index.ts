import type { NextApiRequest, NextApiResponse } from 'next';

import nc, { Middleware } from 'next-connect';

import dbMiddleware from './db';

export default function createHandler(
  ...middlewares: Middleware<NextApiRequest, NextApiResponse>[]
) {
  return nc<NextApiRequest, NextApiResponse>().use(
    dbMiddleware,
    ...middlewares,
  );
}
