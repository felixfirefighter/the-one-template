

export const assertUnreachable = (input: never) => {
  throw new Error(`Unreachable case: ${input}`);
}