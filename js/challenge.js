
document.addEventListener("DOMContentLoaded", () => {
    let counterElement = document.getElementById("counter");
    let currentCount = 0;
    let timer = setInterval(updateCounter, 1000);

    function updateCounter() {
        currentCount++;
        counterElement.innerText = currentCount;
    }
});


document.addEventListener("DOMContentLoaded", () => {
    let counterElement = document.getElementById("counter");
    let currentCount = 0;
    let timer = setInterval(updateCounter, 1000);

    function updateCounter() {
        currentCount++;
        counterElement.innerText = currentCount;
    }

    document.getElementById("plus").addEventListener("click", () => {
        currentCount++;
        counterElement.innerText = currentCount;
    });

    document.getElementById("minus").addEventListener("click", () => {
        currentCount--;
        counterElement.innerText = currentCount;
    });
});


document.addEventListener("DOMContentLoaded", () => {
    let counterElement = document.getElementById("counter");
    let currentCount = 0;
    let timer = setInterval(updateCounter, 1000);
    let likeCounts = {};

    function updateCounter() {
        currentCount++;
        counterElement.innerText = currentCount;
    }

    document.getElementById("plus").addEventListener("click", () => {
        currentCount++;
        counterElement.innerText = currentCount;
    });

    document.getElementById("minus").addEventListener("click", () => {
        currentCount--;
        counterElement.innerText = currentCount;
    });

    document.getElementById("heart").addEventListener("click", () => {
        if (likeCounts[currentCount]) {
            likeCounts[currentCount]++;
        } else {
            likeCounts[currentCount] = 1;
        }

        const likeList = document.querySelector(".likes");
        const existingLikeItem = document.getElementById(`like-${currentCount}`);

        if (existingLikeItem) {
            existingLikeItem.innerText = `${currentCount} has been liked ${likeCounts[currentCount]} times`;
        } else {
            const newLikeItem = document.createElement("li");
            newLikeItem.id = `like-${currentCount}`;
            newLikeItem.innerText = `${currentCount} has been liked ${likeCounts[currentCount]} times`;
            likeList.appendChild(newLikeItem);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let counterElement = document.getElementById("counter");
    let currentCount = 0;
    let timer = setInterval(updateCounter, 1000);
    let likeCounts = {};
    let isPaused = false;

    function updateCounter() {
        currentCount++;
        counterElement.innerText = currentCount;
    }

    document.getElementById("plus").addEventListener("click", () => {
        currentCount++;
        counterElement.innerText = currentCount;
    });

    document.getElementById("minus").addEventListener("click", () => {
        currentCount--;
        counterElement.innerText = currentCount;
    });

    document.getElementById("heart").addEventListener("click", () => {
        if (likeCounts[currentCount]) {
            likeCounts[currentCount]++;
        } else {
            likeCounts[currentCount] = 1;
        }

        const likeList = document.querySelector(".likes");
        const existingLikeItem = document.getElementById(`like-${currentCount}`);

        if (existingLikeItem) {
            existingLikeItem.innerText = `${currentCount} has been liked ${likeCounts[currentCount]} times`;
        } else {
            const newLikeItem = document.createElement("li");
            newLikeItem.id = `like-${currentCount}`;
            newLikeItem.innerText = `${currentCount} has been liked ${likeCounts[currentCount]} times`;
            likeList.appendChild(newLikeItem);
        }
    });

    document.getElementById("pause").addEventListener("click", () => {
        if (!isPaused) {
            clearInterval(timer);
            document.getElementById("pause").innerText = "resume";
            document.getElementById("plus").disabled = true;
            document.getElementById("minus").disabled = true;
            document.getElementById("heart").disabled = true;
            document.getElementById("submit").disabled = true;
        } else {
            timer = setInterval(updateCounter, 1000);
            document.getElementById("pause").innerText = "pause";
            document.getElementById("plus").disabled = false;
            document.getElementById("minus").disabled = false;
            document.getElementById("heart").disabled = false;
            document.getElementById("submit").disabled = false;
        }
        isPaused = !isPaused;
    });
});


document.addEventListener("DOMContentLoaded", () => {
    let counterElement = document.getElementById("counter");
    let currentCount = 0;
    let timer = setInterval(updateCounter, 1000);
    let likeCounts = {};
    let isPaused = false;

    function updateCounter() {
        currentCount++;
        counterElement.innerText = currentCount;
    }

    document.getElementById("plus").addEventListener("click", () => {
        currentCount++;
        counterElement.innerText = currentCount;
    });

    document.getElementById("minus").addEventListener("click", () => {
        currentCount--;
        counterElement.innerText = currentCount;
    });

    document.getElementById("heart").addEventListener("click", () => {
        if (likeCounts[currentCount]) {
            likeCounts[currentCount]++;
        } else {
            likeCounts[currentCount] = 1;
        }

        const likeList = document.querySelector(".likes");
        const existingLikeItem = document.getElementById(`like-${currentCount}`);

        if (existingLikeItem) {
            existingLikeItem.innerText = `${currentCount} has been liked ${likeCounts[currentCount]} times`;
        } else {
            const newLikeItem = document.createElement("li");
            newLikeItem.id = `like-${currentCount}`;
            newLikeItem.innerText = `${currentCount} has been liked ${likeCounts[currentCount]} times`;
            likeList.appendChild(newLikeItem);
        }
    });

    document.getElementById("pause").addEventListener("click", () => {
        if (!isPaused) {
            clearInterval(timer);
            document.getElementById("pause").innerText = "resume";
            document.getElementById("plus").disabled = true;
            document.getElementById("minus").disabled = true;
            document.getElementById("heart").disabled = true;
            document.getElementById("submit").disabled = true;
        } else {
            timer = setInterval(updateCounter, 1000);
            document.getElementById("pause").innerText = "pause";
            document.getElementById("plus").disabled = false;
            document.getElementById("minus").disabled = false;
            document.getElementById("heart").disabled = false;
            document.getElementById("submit").disabled = false;
        }
        isPaused = !isPaused;
    });

    document.getElementById("comment-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const commentInput = document.getElementById("comment-input");
        const commentText = commentInput.value;
        const commentList = document.getElementById("list");
        const newComment = document.createElement("p");
        newComment.innerText = commentText;
        commentList.appendChild(newComment);
        commentInput.value = "";
    });
});
