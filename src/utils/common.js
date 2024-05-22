




export const getRandomImage = (data, isMobile) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return isMobile ? data[randomIndex].mobile : data[randomIndex].desktop;
};
