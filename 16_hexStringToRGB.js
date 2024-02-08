function hexStringToRGB(hexstring) {
  let red   = hexstring[1]+hexstring[2];
  let green = hexstring[3]+hexstring[4];
  let blue  = hexstring[5]+hexstring[6];
  let r = 0, g = 0, b= 0;
  
  red[0] == 'A' ? r = 16*10 : red[0] == 'B' ? r = 16*11 : red[0] == 'C' ? r = 16*12 : red[0] == 'D' ? r = 16*13 : red[0] == 'E' ? r = 16*14 : red[0] == 'F' ? r = 16*15 : r  = 16*parseInt(red[0]);
  red[1] == 'A' ? r+= 10    : red[1] == 'B' ? r+= 11    : red[1] == 'C' ? r+= 12    : red[1] == 'D' ? r+= 13    : red[1] == 'E' ? r+= 14    : red[1] == 'F' ? r+= 15    : r +=    parseInt(red[1]);
  let r0 = r; 
  r = 0;

  red = green;
  red[0] == 'A' ? r = 16*10 : red[0] == 'B' ? r = 16*11 : red[0] == 'C' ? r = 16*12 : red[0] == 'D' ? r = 16*13 : red[0] == 'E' ? r = 16*14 : red[0] == 'F' ? r = 16*15 : r = 16*parseInt(red[0]);
  red[1] == 'A' ? r+= 10    : red[1] == 'B' ? r+= 11    : red[1] == 'C' ? r+= 12    : red[1] == 'D' ? r+= 13    : red[1] == 'E' ? r+= 14    : red[1] == 'F' ? r+= 15    : r +=   parseInt(red[1]);
  let r1 = r;
  r = 0;

  red = blue;
  red[0] == 'A' ? r = 16*10 : red[0] == 'B' ? r = 16*11 : red[0] == 'C' ? r = 16*12 : red[0] == 'D' ? r = 16*13 : red[0] == 'E' ? r = 16*14 : red[0] == 'F' ? r = 16*15 : r  = 16*parseInt(red[0]);
  red[1] == 'A' ? r+= 10    : red[1] == 'B' ? r+= 11    : red[1] == 'C' ? r+= 12    : red[1] == 'D' ? r+= 13    : red[1] == 'E' ? r+= 14    : red[1] == 'F' ? r+= 15    : r +=    parseInt(red[1]);
  
  return {r: r0, g: r1, b: r}
}