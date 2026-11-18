/* ==========================================================================
   SASTA SAFAR - MAIN JAVASCRIPT FILE (script.js)
   --------------------------------------------------------------------------
   This script contains beginner-friendly Vanilla JavaScript for:
   1. Indian Car Database (16 Manufacturers & Popular 2019-2026 Models)
   2. Searchable Car Company & Model Dropdown System
   3. Automatic Vehicle Category Detection
   4. Automatic Distance-based Fare Calculation
   5. Trip Search, Filtering & Offer a Seat
   6. Passenger Seat Booking System (Pending Status)
   7. Driver Booking Management (Accept / Reject)
   8. Automatic Passenger Notification System & Unread Badges
   9. Automatic Seat Management (Reduce on Accept, Restore on Cancel)
   10. Passenger & Driver Dashboard Management ("My Bookings" & "Booking Requests")
   11. User Session Management (Navbar login state & logout)
   12. Login & Sign Up Form Validation
   13. How It Works FAQ Accordion
   ========================================================================== */

// Global Indian Car Database: Manufacturers, popular models, default categories, and seating capacities
var INDIAN_CAR_DATABASE = {
    "Maruti Suzuki": [
        { model: "Alto", category: "Hatchback", defaultSeats: 5 },
        { model: "Alto K10", category: "Hatchback", defaultSeats: 5 },
        { model: "S-Presso", category: "Hatchback", defaultSeats: 5 },
        { model: "WagonR", category: "Hatchback", defaultSeats: 5 },
        { model: "Celerio", category: "Hatchback", defaultSeats: 5 },
        { model: "Swift", category: "Hatchback", defaultSeats: 5 },
        { model: "Dzire", category: "Sedan", defaultSeats: 5 },
        { model: "Baleno", category: "Hatchback", defaultSeats: 5 },
        { model: "Ignis", category: "Hatchback", defaultSeats: 5 },
        { model: "Fronx", category: "Compact SUV", defaultSeats: 5 },
        { model: "Brezza", category: "Compact SUV", defaultSeats: 5 },
        { model: "Ertiga", category: "MPV", defaultSeats: 7 },
        { model: "XL6", category: "MPV", defaultSeats: 6 },
        { model: "Grand Vitara", category: "SUV", defaultSeats: 5 },
        { model: "Jimny", category: "SUV", defaultSeats: 4 },
        { model: "Invicto", category: "MPV", defaultSeats: 7 },
        { model: "Eeco", category: "MPV", defaultSeats: 7 }
    ],
    "Hyundai": [
        { model: "Santro", category: "Hatchback", defaultSeats: 5 },
        { model: "Grand i10 Nios", category: "Hatchback", defaultSeats: 5 },
        { model: "Aura", category: "Sedan", defaultSeats: 5 },
        { model: "i20", category: "Hatchback", defaultSeats: 5 },
        { model: "i20 N Line", category: "Hatchback", defaultSeats: 5 },
        { model: "Verna", category: "Sedan", defaultSeats: 5 },
        { model: "Venue", category: "Compact SUV", defaultSeats: 5 },
        { model: "Venue N Line", category: "Compact SUV", defaultSeats: 5 },
        { model: "Creta", category: "SUV", defaultSeats: 5 },
        { model: "Alcazar", category: "SUV", defaultSeats: 7 },
        { model: "Tucson", category: "Premium SUV", defaultSeats: 5 },
        { model: "Exter", category: "Compact SUV", defaultSeats: 5 },
        { model: "Ioniq 5", category: "Electric Vehicle", defaultSeats: 5 }
    ],
    "Tata Motors": [
        { model: "Tiago", category: "Hatchback", defaultSeats: 5 },
        { model: "Tigor", category: "Sedan", defaultSeats: 5 },
        { model: "Altroz", category: "Hatchback", defaultSeats: 5 },
        { model: "Punch", category: "Compact SUV", defaultSeats: 5 },
        { model: "Nexon", category: "Compact SUV", defaultSeats: 5 },
        { model: "Harrier", category: "SUV", defaultSeats: 5 },
        { model: "Safari", category: "SUV", defaultSeats: 7 },
        { model: "Curvv", category: "SUV", defaultSeats: 5 },
        { model: "Curvv EV", category: "Electric Vehicle", defaultSeats: 5 },
        { model: "Punch EV", category: "Electric Vehicle", defaultSeats: 5 },
        { model: "Nexon EV", category: "Electric Vehicle", defaultSeats: 5 },
        { model: "Tiago EV", category: "Electric Vehicle", defaultSeats: 5 },
        { model: "Tigor EV", category: "Electric Vehicle", defaultSeats: 5 },
        { model: "Harrier EV", category: "Electric Vehicle", defaultSeats: 5 }
    ],
    "Mahindra": [
        { model: "Bolero", category: "SUV", defaultSeats: 7 },
        { model: "Bolero Neo", category: "SUV", defaultSeats: 7 },
        { model: "Thar", category: "SUV", defaultSeats: 4 },
        { model: "Thar Roxx", category: "SUV", defaultSeats: 5 },
        { model: "Scorpio", category: "SUV", defaultSeats: 7 },
        { model: "Scorpio N", category: "SUV", defaultSeats: 7 },
        { model: "XUV300", category: "Compact SUV", defaultSeats: 5 },
        { model: "XUV 3XO", category: "Compact SUV", defaultSeats: 5 },
        { model: "XUV400 EV", category: "Electric Vehicle", defaultSeats: 5 },
        { model: "XUV500", category: "SUV", defaultSeats: 7 },
        { model: "XUV700", category: "SUV", defaultSeats: 7 },
        { model: "Marazzo", category: "MPV", defaultSeats: 7 }
    ],
    "Toyota": [
        { model: "Glanza", category: "Hatchback", defaultSeats: 5 },
        { model: "Urban Cruiser", category: "Compact SUV", defaultSeats: 5 },
        { model: "Urban Cruiser Hyryder", category: "SUV", defaultSeats: 5 },
        { model: "Rumion", category: "MPV", defaultSeats: 7 },
        { model: "Innova Crysta", category: "MPV", defaultSeats: 7 },
        { model: "Innova Hycross", category: "MPV", defaultSeats: 7 },
        { model: "Fortuner", category: "Premium SUV", defaultSeats: 7 },
        { model: "Hilux", category: "Premium SUV", defaultSeats: 5 },
        { model: "Camry", category: "Sedan", defaultSeats: 5 },
        { model: "Vellfire", category: "MPV", defaultSeats: 7 },
        { model: "Taisor", category: "Compact SUV", defaultSeats: 5 },
        { model: "Land Cruiser 300", category: "Premium SUV", defaultSeats: 7 }
    ],
    "Kia": [
        { model: "Sonet", category: "Compact SUV", defaultSeats: 5 },
        { model: "Seltos", category: "SUV", defaultSeats: 5 },
        { model: "Carens", category: "MPV", defaultSeats: 7 },
        { model: "Carens Clavis", category: "MPV", defaultSeats: 7 },
        { model: "Carnival", category: "MPV", defaultSeats: 7 },
        { model: "EV6", category: "Electric Vehicle", defaultSeats: 5 },
        { model: "EV9", category: "Electric Vehicle", defaultSeats: 7 }
    ],
    "Honda": [
        { model: "Amaze", category: "Sedan", defaultSeats: 5 },
        { model: "City", category: "Sedan", defaultSeats: 5 },
        { model: "City e:HEV", category: "Sedan", defaultSeats: 5 },
        { model: "Elevate", category: "SUV", defaultSeats: 5 },
        { model: "Civic", category: "Sedan", defaultSeats: 5 },
        { model: "Jazz", category: "Hatchback", defaultSeats: 5 },
        { model: "WR-V", category: "Compact SUV", defaultSeats: 5 }
    ],
    "Renault": [
        { model: "Kwid", category: "Hatchback", defaultSeats: 5 },
        { model: "Triber", category: "MPV", defaultSeats: 7 },
        { model: "Kiger", category: "Compact SUV", defaultSeats: 5 },
        { model: "Duster", category: "SUV", defaultSeats: 5 }
    ],
    "Nissan": [
        { model: "Magnite", category: "Compact SUV", defaultSeats: 5 },
        { model: "Kicks", category: "SUV", defaultSeats: 5 },
        { model: "X-Trail", category: "Premium SUV", defaultSeats: 7 }
    ],
    "Volkswagen": [
        { model: "Polo", category: "Hatchback", defaultSeats: 5 },
        { model: "Vento", category: "Sedan", defaultSeats: 5 },
        { model: "Taigun", category: "SUV", defaultSeats: 5 },
        { model: "Virtus", category: "Sedan", defaultSeats: 5 },
        { model: "Tiguan", category: "Premium SUV", defaultSeats: 5 }
    ],
    "Skoda": [
        { model: "Rapid", category: "Sedan", defaultSeats: 5 },
        { model: "Kushaq", category: "SUV", defaultSeats: 5 },
        { model: "Slavia", category: "Sedan", defaultSeats: 5 },
        { model: "Kodiaq", category: "Premium SUV", defaultSeats: 7 },
        { model: "Superb", category: "Sedan", defaultSeats: 5 },
        { model: "Kylaq", category: "Compact SUV", defaultSeats: 5 }
    ],
    "MG Motor": [
        { model: "Hector", category: "SUV", defaultSeats: 5 },
        { model: "Hector Plus", category: "SUV", defaultSeats: 7 },
        { model: "Astor", category: "Compact SUV", defaultSeats: 5 },
        { model: "Gloster", category: "Premium SUV", defaultSeats: 7 },
        { model: "Comet EV", category: "Electric Vehicle", defaultSeats: 4 },
        { model: "ZS EV", category: "Electric Vehicle", defaultSeats: 5 },
        { model: "Windsor EV", category: "Electric Vehicle", defaultSeats: 5 },
        { model: "Cyberster", category: "Electric Vehicle", defaultSeats: 2 }
    ],
    "Jeep": [
        { model: "Compass", category: "SUV", defaultSeats: 5 },
        { model: "Meridian", category: "SUV", defaultSeats: 7 },
        { model: "Wrangler", category: "Premium SUV", defaultSeats: 5 },
        { model: "Grand Cherokee", category: "Premium SUV", defaultSeats: 5 }
    ],
    "Citroen": [
        { model: "C3", category: "Hatchback", defaultSeats: 5 },
        { model: "eC3", category: "Electric Vehicle", defaultSeats: 5 },
        { model: "C3 Aircross", category: "Compact SUV", defaultSeats: 7 },
        { model: "Aircross", category: "Compact SUV", defaultSeats: 5 },
        { model: "Basalt", category: "SUV", defaultSeats: 5 }
    ],
    "Force Motors": [
        { model: "Gurkha", category: "SUV", defaultSeats: 4 },
        { model: "Trax Cruiser", category: "MPV", defaultSeats: 10 }
    ],
    "BYD": [
        { model: "Atto 3", category: "Electric Vehicle", defaultSeats: 5 },
        { model: "eMAX 7", category: "Electric Vehicle", defaultSeats: 7 },
        { model: "Seal", category: "Electric Vehicle", defaultSeats: 5 },
        { model: "Sealion 7", category: "Electric Vehicle", defaultSeats: 5 }
    ]
};

// Base per-kilometer passenger fare rates by vehicle category
var VEHICLE_CATEGORY_RATES = {
    "Hatchback": 1.00,
    "Sedan": 1.15,
    "Compact SUV": 1.25,
    "SUV": 1.40,
    "MPV": 1.35,
    "Premium SUV": 1.80,
    "Electric Vehicle": 1.10
};

// Variable holding the current trip being booked in the modal
var currentSelectedTrip = null;

// DOMContentLoaded listener to initialize all modules safely once HTML is parsed
document.addEventListener("DOMContentLoaded", function () {
    console.log("Sasta Safar JavaScript System Initialized.");

    // Setup navbar login session & notification counter
    setupNavbarUserSession();
    updateNotificationBadge();

    // Page-specific initializers
    setupHomePageSearch();
    setupTripsPage();
    setupDashboardPage();
    setupLoginPage();
    setupSignupPage();
    setupFaqAccordion();
    setupSafetyPage();
});


/* ==========================================================================
   SECTION 1: NAVBAR & USER SESSION MANAGEMENT
   ========================================================================== */

// Checks if user is logged in, displays greeting and logout button in navigation bar
function setupNavbarUserSession() {
    var mainNav = document.getElementById("mainNav");
    var navLogin = document.getElementById("navLogin");
    var navSignup = document.getElementById("navSignup");

    if (!mainNav || !navLogin || !navSignup) {
        return;
    }

    var loggedInUser = localStorage.getItem("sastaSafarCurrentUser");

    if (loggedInUser) {
        navLogin.style.display = "none";
        navSignup.style.display = "none";

        var greetingSpan = document.createElement("span");
        greetingSpan.className = "user-greeting";
        greetingSpan.id = "userGreeting";
        greetingSpan.textContent = "👤 Hi, " + loggedInUser;

        var logoutLink = document.createElement("a");
        logoutLink.href = "#";
        logoutLink.className = "logout-link";
        logoutLink.id = "logoutBtn";
        logoutLink.textContent = "Logout";

        logoutLink.addEventListener("click", function (event) {
            event.preventDefault();
            var confirmLogout = confirm("Are you sure you want to log out of Sasta Safar?");
            if (confirmLogout) {
                // Clear session data from localStorage
                localStorage.removeItem("sastaSafarCurrentUser");
                localStorage.removeItem("sastaSafarUserRole");
                alert("You have logged out successfully.");
                window.location.reload();
            }
        });

        mainNav.appendChild(greetingSpan);
        mainNav.appendChild(logoutLink);
    }
}


