import { Diary } from "../models/diaryModel.js";

const newDiaryController = async (req, res) => {
  try {
    const { title, mood, point, date } = req.body;

    const currentUser = localStorage.getItem("token");
    const userID = JSON.parse(currentUser).userCheck._id;

    const newDiary = Diary.create({
      title,
      mood,
      point,
      date,
      userID: userID,
    });

    res.status(201).json({ status: "OK", newDiary });
  } catch (error) {
    return res.status(500).json({ msg: error.msg });
  }
};

const getAllDiariesOfUser = async (req, res) => {
  try {
    const diaries = await Diary.find();
    res.status(200).json(diaries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching diaries", error });
  }
};

export { newDiaryController };
