import { Diary } from "../models/diaryModel.js";

const newDiaryController = async (req, res) => {
  try {
    const { title, mood, point, date, text } = req.body;

    const userID = req.headers["current-user"];

    const newDiary = await Diary.create({
      title,
      mood,
      point,
      date,
      text,
      userID: userID,
    });

    res.status(201).json({ status: "OK", newDiary });
  } catch (error) {
    console.error("Yeni günlük oluşturulurken bir hata oluştu:", error);
    return res
      .status(500)
      .json({ msg: "Yeni günlük oluşturulurken bir hata oluştu" });
  }
};

const deleteDiaryController = async (req, res) => {
  const id = req.headers["diary-id"];

  try {
    const deletedDiary = await Diary.findByIdAndDelete(id);
    res.status(200).json(deletedDiary);
  } catch (error) {
    res.status(500).json({ message: "Error deleting diaries", error });
  }
};

const updateDiaryTitleController = async (req, res) => {
  const id = req.headers["diary-id"];
  const title = req.headers["content-title"];

  try {
    const updatedDiary = await Diary.findByIdAndUpdate(
      id,
      { title: title }, // Güncellenecek alan ve yeni değer
      { new: true } // Yeni güncellenmiş belgeyi döndür
    );

    if (!updatedDiary) {
      return res.status(404).json({ message: "Diary not found" });
    }

    res.status(200).json(updatedDiary);
  } catch (error) {
    res.status(500).json({ message: "Error updating diary", error });
  }
};

const getAllDiariesController = async (req, res) => {
  const id = req.headers["current-user"];

  try {
    const diaries = await Diary.find({ userID: id });
    res.status(200).json(diaries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching diaries", error });
  }
};

export {
  newDiaryController,
  getAllDiariesController,
  deleteDiaryController,
  updateDiaryTitleController,
};
