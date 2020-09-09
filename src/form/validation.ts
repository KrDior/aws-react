/* eslint-disable @typescript-eslint/no-explicit-any */
import isEmail from 'validator/lib/isEmail';

export function email(value: string) {
  return value && !isEmail(value.trim()) ? 'Invalid email' : null;
}

function isDirty(value: number) {
  return value || value === 0;
}

export function required<T>(requiredFields: Array<any>, values: any) {
  return requiredFields.reduce(
    (fields: Array<T>, field: string) => ({
      ...fields,
      ...(isDirty(values[field]) ? undefined : { [field]: 'Required' }),
    }),
    {},
  );
}
