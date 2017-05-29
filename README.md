# NodeJS Vote App

## Backend APIs

_**[Restricted]** APIs require user to send request containing a valid JWT token_

`GET /api/auth/check`: Checks JWT token valid and returns the JWT payload

---

`GET /api/poll/all`: Fetches all polls

`GET /api/poll/recent`: Fetches recently created/updated polls

`GET /api/poll/userpolls`: **[Restricted]** Fetches user created polls

`POST /api/poll/new`: **[Restricted]** Create new post

Expects the following input:

```javascript
{
	"title": "poll title",
	"options": "poll\noptions\separated\nby\nline\nbreak"
}
```

---

`GET /api/poll/:id`: Return single poll containing ID of `:id`

`PUT /api/poll/:id`: Add poll options

Expects the following input:

```javascript
{
	"opt": "new poll option"
}
```

`PATCH /api/poll/:id`: Increment poll option count by 1

Expects the following input:

```javascript
{
	"_id": "option id",
}
```

`DELETE /api/poll/:id`: **[Restricted]** Delete poll with ID `:id`. Only poll owners are authorized.





