/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* List of LS Instructors Github username's:
tetondan
dustinmyers
justsml
luishrd
bigknell
*/
const followerArr = [];

axios
  .get('https://api.github.com/users/yirano')
  .then((response) => {
    comp(response.data);
    return axios.get('https://api.github.com/users/yirano/followers');
  })
  .then((response) => {
    response.data.map((user) => {
      comp(user);
    });
  });

function comp(obj) {
  const cont = document.querySelector('.cards');
  const parentDiv = document.createElement('div');
  const img = document.createElement('img');
  const childDiv = document.createElement('div');
  const h3 = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profAddr = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  parentDiv.classList.add('card');
  childDiv.classList.add('card-info');
  h3.classList.add('name');
  userName.classList.add('username');

  cont.appendChild(parentDiv);
  parentDiv.append(img, childDiv);
  childDiv.append(h3, userName, location, profile, followers, following, bio);
  profile.appendChild(profAddr);

  h3.textContent = obj.name;
  img.src = obj.avatar_url;
  userName.textContent = obj.login;
  location.textContent = obj.location;
  profAddr.setAttribute(`href`, obj.html_url);
  profAddr.textContent = 'Check out my Github';
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;
}

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
