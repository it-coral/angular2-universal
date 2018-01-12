export function cleanInt(val: any): number {
  const cleaned = parseInt(`${val}`.replace(/[^.\d]/, '' ), 10);
  console.log('CLEANING', val, cleaned);
  return cleaned;
}

export function cleanFloat(val: any): number {
  const cleaned = parseFloat(`${val}`.replace(/[^.\d]/, '' ));
  return cleaned;
}

export function pad(n: number, width: number, z: string = '0'): string {
  const nStr = n + '';
  return nStr.length >= width ? nStr : new Array(width - nStr.length + 1).join(z) + nStr;
}
