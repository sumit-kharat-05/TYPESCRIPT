const userName: string | null = null;

function showname(): string {
    if (userName === null) {
        return "No name provided";
    }
    return userName.toUpperCase(); // ✅ Safe: null is ruled out
}

showname();
