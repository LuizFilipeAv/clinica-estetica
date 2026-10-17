export type BookingDay = { value: string; weekday: string; day: string; month: string; full: string };

export function nextBookingDays(today: Date, count = 10): BookingDay[] {
  const cursor = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12);
  const days: BookingDay[] = [];
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    if (cursor.getDay() === 0 || cursor.getDay() === 6) continue;
    days.push({
      value: `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, '0')}-${String(cursor.getDate()).padStart(2, '0')}`,
      weekday: cursor.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', ''),
      day: String(cursor.getDate()).padStart(2, '0'),
      month: cursor.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', ''),
      full: cursor.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }),
    });
  }
  return days;
}

export const timeSlots = ['09:00', '10:30', '14:00', '15:30', '17:00'];

export function isValidSelection(day: string, time: string, days: BookingDay[]) {
  return days.some((item) => item.value === day) && timeSlots.includes(time);
}
