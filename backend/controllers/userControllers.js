const registerUser = async (req, res) => {
  const { name, email, password, pic } = req.body;

  res.send({ name, email });
};

module.exports = { registerUser };
