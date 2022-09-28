const addToLS = (time) => {
    localStorage.setItem('Break Time', JSON.stringify(time + 's'));
}

export { addToLS }