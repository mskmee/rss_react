import { beforeEach, describe, vi, it, expect } from 'vitest';
import axios from 'axios';
import { CharacterService } from './CharacterService';

vi.mock('axios');
const mockedAxios = axios.get;
beforeEach(() => {
  vi.resetAllMocks();
});
describe('Get by page gather', () => {
  it('Should get data from API', async () => {
    await CharacterService.getByPage();
    expect(mockedAxios).toBeCalledTimes(1);
  });
});

describe('Get by name gather', () => {
  it('Should get data from API', async () => {
    await CharacterService.getByName('rick');
    expect(mockedAxios).toBeCalledTimes(1);
  });
});

describe('Get by page gather', () => {
  it('Should get data from API', async () => {
    await CharacterService.getByCharacter(1);
    expect(mockedAxios).toBeCalledTimes(1);
  });
});
