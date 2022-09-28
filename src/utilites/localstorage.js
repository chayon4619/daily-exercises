const addToLS = (time) => {
    localStorage.setItem('Break Time', JSON.stringify((time) + "s"));
}

const setFromLs = () => {
    const settedTime = localStorage.getItem('Break Time');
    console.log(JSON.parse(settedTime))
}

export { addToLS, setFromLs }