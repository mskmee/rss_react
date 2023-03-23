import { useState } from 'react';

export const useFetching = (
  callback: () => Promise<unknown>
): [() => Promise<void>, boolean, string] => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAlert, setIsAlert] = useState<string>('');
  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
      setIsAlert('');
    } catch (error) {
      setIsAlert(`Oops we got error. Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, isAlert];
};
