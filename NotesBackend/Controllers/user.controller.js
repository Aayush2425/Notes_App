import User from "../Models/user.model.js";
export const getNotes = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const addNotes = async (req, res, next) => {
  const { id } = req.params;
  const { title, content, color, bold, italics, underline } = req.body;
  try {
    const addNotes = await User.findByIdAndUpdate(
      id,
      { $push: { Notes: { title, content, color, bold, italics, underline } } },
      { new: true }
    );
    res.status(200).json(addNotes);
  } catch (error) {
    next(error);
  }
};

export const deleteNotes = async (req, res, next) => {
  const { id } = req.params;
  const { index } = req.body;
  try {
    const deleteNotes = await User.findByIdAndUpdate(
      id,
      { $unset: { [`Notes.${index}`]: "1" } },
      { new: true }
    );
    await User.findByIdAndUpdate(id, { $pull: { Notes: null } }, { new: true });
    res.status(200).json(deleteNotes);
  } catch (error) {
    next(error);
  }
};

export const updateNotes = async (req, res, next) => {
  const { id } = req.params;
  const { title, content, index, color, password, isProtected } = req.body;
  try {
    const updateNotes = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          [`Notes.${index}`]: { title, content, color, password, isProtected },
        },
      },
      { new: true }
    );
    res.status(200).json(updateNotes);
  } catch (error) {
    next(error);
  }
};

export const addBlock = async (req, res, next) => {
  const { id } = req.params;
  const { type, content } = req.body;
  try {
    const addHeading1 = await User.findByIdAndUpdate(
      id,
      { $push: { Block: { type, content: content } } },
      { new: true }
    );
    res.status(200).json(addHeading1);
  } catch (error) {
    next(error);
  }
};
<<<<<<< HEAD
=======

>>>>>>> c269e20ea5eca66957d60517d89c3dfaf572b9ea
export const deleteBlock = async (req, res, next) => {
  const { id } = req.params;
  const { index } = req.body;
  try {
    const deleteBlock = await User.findByIdAndUpdate(
      id,
      { $unset: { [`Block.${index}`]: "1" } },
      { new: true }
    );
    await User.findByIdAndUpdate(id, { $pull: { Block: null } }, { new: true });
    res.status(200).json(deleteBlock);
  } catch (error) {
    next(error);
  }
};

export const updateBlock = async (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const updateBlock = User.findByIdAndUpdate(
      id,
      id,
      { $set: { [`Block.${index}`]: { content } } },
      { new: true }
    );
    res.status(200).json(updateBlock);
  } catch (error) {
    next(error);
  }
};
<<<<<<< HEAD

export const addTodo = async (req, res, next) => {};
=======
>>>>>>> c269e20ea5eca66957d60517d89c3dfaf572b9ea
