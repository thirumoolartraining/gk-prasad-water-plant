import { snapQty } from '@/lib/qty';

describe('snapQty', () => {
  it('should snap to minimum order quantity', () => {
    expect(snapQty(0)).toBe(50);
    expect(snapQty(-10)).toBe(50);
    expect(snapQty(25)).toBe(50);
    expect(snapQty(49)).toBe(50);
  });

  it('should snap to nearest step increment', () => {
    expect(snapQty(51)).toBe(50);
    expect(snapQty(75)).toBe(100);
    expect(snapQty(149)).toBe(150);
    expect(snapQty(151)).toBe(150);
    expect(snapQty(175)).toBe(200);
  });

  it('should handle exact multiples', () => {
    expect(snapQty(50)).toBe(50);
    expect(snapQty(100)).toBe(100);
    expect(snapQty(200)).toBe(200);
  });

  it('should respect custom min and step values', () => {
    expect(snapQty(0, 25, 25)).toBe(25);
    expect(snapQty(30, 25, 25)).toBe(25);
    expect(snapQty(40, 25, 25)).toBe(50);
    expect(snapQty(37, 25, 25)).toBe(25);
    expect(snapQty(38, 25, 25)).toBe(50);
  });

  it('should cap at maximum value', () => {
    expect(snapQty(15000, 50, 50, 10000)).toBe(10000);
    expect(snapQty(12000, 50, 50, 10000)).toBe(10000);
  });

  it('should handle invalid inputs', () => {
    expect(snapQty(NaN)).toBe(50);
    expect(snapQty(Infinity)).toBe(50);
    expect(snapQty(-Infinity)).toBe(50);
  });

  it('should handle edge cases around step boundaries', () => {
    // Test rounding behavior
    expect(snapQty(74, 50, 50)).toBe(50);  // Closer to 50
    expect(snapQty(75, 50, 50)).toBe(100); // Exactly halfway, rounds up
    expect(snapQty(76, 50, 50)).toBe(100); // Closer to 100
  });
});