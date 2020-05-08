export default function padStart(str, length, paddingChar) {
  var result = str.toString();

  while (result.length < length) {
    result = paddingChar.toString() + str;
  }

  return result;
};