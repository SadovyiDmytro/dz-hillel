const postContainer = document.getElementById('post-container');
const searchButton = document.getElementById('search-btn');

searchButton.addEventListener('click', () => {
  const postId = document.getElementById('post-id').value;
  if (postId < 1 || postId > 100) {
    alert('Invalid post ID!');
    return;
  }

  getPostById(postId)
    .then(post => {
      const postEl = document.createElement('div');
      postEl.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button id="comment-button">Get comments</button>
      `;
      postContainer.innerHTML = '';
      postContainer.appendChild(postEl);

      const commentsButton = document.getElementById('comment-button');
      commentsButton.addEventListener('click', () => {
        getCommentsByPostId(postId)
          .then(comments => {
            const commentsEl = document.createElement('div');
            commentsEl.innerHTML = `
              <h3>Comments:</h3>
              <ul>
                ${comments.map(comment => `<li>${comment.name}: ${comment.body}</li>`).join('')}
              </ul>
            `;
            postContainer.appendChild(commentsEl);
          })
          .catch(error => {
            console.error(error);
            alert('Failed to load comments!');
          });
      });
    })
    .catch(error => {
      console.error(error);
      alert('Failed to load post!');
    });
});

function getPostById(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(post => resolve(post))
      .catch(error => reject(error));
  });
}

function getCommentsByPostId(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(comments => resolve(comments))
      .catch(error => reject(error));
  });
}
