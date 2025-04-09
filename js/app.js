/**
 * Main Application Logic - Simplified Version
 * This file contains the main functionality for the Pokemon Card Flip App
 */

const DEBUG = true;

// DOM Elements
const cardGrid = document.getElementById('card-grid');
const loadingSpinner = document.getElementById('loading-spinner');

// Constants
const CARD_COUNT = 12;

// Application State
const cards = [];

// Debug flag - set to true to simulate slower loading
const DEBUG_SHOW_SPINNER = true;
const LOADING_DELAY = 4000; // 4 seconds delay

/**
 * Initialize the application
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function | MDN: async function}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event | MDN: DOMContentLoaded}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/classList | MDN: classList}
 */
async function initApp() {
  // CHALLENGE 1: Implement the initialization sequence for the application
  // 1. Show the loading spinner by calling showLoading()
  // 2. Hide the card grid initially by adding the 'hidden' class
  // 3. Create card elements by calling createCardElements()
  // 4. Fetch the initial Pokemon data by calling fetchAndAssignPokemon()
  // 5. Set up event listeners by calling setupEventListeners()
  // 6. Hide the loading spinner by calling hideLoading()
  // 7. Show the card grid by removing the 'hidden' class

  showLoading();

  console.log('App initialization started');

  cardGrid.classList.add('hidden');

  console.log('Added hidden class.');

  createCardElements();

  console.log('Cards created.');

  const pokemonData = await fetchAndAssignPokemon();

  console.log('Pokemon data fetched.');

  setupEventListeners();

  console.log('Event listeners set up.');

  hideLoading();

  console.log('Spinner hide loading complete.');

  cardGrid.classList.remove('hidden');

  console.log('App initialization completed.');

  // DEBUGGING TIP: You can verify your initialization sequence by adding:
  // console.log('App initialization started');
  // After each major step, add another console.log to track progress:
  // console.log('Cards created');
  // console.log('Pokemon data fetched');
  // console.log('Event listeners set up');
  // console.log('App initialization completed');
}

/**
 * Create card elements in the grid
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement | MDN: createElement}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML | MDN: innerHTML}
 */
function createCardElements() {
  // CHALLENGE 2: Implement the card creation function
  // 1. Clear existing cards by setting cardGrid.innerHTML to an empty string
  // 2. Reset the cards array to an empty array
  // 3. Create a loop that runs CARD_COUNT times
  // 4. In each iteration, call createCardElement(i) with the current index
  // 5. Append each created card to the cardGrid
  // 6. Push each card into the cards array

  cardGrid.innerHTML = '';

  console.log('Set cardGrid.innerHTML to empty string.');

  //const cards = [];

  console.log('Reset the cards array to empty array.');

  for (let i = 0; i < CARD_COUNT - 1; i++) {
    let cardElement = createCardElement(i);
    cardGrid.append(cardElement);
    cards.push(cardElement);
  }

  console.log('Created a for loop.');

  console.log(`Created ${cards.length} cards`);

  console.log('Card grid content:', cardGrid.innerHTML);

  // DEBUGGING TIP: Verify your card creation process:
  // console.log(`Created ${cards.length} cards`);
  // If cards aren't showing up, check if they were actually added to the DOM:
  // console.log('Card grid content:', cardGrid.innerHTML);
}

/**
 * Create a single card element
 * @param {number} index - Card index
 * @returns {HTMLElement} Card element
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset | MDN: dataset}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild | MDN: appendChild}
 */
function createCardElement(index) {
  // CHALLENGE 3: Implement the individual card element creation
  // 1. Create the main card div with className 'card'
  // 2. Set the card's dataset.index to the provided index
  // 3. Create the cardInner div with className 'card-inner'
  // 4. Create the cardFront div with className 'card-front'
  // 5. Create the cardBack div with className 'card-back'
  // 6. Create a Pokeball image element with:
  //    - src set to 'assets/pokeball.png'
  //    - alt set to 'Pokéball'
  //    - className set to 'pokeball-img'
  // 7. Append the Pokeball image to cardFront
  // 8. Append cardFront and cardBack to cardInner
  // 9. Append cardInner to card
  // 10. Return the fully constructed card

  const mainCardDiv = document.createElement('div');

  mainCardDiv.classList.add('card');

  mainCardDiv.index = index;

  const cardInnerDiv = document.createElement('div');

  cardInnerDiv.classList.add('card-inner');

  const cardFrontDiv = document.createElement('div');

  cardFrontDiv.classList.add('card-front');

  const cardBackDiv = document.createElement('div');

  cardBackDiv.classList.add('card-back');

  const pokeballImage = document.createElement('img');

  pokeballImage.src = 'assets/pokeball.png';

  pokeballImage.alt = 'Pokéball';

  pokeballImage.classList.add('pokeball-img');

  cardFrontDiv.append(pokeballImage);

  cardInnerDiv.append(cardFrontDiv);

  cardInnerDiv.append(cardBackDiv);

  mainCardDiv.append(cardInnerDiv);

  console.log(`Card ${index} children:`, mainCardDiv.children);
  console.log('Card inner children:', cardInnerDiv.children);

  return mainCardDiv;

  // DEBUGGING TIP: You can log the structure of the created card:
  // console.log(`Card ${index} structure:`, card);
  // To check if all elements are properly nested:

}

