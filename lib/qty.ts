export const snapQty = (
  input: number,
  min = 50,
  step = 50,
  cap = 10_000
): number => {
  console.log('snapQty called with:', { input, min, step, cap });
  
  // Handle invalid inputs - return minimum for any invalid input
  if (!Number.isFinite(input) || input <= 0) {
    console.log('snapQty: Invalid input, returning min:', min);
    return min;
  }
  
  // If input is less than minimum, return minimum
  if (input < min) {
    console.log('snapQty: Input below min, returning min:', min);
    return min;
  }
  
  // If input exceeds cap, return cap (but still snap to step)
  if (input > cap) {
    const cappedValue = Math.floor(cap / step) * step;
    console.log('snapQty: Input above cap, returning capped:', cappedValue);
    return cappedValue;
  }
  
  // Round to nearest step
  const rounded = Math.round(input / step) * step;
  
  // Ensure it's at least the minimum
  const result = Math.max(min, rounded);
  
  console.log('snapQty: Final result:', result);
  return result;
};

export const formatINR = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
};