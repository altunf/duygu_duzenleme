import { Exercise } from "../models/exerciseModel.js";

const addNewExercise = async (req, res) => {
  //Belki Pro versiyonunda kullanıcılar da ekler
  //SADECE ADMİN yeni exercise ekler
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

export { addNewExercise, addCompletionDate };
