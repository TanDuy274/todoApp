import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);

    console.log("link database successful");
  } catch (error) {
    console.error("Error when connect database: ", error);
    process.exit(1); //exit with err(1 that bai, 0 thanh cong)
  }
};
