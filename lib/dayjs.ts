import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
dayjs.extend(weekOfYear);
dayjs.extend(weekday);

export default dayjs;
