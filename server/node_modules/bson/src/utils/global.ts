/* eslint-disable @typescript-eslint/no-explicit-any */
/* We do not want to have to include DOM types just for this check */
declare const window: unknown;
declare const self: unknown;
declare const global: unknown;

function checkForMath(potentialGlobal: any) {
  // eslint-disable-next-line eqeqeq
  return potentialGlobal && potentialGlobal.Math == Math && potentialGlobal;
}

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
export function getGlobal<T = Record<string, unknown>>(): T {
  return (
    checkForMath(typeof globalThis === 'object' && globalThis) ||
    checkForMath(typeof window === 'object' && window) ||
    checkForMath(typeof self === 'object' && self) ||
    checkForMath(typeof global === 'object' && global) ||
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    Function('return this')()
  );
}
