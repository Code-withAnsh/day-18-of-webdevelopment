const post = {
    username: '@AnshSingh',
    content: 'This is my # first post',
    Likes: 1500,
    reposts: 5,
    tags: ["@Ansh","@shivmani singh"]  
};
console.log(post.content);//most used its easy
//or
console.log(post["content"]);
//same output
console.group(post.tags);
console.log(post.tags[0]);