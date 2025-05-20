export { generateTimeArray, isValidTime, parseStringToTime, getTimeInMinutes };

const generateTimeArray = (): { value: string; disabled: boolean }[] => {
  const timeArray: { value: string; disabled: boolean }[] = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      timeArray.push({ value: formattedTime, disabled: false });
    }
  }

  return timeArray;
};

const isValidTime = (time: string) => {
  const timeReg = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])?$/;
  return timeReg.test(time);
};

const parseStringToTime = (time = ''): string => {
  return isValidTime(time) ? time : '';
};

const getTimeInMinutes = (str: string) => {
  const strParts = str.split(':');
  return Number(strParts[0]) * 60 + Number(strParts[1]);
};
