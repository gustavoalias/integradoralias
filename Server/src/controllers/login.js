const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  const userFound = users.find(
    (user) => user.email === email && user.password === password
  );

  return res.status(200).json({ access: !!userFound });
};

module.exports = {
  login,
};
