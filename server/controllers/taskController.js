import { Task } from "../models/taskModel.js";

const newTaskController = async (req, res) => {
  try {
    const { exerciseId, title, mood, date } = req.body;

    const userID = req.headers["current-user"];

    const newTask = await Task.create({
      exerciseId,
      title,
      mood,
      date,
      userID: userID,
    });

    res.status(201).json({ status: "OK", newTask });
  } catch (error) {
    console.error("Egzersiz eklenirken bir hata oluştu:", error);
    return res.status(500).json({ msg: "Egzersiz eklenirken bir hata oluştu" });
  }
};

const deleteTaskController = async (req, res) => {
  const id = req.headers["task-id"];
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(500).json({ message: "Error deleting tasks", error });
  }
};

const getAllTasksController = async (req, res) => {
  const id = req.headers["current-user"];

  try {
    const tasks = await Task.find({ userID: id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
};

export { newTaskController, getAllTasksController, deleteTaskController };
