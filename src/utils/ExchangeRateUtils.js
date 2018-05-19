export const isReady = (loading, data) => !loading && data;
export const getPolarityClass = (currentBuyingPower, originalBuyingPower) => {
  if (currentBuyingPower > originalBuyingPower) {
    return 'positive';
  }

  if (currentBuyingPower < originalBuyingPower) {
    return 'negative';
  }

  return '';
};
