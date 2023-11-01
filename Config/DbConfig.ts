import { MongoClient } from "mongodb";

const URL: string = "mongodb://127.0.0.1:27017";

export const Client = new MongoClient(URL);

const mainConnection = async () => {
  try {
    await Client.connect();
    return "db connected...!!!";
  } catch (error) {
    console.log(error);
  }
};

mainConnection()
  .then((res) => {
    console.log(res);
  })
  .catch(() => {
    console.error();
  })
  .finally(() => {
    Client.close();
  });

export const db = Client.db("taskedDB").collection("taskes");

