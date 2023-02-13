const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const main = document.querySelector("main");

for (let i = 0; i < posts.length; i++) {
  main.innerHTML += `	<section class="artist-details">
				<div class="artist-container">
					<img src="${posts[i].avatar}" class="avatar-one" alt="${posts[i].name} 's avatar" />
					<div>
						<h1 id="artist"> ${posts[i].name}</h1>
						<h2>${posts[i].location}</h2>
					</div>
				</div>
			</section>
      	<section>
				<div class="main-img">
					<img src="${posts[i].post}" class="main-img" alt="picture of ${posts[i].name}" />
				</div>
			</section>
	    <section>
				<div class="icon-container">
					<button id="heart" class="heart"><img class="icon" src="images/icon-heart.png" alt="" /></button>
					<button class="comment"><img class="icon" src="images/icon-comment.png" alt="" /></button>
					<button class="dm"><img class="icon" src="images/icon-dm.png" alt="" /></button>
				</div>
        <div class="bottom-section">
					<p id="likes" class="likes">${posts[i].likes} likes</p>
					<p>${posts[i].username} <span>${posts[i].comment}</span></p>
				</div>
			</section>`;
}

const heart = document.querySelectorAll(".heart");
const likesEls = document.querySelectorAll(".likes");

heart.forEach((heart, idx) => {
  heart.addEventListener("click", function handleClick(event) {
    let count = (posts[idx].likes += 1).toLocaleString("en-US");

    likesEls[idx].innerHTML = `${count} likes`;
  });
});

