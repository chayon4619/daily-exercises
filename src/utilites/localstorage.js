const addToLS = (time) => {
    localStorage.setItem('Break Time', JSON.stringify(time));
}

const setFromLs = () => {
    const settedTime = localStorage.getItem('Break Time');
    return JSON.parse(settedTime);
}

export { addToLS, setFromLs }