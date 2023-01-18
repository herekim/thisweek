import createHandler from 'pages/api/middleware';
import TodayHabits from 'pages/api/models/todayHabits';

const cron = require('node-cron');

const app = createHandler();

app.get(async (_, res) => {
  const todayHabits = await TodayHabits.find({});
  return res.status(200).json({ todayHabits });
});

cron.schedule('* * * * * *', () => {
  console.log('cron!!!');
});
