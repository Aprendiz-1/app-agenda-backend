import mongoose from "mongoose";

const connectDatabase = () => {
    mongoose.connect("mongodb+srv://gerente:7eamwtlVC0qKqbbh@cluster0.fygwmpu.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log('Database connected!');
    }).catch((error) => {
        console.log(error);
    })
}

export { connectDatabase };