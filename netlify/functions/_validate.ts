// netlify/functions/_validate.ts
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { Schemas } from './_schemas';

// Create the validator
const ajv = new Ajv({
  strict: false,
  allErrors: true,
  allowUnionTypes: true,
});

// Add common string/number/date formats
addFormats(ajv);

// Compile and validate, but strip $schema so Ajv doesn't look up a meta-schema
export function validateEntity(name: keyof typeof Schemas, data: any) {
  const raw = Schemas[name] as any;
  // shallow clone and drop $schema to avoid meta-schema resolution errors
  const schema = { ...raw };
  if ('$schema' in schema) delete schema.$schema;

  const validate = ajv.compile(schema);
  const ok = validate(data);
  if (!ok) {
    const errors = (validate.errors || [])
      .map(e => `${e.instancePath || '/'} ${e.message}`)
      .join('; ');
    throw new Error(`Validation failed: ${errors || 'unknown error'}`);
  }
}