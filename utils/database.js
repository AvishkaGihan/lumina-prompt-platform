import mongoose from "mongoose";

let isConnected = false;

/**
 * Connects to the MongoDB database using Mongoose.
 *
 * This function sets the Mongoose strictQuery option to true and checks if the
 * database is already connected. If it is not connected, it attempts to connect
 * to the MongoDB database using the connection URI specified in the environment
 * variable `MONGODB_URI`. Upon successful connection, it sets the `isConnected`
 * flag to true and logs a success message. If an error occurs during the connection
 * attempt, it logs the error.
 *
 * @async
 * @function connectToDB
 * @returns {Promise<void>} A promise that resolves when the connection attempt is complete.
 */
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "lumina-prompt-platform",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
