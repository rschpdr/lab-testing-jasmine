function centsToDecimals(centValue) {
  if (typeof centValue !== "number" || isNaN(centValue)) {
    return undefined;
  }

  let result = centValue / 100;

  return "R$" + result.toFixed(2);
}
