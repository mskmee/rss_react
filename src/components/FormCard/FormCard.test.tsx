import { render, screen } from '@testing-library/react';
import { IFormComponentData } from '../../store/formCardsSlice';
import { describe, expect, it } from 'vitest';
import { FormCard } from './FormCard';

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
    const { car, date, img, name, sex } = mockCardData;
    render(<FormCard {...mockCardData} />);
    expect(screen.getByText(sex)).toBeTruthy();
    expect(screen.getByText(car)).toBeTruthy();
    expect(screen.getByText(date)).toBeTruthy();
    expect(screen.getByText(name)).toBeTruthy();
    const image = screen.getByAltText(name) as HTMLImageElement;
    expect(image.src).toBe(img);
  });
});
