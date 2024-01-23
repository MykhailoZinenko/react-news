export const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const secondsPast = Math.floor((now - date) / 1000);

    if (secondsPast < 60) {
        return `${secondsPast}s ago`;
    }
    const minutesPast = Math.floor(secondsPast / 60);
    if (minutesPast < 60) {
        return `${minutesPast}m ago`;
    }
    const hoursPast = Math.floor(minutesPast / 60);
    if (hoursPast <= 24) {
        return `${hoursPast}h ago`;
    }
    const daysPast = Math.floor(hoursPast / 24);
    return day === 1 ? `${daysPast} day ago` : `${daysPast} days ago`;
};
