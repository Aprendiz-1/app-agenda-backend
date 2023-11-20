import mongoose from "mongoose";

type PropsTarefa = {
    titulo: string;
    concluida: boolean;
};

const DaySchema = new mongoose.Schema({
    day: {
        type: String,
        required: true,
    },
    month: {
        type: String,
        required: true,
    },
    tasks: {
        type: Array<PropsTarefa>,
    },
    open: {
        type: Boolean,
        default: true,
    }
});

const Day = mongoose.model('Day', DaySchema);
export { Day };