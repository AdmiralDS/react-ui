export { isValidTime, parseStringToTime, getTimeInMinutes };

const isValidTime = (time: string) => {
  const timeReg = /^(|0?[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
  return time.match(timeReg);
};

const parseStringToTime = (t = ''): string | null => {
  const [hhStr, mmStr] = t.split(':');
  const time = `${!isNaN(+hhStr)}:${!isNaN(+mmStr)}`;
  return isValidTime(time) ? time : null;
};

const getTimeInMinutes = (str: string) => {
  const strParts = str.split(':');
  return Number(strParts[0]) * 60 + Number(strParts[1]);
};
