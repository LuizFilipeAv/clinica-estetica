import { describe, expect, it } from 'vitest';
import { isValidSelection, nextBookingDays } from './booking';

describe('demonstration scheduling', () => {
  it('starts in the future and skips the weekend across a year boundary', () => {
    const days = nextBookingDays(new Date(2026, 11, 31, 23, 59), 3);
    expect(days.map((day) => day.value)).toEqual(['2027-01-01', '2027-01-04', '2027-01-05']);
  });
  it('does not mutate the input date or include the current day', () => {
    const now = new Date(2026, 9, 16, 1);
    const stamp = now.getTime();
    const days = nextBookingDays(now);
    expect(now.getTime()).toBe(stamp);
    expect(days).toHaveLength(10);
    expect(days[0].value).toBe('2026-10-19');
    expect(new Set(days.map((day) => day.value)).size).toBe(10);
  });
  it('rejects unavailable dates, unknown times and incomplete selections', () => {
    const days = nextBookingDays(new Date(2026, 9, 17));
    expect(isValidSelection(days[0].value, '09:00', days)).toBe(true);
    expect(isValidSelection('2026-10-17', '09:00', days)).toBe(false);
    expect(isValidSelection(days[0].value, '23:00', days)).toBe(false);
    expect(isValidSelection('', '', days)).toBe(false);
  });
});
