import { Exercise } from "../models/exerciseModel.js";

const addNewExercise = async (req, res) => {
  //Pro versiyonunda kullanıcılar kendilerine özel egzersizler ekleyebilir

  //Sadece ADMİN yeni egzersiz ekleyebilir
  try {
    const { title, description, tag, text } = req.body;
    const userID = req.headers["user-id"];

    const newExercise = await Exercise.create({
      title,
      description,
      tag,
      text,
      // completionDates,
      userID: userID,
    });

    res.status(201).json({ status: "OK", newExercise });
  } catch (error) {
    console.error("Yeni Egzersiz eklenirken bir hata oluştu:", error);
    return res
      .status(500)
      .json({ msg: "Yeni Egzersiz eklenirken bir hata oluştu" });
  }
};

// Kullanıcının tamamlanma tarihlerini ekleyen kontrolör fonksiyonu
const addCompletionDate = async (req, res) => {
  const exerciseId = req.body.exerciseId;
  const userId = req.headers["user-id"];
  const newDate = { date: new Date().toISOString() };

  if (!exerciseId || !userId) {
    return res
      .status(400)
      .json({ message: "Exercise ID and User ID are required" });
  }

  try {
    // Egzersizi bul ve güncelle
    const exercise = await Exercise.findById(exerciseId);
    if (!exercise)
      return res.status(404).json({ message: "Exercise not found" });

    // Kullanıcıya ait tarih dizisini güncelle
    // `$push` operatörü ile belirtilen kullanıcı için tarih ekle

    await Exercise.findByIdAndUpdate(
      exerciseId,
      { $push: { [`completionDates.${userId}`]: newDate } },
      { new: true, useFindAndModify: false }
    );

    res.status(200).json({ message: "Completion date added successfully" });
  } catch (error) {
    console.error("Error adding completion date:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: "Error fetching exercises", error });
  }
};
export { addNewExercise, addCompletionDate, getAllExercises };