/* ==========================================================================
   SECTION 2: HOME PAGE FUNCTIONALITY
   ========================================================================== */

// Quick search on homepage that redirects to trips.html with query parameters
function setupHomePageSearch() {
    var homeSearchForm = document.getElementById("heroSearchForm");
    if (!homeSearchForm) return;

    homeSearchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var fromCity = document.getElementById("heroFrom").value.trim();
        var toCity = document.getElementById("heroTo").value.trim();
        var tripDate = document.getElementById("heroDate").value;

        if (fromCity === "" || toCity === "") {
            alert("Please enter both Starting City and Destination to search rides.");
            return;
        }

        var targetUrl = "trips.html?from=" + encodeURIComponent(fromCity) +
                        "&to=" + encodeURIComponent(toCity);

        if (tripDate !== "") {
            targetUrl += "&date=" + encodeURIComponent(tripDate);
        }

        window.location.href = targetUrl;
    });
}


/* ==========================================================================
   SECTION 3: CAR SELECTION & AUTOMATIC FARE CALCULATION
   ========================================================================== */

// Sets up searchable car company dropdown, searchable model dropdown,
// auto-detection of vehicle category, and automatic fair fare calculation
function setupCarSelectionSystem() {
    var companySearchInput = document.getElementById("offerCompanySearch");
    var companySelect = document.getElementById("offerCompany");
    var modelSearchInput = document.getElementById("offerModelSearch");
    var modelSelect = document.getElementById("offerModel");
    var noModelFoundMsg = document.getElementById("noModelFound");
    var categorySelect = document.getElementById("offerCategory");
    var totalSeatsSelect = document.getElementById("offerTotalSeats");
    var distanceInput = document.getElementById("offerDistance");

    if (!companySelect || !modelSelect) return;

    // 1. Filter Car Company dropdown as user types in companySearchInput
    if (companySearchInput) {
        companySearchInput.addEventListener("input", function () {
            var filterText = companySearchInput.value.toLowerCase().trim();
            var options = companySelect.options;

            var matchFound = false;
            for (var i = 1; i < options.length; i++) {
                var optionText = options[i].text.toLowerCase();
                if (optionText.indexOf(filterText) !== -1) {
                    options[i].style.display = "";
                    if (!matchFound && filterText !== "") {
                        companySelect.selectedIndex = i;
                        matchFound = true;
                    }
                } else {
                    options[i].style.display = "none";
                }
            }

            if (matchFound) {
                populateModelDropdown(companySelect.value);
            }
        });
    }

    // 2. When Car Company changes, reset model and populate models for selected company
    companySelect.addEventListener("change", function () {
        var selectedCompany = companySelect.value;
        if (companySearchInput) {
            companySearchInput.value = selectedCompany;
        }
        populateModelDropdown(selectedCompany);
        calculateEstimatedFare();
    });

    // 3. Filter Car Model dropdown as user types in modelSearchInput
    if (modelSearchInput) {
        modelSearchInput.addEventListener("input", function () {
            var selectedCompany = companySelect.value;
            if (!selectedCompany || !INDIAN_CAR_DATABASE[selectedCompany]) {
                return;
            }

            var filterText = modelSearchInput.value.toLowerCase().trim();
            var modelsList = INDIAN_CAR_DATABASE[selectedCompany];

            // Clear current options
            modelSelect.innerHTML = '<option value="">-- Select Car Model --</option>';

            var matchCount = 0;
            for (var i = 0; i < modelsList.length; i++) {
                var carObj = modelsList[i];
                if (carObj.model.toLowerCase().indexOf(filterText) !== -1) {
                    var opt = document.createElement("option");
                    opt.value = carObj.model;
                    opt.textContent = carObj.model + " (" + carObj.category + ")";
                    modelSelect.appendChild(opt);
                    matchCount++;
                }
            }

            if (matchCount === 0) {
                if (noModelFoundMsg) noModelFoundMsg.style.display = "block";
            } else {
                if (noModelFoundMsg) noModelFoundMsg.style.display = "none";
            }
        });
    }

    // 4. When Car Model is selected, automatically detect and update category & seating capacity
    modelSelect.addEventListener("change", function () {
        var selectedCompany = companySelect.value;
        var selectedModel = modelSelect.value;

        if (modelSearchInput) {
            modelSearchInput.value = selectedModel;
        }

        if (selectedCompany && selectedModel && INDIAN_CAR_DATABASE[selectedCompany]) {
            var models = INDIAN_CAR_DATABASE[selectedCompany];
            for (var i = 0; i < models.length; i++) {
                if (models[i].model === selectedModel) {
                    // Auto-assign vehicle category
                    if (categorySelect) {
                        categorySelect.value = models[i].category;
                    }
                    // Auto-assign default total seating capacity
                    if (totalSeatsSelect) {
                        totalSeatsSelect.value = models[i].defaultSeats.toString();
                    }
                    break;
                }
            }
        }
        calculateEstimatedFare();
    });

    // 5. Recalculate fare when category is manually changed
    if (categorySelect) {
        categorySelect.addEventListener("change", calculateEstimatedFare);
    }

    // 6. Recalculate fare when distance is changed
    if (distanceInput) {
        distanceInput.addEventListener("input", calculateEstimatedFare);
    }

    // Initial calculation
    calculateEstimatedFare();
}

// Populates car model dropdown based on selected company
function populateModelDropdown(companyName) {
    var modelSelect = document.getElementById("offerModel");
    var modelSearchInput = document.getElementById("offerModelSearch");
    var noModelFoundMsg = document.getElementById("noModelFound");

    if (!modelSelect) return;

    if (!companyName || !INDIAN_CAR_DATABASE[companyName]) {
        modelSelect.innerHTML = '<option value="">-- First select car company above --</option>';
        modelSelect.disabled = true;
        if (modelSearchInput) modelSearchInput.value = "";
        return;
    }

    modelSelect.disabled = false;
    modelSelect.innerHTML = '<option value="">-- Select Car Model --</option>';

    var modelsList = INDIAN_CAR_DATABASE[companyName];
    for (var i = 0; i < modelsList.length; i++) {
        var opt = document.createElement("option");
        opt.value = modelsList[i].model;
        opt.textContent = modelsList[i].model + " (" + modelsList[i].category + ")";
        modelSelect.appendChild(opt);
    }

    if (modelSearchInput) modelSearchInput.value = "";
    if (noModelFoundMsg) noModelFoundMsg.style.display = "none";
}

// Calculates fair fare automatically based on distance and vehicle category
function calculateEstimatedFare() {
    var categorySelect = document.getElementById("offerCategory");
    var distanceInput = document.getElementById("offerDistance");
    var fareDisplay = document.getElementById("calculatedFareText");
    var hiddenPriceInput = document.getElementById("offerPrice");

    if (!fareDisplay || !hiddenPriceInput) return;

    var category = categorySelect ? categorySelect.value : "Hatchback";
    var distance = distanceInput ? parseFloat(distanceInput.value) : 200;

    if (isNaN(distance) || distance <= 0) {
        distance = 100;
    }

    var rate = VEHICLE_CATEGORY_RATES[category] || 1.00;

    // Formula: distance * per-km passenger rate, rounded to nearest 10
    var calculatedFare = Math.round((distance * rate) / 10) * 10;
    if (calculatedFare < 50) calculatedFare = 50;

    fareDisplay.textContent = "₹" + calculatedFare;
    hiddenPriceInput.value = calculatedFare;
}


/* ==========================================================================
   SECTION 4: TRIPS PAGE - DISPLAY, FILTER & OFFER SEATS
   ========================================================================== */

function setupTripsPage() {
    var tripContainer = document.getElementById("tripContainer");
    if (!tripContainer) return;

    // 1. Setup Indian car selection and fare calculation in Offer a Seat
    setupCarSelectionSystem();

    // 2. Load custom driver-offered trips saved in localStorage
    loadCustomTripsFromStorage();

    // 3. Restore remaining seats saved in localStorage
    restoreBookingsFromStorage();

    // 4. Check query parameters from homepage search
    checkUrlSearchParameters();

    // 5. Trip search form submit event
    var tripSearchForm = document.getElementById("tripSearchForm");
    if (tripSearchForm) {
        tripSearchForm.addEventListener("submit", function (event) {
            event.preventDefault();
            filterTripsList();
        });
    }

    // 6. Reset filters
    var resetSearchBtn = document.getElementById("resetSearchBtn");
    var noTripsResetBtn = document.getElementById("noTripsResetBtn");
    if (resetSearchBtn) resetSearchBtn.addEventListener("click", resetTripFilter);
    if (noTripsResetBtn) noTripsResetBtn.addEventListener("click", resetTripFilter);

    // 7. Event delegation for "Book Seat" buttons on trip cards
    tripContainer.addEventListener("click", function (event) {
        if (event.target && event.target.classList.contains("btn-book")) {
            var tripCard = event.target.closest(".trip-card");
            if (tripCard) {
                openBookingModal(tripCard);
            }
        }
    });

    // 8. Setup seat booking modal
    setupBookingModal();

    // 9. Setup "Offer a Seat" form submission
    setupOfferSeatForm();
}

// Checks URL parameters (?from=City&to=City) and auto-filters trips
function checkUrlSearchParameters() {
    var urlParams = new URLSearchParams(window.location.search);
    var fromParam = urlParams.get("from");
    var toParam = urlParams.get("to");
    var dateParam = urlParams.get("date");

    var tripFromInput = document.getElementById("tripFrom");
    var tripToInput = document.getElementById("tripTo");
    var tripDateInput = document.getElementById("tripDate");

    if (fromParam && tripFromInput) tripFromInput.value = fromParam;
    if (toParam && tripToInput) tripToInput.value = toParam;
    if (dateParam && tripDateInput) tripDateInput.value = dateParam;

    if (fromParam || toParam) {
        filterTripsList();
    }
}

// Filters trip cards in real-time by origin, destination, and date
function filterTripsList() {
    var searchFrom = document.getElementById("tripFrom").value.toLowerCase().trim();
    var searchTo = document.getElementById("tripTo").value.toLowerCase().trim();

    var tripCards = document.querySelectorAll("#tripContainer .trip-card");
    var noTripsMessage = document.getElementById("noTripsMessage");

    var visibleCount = 0;

    for (var i = 0; i < tripCards.length; i++) {
        var card = tripCards[i];
        var cardFrom = card.getAttribute("data-from") ? card.getAttribute("data-from").toLowerCase() : "";
        var cardTo = card.getAttribute("data-to") ? card.getAttribute("data-to").toLowerCase() : "";

        if (!cardFrom) {
            var fromEl = card.querySelector(".city-from");
            cardFrom = fromEl ? fromEl.textContent.toLowerCase() : "";
        }
        if (!cardTo) {
            var toEl = card.querySelector(".city-to");
            cardTo = toEl ? toEl.textContent.toLowerCase() : "";
        }

        var matchesFrom = (searchFrom === "") || (cardFrom.indexOf(searchFrom) !== -1);
        var matchesTo = (searchTo === "") || (cardTo.indexOf(searchTo) !== -1);

        if (matchesFrom && matchesTo) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    }

    if (noTripsMessage) {
        noTripsMessage.style.display = visibleCount === 0 ? "block" : "none";
    }
}

// Clears trip filter inputs and restores visibility of all cards
function resetTripFilter() {
    var tripFromInput = document.getElementById("tripFrom");
    var tripToInput = document.getElementById("tripTo");
    var tripDateInput = document.getElementById("tripDate");

    if (tripFromInput) tripFromInput.value = "";
    if (tripToInput) tripToInput.value = "";
    if (tripDateInput) tripDateInput.value = "";

    var tripCards = document.querySelectorAll("#tripContainer .trip-card");
    for (var i = 0; i < tripCards.length; i++) {
        tripCards[i].style.display = "flex";
    }

    var noTripsMessage = document.getElementById("noTripsMessage");
    if (noTripsMessage) noTripsMessage.style.display = "none";
}


/* ==========================================================================
   SECTION 5: PASSENGER SEAT BOOKING & MODAL
   ========================================================================== */

