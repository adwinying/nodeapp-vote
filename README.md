# NodeJS Vote App

TODO: implement documentation

## Backend APIs

* **[Restricted]** APIs require user to be logged in *

`GET /auth/login`: Logs in user via Twitter OAuth

`GET /auth/logout`: Logs out user's current session

---

`GET /poll/all`: Fetches all polls

`GET /poll/recent`: Fetches recently created/updated polls

**[Restricted]**`POST /poll/new`: Create new post

Expects the following input:

```javascript
{
	"title": "poll title",
	"options": "poll\noptions\separated\nby\nline\break"
}
```

Returns the poll object.

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

**[Restricted]**`DELETE /poll/:id`: Delete poll with ID `:id`. Only poll owners are authorized.





