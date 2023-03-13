export const formatPrice = (price: number) => {
  const params = {maximumSignificantDigits: 21, minimumSignificantDigits: 2};
  return new Intl.NumberFormat('pt-BR', params).format(price);
};
