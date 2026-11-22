require('dotenv').config()

const express = require('express')
// import express from "express" or 1st line
const app = express()
const port = 3000

const githubData = {
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://hitesh.ai",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 128,
  "public_gists": 6,
  "followers": 61736,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2026-11-13T09:29:08Z"
}

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/twitter', (req, res) => {
    res.send("Hello twitter")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login into the chai aur code</h1>')
})

app.get('/chai', (req, res)=>{
    res.send("<h2>I am having my tea</h2>")
})

app.get('/github', (req, res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${port}`);
})
