function FormatNuber(number) {
  const suffix = ["", "K", "M", "B", "T"];
  let index = 0;
  while (number >= 1000 && index < suffix.length - 1) {
    number /= 1000;
    index += 1;
  }
  return number.toFixed(1) + suffix[index];
}

export default FormatNuber;
