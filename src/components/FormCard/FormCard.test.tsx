import { render, screen } from '@testing-library/react';
import { IFormComponentData } from '../../pages/FormPage/FormPage';
import { describe, expect, it } from 'vitest';
import FormCard from './FormCard';

const mockCardData: IFormComponentData = {
  car: 'volvo',
  date: '2019-10-10',
  id: '21',
  img: 'https://plus.unsplash.com/premium_photo-1661637676151-ff1ad622ab7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  name: 'Carl',
  sex: 'gender',
};
describe('After mount', () => {
  it('Card data should render with properties', () => {
    const { car, date, id, img, name, sex } = mockCardData;
    render(<FormCard car={car} date={date} id={id} img={img} name={name} sex={sex} />);
    expect(screen.getByText(new RegExp(sex, 'i'))).toBeTruthy();
    expect(screen.getByText(new RegExp(car, 'i'))).toBeTruthy();
    expect(screen.getByText(new RegExp(date, 'i'))).toBeTruthy();
    expect(screen.getByText(new RegExp(name, 'i'))).toBeTruthy();
    const image = screen.getByAltText(new RegExp(name, 'i')) as HTMLImageElement;
    expect(image.src).toBe(img);
  });
});