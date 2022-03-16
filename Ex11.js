const highestDigit = number => {
  number = number.toString();
	return Math.max(...number);
};