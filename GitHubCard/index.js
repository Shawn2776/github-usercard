/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from "axios";





  

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
const cardsDiv = document.querySelector('.cards');

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  `tetondan`,
  `dustinmyers`,
  `justsml`,
  `luishrd`,
  `bigknell`,
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker({ imageUrl, usersName, usersUserName, location, githubAddress, userFollowers, userFollowing, bio }){

  const cardDiv = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardDiv2 = document.createElement('div');
  const cardH3 = document.createElement('h3');
  const cardPUsername = document.createElement('p');
  const cardPLocation = document.createElement('p');
  const cardPProfile = document.createElement('p');
  const cardA = document.createElement('a');
  const cardPFollowers = document.createElement('p');
  const cardPFollowing = document.createElement('p');
  const cardPBio = document.createElement('p');

  cardDiv.classList.add('card');
  cardDiv2.classList.add('card-info');
  cardH3.classList.add('name');
  cardPUsername.classList.add('username');

  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardDiv2);
  cardDiv2.appendChild(cardH3);
  cardDiv2.appendChild(cardPUsername);
  cardDiv2.appendChild(cardPLocation);
  cardDiv2.appendChild(cardPProfile);
  cardPProfile.appendChild(cardA);
  cardDiv2.appendChild(cardPFollowers);
  cardDiv2.appendChild(cardPFollowing);
  cardDiv2.appendChild(cardPBio);

  cardImg.src = imageUrl;
  cardH3.textContent = usersName;
  cardPUsername.textContent = usersUserName;
  cardPLocation.textContent = `Location: ${location}`;
  cardA.href = `${githubAddress}`;
  cardPProfile.textContent = `Profile: ${cardA}`;
  cardPFollowers.textContent = `Followers: ${userFollowers}`;
  cardPFollowing.textContent = `Following: ${userFollowing}`;
  cardPBio.textContent = `Bio: ${bio}`

  console.log(cardA.href)
  return cardDiv;

}

followersArray.forEach(element => {
  let getObjString = `https://api.github.com/users/${element}`;

  axios
  .get(getObjString)
  .then(futureData => {
    const imageUrl = futureData.data.avatar_url;
    const usersName = futureData.data.name;
    const usersUserName = futureData.data.login;
    const location = futureData.data.location;
    const githubAddress = futureData.data.html_url;
    const userFollowers = futureData.data.followers;
    const userFollowing = futureData.data.following;
    const bio = futureData.data.bio;

    const returnObj = cardMaker({ imageUrl, usersName, usersUserName, location, githubAddress, userFollowers, userFollowing, bio})

    console.log(returnObj)

    cardsDiv.appendChild(returnObj)
  })
  .catch((drama) => {
    console.log("failure to load");
  })
});

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