// Opens seat booking modal and displays all trip details with live total calculation
function openBookingModal(tripCard) {
    currentSelectedTrip = tripCard;

    var cityFrom = tripCard.querySelector(".city-from").textContent;
    var cityTo = tripCard.querySelector(".city-to").textContent;
    var driver = tripCard.getAttribute("data-driver") || "Driver";
    var carCompany = tripCard.getAttribute("data-company") || "Car";
    var carModel = tripCard.getAttribute("data-model") || "Model";
    var vehicleNo = tripCard.getAttribute("data-vehicleno") || "Registered";
    var pricePerSeat = parseFloat(tripCard.getAttribute("data-price")) || 300;
    var availableSeats = parseInt(tripCard.querySelector(".seat-count").textContent, 10);

    if (availableSeats <= 0) {
        alert("Sorry! This trip currently has no available seats remaining.");
        return;
    }

    // Populate modal trip summary box
    var modalSummary = document.getElementById("modalTripSummary");
    if (modalSummary) {
        modalSummary.innerHTML =
            "<strong>Route:</strong> " + cityFrom + " &rarr; " + cityTo + "<br>" +
            "<strong>Driver:</strong> " + driver + "<br>" +
            "<strong>Vehicle:</strong> " + carCompany + " " + carModel + " (" + vehicleNo + ")<br>" +
            "<strong>Fare:</strong> ₹" + pricePerSeat + " / seat<br>" +
            "<strong>Available Seats:</strong> " + availableSeats;
    }

    var seatsInput = document.getElementById("passengerSeats");
    var totalAmountSpan = document.getElementById("modalTotalAmount");

    if (seatsInput) {
        seatsInput.max = availableSeats;
        seatsInput.value = 1;
    }

    if (totalAmountSpan) {
        totalAmountSpan.textContent = "₹" + pricePerSeat;
    }

    // Live update total estimated amount when requested seats change
    if (seatsInput && totalAmountSpan) {
        seatsInput.oninput = function () {
            var count = parseInt(seatsInput.value, 10) || 1;
            if (count > availableSeats) {
                count = availableSeats;
                seatsInput.value = availableSeats;
            }
            if (count < 1) {
                count = 1;
                seatsInput.value = 1;
            }
            var total = count * pricePerSeat;
            totalAmountSpan.textContent = "₹" + total;
        };
    }

    // Pre-fill passenger name if logged in
    var loggedInUser = localStorage.getItem("sastaSafarCurrentUser");
    var nameInput = document.getElementById("passengerName");
    if (loggedInUser && nameInput) {
        nameInput.value = loggedInUser;
    }

    var modal = document.getElementById("bookingModal");
    if (modal) {
        modal.classList.add("active");
    }
}

// Sets up confirmation and cancel events in booking modal
function setupBookingModal() {
    var modal = document.getElementById("bookingModal");
    var cancelBtn = document.getElementById("cancelBookingBtn");
    var bookingForm = document.getElementById("modalBookingForm");

    if (!modal) return;

    if (cancelBtn) {
        cancelBtn.addEventListener("click", function () {
            modal.classList.remove("active");
            currentSelectedTrip = null;
        });
    }

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("active");
            currentSelectedTrip = null;
        }
    });

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            bookSeat();
        });
    }
}

// Function: bookSeat()
// Creates a new booking with status "Pending" and stores it in localStorage.
// IMPORTANT: Does NOT immediately reduce available seats (only driver acceptance does).
function bookSeat() {
    if (!currentSelectedTrip) return;

    var passengerName = document.getElementById("passengerName").value.trim();
    var passengerPhone = document.getElementById("passengerPhone").value.trim();
    var seatsInput = document.getElementById("passengerSeats");
    var seatsRequested = parseInt(seatsInput.value, 10);

    var seatCountEl = currentSelectedTrip.querySelector(".seat-count");
    var currentAvailableSeats = parseInt(seatCountEl.textContent, 10);

    // Form validation
    if (passengerName === "") {
        alert("Please enter passenger full name.");
        return;
    }
    if (passengerPhone.length !== 10 || isNaN(passengerPhone)) {
        alert("Please enter a valid 10-digit contact number.");
        return;
    }
    if (seatsRequested < 1) {
        alert("Please select at least 1 seat to book.");
        return;
    }
    if (seatsRequested > currentAvailableSeats) {
        alert("Cannot book more seats than available (" + currentAvailableSeats + ").");
        return;
    }

    var tripId = currentSelectedTrip.getAttribute("data-tripid") || ("trip_" + Date.now());
    var cityFrom = currentSelectedTrip.querySelector(".city-from").textContent;
    var cityTo = currentSelectedTrip.querySelector(".city-to").textContent;
    var driver = currentSelectedTrip.getAttribute("data-driver") || "Driver";
    var phone = currentSelectedTrip.getAttribute("data-phone") || "9876543210";
    var carCompany = currentSelectedTrip.getAttribute("data-company") || "Maruti Suzuki";
    var carModel = currentSelectedTrip.getAttribute("data-model") || "Swift";
    var vehicleNo = currentSelectedTrip.getAttribute("data-vehicleno") || "UP 75 AB 1234";
    var category = currentSelectedTrip.getAttribute("data-category") || "Hatchback";
    var date = currentSelectedTrip.getAttribute("data-date") || "Upcoming";
    var time = currentSelectedTrip.getAttribute("data-time") || "08:00 AM";
    var pricePerSeat = parseFloat(currentSelectedTrip.getAttribute("data-price")) || 300;
    var totalAmount = seatsRequested * pricePerSeat;

    // Create unique booking object with status 'Pending'
    var newBooking = {
        id: "BK" + Math.floor(100000 + Math.random() * 900000),
        tripId: tripId,
        driverName: driver,
        driverPhone: phone,
        passengerName: passengerName,
        passengerPhone: passengerPhone,
        from: cityFrom,
        to: cityTo,
        date: date,
        time: time,
        carCompany: carCompany,
        carModel: carModel,
        vehicleNumber: vehicleNo,
        category: category,
        seatsRequested: seatsRequested,
        farePerSeat: pricePerSeat,
        totalAmount: totalAmount,
        bookingDate: new Date().toLocaleString(),
        status: "Pending" // Initial status: Pending
    };

    // Save in localStorage (sastaSafarBookings)
    var allBookings = JSON.parse(localStorage.getItem("sastaSafarBookings") || "[]");
    allBookings.unshift(newBooking);
    localStorage.setItem("sastaSafarBookings", JSON.stringify(allBookings));

    // Create initial notification for passenger
    showNotification(
        passengerName,
        "Your seat booking request (Pending) for " + cityFrom + " to " + cityTo + " has been submitted to driver " + driver + ".",
        "info",
        newBooking.id
    );

    alert(
        "🎉 Booking Request Submitted!\n\n" +
        "Status: PENDING\n" +
        "Passenger: " + passengerName + "\n" +
        "Seats Requested: " + seatsRequested + "\n" +
        "Total Estimated Amount: ₹" + totalAmount + "\n\n" +
        "Your request has been sent to the driver for approval.\n" +
        "Check your 'Dashboard' for real-time updates!"
    );

    // Close modal & reset form
    var modal = document.getElementById("bookingModal");
    if (modal) modal.classList.remove("active");
    document.getElementById("modalBookingForm").reset();
    currentSelectedTrip = null;

    // Update unread notification count badge in navbar
    updateNotificationBadge();
}


/* ==========================================================================
   SECTION 6: DRIVER POST TRIP (OFFER A SEAT)
   ========================================================================== */

// Handles posting a new trip with car selection, auto fare calculation, and storage
function setupOfferSeatForm() {
    var offerForm = document.getElementById("offerSeatForm");
    if (!offerForm) return;

    offerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var driverName = document.getElementById("offerDriver").value.trim();
        var phone = document.getElementById("offerPhone").value.trim();
        var company = document.getElementById("offerCompany").value;
        var model = document.getElementById("offerModel").value;
        var vehicleNo = document.getElementById("offerVehicleNo").value.trim();
        var category = document.getElementById("offerCategory").value;
        var totalSeats = document.getElementById("offerTotalSeats").value;
        var availableSeats = document.getElementById("offerSeats").value;
        var fromCity = document.getElementById("offerFrom").value.trim();
        var toCity = document.getElementById("offerTo").value.trim();
        var travelDate = document.getElementById("offerDate").value;
        var travelTime = document.getElementById("offerTime").value;
        var distance = document.getElementById("offerDistance").value;
        var calculatedPrice = document.getElementById("offerPrice").value;

        // Validation
        if (!driverName || !company || !model || !fromCity || !toCity) {
            alert("Please complete all required fields including car company and model.");
            return;
        }

        if (phone.length !== 10 || isNaN(phone)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        // Format travel date nicely
        var formattedDate = travelDate;
        if (travelDate) {
            var parts = travelDate.split("-");
            if (parts.length === 3) {
                var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                formattedDate = parts[2] + " " + months[parseInt(parts[1], 10) - 1] + " " + parts[0];
            }
        }

        // Format time to 12-hour AM/PM format
        var formattedTime = travelTime;
        if (travelTime) {
            var tParts = travelTime.split(":");
            var hour = parseInt(tParts[0], 10);
            var ampm = hour >= 12 ? "PM" : "AM";
            hour = hour % 12;
            hour = hour ? hour : 12;
            var strHour = hour < 10 ? "0" + hour : hour;
            formattedTime = strHour + ":" + tParts[1] + " " + ampm;
        }

        var newTrip = {
            tripId: "trip_custom_" + Date.now(),
            driver: driverName,
            phone: phone,
            company: company,
            model: model,
            vehicleNo: vehicleNo || "UP 75 AB 0000",
            category: category,
            totalSeats: totalSeats,
            seats: availableSeats,
            from: fromCity,
            to: toCity,
            date: formattedDate,
            time: formattedTime,
            distance: distance,
            price: calculatedPrice
        };

        // Add to DOM
        createTripCardElement(newTrip, true);

        // Save to localStorage
        saveCustomTripToStorage(newTrip);

        alert("🚗 Trip Published Successfully!\n\nRoute: " + fromCity + " to " + toCity + "\nCar: " + company + " " + model + "\nFare: ₹" + calculatedPrice + "/seat");

        offerForm.reset();
        document.getElementById("offerModel").disabled = true;
        calculateEstimatedFare();

        var container = document.getElementById("tripContainer");
        if (container) container.scrollIntoView({ behavior: "smooth" });
    });
}

// Dynamically creates a trip card element and adds it to #tripContainer
function createTripCardElement(tripData, isPrepend) {
    var tripContainer = document.getElementById("tripContainer");
    if (!tripContainer) return;

    var cardDiv = document.createElement("div");
    cardDiv.className = "trip-card";
    cardDiv.setAttribute("data-tripid", tripData.tripId);
    cardDiv.setAttribute("data-from", tripData.from.toLowerCase());
    cardDiv.setAttribute("data-to", tripData.to.toLowerCase());
    cardDiv.setAttribute("data-driver", tripData.driver);
    cardDiv.setAttribute("data-phone", tripData.phone);
    cardDiv.setAttribute("data-company", tripData.company);
    cardDiv.setAttribute("data-model", tripData.model);
    cardDiv.setAttribute("data-vehicleno", tripData.vehicleNo);
    cardDiv.setAttribute("data-category", tripData.category);
    cardDiv.setAttribute("data-distance", tripData.distance);
    cardDiv.setAttribute("data-price", tripData.price);
    cardDiv.setAttribute("data-seats", tripData.seats);
    cardDiv.setAttribute("data-totalseats", tripData.totalSeats);
    cardDiv.setAttribute("data-date", tripData.date);
    cardDiv.setAttribute("data-time", tripData.time);

    cardDiv.innerHTML =
        '<div class="route">' +
            '<span class="city-from">' + tripData.from + '</span>' +
            '<span class="arrow">&rarr;</span>' +
            '<span class="city-to">' + tripData.to + '</span>' +
        '</div>' +
        '<div class="car-info-badge">' +
            '🚗 ' + tripData.company + ' ' + tripData.model + ' &bull; ' + tripData.category +
        '</div>' +
        '<p class="info">📅 Date: ' + tripData.date + ' &nbsp;|&nbsp; ⏰ ' + tripData.time + '</p>' +
        '<p class="info">🔢 Vehicle No: <span class="vehicle-no-badge">' + tripData.vehicleNo + '</span></p>' +
        '<p class="info">🛣️ Distance: <strong>' + tripData.distance + ' km</strong></p>' +
        '<p class="info">👤 Driver: <strong>' + tripData.driver + '</strong></p>' +
        '<p class="info seats-info">💺 Available Seats: <span class="seat-count">' + tripData.seats + '</span></p>' +
        '<div class="card-bottom">' +
            '<p class="price">₹' + tripData.price + ' <small>/ seat</small></p>' +
            '<button type="button" class="btn-book">Book Seat</button>' +
        '</div>';

    if (isPrepend && tripContainer.firstChild) {
        tripContainer.insertBefore(cardDiv, tripContainer.firstChild);
    } else {
        tripContainer.appendChild(cardDiv);
    }
}

// Stores custom offered trip in localStorage
function saveCustomTripToStorage(newTrip) {
    var customTrips = JSON.parse(localStorage.getItem("sastaSafarCustomTrips") || "[]");
    customTrips.push(newTrip);
    localStorage.setItem("sastaSafarCustomTrips", JSON.stringify(customTrips));
}

// Loads custom trips on page load
function loadCustomTripsFromStorage() {
    var customTrips = JSON.parse(localStorage.getItem("sastaSafarCustomTrips") || "[]");
    for (var i = 0; i < customTrips.length; i++) {
        createTripCardElement(customTrips[i], false);
    }
}

// Restores remaining seats from localStorage
function restoreBookingsFromStorage() {
    var tripStatus = JSON.parse(localStorage.getItem("sastaSafarTripSeats") || "{}");
    var tripCards = document.querySelectorAll("#tripContainer .trip-card");

    for (var i = 0; i < tripCards.length; i++) {
        var card = tripCards[i];
        var tripId = card.getAttribute("data-tripid") || (card.querySelector(".city-from").textContent + "_" + card.querySelector(".city-to").textContent);

        if (tripStatus.hasOwnProperty(tripId)) {
            var remaining = tripStatus[tripId];
            var seatCountEl = card.querySelector(".seat-count");
            if (seatCountEl) {
                seatCountEl.textContent = remaining;
            }
            var btn = card.querySelector(".btn-book");
            if (btn && remaining <= 0) {
                btn.textContent = "Full";
                btn.disabled = true;
                btn.classList.add("btn-booked");
            }
        }
    }
}


