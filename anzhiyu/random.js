var posts=["posts/278.html","posts/1a8.html","posts/b55e.html","posts/8b77.html","posts/5942.html","posts/7c2d.html","posts/ba7c.html","posts/63eb.html","posts/f9c5.html","posts/762f.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };