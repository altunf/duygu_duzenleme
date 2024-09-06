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
  const title = req.headers["content-title"].toLowerCase().trim();
  const userId = req.headers["current-user"];

  try {
    const existingDiary = await Diary.findOne({
      title: title,
      userID: userId, // Düzeltilmiş alan adı
      _id: { $ne: id },
    });

    if (existingDiary) {
      return res
        .status(400)
        .json({ message: "Bu başlığa sahip başka bir günlüğünüz var" });
    }

    const updatedDiary = await Diary.findByIdAndUpdate(
      id,
      { title: title },
      { new: true }
    );

    if (!updatedDiary) {
      return res.status(404).json({ message: "Günlük bulunamadı" });
    }

    res.status(200).json(updatedDiary);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Günlük güncellenirken bir hata oluştu", error });
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
