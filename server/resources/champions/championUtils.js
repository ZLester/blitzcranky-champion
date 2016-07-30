exports.validateId = (req, res, next) => {
  const id = req.params.id;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).json({ error: 'Invalid Champion ID'});
  }
  next();
};
