import { describe, expect, it } from 'vitest';

const sum = (a: number, b: number) => a + b;

describe('sum function', () => {
  it('adds two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(sum(-1, 1)).toBe(0);
  });

  it('returns zero when both inputs are zero', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(1, 0)).toBe(1);
  });
});
