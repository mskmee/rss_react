import { checkIsDateValid, checkIsNameValid } from '../../domain/inputsValidators';
import * as yup from 'yup';

const minNameLength = 2;
const maxNameLength = 60;
export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Username field is required')
    .test('minLength', `Username should contain at least ${minNameLength} characters`, (value) => {
      return value.length > minNameLength;
    })
    .test('maxLength', `Username should contain maximum ${maxNameLength} characters`, (value) => {
      return value.length < maxNameLength;
    })
    .test('nameValid', 'Username should start from uppercase char and have a-z chars', (value) => {
      return checkIsNameValid(value);
    }),
  date: yup
    .string()
    .required('Date field is required')
    .test('dateConfig', 'Date should be more than 1900 year and less than tomorrow', (value) => {
      return checkIsDateValid(value);
    }),
  file: yup
    .mixed()
    .required('Avatar is required')
    .test('type', 'File extension must be jpg/jpeg', (value) => {
      const fileList = value as FileList;
      return fileList[0] && (fileList[0].type === 'image/jpeg' || fileList[0].type === 'image/jpg');
    }),
  sex: yup.string().required('Sex field is required'),
  policy: yup.bool().oneOf([true], 'Please confirm this field'),
});