var posts=["posts/63eb.html","posts/7c2d.html","posts/5942.html","posts/f9c5.html","posts/8b77.html","posts/762f.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };