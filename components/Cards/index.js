// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const promiseCard = axios.get(
  "https://lambda-times-backend.herokuapp.com/articles"
);
promiseCard
  .then(response => {
    let objects = response.data.articles;
    const cardsContainer = document.querySelector(".cards-container");
    // console.log(cardsContainer);

    // loop over each obj so i can trun them into arrays
    for (let obj in objects) {
      // map over each item
      objects[obj].map(item => {
        cardsContainer.appendChild(CardComponent(item));
      });
    }
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

function CardComponent(obj) {
  // define the new elemensts;
  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const spanName = document.createElement("span");

  // add the class names
  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgContainer.classList.add("img-container");
  imgContainer.appendChild(img);

  // put content
  headlineDiv.textContent = obj.headline;
  img.src = obj.authorPhoto;
  spanName.textContent = obj.authorName;
  // put together
  cardDiv.appendChild(headlineDiv);
  headlineDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  authorDiv.appendChild(spanName);
  return cardDiv;
}
