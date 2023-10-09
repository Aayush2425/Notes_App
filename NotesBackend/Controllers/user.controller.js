import User from "../Models/user.model.js";
export const getNotes = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).populate("Notes");
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const addNotes = async (req, res, next) => {
  const { id } = req.params;
  const { content, color, bold, italics, underline } = req.body;
  try {
    const addNotes = await User.findByIdAndUpdate(
      id,
      { $push: { Notes: { content, color, bold, italics, underline } } },
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
  const { content, index, color } = req.body;
  try {
    const updateNotes = await User.findByIdAndUpdate(
      id,
      { $set: { [`Notes.${index}`]: { content, color } } },
      { new: true }
    );
    res.status(200).json(updateNotes);
  } catch (error) {
    next(error);
  }
};
