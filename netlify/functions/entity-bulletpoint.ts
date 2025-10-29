import type { Handler } from '@netlify/functions';
import { table } from './_db';
import { validateEntity } from './_validate';

type Row = Record<string, any> & { id: string; createdAt?: string; updatedAt?: string };
const T = table("BulletPoint");

function json(status: number, body: unknown) {
  return { statusCode: status, headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) };
}

export const handler: Handler = async (event) => {
  const method = event.httpMethod;
  const qs = event.queryStringParameters || {};
  const id = qs.id as string | undefined;

  if (method === 'GET' && !id) {
    return json(200, T.list(qs));
  }
  if (method === 'GET' && id) {
    return json(200, T.get(id));
  }
  if (method === 'POST') {
    const input = event.body ? JSON.parse(event.body) : {};
    validateEntity("BulletPoint", input);
    const newId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    const row: Row = { id: newId, createdAt: new Date().toISOString(), ...input };
    return json(200, T.insert(row));
  }
  if (method === 'PATCH' && id) {
    const patch = event.body ? JSON.parse(event.body) : {};
    const prev = T.get(id);
    if (!prev) return json(404, { error: 'Not found' });
    validateEntity("BulletPoint", { ...prev, ...patch });
    const updated = T.update(id, patch)!;
    return json(200, updated);
  }
  if (method === 'DELETE' && id) {
    const ok = T.remove(id);
    return json(200, { id, removed: ok });
  }
  return json(405, { error: 'Method not allowed' });
};
