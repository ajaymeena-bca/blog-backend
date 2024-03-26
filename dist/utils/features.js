import mongoose from "mongoose";
export const connectDb = (uri) => {
    mongoose.connect(uri, {
        dbName: "blog",
    }).then((c) => {
        console.log(`db connect to : ${c.connection.host}`);
    }).catch((err) => {
        console.log("eroor is : " + err);
    });
};
