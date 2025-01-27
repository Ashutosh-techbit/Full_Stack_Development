// Upvote Button Interactivity
let upvoteCount = 0;
const upvoteButton = document.querySelector('.post-actions button:nth-child(1)');
upvoteButton.addEventListener('click', function () {
    upvoteCount++;
    upvoteButton.textContent = `Upvote (${upvoteCount})`;
});

// Comment Button Interactivity
const commentButton = document.querySelector('.post-actions button:nth-child(2)');
commentButton.addEventListener('click', function () {
    let comment = prompt('Enter your comment:');
    if (comment) {
        alert('Your comment has been posted!');
    }
});

// Share Button Interactivity
const shareButton = document.querySelector('.post-actions button:nth-child(3)');
shareButton.addEventListener('click', function () {
    alert('The post has been shared!');
});

// "Know More" Button Interactivity
const knowMoreButton = document.querySelector('.know-more-btn');
knowMoreButton.addEventListener('click', function () {
    window.open('https://www.kotak.com', '_blank');
});