/**
 * Fetch and assign Pokemon to cards
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch | MDN: try...catch}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise | MDN: Promise}
 */
async function fetchAndAssignPokemon() {
  // CHALLENGE 4: Implement the Pokemon fetching and assignment logic
  // 1. Wrap the function body in a try/catch block
  // 2. Use PokemonService.fetchMultipleRandomPokemon(CARD_COUNT) to fetch Pokemon data
  // 3. If DEBUG_SHOW_SPINNER is true, add a delay using:
  //    await new Promise(resolve => setTimeout(resolve, LOADING_DELAY))
  // 4. Loop through the cards array and call assignPokemonToCard for each card
  //    with the corresponding Pokemon from the pokemonList
  // 5. In the catch block, log any errors with console.error

  try {
    console.log('Starting to fetch Pokemon');

    const pokemonList = await PokemonService.fetchMultipleRandomPokemon(CARD_COUNT);

    console.log(`Fetched ${pokemonList.length} Pokemon:`, pokemonList);

    if (DEBUG_SHOW_SPINNER) {
      await new Promise(resolve => setTimeout(resolve, LOADING_DELAY));
    }

    for (let i = 0; i < cards.length - 1; i++) {
      assignPokemonToCard(cards[i], pokemonList[i]);
      console.log(`Assigning Pokemon ${i + 1} to card ${i}`);
    }
  } catch (error) {
    console.error('Pokemon fetch error details:', error.message, error.stack);
  }

  // DEBUGGING TIP: Log each stage of the process:
  // console.log('Starting to fetch Pokemon');
  // After fetching:
  // console.log(`Fetched ${pokemonList.length} Pokemon:`, pokemonList);
  // When assigning to cards:
  // console.log(`Assigning Pokemon ${i+1} to card ${i}`);
  // If there's an error:
  // console.error('Pokemon fetch error details:', error.message, error.stack);
}

/**
 * Assign a Pokemon to a card
 * @param {HTMLElement} card - Card element
 * @param {Object} pokemon - Pokemon data
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify | MDN: JSON.stringify}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector | MDN: querySelector}
 */
function assignPokemonToCard(card, pokemon) {
  // CHALLENGE 5: Implement the Pokemon assignment to card
  // 1. Check if card or pokemon is falsy, if so, return early
  // 2. Store the Pokemon data in the card's dataset.pokemon as a JSON string
  // 3. Get the card back element using card.querySelector('.card-back')
  // 4. Clear existing content by setting cardBack.innerHTML to an empty string
  // 5. Create and append the following elements to cardBack:
  //    a. Pokemon image (img with src from pokemon.sprite)
  //    b. Pokemon name (h2 element)
  //    c. Pokemon types (div with type badges)
  //    d. Pokemon stats (height, weight, abilities count)

  if (!card || !pokemon) {
    console.error('Card is falsy.');

    return;
  }

  card.dataset.pokemon = JSON.stringify(pokemon);

  console.log(`Assigning Pokemon "${pokemon.name}" to card`);

  const cardBackElement = card.querySelector('.card-back');

  console.log('Pokemon data stored in card:', JSON.parse(card.dataset.pokemon));

  cardBackElement.innerHTML = '';

  const pokemonImage = document.createElement('img');

  pokemonImage.src = pokemon.sprite;

  pokemonImage.alt = pokemon.name;

  pokemonImage.className = 'pokemon-image';

  const pokemonName = document.createElement('h2');

  pokemonName.textContent = pokemon.name;

  pokemonName.className = 'pokemon-name';

  const pokemonTypes = document.createElement('div');

  pokemon.types.forEach((type) => {
    const typeBadge = document.createElement('span');
    typeBadge.textContext = type;
    typeBadge.className = `type-badge ${type}`;
    pokemonTypes.appendChild(typeBadge);
  });



  pokemonTypes.classList.add('.type-badge');

  const pokemonStats = document.createElement('div');

  pokemonStats.className = 'pokemon-stats';

  const heightStat = document.createElement('div');

  heightStat.className = 'stat';

  heightStat.innerHTML = `<span>Height</span><span class = "Stat value">${pokemon.height}m</span>`;

  const weightStat = document.createElement('div');

  weightStat.className = 'stat';

  weightStat.innerHTML = `<span>Weight</span><span class = "Stat value">${pokemon.weight}kg</span>`;

  const abilitiesStat = document.createElement('div');

  abilitiesStat.className = 'stat';

  abilitiesStat.innerHTML = `<span>Abilities</span><span class = "Stat value">${pokemon.abilities.length}</span>`;

  pokemonStats.classList.add('.pokemon-stats');

  pokemonStats.appendChild(heightStat);

  pokemonStats.appendChild(weightStat);

  pokemonStats.appendChild(abilitiesStat);

  cardBackElement.appendChild(pokemonImage);

  cardBackElement.appendChild(pokemonName);

  cardBackElement.appendChild(pokemonTypes);

  cardBackElement.appendChild(pokemonStats);

  console.log('Card back contents after assignment:', cardBackElement.innerHTML);

  // DEBUGGING TIP: Verify the Pokemon data is correctly stored:
  // console.log(`Assigning Pokemon "${pokemon.name}" to card`);
  // console.log('Pokemon data stored in card:', JSON.parse(card.dataset.pokemon));
  // To check if all elements were created:
  // console.log('Card back contents after assignment:', cardBack.innerHTML);
}

