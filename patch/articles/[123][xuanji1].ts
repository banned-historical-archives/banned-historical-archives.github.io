export default function (parserResult: any) {
  const parts = parserResult.parts;
  parts[3].text = parts[3].text.replace(`x`, `y`);
  parts[3].text = parts[3].text.replace(`x`, '');
  parts[2].text = parts[2].text.substr(0, 3) + `r` + parts[2].text.substr(3);
}