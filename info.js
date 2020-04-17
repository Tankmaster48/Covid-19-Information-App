class Info {
    // Make an HTTP GET Request
    async getInfo(url) {
        const infoResponse = await fetch(url);
        const info = await infoResponse.json();
        return info;
    }
}
