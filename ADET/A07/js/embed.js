const dropdownMenuButton = document.getElementById('dropdownMenuButton');
const dropdownMonths = document.getElementById('dropdownMonths');
const monthTitle = document.getElementById('monthTitle');
const calendarBody = document.getElementById('calendarBody');
const modalContainer = document.getElementById('modalContainer');

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

monthNames.forEach((month, i) => {
    dropdownMonths.innerHTML += `<li><a class="dropdown-item" href="#" data-month="${i}">${month}</a></li>`;
});

function getStoredEvents() {
    return JSON.parse(localStorage.getItem("calendarEvents") || "{}");
}

function saveEventToStorage(month, day, title) {
    const events = getStoredEvents();
    if (!events[month]) events[month] = {};
    events[month][day] = title;
    localStorage.setItem("calendarEvents", JSON.stringify(events));
}

function deleteEventFromStorage(month, day) {
    const events = getStoredEvents();
    if (events[month] && events[month][day]) {
        delete events[month][day];
        if (Object.keys(events[month]).length === 0) {
            delete events[month];
        }
        localStorage.setItem("calendarEvents", JSON.stringify(events));
        generateCalendar(currentYear, currentMonth);
    }
}

function generateCalendar(year, month) {
    calendarBody.innerHTML = "";
    modalContainer.innerHTML = "";
    monthTitle.textContent = `MONTH OF ${monthNames[month].toUpperCase()}`;
    dropdownMenuButton.textContent = monthNames[month];

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const storedEvents = getStoredEvents();
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
        let row = "<tr>";
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                row += `<td></td>`;
            } else if (dayCounter <= daysInMonth) {
                const eventTitle = storedEvents[month]?.[dayCounter] || "";
                const modalId = `addEvent${dayCounter}Modal`;
                const isDisabled = eventTitle ? "" : "disabled";
                const isMobile = window.innerWidth < 768;
                const buttonOrTitle = eventTitle
                    ? `<div class="text-center"><span class="badge bg-dark mt-0 mt-sm-3 badge-event" role="button" data-bs-toggle="modal" data-bs-target="#${modalId}">${isMobile ? "!" : eventTitle}</span></div>`
                    : `<button type="button" class="btn btn-outline-dark event-button p-1 p-sm-2" data-bs-toggle="modal" data-bs-target="#${modalId}">${isMobile ? "+" : "ADD EVENT"}</button>`;


                row += `
                    <td class="p-1 p-sm-2">
                        <div class="card h-100">
                            <div class="container-fluid">
                                <div class="row">
                                    <h6 class="py-1 bg-dark text-light rounded-top mb-3"
                                        ${isMobile && eventTitle ? `data-bs-toggle="tooltip" title="${eventTitle}"` : ""}
                                    >
                                        ${dayCounter}
                                    </h6>
                                </div>
                                <div class="row m-0 pb-3">
                                    <div class="d-flex justify-content-center align-items-center px-0">
                                        ${buttonOrTitle}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>`;

                modalContainer.innerHTML +=
                    `<div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="label${dayCounter}" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-dark">
                                <h1 class="modal-title fs-5 text-light" id="label${dayCounter}">POST AN EVENT ON THE CALENDAR</h1>
                                <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label for="eventTitle${dayCounter}" class="mb-3">EVENT TITLE</label>
                                <input type="text" id="eventTitle${dayCounter}" class="form-control" placeholder="(e.g. Wicked: Filming)" value="${eventTitle}">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-dark me-auto" data-bs-dismiss="modal">CANCEL</button>
                                <button type="button" class="btn btn-danger ${isDisabled}" data-bs-toggle="modal" data-bs-target="#deleteModal${dayCounter}">DELETE</button>
                                <button type="button" class="btn btn-success" onclick="saveEvent(${month}, ${dayCounter})" data-bs-dismiss="modal">SAVE</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="modal fade" id="deleteModal${dayCounter}" tabindex="-1" aria-labelledby="label${dayCounter}" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-dark">
                                <h1 class="modal-title fs-5 text-light" id="label${dayCounter}">DELETE EVENT CONFIRMATION</h1>
                                <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-center">
                                <h6>Are you sure you want to delete the schedule event?</h6>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">CANCEL</button>
                                <button type="button" class="btn btn-danger" onclick="deleteEventFromStorage(${month}, ${dayCounter})" data-bs-dismiss="modal">DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>`;

                dayCounter += 1;
            } else {
                row += `<td></td>`;
            }
        }

        row += "</tr>";
        calendarBody.innerHTML += row;
        if (dayCounter > daysInMonth) break;

    }

    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
        if (el._tooltip) el._tooltip.dispose();
        el._tooltip = new bootstrap.Tooltip(el);
    });
}

function saveEvent(month, day) {
    const input = document.getElementById(`eventTitle${day}`);
    const title = input.value.trim();
    if (title) {
        saveEventToStorage(month, day, title);
        generateCalendar(currentYear, currentMonth);
    } else {
        alert("Please enter an event title.");
    }
}

dropdownMonths.addEventListener("click", function (selected) {
    if (selected.target && selected.target.matches("a.dropdown-item")) {
        const selectedMonth = parseInt(selected.target.getAttribute("data-month"));
        currentMonth = selectedMonth;
        generateCalendar(currentYear, currentMonth);
    }
});

window.addEventListener("resize", () => {
    generateCalendar(currentYear, currentMonth);
});

generateCalendar(currentYear, currentMonth);