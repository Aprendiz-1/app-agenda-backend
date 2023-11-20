import { Request, Response, Router } from 'express';
import { Day } from './models/Day';

const router = Router();

router.post('/create', async (req: Request, res: Response) => {
    const {day, month} = req.body;

    const dayExists = await Day.findOne({day: day});

    if(dayExists && dayExists.open === true) {
        throw new Error('Já existe uma agenda para este dia.');
    }

    const createDay = await Day.create({day, month});
    return res.json(createDay);
});

router.put('/postlist', async (req: Request, res: Response) => {
    const {task_id, tasks} = req.body;
    const updateDay = await Day.findByIdAndUpdate(task_id, {$set: {tasks, open: false}});
    return res.json(updateDay);
});

router.get('/days', async (req: Request, res: Response) => {
    const month = req.query.month as string;
    const days = await Day.find({month: month});
    return res.json(days);
});

export { router };