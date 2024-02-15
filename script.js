const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/room1";

let events = [];

const eventsContainer = document.getElementById("events");

async function getEvents() {
  try {
    const response = await fetch(`${BASE_URL}/events`);
    const json = await response.json();

    return json.data;
  } catch (err) {
    console.error(err);
  }
}

function renderEvents() {
  const htmlEvents = events.map((eve) => {
    let div = document.createElement("div");

    div.className = "event";
    div.innerHTML = `
    <h3>${eve.name}</h3>
    <h4>#${eve.id}</h4>
    <p>${eve.location} - ${eve.date}</p>
    <p>${eve.description}</p>`;

    return div;
  });
  eventsContainer.replaceChildren(...htmlEvents);
}

async function startApp() {
  events = await getEvents();

  renderEvents();
}
startApp();
