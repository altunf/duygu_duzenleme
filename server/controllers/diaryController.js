import { Diary } from "../models/diaryModel.js";

const newDiaryController = async (req, res) => {
  try {
    const { title, mood, point, date, text } = req.body;

    const userID = req.headers["current-user"];

    const newDiary = Diary.create({
      title,
      mood,
      point,
      date,
      text,
      userID: userID,
    });

    res.status(201).json({ status: "OK", newDiary });
  } catch (error) {
    return res.status(500).json({ msg: error.msg });
  }
};

const getAllDiariesOfUser = async (req, res) => {
  try {
    const diaries = await Diary.find({ UserID: req.userID });
    res.status(200).json(diaries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching diaries", error });
  }
};

export { newDiaryController, getAllDiariesOfUser };
