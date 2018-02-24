export const getKeyInfoFromDate = (date: Date): [number, number, string] => {
  const hour: number = date.getHours();
  const minute: number = date.getMinutes();
  const amPm: string = hour < 12 ? 'am' : 'pm';
  const hourSanitized: number = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;

  return [hourSanitized, minute, amPm];
};

export const getFriendlyPeriod = (startDate: Date, endDate: Date): string => {
  const [startHour, startMinute, startAmPm] = getKeyInfoFromDate(startDate);
  const [endHour, endMinute, endAmPm] = getKeyInfoFromDate(endDate);
  const displayStartAmPm = startAmPm === endAmPm ? '' : startAmPm;

  return `${startHour}.${startMinute}${displayStartAmPm}-${endHour}.${endMinute}${endAmPm}`;
};
