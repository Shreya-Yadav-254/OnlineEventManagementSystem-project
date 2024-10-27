document.addEventListener('DOMContentLoaded', async () => {
    const eventsDiv = document.getElementById('events');
    try {
        const response = await fetch('/getEvents'); // Adjust path to backend
        const events = await response.json();

        events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');
            eventDiv.innerHTML = `<h2>${event.name}</h2>
                                  <p>${event.description}</p>
                                  <p><strong>Date:</strong> ${event.date}</p>
                                  <p><strong>Location:</strong> ${event.location}</p>
                                  <p><strong>Organizer:</strong> ${event.organizer}</p>`;
            eventsDiv.appendChild(eventDiv);
        });
    } catch (error) {
        console.error('Error fetching events:', error);
    }
});
