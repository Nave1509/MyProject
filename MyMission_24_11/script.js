let relevantData = [];

let myPost = [
  {
    "postID": 1,
    "postTitle": "TitlePostID1",
    "postBody":
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    "postID": 2,
    "postTitle": "TitlePostID2",
    "postBody":
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    "postID": 3,
    "postTitle": "TitlePostID3",
    "postBody":
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

let myComment = [
  {
    "commentId": 1,
    "commentToPost": 3,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "commentBody":
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    "commentId": 2,
    "commentToPost": 1,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "commentBody":
      "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    "commentId": 3,
    "commentToPost": 2,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "commentBody":
      "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
  },
];

let getPosts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(myPost);
  }, 3000);
});

let getComments = new Promise((resolve) => {
  setTimeout(() => {
    resolve(myComment);
  }, 2000);
});

function pushPosts(postToPush) {
  relevantData.push(postToPush);
  return postToPush;
}

function pushComment(commentToPush) {
  relevantData.push(commentToPush);
  return commentToPush;
}
getPosts
  .then((allPosts) => pushPosts(allPosts))
  .then(() => getComments)
  .then((allComments) => pushComment(allComments))
  .then(() => printToHtml(relevantData));

function printToHtml(content) {
  content[0].forEach((post) => {
    let DivPost = document.createElement("div");
    DivPost.innerHTML = `<h2><b>post Title:</b> ${post.postTitle}</h2><p><b>post content:</b> ${post.postBody}</p>`;
    content[1].forEach((comment) => {
      if (post.postID == comment.commentToPost) {
        let commentDiv = document.createElement("div");
        commentDiv.innerHTML = `<p><b>comment to post:</b> ${comment.commentToPost}</p><p><b>Name:</b> ${comment.name}</p><p><b>Email:</b> ${comment.email}</p><p><b>comment:</b> ${comment.commentBody}</p>`;
        DivPost.appendChild(commentDiv);
      }
    });
    document.body.appendChild(DivPost);
  });
}
