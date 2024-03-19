const { parsePhoneNumber } = require("libphonenumber-js");

const getPhoneNumberDetails = (number) => {
  const details = parsePhoneNumber(number);
  const countryCode = details.countryCallingCode.toString();
  const country = details.country;
  const phoneNumber = details.nationalNumber.toString();
  return { countryCode, country, phoneNumber };
};

module.exports = { getPhoneNumberDetails };