/* ==========================================================================
   SECTION 7: SEAT MANAGEMENT & DRIVER ACTIONS (ACCEPT / REJECT / CANCEL)
   ========================================================================== */

// Function: updateAvailableSeats(tripId, seatDelta)
// Safely increases or decreases available seats for a trip.
// Prevents seats from becoming negative.
function updateAvailableSeats(tripId, seatDelta) {
    var tripStatus = JSON.parse(localStorage.getItem("sastaSafarTripSeats") || "{}");

    var currentSeats = 0;
    if (tripStatus.hasOwnProperty(tripId)) {
        currentSeats = tripStatus[tripId];
    } else {
        // Read from default card in DOM or default constant
        var card = document.querySelector('.trip-card[data-tripid="' + tripId + '"]');
        if (card) {
            currentSeats = parseInt(card.getAttribute("data-seats") || card.querySelector(".seat-count").textContent, 10);
        } else {
            currentSeats = 3; // safe fallback
        }
    }

    var newSeats = currentSeats + seatDelta;
    if (newSeats < 0) newSeats = 0; // Prevent negative seats

    tripStatus[tripId] = newSeats;
    localStorage.setItem("sastaSafarTripSeats", JSON.stringify(tripStatus));

    // Also update DOM if on trips.html
    var cardEl = document.querySelector('.trip-card[data-tripid="' + tripId + '"]');
    if (cardEl) {
        var seatEl = cardEl.querySelector(".seat-count");
        if (seatEl) seatEl.textContent = newSeats;

        var bookBtn = cardEl.querySelector(".btn-book");
        if (bookBtn) {
            if (newSeats <= 0) {
                bookBtn.textContent = "Full";
                bookBtn.disabled = true;
                bookBtn.classList.add("btn-booked");
            } else {
                bookBtn.textContent = "Book Seat";
                bookBtn.disabled = false;
                bookBtn.classList.remove("btn-booked");
            }
        }
    }

    return newSeats;
}

// Function: acceptBooking(bookingId)
// Driver accepts booking -> updates status to "Confirmed" -> decreases available seats ->
// sends confirmation notification to passenger.
function acceptBooking(bookingId) {
    var allBookings = JSON.parse(localStorage.getItem("sastaSafarBookings") || "[]");
    var booking = null;
    var index = -1;

    for (var i = 0; i < allBookings.length; i++) {
        if (allBookings[i].id === bookingId) {
            booking = allBookings[i];
            index = i;
            break;
        }
    }

    if (!booking) {
        alert("Booking not found!");
        return;
    }

    // Prevent duplicate acceptance
    if (booking.status === "Confirmed") {
        alert("This booking has already been accepted.");
        return;
    }

    if (booking.status !== "Pending") {
        alert("Only pending bookings can be accepted.");
        return;
    }

    // Check available seats before accepting
    var tripStatus = JSON.parse(localStorage.getItem("sastaSafarTripSeats") || "{}");
    var availableSeats = 3;
    if (tripStatus.hasOwnProperty(booking.tripId)) {
        availableSeats = tripStatus[booking.tripId];
    }

    if (availableSeats < booking.seatsRequested) {
        alert("Cannot accept booking! Available seats (" + availableSeats + ") are less than requested seats (" + booking.seatsRequested + ").");
        return;
    }

    // 1. Reduce available seats by booked amount
    updateAvailableSeats(booking.tripId, -booking.seatsRequested);

    // 2. Update status to 'Confirmed'
    allBookings[index].status = "Confirmed";
    localStorage.setItem("sastaSafarBookings", JSON.stringify(allBookings));

    // 3. Send automatic confirmation notification to passenger
    showNotification(
        booking.passengerName,
        "Congratulations! Your seat booking has been accepted by the driver. Your ride is confirmed.",
        "success",
        booking.id
    );

    alert("Booking #" + booking.id + " has been ACCEPTED!\nAvailable seats have been decreased by " + booking.seatsRequested + ".");

    // Refresh Dashboard views
    renderDashboardLists();
    updateNotificationBadge();
}

// Function: rejectBooking(bookingId)
// Driver rejects booking -> updates status to "Rejected" -> does NOT change seats ->
// sends rejection notification to passenger.
function rejectBooking(bookingId) {
    var allBookings = JSON.parse(localStorage.getItem("sastaSafarBookings") || "[]");
    var booking = null;
    var index = -1;

    for (var i = 0; i < allBookings.length; i++) {
        if (allBookings[i].id === bookingId) {
            booking = allBookings[i];
            index = i;
            break;
        }
    }

    if (!booking) {
        alert("Booking not found!");
        return;
    }

    if (booking.status === "Rejected") {
        alert("This booking is already rejected.");
        return;
    }

    var confirmReject = confirm("Are you sure you want to reject booking #" + booking.id + " for " + booking.passengerName + "?");
    if (!confirmReject) return;

    // Update status to 'Rejected' (seats remain untouched)
    allBookings[index].status = "Rejected";
    localStorage.setItem("sastaSafarBookings", JSON.stringify(allBookings));

    // Send automatic rejection notification to passenger
    showNotification(
        booking.passengerName,
        "Sorry! Your booking request has been rejected by the driver.",
        "danger",
        booking.id
    );

    alert("Booking #" + booking.id + " has been REJECTED. Available seats remain unchanged.");

    // Refresh Dashboard views
    renderDashboardLists();
    updateNotificationBadge();
}

// Function: cancelBooking(bookingId)
// Passenger cancels booking -> if was "Confirmed", restores seats to trip!
function cancelBooking(bookingId) {
    var allBookings = JSON.parse(localStorage.getItem("sastaSafarBookings") || "[]");
    var booking = null;
    var index = -1;

    for (var i = 0; i < allBookings.length; i++) {
        if (allBookings[i].id === bookingId) {
            booking = allBookings[i];
            index = i;
            break;
        }
    }

    if (!booking) {
        alert("Booking not found!");
        return;
    }

    if (booking.status === "Cancelled") {
        alert("This booking has already been cancelled.");
        return;
    }

    var confirmCancel = confirm("Are you sure you want to cancel this booking (" + booking.from + " to " + booking.to + ")?");
    if (!confirmCancel) return;

    // If the booking was Confirmed, restore its seats!
    if (booking.status === "Confirmed") {
        updateAvailableSeats(booking.tripId, booking.seatsRequested);
        alert("Booking cancelled! " + booking.seatsRequested + " seat(s) have been restored to the trip.");
    } else {
        alert("Pending booking request has been cancelled.");
    }

    // Update status to 'Cancelled'
    allBookings[index].status = "Cancelled";
    localStorage.setItem("sastaSafarBookings", JSON.stringify(allBookings));

    // Add cancellation notification
    showNotification(
        booking.passengerName,
        "Your booking #" + booking.id + " for " + booking.from + " to " + booking.to + " has been cancelled.",
        "info",
        booking.id
    );

    renderDashboardLists();
    updateNotificationBadge();
}

// Function: updateBookingStatus(bookingId, newStatus)
// Helper to update booking status in storage
function updateBookingStatus(bookingId, newStatus) {
    var allBookings = JSON.parse(localStorage.getItem("sastaSafarBookings") || "[]");
    for (var i = 0; i < allBookings.length; i++) {
        if (allBookings[i].id === bookingId) {
            allBookings[i].status = newStatus;
            break;
        }
    }
    localStorage.setItem("sastaSafarBookings", JSON.stringify(allBookings));
}


/* ==========================================================================
   SECTION 8: NOTIFICATION SYSTEM (IN-WEBSITE VIA LOCALSTORAGE)
   ========================================================================== */

// Function: showNotification(passengerName, messageText, notifType, bookingId)
// Adds a notification record in localStorage and updates notification badges
function showNotification(passengerName, messageText, notifType, bookingId) {
    var allNotifs = JSON.parse(localStorage.getItem("sastaSafarNotifications") || "[]");

    var newNotif = {
        id: "NOTIF_" + Date.now(),
        bookingId: bookingId || "",
        passengerName: passengerName,
        message: messageText,
        type: notifType || "info",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ", " + new Date().toLocaleDateString(),
        isRead: false
    };

    allNotifs.unshift(newNotif);
    localStorage.setItem("sastaSafarNotifications", JSON.stringify(allNotifs));

    updateNotificationBadge();
}

// Updates unread notification count badge in all navbars
function updateNotificationBadge() {
    var allNotifs = JSON.parse(localStorage.getItem("sastaSafarNotifications") || "[]");
    var unreadCount = 0;

    for (var i = 0; i < allNotifs.length; i++) {
        if (!allNotifs[i].isRead) {
            unreadCount++;
        }
    }

    var badges = document.querySelectorAll(".notif-badge");
    for (var b = 0; b < badges.length; b++) {
        badges[b].textContent = unreadCount;
        if (unreadCount > 0) {
            badges[b].classList.remove("hidden");
        } else {
            badges[b].classList.add("hidden");
        }
    }

    var unreadText = document.getElementById("unreadCountText");
    if (unreadText) {
        unreadText.textContent = unreadCount > 0 ? "(" + unreadCount + " unread)" : "(All caught up)";
    }
}

// Marks all notifications as read in localStorage
function markAllNotificationsAsRead() {
    var allNotifs = JSON.parse(localStorage.getItem("sastaSafarNotifications") || "[]");
    for (var i = 0; i < allNotifs.length; i++) {
        allNotifs[i].isRead = true;
    }
    localStorage.setItem("sastaSafarNotifications", JSON.stringify(allNotifs));
    renderNotificationsList();
    updateNotificationBadge();
}


/* ==========================================================================
   SECTION 9: DASHBOARD RENDERING (PASSENGER & DRIVER)
   ========================================================================== */

var currentPassengerFilter = "all";
var currentDriverFilter = "all";

function setupDashboardPage() {
    var dashboardContainer = document.querySelector(".dashboard-container");
    if (!dashboardContainer) return;

    // 1. Setup Tab Switching (Passenger vs Driver)
    var tabPassengerBtn = document.getElementById("tabPassengerBtn");
    var tabDriverBtn = document.getElementById("tabDriverBtn");
    var passengerPane = document.getElementById("passengerTabPane");
    var driverPane = document.getElementById("driverTabPane");

    if (tabPassengerBtn && tabDriverBtn) {
        tabPassengerBtn.addEventListener("click", function () {
            tabPassengerBtn.classList.add("active");
            tabDriverBtn.classList.remove("active");
            passengerPane.classList.add("active");
            driverPane.classList.remove("active");
        });

        tabDriverBtn.addEventListener("click", function () {
            tabDriverBtn.classList.add("active");
            tabPassengerBtn.classList.remove("active");
            driverPane.classList.add("active");
            passengerPane.classList.remove("active");
        });
    }

    // 2. Mark all notifications as read button
    var markReadBtn = document.getElementById("markAllReadBtn");
    if (markReadBtn) {
        markReadBtn.addEventListener("click", markAllNotificationsAsRead);
    }

    // 3. Setup Passenger filter buttons
    var passengerFilterBar = document.getElementById("passengerFilterBar");
    if (passengerFilterBar) {
        passengerFilterBar.addEventListener("click", function (e) {
            if (e.target && e.target.classList.contains("filter-btn")) {
                var buttons = passengerFilterBar.querySelectorAll(".filter-btn");
                for (var i = 0; i < buttons.length; i++) buttons[i].classList.remove("active");
                e.target.classList.add("active");
                currentPassengerFilter = e.target.getAttribute("data-filter");
                renderPassengerBookings();
            }
        });
    }

    // 4. Setup Driver filter buttons
    var driverFilterBar = document.getElementById("driverFilterBar");
    if (driverFilterBar) {
        driverFilterBar.addEventListener("click", function (e) {
            if (e.target && e.target.classList.contains("filter-btn")) {
                var buttons = driverFilterBar.querySelectorAll(".filter-btn");
                for (var i = 0; i < buttons.length; i++) buttons[i].classList.remove("active");
                e.target.classList.add("active");
                currentDriverFilter = e.target.getAttribute("data-filter");
                renderDriverBookingRequests();
            }
        });
    }

    // Render lists initially
    renderDashboardLists();
}

function renderDashboardLists() {
    renderNotificationsList();
    renderPassengerBookings();
    renderDriverBookingRequests();
}

// Renders notifications in the dashboard notification panel
function renderNotificationsList() {
    var listContainer = document.getElementById("dashboardNotifList");
    if (!listContainer) return;

    var allNotifs = JSON.parse(localStorage.getItem("sastaSafarNotifications") || "[]");

    if (allNotifs.length === 0) {
        listContainer.innerHTML = '<div class="no-notif-message">No notifications yet. When booking status changes, updates will appear here!</div>';
        return;
    }

    listContainer.innerHTML = "";
    for (var i = 0; i < allNotifs.length; i++) {
        var n = allNotifs[i];
        var itemDiv = document.createElement("div");
        itemDiv.className = "notif-item " + n.type;
        itemDiv.innerHTML =
            '<div>' +
                '<strong>' + (n.type === "success" ? "✅ Confirmed: " : (n.type === "danger" ? "❌ Update: " : "ℹ️ Info: ")) + '</strong>' +
                n.message +
            '</div>' +
            '<span class="notif-time">' + n.timestamp + '</span>';
        listContainer.appendChild(itemDiv);
    }
}

// Renders Passenger's "My Bookings"
function renderPassengerBookings() {
    var container = document.getElementById("passengerBookingsList");
    if (!container) return;

    var allBookings = JSON.parse(localStorage.getItem("sastaSafarBookings") || "[]");

    // Filter by selected status tab
    var filtered = [];
    for (var i = 0; i < allBookings.length; i++) {
        if (currentPassengerFilter === "all" || allBookings[i].status.toLowerCase() === currentPassengerFilter) {
            filtered.push(allBookings[i]);
        }
    }

    if (filtered.length === 0) {
        container.innerHTML =
            '<div class="empty-state" style="grid-column: 1 / -1;">' +
                '<h3>No Bookings Found</h3>' +
                '<p>You have no ' + (currentPassengerFilter === "all" ? "" : currentPassengerFilter) + ' bookings at the moment.</p>' +
                '<a href="trips.html">Find a Trip to Book</a>' +
            '</div>';
        return;
    }

    container.innerHTML = "";
    for (var j = 0; j < filtered.length; j++) {
        var b = filtered[j];
        var card = document.createElement("div");
        card.className = "booking-card";

        var statusClass = b.status.toLowerCase();

        // Allow cancellation if Pending or Confirmed
        var actionHtml = "";
        if (b.status === "Pending" || b.status === "Confirmed") {
            actionHtml =
                '<div class="booking-card-actions">' +
                    '<button type="button" class="btn-cancel-booking" onclick="cancelBooking(\'' + b.id + '\')">Cancel Booking</button>' +
                '</div>';
        }

        card.innerHTML =
            '<div>' +
                '<div class="booking-card-header">' +
                    '<span class="booking-id">Booking ID: ' + b.id + '</span>' +
                    '<span class="status-badge ' + statusClass + '">' + b.status + '</span>' +
                '</div>' +
                '<div class="booking-route">' +
                    b.from + '<span class="arrow">&rarr;</span>' + b.to +
                '</div>' +
                '<div class="car-badge">🚗 ' + b.carCompany + ' ' + b.carModel + ' &bull; ' + b.category + '</div>' +
                '<div class="booking-detail-row"><span>Vehicle No:</span> <span class="vehicle-plate">' + b.vehicleNumber + '</span></div>' +
                '<div class="booking-detail-row"><span>Travel Date:</span> <strong>' + b.date + ' (' + b.time + ')</strong></div>' +
                '<div class="booking-detail-row"><span>Driver:</span> <strong>' + b.driverName + ' (' + b.driverPhone + ')</strong></div>' +
                '<div class="booking-detail-row"><span>Seats Booked:</span> <strong>' + b.seatsRequested + ' Seat(s)</strong></div>' +
                '<div class="total-amount-box">' +
                    '<span>Total Amount:</span>' +
                    '<span class="amount">₹' + b.totalAmount + '</span>' +
                '</div>' +
            '</div>' +
            actionHtml;

        container.appendChild(card);
    }
}

// Renders Driver's "Booking Requests"
function renderDriverBookingRequests() {
    var container = document.getElementById("driverBookingsList");
    if (!container) return;

    var allBookings = JSON.parse(localStorage.getItem("sastaSafarBookings") || "[]");

    var filtered = [];
    for (var i = 0; i < allBookings.length; i++) {
        if (currentDriverFilter === "all" || allBookings[i].status.toLowerCase() === currentDriverFilter) {
            filtered.push(allBookings[i]);
        }
    }

    if (filtered.length === 0) {
        container.innerHTML =
            '<div class="empty-state" style="grid-column: 1 / -1;">' +
                '<h3>No Booking Requests</h3>' +
                '<p>There are no ' + (currentDriverFilter === "all" ? "" : currentDriverFilter) + ' booking requests right now.</p>' +
                '<a href="trips.html#offer-section">Offer a Seat / Post a Ride</a>' +
            '</div>';
        return;
    }

    container.innerHTML = "";
    for (var j = 0; j < filtered.length; j++) {
        var req = filtered[j];
        var card = document.createElement("div");
        card.className = "booking-card";

        var statusClass = req.status.toLowerCase();

        // Action buttons: Accept & Reject if status is Pending
        var actionsHtml = "";
        if (req.status === "Pending") {
            actionsHtml =
                '<div class="booking-card-actions">' +
                    '<button type="button" class="btn-accept" onclick="acceptBooking(\'' + req.id + '\')">Accept Booking</button>' +
                    '<button type="button" class="btn-reject" onclick="rejectBooking(\'' + req.id + '\')">Reject Booking</button>' +
                '</div>';
        } else {
            actionsHtml =
                '<div style="margin-top: 15px; text-align: center; font-size: 13px; color: #777;">' +
                    'Decision Taken: <strong>' + req.status + '</strong>' +
                '</div>';
        }

        card.innerHTML =
            '<div>' +
                '<div class="booking-card-header">' +
                    '<span class="booking-id">Request ID: ' + req.id + '</span>' +
                    '<span class="status-badge ' + statusClass + '">' + req.status + '</span>' +
                '</div>' +
                '<div class="booking-route">' +
                    req.from + '<span class="arrow">&rarr;</span>' + req.to +
                '</div>' +
                '<div class="car-badge">🚗 ' + req.carCompany + ' ' + req.carModel + ' (' + req.vehicleNumber + ')</div>' +
                '<div class="booking-detail-row"><span>Passenger:</span> <strong>' + req.passengerName + '</strong></div>' +
                '<div class="booking-detail-row"><span>Contact:</span> <strong>' + req.passengerPhone + '</strong></div>' +
                '<div class="booking-detail-row"><span>Seats Requested:</span> <strong>' + req.seatsRequested + ' Seat(s)</strong></div>' +
                '<div class="booking-detail-row"><span>Trip Date:</span> <strong>' + req.date + '</strong></div>' +
                '<div class="booking-detail-row"><span>Requested On:</span> <span>' + req.bookingDate + '</span></div>' +
                '<div class="total-amount-box">' +
                    '<span>Total Booking Amount:</span>' +
                    '<span class="amount">₹' + req.totalAmount + '</span>' +
                '</div>' +
            '</div>' +
            actionsHtml;

        container.appendChild(card);
    }
}


/* ==========================================================================
   SECTION 10: LOGIN PAGE FUNCTIONALITY
   ========================================================================== */

// Safe helper function to retrieve registered users list from localStorage
function getRegisteredUsers() {
    try {
        var rawData = localStorage.getItem("sastaSafarUsers");
        if (!rawData) {
            return [];
        }
        var parsed = JSON.parse(rawData);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        console.error("Error reading sastaSafarUsers from localStorage:", e);
        return [];
    }
}

// Safe helper function to persist registered users list to localStorage
function saveRegisteredUsers(usersArray) {
    try {
        localStorage.setItem("sastaSafarUsers", JSON.stringify(usersArray));
        return true;
    } catch (e) {
        console.error("Error saving sastaSafarUsers to localStorage:", e);
        return false;
    }
}

function setupLoginPage() {
    var loginForm = document.getElementById("loginForm");
    if (!loginForm) return;

    var emailInput = document.getElementById("loginEmail");
    var passwordInput = document.getElementById("loginPassword");
    var showPasswordCheck = document.getElementById("showLoginPassword");
    var messageBox = document.getElementById("loginMessage");
    var forgotLink = document.getElementById("forgotPasswordLink");
    var rememberCheck = document.getElementById("loginRemember");

    // Populate remembered email if previously checked
    var rememberedEmail = localStorage.getItem("sastaSafarRememberedEmail");
    if (rememberedEmail && emailInput && rememberCheck) {
        emailInput.value = rememberedEmail;
        rememberCheck.checked = true;
    }

    // Toggle password visibility (Show/Hide Password)
    if (showPasswordCheck && passwordInput) {
        showPasswordCheck.addEventListener("change", function () {
            passwordInput.type = showPasswordCheck.checked ? "text" : "password";
        });
    }

    // Forgot password demonstration alert
    if (forgotLink) {
        forgotLink.addEventListener("click", function (e) {
            e.preventDefault();
            var enteredEmail = prompt("Enter your registered email address to receive password reset instructions:");
            if (enteredEmail) {
                if (enteredEmail.indexOf("@") === -1 || enteredEmail.indexOf(".") === -1) {
                    alert("Please enter a valid email address!");
                } else {
                    alert("Password reset instructions sent to " + enteredEmail);
                }
            }
        });
    }

    // Handle Login Form Submission with verified authentication
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var emailValue = emailInput.value.trim();
        // IMPORTANT: Exact password comparison requires NOT trimming or modifying the entered password
        var passwordValue = passwordInput.value;

        // 1. Validation for empty or invalid email
        if (emailValue === "") {
            showFormMessage(messageBox, "Please enter your email address.", "error");
            emailInput.focus();
            return;
        }

        if (emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1) {
            showFormMessage(messageBox, "Please enter a valid email address.", "error");
            emailInput.focus();
            return;
        }

        // 2. Validation for empty password
        if (passwordValue === "") {
            showFormMessage(messageBox, "Please enter your password.", "error");
            passwordInput.focus();
            return;
        }

        if (passwordValue.length < 6) {
            showFormMessage(messageBox, "Password must be at least 6 characters.", "error");
            passwordInput.focus();
            return;
        }

        // 3. Retrieve registered users from sastaSafarUsers safely
        var usersList = getRegisteredUsers();

        // 4. Match the entered email with the registered email (case-insensitive)
        var matchedUser = null;
        for (var i = 0; i < usersList.length; i++) {
            if (usersList[i] && usersList[i].email && usersList[i].email.toLowerCase() === emailValue.toLowerCase()) {
                matchedUser = usersList[i];
                break;
            }
        }

        // 5. If email does not exist, display exact required message and stop
        if (!matchedUser) {
            showFormMessage(messageBox, "Account not found. Please sign up first.", "error");
            emailInput.focus();
            return;
        }

        // 6. If email exists but password is incorrect, display exact required message and stop
        // Exact comparison ensures no false positives
        if (matchedUser.password !== passwordValue) {
            showFormMessage(messageBox, "Invalid password. Please enter the correct password.", "error");
            passwordInput.focus();
            return;
        }

        // 7. Successful Authentication:
        // Manage "Remember me"
        if (rememberCheck && rememberCheck.checked) {
            localStorage.setItem("sastaSafarRememberedEmail", emailValue);
        } else {
            localStorage.removeItem("sastaSafarRememberedEmail");
        }

        // Save sastaSafarCurrentUser ONLY after successful authentication
        localStorage.setItem("sastaSafarCurrentUser", matchedUser.name);
        // Save user role if available, defaulting to passenger
        localStorage.setItem("sastaSafarUserRole", matchedUser.role || "passenger");

        showFormMessage(messageBox, "Login successful! Redirecting...", "success");

        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000);
    });
}


/* ==========================================================================
   SECTION 11: SIGNUP PAGE FUNCTIONALITY
   ========================================================================== */

function setupSignupPage() {
    var signupForm = document.getElementById("signupForm");
    if (!signupForm) return;

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var passwordInput = document.getElementById("password");
    var confirmInput = document.getElementById("confirm");
    var showPasswordCheck = document.getElementById("showSignupPassword");
    var termsCheck = document.getElementById("terms");
    var messageBox = document.getElementById("signupMessage");
    var roleSelect = document.getElementById("role");

    // Toggle password visibility for both password inputs
    if (showPasswordCheck && passwordInput && confirmInput) {
        showPasswordCheck.addEventListener("change", function () {
            var targetType = showPasswordCheck.checked ? "text" : "password";
            passwordInput.type = targetType;
            confirmInput.type = targetType;
        });
    }

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var nameVal = nameInput.value.trim();
        var emailVal = emailInput.value.trim();
        var phoneVal = phoneInput.value.trim();
        // Do NOT trim passwords so exact character sequence is preserved
        var passwordVal = passwordInput.value;
        var confirmVal = confirmInput.value;
        var roleVal = roleSelect ? roleSelect.value : "passenger";

        // Full name check
        if (nameVal === "" || nameVal.length < 3) {
            showFormMessage(messageBox, "Please enter your full name (at least 3 characters).", "error");
            nameInput.focus();
            return;
        }

        // Email validation
        if (emailVal === "" || emailVal.indexOf("@") === -1 || emailVal.indexOf(".") === -1) {
            showFormMessage(messageBox, "Please enter a valid email address.", "error");
            emailInput.focus();
            return;
        }

        // 10-digit Indian phone number validation
        if (phoneVal.length !== 10 || isNaN(phoneVal)) {
            showFormMessage(messageBox, "Please enter a valid 10-digit phone number.", "error");
            phoneInput.focus();
            return;
        }

        // Password minimum length check
        if (passwordVal.length < 6) {
            showFormMessage(messageBox, "Password must be at least 6 characters long.", "error");
            passwordInput.focus();
            return;
        }

        // Password confirmation comparison
        if (passwordVal !== confirmVal) {
            showFormMessage(messageBox, "Passwords do not match.", "error");
            confirmInput.focus();
            return;
        }

        // Terms and conditions acceptance check
        if (!termsCheck.checked) {
            showFormMessage(messageBox, "You must agree to the Terms & Conditions.", "error");
            return;
        }

        // Safe retrieval of registered users list
        var existingUsers = getRegisteredUsers();

        // Check for duplicate email registration (case-insensitive)
        for (var i = 0; i < existingUsers.length; i++) {
            if (existingUsers[i] && existingUsers[i].email && existingUsers[i].email.toLowerCase() === emailVal.toLowerCase()) {
                showFormMessage(messageBox, "This email is already registered. Please login.", "error");
                emailInput.focus();
                return;
            }
        }

        // Construct new user record
        var newUser = {
            name: nameVal,
            email: emailVal,
            phone: phoneVal,
            password: passwordVal,
            role: roleVal || "passenger"
        };

        // Add new user to array and save to localStorage
        existingUsers.push(newUser);
        var isSaved = saveRegisteredUsers(existingUsers);

        if (!isSaved) {
            showFormMessage(messageBox, "Unable to save account to browser storage. Please check permissions.", "error");
            return;
        }

        showFormMessage(messageBox, "Account created successfully! Redirecting to login...", "success");

        setTimeout(function () {
            window.location.href = "login.html";
        }, 1200);
    });
}


/* ==========================================================================
   SECTION 12: HOW IT WORKS FAQ ACCORDION
   ========================================================================== */

function setupFaqAccordion() {
    var faqItems = document.querySelectorAll(".faq-item");
    if (!faqItems || faqItems.length === 0) return;

    for (var i = 0; i < faqItems.length; i++) {
        faqItems[i].addEventListener("click", function () {
            var answerPara = this.querySelector("p");
            if (answerPara) {
                if (answerPara.style.display === "none") {
                    answerPara.style.display = "block";
                } else {
                    this.style.boxShadow = "0 8px 25px rgba(23, 105, 255, 0.25)";
                    var currentItem = this;
                    setTimeout(function () {
                        currentItem.style.boxShadow = "";
                    }, 400);
                }
            }
        });
    }
}


/* ==========================================================================
   SECTION 13: HELPER FUNCTIONS
   ========================================================================== */

function showFormMessage(messageBoxElement, messageText, messageType) {
    if (!messageBoxElement) return;
    messageBoxElement.textContent = messageText;
    messageBoxElement.className = "message-box " + messageType;
    messageBoxElement.style.display = "block";
}

// Utility helper to safely copy text to the system clipboard
function copySafetyTextToClipboard(textToCopy, onSuccessCallback, onErrorCallback) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy)
            .then(function () {
                if (onSuccessCallback) onSuccessCallback();
            })
            .catch(function (err) {
                console.warn("Clipboard API failed, trying fallback:", err);
                fallbackClipboardCopy(textToCopy, onSuccessCallback, onErrorCallback);
            });
    } else {
        fallbackClipboardCopy(textToCopy, onSuccessCallback, onErrorCallback);
    }
}

// Traditional textarea fallback for copying text across all browsers
function fallbackClipboardCopy(text, onSuccessCallback, onErrorCallback) {
    try {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.top = "-9999px";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        var successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        if (successful && onSuccessCallback) {
            onSuccessCallback();
        } else if (!successful && onErrorCallback) {
            onErrorCallback();
        }
    } catch (err) {
        console.error("Fallback clipboard error:", err);
        if (onErrorCallback) onErrorCallback();
    }
}


/* ==========================================================================
   SECTION 14: SAFETY & SECURITY SYSTEM (PASSENGER & DRIVER TOOLS)
   ========================================================================== */

function setupSafetyPage() {
    var passengerPane = document.getElementById("passengerSafetyPane");
    var driverPane = document.getElementById("driverSafetyPane");
    if (!passengerPane || !driverPane) return; // Exit cleanly if not on safety.html

    console.log("Sasta Safar Safety & Security Module Initialized.");

    /* ----------------------------------------------------------------------
       1. Role Tab Navigation (Passenger vs Driver Hub)
       ---------------------------------------------------------------------- */
    var tabPassengerBtn = document.getElementById("tabPassengerSafetyBtn");
    var tabDriverBtn = document.getElementById("tabDriverSafetyBtn");

    function switchSafetyTab(targetRole) {
        if (targetRole === "driver") {
            tabDriverBtn.classList.add("active");
            tabPassengerBtn.classList.remove("active");
            driverPane.classList.add("active");
            passengerPane.classList.remove("active");
        } else {
            tabPassengerBtn.classList.add("active");
            tabDriverBtn.classList.remove("active");
            passengerPane.classList.add("active");
            driverPane.classList.remove("active");
        }
    }

    if (tabPassengerBtn && tabDriverBtn) {
        tabPassengerBtn.addEventListener("click", function () {
            switchSafetyTab("passenger");
        });

        tabDriverBtn.addEventListener("click", function () {
            switchSafetyTab("driver");
        });

        // Auto-select tab based on logged-in user's role if available
        var userRole = localStorage.getItem("sastaSafarUserRole");
        if (userRole === "driver") {
            switchSafetyTab("driver");
        } else {
            switchSafetyTab("passenger");
        }
    }


    /* ----------------------------------------------------------------------
       2. SOS Confirmation Modal Logic (India Emergency Helpline 112)
       ---------------------------------------------------------------------- */
    var sosModal = document.getElementById("sosModalOverlay");
    var cancelSosBtn = document.getElementById("cancelSosModalBtn");
    var confirmSosBtn = document.getElementById("confirmSosModalBtn");
    var activeSosTarget = null; // Tracks "passenger" or "driver"

    var passengerSosBtn = document.getElementById("passengerSosBtn");
    var driverSosBtn = document.getElementById("driverSosBtn");
    var passengerSosActivePanel = document.getElementById("passengerSosActivePanel");
    var driverSosActivePanel = document.getElementById("driverSosActivePanel");
    var closePassengerSosPanel = document.getElementById("closePassengerSosPanel");
    var closeDriverSosPanel = document.getElementById("closeDriverSosPanel");

    // Open confirmation dialog before activating SOS
    if (passengerSosBtn) {
        passengerSosBtn.addEventListener("click", function () {
            activeSosTarget = "passenger";
            if (sosModal) sosModal.classList.remove("hidden");
        });
    }

    if (driverSosBtn) {
        driverSosBtn.addEventListener("click", function () {
            activeSosTarget = "driver";
            if (sosModal) sosModal.classList.remove("hidden");
        });
    }

    // Dismiss modal on Cancel
    if (cancelSosBtn) {
        cancelSosBtn.addEventListener("click", function () {
            if (sosModal) sosModal.classList.add("hidden");
            activeSosTarget = null;
        });
    }

    // Confirm Emergency SOS activation
    if (confirmSosBtn) {
        confirmSosBtn.addEventListener("click", function () {
            if (sosModal) sosModal.classList.add("hidden");

            if (activeSosTarget === "passenger" && passengerSosActivePanel) {
                passengerSosActivePanel.classList.remove("hidden");
                // Scroll down smoothly to emergency actions if supported
                if (typeof passengerSosActivePanel.scrollIntoView === "function") {
                    passengerSosActivePanel.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            } else if (activeSosTarget === "driver" && driverSosActivePanel) {
                driverSosActivePanel.classList.remove("hidden");
                if (typeof driverSosActivePanel.scrollIntoView === "function") {
                    driverSosActivePanel.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }
            activeSosTarget = null;
        });
    }

    // Close active emergency panels
    if (closePassengerSosPanel && passengerSosActivePanel) {
        closePassengerSosPanel.addEventListener("click", function () {
            passengerSosActivePanel.classList.add("hidden");
        });
    }

    if (closeDriverSosPanel && driverSosActivePanel) {
        closeDriverSosPanel.addEventListener("click", function () {
            driverSosActivePanel.classList.add("hidden");
        });
    }


    /* ----------------------------------------------------------------------
       3. Passenger Emergency Contact Management (Local Storage)
       ---------------------------------------------------------------------- */
    var pContactForm = document.getElementById("passengerContactForm");
    var pContactNameInput = document.getElementById("pContactName");
    var pContactPhoneInput = document.getElementById("pContactPhone");
    var pContactRelationSelect = document.getElementById("pContactRelation");
    var pSavedContactBox = document.getElementById("pSavedContactBox");
    var pSavedName = document.getElementById("pSavedName");
    var pSavedRelation = document.getElementById("pSavedRelation");
    var pSavedPhone = document.getElementById("pSavedPhone");
    var pCallSavedBtn = document.getElementById("pCallSavedBtn");
    var pEditContactBtn = document.getElementById("pEditContactBtn");
    var pContactMessage = document.getElementById("pContactMessage");
    var pSosContactLink = document.getElementById("pSosContactLink");

    function loadPassengerEmergencyContact() {
        try {
            var raw = localStorage.getItem("sastaSafarPassengerContact");
            if (!raw) {
                if (pSavedContactBox) pSavedContactBox.classList.add("hidden");
                if (pContactForm) pContactForm.style.display = "block";
                if (pSosContactLink) pSosContactLink.classList.add("hidden");
                return;
            }

            var contact = JSON.parse(raw);
            if (contact && contact.name && contact.phone) {
                if (pSavedName) pSavedName.textContent = contact.name;
                if (pSavedRelation) pSavedRelation.textContent = contact.relation || "Contact";
                if (pSavedPhone) pSavedPhone.textContent = "📱 +91 " + contact.phone;
                if (pCallSavedBtn) pCallSavedBtn.href = "tel:" + contact.phone;

                if (pSavedContactBox) pSavedContactBox.classList.remove("hidden");
                if (pContactForm) pContactForm.style.display = "none";

                // Also connect to Passenger SOS active panel
                if (pSosContactLink) {
                    pSosContactLink.href = "tel:" + contact.phone;
                    pSosContactLink.textContent = "📞 Call Saved Contact (" + contact.name + ")";
                    pSosContactLink.classList.remove("hidden");
                }
            }
        } catch (e) {
            console.error("Error reading passenger emergency contact:", e);
        }
    }

    if (pContactForm) {
        pContactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var nameVal = pContactNameInput.value.trim();
            var phoneVal = pContactPhoneInput.value.trim();
            var relationVal = pContactRelationSelect.value;

            if (nameVal.length < 2) {
                pContactMessage.textContent = "Please enter a valid contact name.";
                pContactMessage.className = "feedback-msg error";
                return;
            }

            if (phoneVal.length !== 10 || isNaN(phoneVal)) {
                pContactMessage.textContent = "Please enter a valid 10-digit mobile number.";
                pContactMessage.className = "feedback-msg error";
                return;
            }

            var contactObj = {
                name: nameVal,
                phone: phoneVal,
                relation: relationVal
            };

            localStorage.setItem("sastaSafarPassengerContact", JSON.stringify(contactObj));

            pContactMessage.textContent = "Emergency contact saved successfully!";
            pContactMessage.className = "feedback-msg success";

            setTimeout(function () {
                pContactMessage.style.display = "none";
                loadPassengerEmergencyContact();
            }, 1000);
        });
    }

    if (pEditContactBtn && pContactForm) {
        pEditContactBtn.addEventListener("click", function () {
            try {
                var raw = localStorage.getItem("sastaSafarPassengerContact");
                if (raw) {
                    var c = JSON.parse(raw);
                    if (pContactNameInput) pContactNameInput.value = c.name || "";
                    if (pContactPhoneInput) pContactPhoneInput.value = c.phone || "";
                    if (pContactRelationSelect) pContactRelationSelect.value = c.relation || "Parent";
                }
            } catch (err) {}
            if (pSavedContactBox) pSavedContactBox.classList.add("hidden");
            pContactForm.style.display = "block";
        });
    }

    loadPassengerEmergencyContact();


    /* ----------------------------------------------------------------------
       4. Driver Emergency Contact Management (Local Storage)
       ---------------------------------------------------------------------- */
    var dContactForm = document.getElementById("driverContactForm");
    var dContactNameInput = document.getElementById("dContactName");
    var dContactPhoneInput = document.getElementById("dContactPhone");
    var dContactRelationSelect = document.getElementById("dContactRelation");
    var dSavedContactBox = document.getElementById("dSavedContactBox");
    var dSavedName = document.getElementById("dSavedName");
    var dSavedRelation = document.getElementById("dSavedRelation");
    var dSavedPhone = document.getElementById("dSavedPhone");
    var dCallSavedBtn = document.getElementById("dCallSavedBtn");
    var dEditContactBtn = document.getElementById("dEditContactBtn");
    var dContactMessage = document.getElementById("dContactMessage");
    var dSosContactLink = document.getElementById("dSosContactLink");
    var sosDContactText = document.getElementById("sosDContactText");

    function loadDriverEmergencyContact() {
        try {
            var raw = localStorage.getItem("sastaSafarDriverContact");
            if (!raw) {
                if (dSavedContactBox) dSavedContactBox.classList.add("hidden");
                if (dContactForm) dContactForm.style.display = "block";
                if (dSosContactLink) dSosContactLink.classList.add("hidden");
                if (sosDContactText) sosDContactText.textContent = "Not saved yet";
                return;
            }

            var contact = JSON.parse(raw);
            if (contact && contact.name && contact.phone) {
                if (dSavedName) dSavedName.textContent = contact.name;
                if (dSavedRelation) dSavedRelation.textContent = contact.relation || "Contact";
                if (dSavedPhone) dSavedPhone.textContent = "📱 +91 " + contact.phone;
                if (dCallSavedBtn) dCallSavedBtn.href = "tel:" + contact.phone;

                if (dSavedContactBox) dSavedContactBox.classList.remove("hidden");
                if (dContactForm) dContactForm.style.display = "none";

                if (dSosContactLink) {
                    dSosContactLink.href = "tel:" + contact.phone;
                    dSosContactLink.textContent = "📞 Call Saved Contact (" + contact.name + ")";
                    dSosContactLink.classList.remove("hidden");
                }

                if (sosDContactText) {
                    sosDContactText.textContent = contact.name + " (" + contact.phone + ")";
                }
            }
        } catch (e) {
            console.error("Error reading driver emergency contact:", e);
        }
    }

    if (dContactForm) {
        dContactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var nameVal = dContactNameInput.value.trim();
            var phoneVal = dContactPhoneInput.value.trim();
            var relationVal = dContactRelationSelect.value;

            if (nameVal.length < 2) {
                dContactMessage.textContent = "Please enter a valid contact name.";
                dContactMessage.className = "feedback-msg error";
                return;
            }

            if (phoneVal.length !== 10 || isNaN(phoneVal)) {
                dContactMessage.textContent = "Please enter a valid 10-digit mobile number.";
                dContactMessage.className = "feedback-msg error";
                return;
            }

            var contactObj = {
                name: nameVal,
                phone: phoneVal,
                relation: relationVal
            };

            localStorage.setItem("sastaSafarDriverContact", JSON.stringify(contactObj));

            dContactMessage.textContent = "Driver emergency contact saved successfully!";
            dContactMessage.className = "feedback-msg success";

            setTimeout(function () {
                dContactMessage.style.display = "none";
                loadDriverEmergencyContact();
            }, 1000);
        });
    }

    if (dEditContactBtn && dContactForm) {
        dEditContactBtn.addEventListener("click", function () {
            try {
                var raw = localStorage.getItem("sastaSafarDriverContact");
                if (raw) {
                    var c = JSON.parse(raw);
                    if (dContactNameInput) dContactNameInput.value = c.name || "";
                    if (dContactPhoneInput) dContactPhoneInput.value = c.phone || "";
                    if (dContactRelationSelect) dContactRelationSelect.value = c.relation || "Spouse / Partner";
                }
            } catch (err) {}
            if (dSavedContactBox) dSavedContactBox.classList.add("hidden");
            dContactForm.style.display = "block";
        });
    }

    loadDriverEmergencyContact();


    /* ----------------------------------------------------------------------
       5. Passenger Trip Details & Sharing (Web Share API + Clipboard Fallback)
       ---------------------------------------------------------------------- */
    var pShareTripSelect = document.getElementById("pShareTripSelect");
    var pPreviewRoute = document.getElementById("pPreviewRoute");
    var pPreviewDriver = document.getElementById("pPreviewDriver");
    var pPreviewVehicle = document.getElementById("pPreviewVehicle");
    var pPreviewTime = document.getElementById("pPreviewTime");
    var pShareTripBtn = document.getElementById("pShareTripBtn");
    var pCopyTripBtn = document.getElementById("pCopyTripBtn");
    var pShareFeedback = document.getElementById("pShareFeedback");

    // Driver card elements
    var pDriverCardName = document.getElementById("pDriverCardName");
    var pDriverCardPhone = document.getElementById("pDriverCardPhone");
    var pDriverCardVehicle = document.getElementById("pDriverCardVehicle");
    var pDriverCardPlate = document.getElementById("pDriverCardPlate");

    // Quick SOS ride details
    var sosPName = document.getElementById("sosPName");
    var sosPDriver = document.getElementById("sosPDriver");
    var sosPVehicle = document.getElementById("sosPVehicle");
    var sosPRoute = document.getElementById("sosPRoute");

    // Pre-fill logged-in passenger name
    var currentUser = localStorage.getItem("sastaSafarCurrentUser");
    if (sosPName) {
        sosPName.textContent = currentUser || "Guest Passenger";
    }

    // Default sample trips for quick demo testing if no bookings exist
    var passengerTripsList = [
        {
            id: "default_1",
            driver: "Rahul Sharma",
            phone: "9876543210",
            carCompany: "Maruti Suzuki",
            carModel: "Swift",
            vehicleNo: "UP 75 AB 1234",
            from: "Etawah",
            to: "Delhi",
            date: "01 Nov 2026",
            time: "06:00 AM"
        },
        {
            id: "default_2",
            driver: "Amit Verma",
            phone: "9812345678",
            carCompany: "Hyundai",
            carModel: "Creta",
            vehicleNo: "UP 80 CD 5678",
            from: "Agra",
            to: "Lucknow",
            date: "02 Nov 2026",
            time: "08:30 AM"
        }
    ];

    // Read real user bookings from localStorage if available
    try {
        var userBookings = JSON.parse(localStorage.getItem("sastaSafarBookings") || "[]");
        if (Array.isArray(userBookings) && userBookings.length > 0) {
            for (var b = 0; b < userBookings.length; b++) {
                var bk = userBookings[b];
                passengerTripsList.unshift({
                    id: bk.id,
                    driver: bk.driverName || "Driver",
                    phone: bk.driverPhone || "9876543210",
                    carCompany: bk.carCompany || "Car",
                    carModel: bk.carModel || "Model",
                    vehicleNo: bk.vehicleNumber || "UP 75 XX 0000",
                    from: bk.from || "Start",
                    to: bk.to || "Destination",
                    date: bk.date || "Upcoming Date",
                    time: bk.time || "08:00 AM"
                });
            }
        }
    } catch (e) {
        console.error("Error reading bookings for safety page:", e);
    }

    // Populate passenger trip dropdown
    if (pShareTripSelect) {
        pShareTripSelect.innerHTML = "";
        for (var i = 0; i < passengerTripsList.length; i++) {
            var item = passengerTripsList[i];
            var opt = document.createElement("option");
            opt.value = i;
            opt.textContent = item.from + " to " + item.to + " (Driver: " + item.driver + " - " + item.date + ")";
            pShareTripSelect.appendChild(opt);
        }

        function updatePassengerTripPreview(index) {
            var selectedTrip = passengerTripsList[index];
            if (!selectedTrip) return;

            var routeText = selectedTrip.from + " \u2192 " + selectedTrip.to;
            var vehicleText = selectedTrip.carCompany + " " + selectedTrip.carModel + " (" + selectedTrip.vehicleNo + ")";
            var timeText = selectedTrip.date + " at " + selectedTrip.time;

            if (pPreviewRoute) pPreviewRoute.textContent = routeText;
            if (pPreviewDriver) pPreviewDriver.textContent = selectedTrip.driver;
            if (pPreviewVehicle) pPreviewVehicle.textContent = vehicleText;
            if (pPreviewTime) pPreviewTime.textContent = timeText;

            // Update driver info card
            if (pDriverCardName) pDriverCardName.textContent = selectedTrip.driver;
            if (pDriverCardPhone) pDriverCardPhone.textContent = "📱 +91 " + selectedTrip.phone;
            if (pDriverCardVehicle) pDriverCardVehicle.textContent = selectedTrip.carCompany + " " + selectedTrip.carModel;
            if (pDriverCardPlate) pDriverCardPlate.textContent = selectedTrip.vehicleNo;

            // Update SOS quick details
            if (sosPDriver) sosPDriver.textContent = selectedTrip.driver;
            if (sosPVehicle) sosPVehicle.textContent = vehicleText;
            if (sosPRoute) sosPRoute.textContent = routeText;
        }

        pShareTripSelect.addEventListener("change", function () {
            updatePassengerTripPreview(parseInt(this.value, 10));
        });

        // Initialize with first trip
        updatePassengerTripPreview(0);
    }

    // Generate formatted passenger trip text
    function getPassengerShareText() {
        var idx = pShareTripSelect ? parseInt(pShareTripSelect.value, 10) : 0;
        var trip = passengerTripsList[idx] || passengerTripsList[0];
        var passengerName = currentUser || "Passenger";

        return "🚗 Sasta Safar Trip Details\n" +
            "Passenger: " + passengerName + "\n" +
            "Driver: " + trip.driver + " (Phone: +91 " + trip.phone + ")\n" +
            "Vehicle: " + trip.carCompany + " " + trip.carModel + " [Plate: " + trip.vehicleNo + "]\n" +
            "Route: " + trip.from + " to " + trip.to + "\n" +
            "Date & Time: " + trip.date + " at " + trip.time + "\n" +
            "Shared via Sasta Safar Safety & Security Hub.";
    }

    // Share via Web Share API
    if (pShareTripBtn) {
        pShareTripBtn.addEventListener("click", function () {
            var text = getPassengerShareText();
            if (navigator.share) {
                navigator.share({
                    title: "Sasta Safar Trip Details",
                    text: text
                }).catch(function (err) {
                    console.log("Web Share cancelled or not completed:", err);
                });
            } else {
                // Fallback to clipboard copy
                copySafetyTextToClipboard(text, function () {
                    pShareFeedback.textContent = "Web Share API not supported on this browser. Trip details copied to clipboard!";
                    pShareFeedback.className = "feedback-msg success";
                    setTimeout(function () { pShareFeedback.style.display = "none"; }, 3000);
                });
            }
        });
    }

    // Copy to clipboard fallback button
    if (pCopyTripBtn) {
        pCopyTripBtn.addEventListener("click", function () {
            var text = getPassengerShareText();
            copySafetyTextToClipboard(text, function () {
                pShareFeedback.textContent = "Trip details copied to clipboard! You can paste it into WhatsApp or SMS.";
                pShareFeedback.className = "feedback-msg success";
                setTimeout(function () { pShareFeedback.style.display = "none"; }, 3000);
            }, function () {
                pShareFeedback.textContent = "Failed to copy. Please select text manually.";
                pShareFeedback.className = "feedback-msg error";
            });
        });
    }


    /* ----------------------------------------------------------------------
       6. Driver Trip Route Sharing (Web Share API + Clipboard Fallback)
       ---------------------------------------------------------------------- */
    var dShareTripSelect = document.getElementById("dShareTripSelect");
    var dPreviewRoute = document.getElementById("dPreviewRoute");
    var dPreviewVehicle = document.getElementById("dPreviewVehicle");
    var dPreviewDate = document.getElementById("dPreviewDate");
    var dPreviewTime = document.getElementById("dPreviewTime");
    var dShareTripBtn = document.getElementById("dShareTripBtn");
    var dCopyTripBtn = document.getElementById("dCopyTripBtn");
    var dShareFeedback = document.getElementById("dShareFeedback");
    var sosDName = document.getElementById("sosDName");

    if (sosDName) {
        sosDName.textContent = currentUser || "Registered Driver";
    }

    var driverTripsList = [
        {
            routeFrom: "Etawah",
            routeTo: "Delhi",
            vehicleNo: "UP 75 AB 1234",
            date: "01 Nov 2026",
            time: "06:00 AM"
        },
        {
            routeFrom: "Agra",
            routeTo: "Lucknow",
            vehicleNo: "UP 80 CD 5678",
            date: "02 Nov 2026",
            time: "08:30 AM"
        }
    ];

    // Load any custom trips created by driver from localStorage
    try {
        var customTrips = JSON.parse(localStorage.getItem("sastaSafarCustomTrips") || "[]");
        if (Array.isArray(customTrips) && customTrips.length > 0) {
            for (var c = 0; c < customTrips.length; c++) {
                var ct = customTrips[c];
                driverTripsList.unshift({
                    routeFrom: ct.from,
                    routeTo: ct.to,
                    vehicleNo: ct.vehicleNo || "UP 75 XX 0000",
                    date: ct.date,
                    time: ct.time
                });
            }
        }
    } catch (e) {
        console.error("Error reading custom trips:", e);
    }

    if (dShareTripSelect) {
        dShareTripSelect.innerHTML = "";
        for (var d = 0; d < driverTripsList.length; d++) {
            var dt = driverTripsList[d];
            var dOpt = document.createElement("option");
            dOpt.value = d;
            dOpt.textContent = dt.routeFrom + " to " + dt.routeTo + " (" + dt.date + " - " + dt.vehicleNo + ")";
            dShareTripSelect.appendChild(dOpt);
        }

        function updateDriverTripPreview(idx) {
            var sel = driverTripsList[idx];
            if (!sel) return;
            if (dPreviewRoute) dPreviewRoute.textContent = sel.routeFrom + " \u2192 " + sel.routeTo;
            if (dPreviewVehicle) dPreviewVehicle.textContent = sel.vehicleNo;
            if (dPreviewDate) dPreviewDate.textContent = sel.date;
            if (dPreviewTime) dPreviewTime.textContent = sel.time;
        }

        dShareTripSelect.addEventListener("change", function () {
            updateDriverTripPreview(parseInt(this.value, 10));
        });

        updateDriverTripPreview(0);
    }

    function getDriverShareText() {
        var idx = dShareTripSelect ? parseInt(dShareTripSelect.value, 10) : 0;
        var trip = driverTripsList[idx] || driverTripsList[0];
        var driverName = currentUser || "Driver";

        return "🚗 Sasta Safar Driver Travel Schedule\n" +
            "Driver: " + driverName + "\n" +
            "Vehicle Registration: " + trip.vehicleNo + "\n" +
            "Planned Route: " + trip.routeFrom + " to " + trip.routeTo + "\n" +
            "Travel Date: " + trip.date + " at " + trip.time + "\n" +
            "Notice: Static route sharing (Demo - No live GPS tracking).\n" +
            "Shared via Sasta Safar Safety & Security Hub.";
    }

    if (dShareTripBtn) {
        dShareTripBtn.addEventListener("click", function () {
            var text = getDriverShareText();
            if (navigator.share) {
                navigator.share({
                    title: "Sasta Safar Driver Trip Schedule",
                    text: text
                }).catch(function (err) {
                    console.log("Web Share cancelled:", err);
                });
            } else {
                copySafetyTextToClipboard(text, function () {
                    dShareFeedback.textContent = "Web Share API not supported on this browser. Trip schedule copied to clipboard!";
                    dShareFeedback.className = "feedback-msg success";
                    setTimeout(function () { dShareFeedback.style.display = "none"; }, 3000);
                });
            }
        });
    }

    if (dCopyTripBtn) {
        dCopyTripBtn.addEventListener("click", function () {
            var text = getDriverShareText();
            copySafetyTextToClipboard(text, function () {
                dShareFeedback.textContent = "Driver trip details copied to clipboard! You can paste in WhatsApp or SMS.";
                dShareFeedback.className = "feedback-msg success";
                setTimeout(function () { dShareFeedback.style.display = "none"; }, 3000);
            }, function () {
                dShareFeedback.textContent = "Failed to copy. Please select text manually.";
                dShareFeedback.className = "feedback-msg error";
            });
        });
    }


    /* ----------------------------------------------------------------------
       7. Vehicle Safety Pre-Trip Checklist (Driver Checklist)
       ---------------------------------------------------------------------- */
    var checklistCheckboxes = document.querySelectorAll(".checklist-checkbox");
    var checklistStatusText = document.getElementById("checklistStatusText");
    var checklistBadge = document.getElementById("checklistBadge");
    var checklistProgressBar = document.getElementById("checklistProgressBar");
    var resetChecklistBtn = document.getElementById("resetChecklistBtn");

    function loadDriverChecklist() {
        try {
            var savedStates = JSON.parse(localStorage.getItem("sastaSafarDriverChecklist") || "[]");
            var completedCount = 0;

            for (var k = 0; k < checklistCheckboxes.length; k++) {
                var isChecked = !!savedStates[k];
                checklistCheckboxes[k].checked = isChecked;
                var parentLabel = checklistCheckboxes[k].closest(".check-item");
                if (parentLabel) {
                    if (isChecked) {
                        parentLabel.classList.add("completed");
                    } else {
                        parentLabel.classList.remove("completed");
                    }
                }
                if (isChecked) completedCount++;
            }

            updateChecklistUI(completedCount);
        } catch (e) {
            console.error("Error reading driver checklist:", e);
        }
    }

    function updateChecklistUI(completedCount) {
        var total = checklistCheckboxes.length || 6;
        var percentage = Math.round((completedCount / total) * 100);

        if (checklistStatusText) {
            checklistStatusText.textContent = "Checklist: " + completedCount + " of " + total + " items completed";
        }

        if (checklistProgressBar) {
            checklistProgressBar.style.width = percentage + "%";
            if (completedCount === total) {
                checklistProgressBar.classList.add("all-checked");
            } else {
                checklistProgressBar.classList.remove("all-checked");
            }
        }

        if (checklistBadge) {
            if (completedCount === total) {
                checklistBadge.textContent = "Ready for Safe Journey";
                checklistBadge.className = "badge-complete";
            } else {
                checklistBadge.textContent = "Incomplete (" + (total - completedCount) + " left)";
                checklistBadge.className = "badge-incomplete";
            }
        }
    }

    function saveDriverChecklist() {
        var states = [];
        var completedCount = 0;
        for (var m = 0; m < checklistCheckboxes.length; m++) {
            var checked = checklistCheckboxes[m].checked;
            states.push(checked);
            var parentLabel = checklistCheckboxes[m].closest(".check-item");
            if (parentLabel) {
                if (checked) {
                    parentLabel.classList.add("completed");
                } else {
                    parentLabel.classList.remove("completed");
                }
            }
            if (checked) completedCount++;
        }
        localStorage.setItem("sastaSafarDriverChecklist", JSON.stringify(states));
        updateChecklistUI(completedCount);
    }

    if (checklistCheckboxes && checklistCheckboxes.length > 0) {
        for (var n = 0; n < checklistCheckboxes.length; n++) {
            checklistCheckboxes[n].addEventListener("change", function () {
                saveDriverChecklist();
            });
        }
    }

    if (resetChecklistBtn) {
        resetChecklistBtn.addEventListener("click", function () {
            if (confirm("Reset vehicle safety checklist for a new trip?")) {
                localStorage.removeItem("sastaSafarDriverChecklist");
                loadDriverChecklist();
            }
        });
    }

    loadDriverChecklist();


    /* ----------------------------------------------------------------------
       8. Confirmed Passenger Information Display (Driver View)
       ---------------------------------------------------------------------- */
    var driverPassengerList = document.getElementById("driverPassengerList");

    function renderDriverPassengerList() {
        if (!driverPassengerList) return;
        driverPassengerList.innerHTML = "";

        var bookings = [];
        try {
            var raw = localStorage.getItem("sastaSafarBookings");
            if (raw) bookings = JSON.parse(raw);
        } catch (e) {
            bookings = [];
        }

        // Show confirmed or pending bookings
        var activeBookings = [];
        for (var b = 0; b < bookings.length; b++) {
            var status = (bookings[b].status || "").toLowerCase();
            if (status === "confirmed" || status === "pending") {
                activeBookings.push(bookings[b]);
            }
        }

        if (activeBookings.length === 0) {
            // Render sample demo passenger card
            driverPassengerList.innerHTML =
                '<div class="passenger-mini-card">' +
                    '<div class="passenger-mini-header">' +
                        '<span class="passenger-name-title">Pooja Sharma (Demo Passenger)</span>' +
                        '<span class="status-tag confirmed">Confirmed</span>' +
                    '</div>' +
                    '<p><strong>Route:</strong> Etawah &rarr; Delhi</p>' +
                    '<p><strong>Seats Reserved:</strong> 1 Seat</p>' +
                    '<p><strong>Travel Date:</strong> 01 Nov 2026</p>' +
                    '<p style="color: #666; font-size: 11.5px; margin-top: 6px;"><em>(Sample demonstration record. Live passenger bookings from your Dashboard will appear here.)</em></p>' +
                '</div>';
            return;
        }

        for (var p = 0; p < activeBookings.length; p++) {
            var book = activeBookings[p];
            var card = document.createElement("div");
            card.className = "passenger-mini-card";

            var tagClass = (book.status || "").toLowerCase() === "confirmed" ? "confirmed" : "pending";

            card.innerHTML =
                '<div class="passenger-mini-header">' +
                    '<span class="passenger-name-title">' + (book.passengerName || "Passenger") + '</span>' +
                    '<span class="status-tag ' + tagClass + '">' + (book.status || "Confirmed") + '</span>' +
                '</div>' +
                '<p><strong>Booking Ref:</strong> #' + (book.id || "N/A") + '</p>' +
                '<p><strong>Route:</strong> ' + (book.from || "From") + ' &rarr; ' + (book.to || "To") + '</p>' +
                '<p><strong>Seats Booked:</strong> ' + (book.seatsRequested || 1) + ' Seat(s)</p>' +
                '<p><strong>Date & Time:</strong> ' + (book.date || "Date") + ' | ' + (book.time || "Time") + '</p>';

            driverPassengerList.appendChild(card);
        }
    }

    renderDriverPassengerList();


    /* ----------------------------------------------------------------------
       9. Safety Concern Reporting (Passenger & Driver Forms)
       ---------------------------------------------------------------------- */
    var pReportForm = document.getElementById("passengerReportForm");
    var pReportCategory = document.getElementById("pReportCategory");
    var pReportDriver = document.getElementById("pReportDriver");
    var pReportDescription = document.getElementById("pReportDescription");
    var pReportMessage = document.getElementById("pReportMessage");
    var pReportsHistory = document.getElementById("pReportsHistory");

    var dReportForm = document.getElementById("driverReportForm");
    var dReportCategory = document.getElementById("dReportCategory");
    var dReportPassenger = document.getElementById("dReportPassenger");
    var dReportDescription = document.getElementById("dReportDescription");
    var dReportMessage = document.getElementById("dReportMessage");
    var dReportsHistory = document.getElementById("dReportsHistory");

    function getSafetyReports() {
        try {
            var raw = localStorage.getItem("sastaSafarSafetyReports");
            if (!raw) return [];
            var parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        } catch (e) {
            return [];
        }
    }

    function saveSafetyReports(reports) {
        try {
            localStorage.setItem("sastaSafarSafetyReports", JSON.stringify(reports));
        } catch (e) {
            console.error("Error saving safety reports:", e);
        }
    }

    function renderSubmittedReports() {
        var reports = getSafetyReports();

        // Render passenger reports
        if (pReportsHistory) {
            var passengerReports = reports.filter(function (r) { return r.type === "Passenger Report"; });
            if (passengerReports.length === 0) {
                pReportsHistory.innerHTML = '<p class="empty-state">No safety reports submitted yet.</p>';
            } else {
                pReportsHistory.innerHTML = "";
                for (var i = 0; i < passengerReports.length; i++) {
                    var rep = passengerReports[i];
                    var repEl = document.createElement("div");
                    repEl.className = "report-record-card";
                    repEl.innerHTML =
                        '<div class="report-record-header">' +
                            '<span class="report-category-badge">' + rep.category + '</span>' +
                            '<span class="report-timestamp">' + rep.timestamp + '</span>' +
                        '</div>' +
                        '<p><strong>Reference / Driver:</strong> ' + rep.reference + '</p>' +
                        '<p><strong>Details:</strong> ' + rep.description + '</p>' +
                        '<p style="color: #2e7d32; font-size: 11.5px; margin-top: 4px;">✓ Logged in local browser storage (Demo Status: Under Review)</p>';
                    pReportsHistory.appendChild(repEl);
                }
            }
        }

        // Render driver reports
        if (dReportsHistory) {
            var driverReports = reports.filter(function (r) { return r.type === "Driver Report"; });
            if (driverReports.length === 0) {
                dReportsHistory.innerHTML = '<p class="empty-state">No driver reports submitted yet.</p>';
            } else {
                dReportsHistory.innerHTML = "";
                for (var j = 0; j < driverReports.length; j++) {
                    var dRep = driverReports[j];
                    var dRepEl = document.createElement("div");
                    dRepEl.className = "report-record-card";
                    dRepEl.innerHTML =
                        '<div class="report-record-header">' +
                            '<span class="report-category-badge">' + dRep.category + '</span>' +
                            '<span class="report-timestamp">' + dRep.timestamp + '</span>' +
                        '</div>' +
                        '<p><strong>Passenger Reference:</strong> ' + dRep.reference + '</p>' +
                        '<p><strong>Details:</strong> ' + dRep.description + '</p>' +
                        '<p style="color: #2e7d32; font-size: 11.5px; margin-top: 4px;">✓ Logged in local browser storage (Demo Status: Under Review)</p>';
                    dReportsHistory.appendChild(dRepEl);
                }
            }
        }
    }

    // Submit Passenger Report
    if (pReportForm) {
        pReportForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var cat = pReportCategory.value;
            var ref = pReportDriver.value.trim();
            var desc = pReportDescription.value.trim();

            if (!ref || !desc) {
                pReportMessage.textContent = "Please provide both reference and description.";
                pReportMessage.className = "feedback-msg error";
                return;
            }

            var reportId = "REP-" + Math.floor(100000 + Math.random() * 900000);
            var newReport = {
                id: reportId,
                type: "Passenger Report",
                category: cat,
                reference: ref,
                description: desc,
                timestamp: new Date().toLocaleString()
            };

            var allReports = getSafetyReports();
            allReports.unshift(newReport);
            saveSafetyReports(allReports);

            pReportMessage.textContent = "Report #" + reportId + " logged successfully in local storage for review.";
            pReportMessage.className = "feedback-msg success";

            pReportForm.reset();
            renderSubmittedReports();

            setTimeout(function () {
                pReportMessage.style.display = "none";
            }, 3000);
        });
    }

    // Submit Driver Report
    if (dReportForm) {
        dReportForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var cat = dReportCategory.value;
            var ref = dReportPassenger.value.trim();
            var desc = dReportDescription.value.trim();

            if (!ref || !desc) {
                dReportMessage.textContent = "Please provide both reference and description.";
                dReportMessage.className = "feedback-msg error";
                return;
            }

            var reportId = "REP-" + Math.floor(100000 + Math.random() * 900000);
            var newReport = {
                id: reportId,
                type: "Driver Report",
                category: cat,
                reference: ref,
                description: desc,
                timestamp: new Date().toLocaleString()
            };

            var allReports = getSafetyReports();
            allReports.unshift(newReport);
            saveSafetyReports(allReports);

            dReportMessage.textContent = "Driver report #" + reportId + " recorded in local storage for review.";
            dReportMessage.className = "feedback-msg success";

            dReportForm.reset();
            renderSubmittedReports();

            setTimeout(function () {
                dReportMessage.style.display = "none";
            }, 3000);
        });
    }

    renderSubmittedReports();
}

