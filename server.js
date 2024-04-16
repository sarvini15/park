const express = require("express");
const app = express();

let parks = [
  {
    id: 1,
    name: "Yellowstone National Park",
    facilities: ["campgrounds", "visitor-center", "trails"],
  },
  {
    id: 2,
    name: "Zion National Park",
    facilities: ["trails", "visitor-center"],
  },
];

let visitors = [
  { id: 1, name: "John Doe", pastReservations: [1], upcomingReservations: [2] },
  { id: 2, name: "Jane Smith", pastReservations: [], upcomingReservations: [] },
];

let reservations = [
  { id: 1, parkId: 1, visitorId: 1, date: "2023-09-01" },
  { id: 2, parkId: 2, visitorId: 1, date: "2023-10-01" },
];

app.get("/", (request, response) => {
  response.status(200).json(parks);
});

// Your routing, authentication, and controller code goes here
app.get("/parks", (request, response) => {
  response.status(200).json(parks);
});

app.get("/parks/:id", (request, response) => {
  const park = parks.find((p) => p.id === parseInt(request.params.id));
  if (park) {
    response.status(200).json({
      ...park,
    });
  } else {
    response.status(404).json(" parking not found");
  }
});

app.get("/visitors", (request, response) => {
  response.status(200).json(visitors);
});

app.get("/visitors/:id", (request, response) => {
  const visitor = visitors.find((v) => v.id === parseInt(request.params.id));
  if (visitor) {
    response.status(200).json({
      ...visitor,
    });
  } else {
    response.status(404).json(" visitor not found");
  }
});

app.get("/resevations", (request, response) => {
  response.status(200).json(reservations);
});

app.get("/reservations/:id", (request, response) => {
  const reservation = reservations.find(
    (p) => p.id === parseInt(request.params.id)
  );
  if (reservation) {
    response.status(200).json({
      ...reservation,
    });
  } else {
    response.status(404).json(" reservations not found");
  }
});


app.listen(5000, () => {
  console.log("National Park Visitor System is running on port 5000");
});
