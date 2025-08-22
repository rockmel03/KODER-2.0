import mongoose from "mongoose";

export async function connectDB() {
  try {
    const response = await mongoose.connect(`${process.env.MONGODB_URI}`);

    console.log(
      `Database connect successfully! , host:`,
      response.connection.host
    );
  } catch (error) {
    console.log("Failed to connect Database");
    throw error;
  }
}
