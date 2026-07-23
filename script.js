// posts.js 의 데이터를 화면에 렌더링
document.getElementById('year').textContent = new Date().getFullYear();

const container = document.getElementById('posts');

const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

container.innerHTML = sorted.map((post) => `
  <article class="post">
    <div class="post-date">${post.date}</div>
    <h2 class="post-title">${post.title}</h2>
    <div class="post-tags">${(post.tags || []).map((t) => `<span>${t}</span>`).join('')}</div>
    <div class="post-content">${post.content}</div>
  </article>
`).join('');
