const {
  genSalt,
  hash,
} = require("bcrypt");

exports.getEncryptedPassword = async (password, salt = null) => {
  if (!salt) salt = await genSalt(10);
  return { salt, encryptedPassword: await hash(password, salt) };
};
