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

const addCompletionDate = async (exerciseId, newDate) => {
  //kullanıcı kontrolü de yap
  try {
    await Exercise.findByIdAndUpdate(
      exerciseId,
      { $push: { completionDates: newDate } },
      { new: true, useFindAndModify: false }
    );
    console.log("Date added successfully");
  } catch (error) {
    console.error("Error adding date:", error);
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
