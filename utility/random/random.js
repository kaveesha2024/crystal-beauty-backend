const random = length => {
    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let userId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        userId += digits[randomIndex];
    }

    return userId;
};
export default random;