/**
 * Handle card click
 * @param {Event} event - Click event
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event | MDN: Event}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/classList | MDN: classList}
 */
function handleCardClick(event) {
  // CHALLENGE 6: Implement the card click handler
  // 1. Find the clicked card by traversing up from event.target
  //    Use a while loop to check if the current element has the 'card' class
  // 2. If no card was found (card is falsy), return early
  // 3. Toggle the 'flipped' class on the card to trigger the flip animation

  let found = false;

  let card = event.target;

  console.log('Click event target:', event.target);
  while (card) {
    if (card.classList.contains('card')) {
      found = true;
      console.log('Found card element:', card);
      break;
    }

    card = card.parentElement;
  }

  if (!found) {
    return;
  }

  card.classList.toggle('flipped');

  console.log('Card flipped state:', card.classList.contains('flipped'));

  // DEBUGGING TIP: You can track the click target and found card:
  // console.log('Click event target:', event.target);
  // console.log('Found card element:', card);
  // console.log('Card flipped state:', card.classList.contains('flipped'));
}

/**
 * Set up event listeners
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener | MDN: addEventListener}
 */
function setupEventListeners() {
  // CHALLENGE 7: Implement the event listener setup
  // 1. Add a click event listener to the cardGrid element
  // 2. Use the handleCardClick function as the event handler

  cardGrid.addEventListener('click', handleCardClick);

  console.log('Event listeners have been set up');

  console.log('To see all event listeners, use DevTools');

  // DEBUGGING TIP: Verify the event listener was attached:
  // console.log('Event listeners have been set up');
  // You can also list all event listeners (in Chrome DevTools):
  // console.log('To see all event listeners, use DevTools');
}

/**
 * Show loading spinner
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/classList | MDN: classList}
 */
function showLoading() {
  // CHALLENGE 8: Implement the show loading function
  // 1. Remove the 'hidden' class from the loadingSpinner element

  loadingSpinner.classList.remove('hidden');

  console.log('Loading spinner visible:', !loadingSpinner.classList.contains('hidden'));

  // DEBUGGING TIP: Confirm the spinner's visibility state:
  // console.log('Loading spinner visible:', !loadingSpinner.classList.contains('hidden'));
}

/**
 * Hide loading spinner
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/classList | MDN: classList}
 */
function hideLoading() {
  // CHALLENGE 9: Implement the hide loading function
  // 1. Add the 'hidden' class to the loadingSpinner element

  loadingSpinner.classList.add('hidden');

  console.log('Loading spinner hidden:', loadingSpinner.classList.contains('hidden'));

  // DEBUGGING TIP: Confirm the spinner's visibility state:
  // console.log('Loading spinner hidden:', loadingSpinner.classList.contains('hidden'));
}

// CHALLENGE 10: Initialize the application when the DOM is loaded
// 1. Add an event listener for the 'DOMContentLoaded' event on the document
// 2. Use the initApp function as the event handler

document.addEventListener('DOMContentLoaded', initApp);



// DEBUGGING TIP: You can add a global debug flag at the top of your file:
// const DEBUG = true;
// Then use it throughout your code:
// if (DEBUG) console.log('DOM loaded, initializing app');
