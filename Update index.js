function createPhoneNumber(numbers){
  
  numbers = numbers.join("");
  let phoneNumber = "";
  
  phoneNumber += "(";
  phoneNumber += numbers.substring(0, 3);
  phoneNumber += ") ";
  phoneNumber += numbers.substring(3, 6);
  phoneNumber += "-";
  phoneNumber += numbers.substring(6);
  
  return phoneNumber;
  
}
