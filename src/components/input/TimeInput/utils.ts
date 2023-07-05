export { isValidTime, parseStringToTime, getTimeInMinutes };

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
