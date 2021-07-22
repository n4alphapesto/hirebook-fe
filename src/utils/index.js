export function readCookie(name) {
    let allCookies = document.cookie;
    let cookieArray = allCookies.split(';');
    let selectedCookie = cookieArray.filter(cookie => {
        const cookieName = cookie.split('=')[0].trim();
        return cookieName === name;
    });
    return selectedCookie.length > 0 ? selectedCookie[0].split('=')[1] : null;
}

export function setCookies(name, value) {
    document.cookie = `${name}=${value}`;
}