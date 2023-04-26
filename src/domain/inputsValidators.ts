export const checkIsDateValid = (date: string) => {
  const today = new Date();
  const inputDate = new Date(date);
  const minBirthDate = new Date('1900-01-01');
  return inputDate > minBirthDate && inputDate <= today;
};

export const checkIsFileValid = (fileName: string) => {
  const regex = new RegExp(/\.(jpe?g|png|gif|svg)/i);
  return regex.test(fileName);
};
