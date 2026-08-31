 ENDPOINT_LIST.md — Team 13 (HospitalQ) needs from Team 12 (QuickFundi)

| Method | Path | Purpose | Maps to Need |
|--------|------|---------|---------------|
| GET | `/workers?jobType=electrician&location={hospitalLocation}` | Return workers matching a job type near a given location | "Team 13 needs to search worker profiles by job type and location, in order to find available electricians, plumbers, or handymen near the hospital when maintenance issues arise." |
| GET | `/workers/{id}` | Return a single worker's skill profile, rate card, and reviews | "Team 13 needs to retrieve a worker's skill profile, rate card, and reviews, in order to compare experience, cost, and reliability before booking a fundi for a facility repair." |
| POST | `/bookings` | Create a new booking with job type, location, date/time, and chosen worker | "Team 13 needs to create a booking with job type, location, date/time, and worker chosen, in order to schedule a fundi to fix hospital equipment or infrastructure." |
| GET | `/bookings/{id}` | Return the current status of a booking (pending/in-progress/completed) | "Team 13 needs to check the status of a booking, in order to know whether a repair job is pending, in progress, or completed." |
| PATCH | `/bookings/{id}` | Update a booking's date/time (reschedule) | "Team 13 needs to cancel or reschedule a booking, in order to respond to urgent or shifting facility needs, such as finding a faster alternative fundi." |
| DELETE | `/bookings/{id}` | Cancel an existing booking | "Team 13 needs to cancel or reschedule a booking, in order to respond to urgent or shifting facility needs, such as finding a faster alternative fundi." |