/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function getId(location: Location): string {
  const { pathname } = location;
  return pathname.slice(6);
}

export function ratingSortHelper(array: Array<any>, field: string) {
  return array.sort((a, b) => {
    return (+b[field] - +a[field]);
  });
}

export function sortByReleaseHelper(array: Array<any>, field: string) {
  return array.sort((a, b) => {
    return (new Date(a[field]) as any).getTime() - (new Date(b[field]).getTime() as any);
  });
}

const { hasOwnProperty } = Object.prototype;

export function isEmpty(obj: any) {
  if (obj == null) return true;

  if (obj.length > 0)    return false;
  if (obj.length === 0)  return true;

  if (typeof obj !== 'object') return true;

  for (const key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }

  return true;
}
