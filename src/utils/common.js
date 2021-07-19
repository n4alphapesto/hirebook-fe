export const randomNumber = function (length) {
    var text = "";
    var possible = "123456789";
    for (var i = 0; i < length; i++) {
        var sup = Math.floor(Math.random() * possible.length);
        text += i > 0 && sup === i ? "0" : possible.charAt(sup);
    }
    return Number(text);
};

export const locations = [
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'pune', label: 'Pune' },
    { value: 'banglore', label: 'Banglore' },
    { value: 'chennai', label: 'Chennai' },
]

export const monthOptions = [
    { value: '0', label: 'N/A' },
    { value: '1', label: '1 Month' },
    { value: '2', label: '2 Month' },
    { value: '3', label: '3 Month' },
    { value: '4', label: '4 Month' },
]