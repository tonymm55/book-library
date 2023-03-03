exports.createItem = async (model, req, res) => {
    try {
      const row = await model.create(req.body);
      const { password, ...rest } = row.toJSON();
      return res.status(201).json(rest);
    } catch (err) {
      if (err.errors) {
        res.status(400).json(err.errors[0].message);
      } else if (err.name === "SequelizeForeignKeyConstraintError") {
        res.status(400).json(err.parent.detail);
      } else {
        res.status(400).json(err.name);
      }
    }
  };