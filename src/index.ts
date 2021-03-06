export const asyncWrap = async <T, ERR = Error>(
  promise: Promise<T>
): Promise<[ERR | null, T | null]> => {
  try {
    const result = await promise;
    return [null, result];
  } catch (error) {
    return [error, null];
  }
};

export default asyncWrap;
