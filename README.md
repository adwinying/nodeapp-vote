# NodeJS Vote App

TODO: implement documentation

## Backend APIs

_**[Restricted]** APIs require user to send request containing a valid JWT token_

`GET /auth/check`: Checks JWT token valid and returns the JWT payload

---

`GET /poll/all`: Fetches all polls

`GET /poll/recent`: Fetches recently created/updated polls

`GET /poll/userpolls`: **[Restricted]** Fetches user created polls

`POST /poll/new`: **[Restricted]** Create new post

Expects the following input:

```javascript
{
	"title": "poll title",
	"options": "poll\noptions\separated\nby\nline\nbreak"
}
```

---

`GET /poll/:id`: Return single poll containing ID of `:id`

`PUT /poll/:id`: Add poll options

Expects the following input:

```javascript
{
	"opt": "new poll option"
}
```

`PATCH /poll/:id`: Increment poll option count by 1

Expects the following input:

```javascript
{
	"_id": "option id",
}
```

`DELETE /poll/:id`: **[Restricted]** Delete poll with ID `:id`. Only poll owners are authorized.





