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

const getDateAndTime = (date: Date) => {
  const dateString: string = date.toISOString().substring(0, 10);
  const hour: string =
    date.getHours() < 10 ? '0' + date.getHours() : '' + date.getHours();
  const minute: string = '' + date.getMinutes();

  return {
    dateString,
    timeString: `${hour}:${minute}`
  };
};

export const getDefaultHTMLPeriod = () => {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setHours(endDate.getHours() + 1);

  const startDateValues = getDateAndTime(startDate);
  const endDateValues = getDateAndTime(endDate);

  return {
    startDate: startDateValues.dateString,
    startTime: startDateValues.timeString,
    endDate: endDateValues.dateString,
    endTime: endDateValues.timeString
  };
};
