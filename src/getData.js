async function getData() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple", { mode : "cors" });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export {getData};