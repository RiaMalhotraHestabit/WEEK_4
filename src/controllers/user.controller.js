export const createUser = async (req, res) => {
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: req.body,
  });
};
