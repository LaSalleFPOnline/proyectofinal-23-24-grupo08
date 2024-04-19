const getFormatDate = (date) => {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0];
};

const getFormatDateHuman = (date) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (date instanceof Date) {
        date = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0].split('-');
    } else if (typeof date === 'string' && regex.test(date)) {
        date = date.split('-');
    } else {
        return date;
    }

    return `${date[2]} / ${date[1]} / ${date[0]}`;
};

const isDateValid = (date) => {
    if (date instanceof Date) {
        return true;
    } else if (typeof date === 'string') {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(date);
    } else {
        return false;
    }
};

const getIntervalHours = (start, end, interval) => {
    const timeArray = [];
    const initHour = start.split(':')[0];
    let initMinutes = start.split(':')[1] || 0;
    const endHour = end.split(':')[0];
    const endMinutes = end.split(':')[1] || 0;

    for (let i = initHour; i <= endHour; i++) {
        for (let j = initMinutes; j <= 59; j += interval) {
            if (i == endHour && j > endMinutes) {
                break;
            }
            const mf = j < 10 ? `0${j}` : j;

            timeArray.push({
                value: `${i}:${mf}`,
                text: `${i}:${mf}h`
            });
        }
        initMinutes = 0;
    }

    return timeArray;
};

const getFormatTime = (time) => {
    return `${time}:00`;
};

export { getFormatDate, getFormatDateHuman, isDateValid, getIntervalHours, getFormatTime };
