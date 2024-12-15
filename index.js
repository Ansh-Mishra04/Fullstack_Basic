require('dotenv').config()
const express = require("express");
const app = express();

const githubData=
    {
        "login": "Ansh-Mishra04",
        "id": 114275815,
        "node_id": "U_kgDOBs-15w",
        "avatar_url": "https://avatars.githubusercontent.com/u/114275815?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Ansh-Mishra04",
        "html_url": "https://github.com/Ansh-Mishra04",
        "followers_url": "https://api.github.com/users/Ansh-Mishra04/followers",
        "following_url": "https://api.github.com/users/Ansh-Mishra04/following{/other_user}",
        "gists_url": "https://api.github.com/users/Ansh-Mishra04/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Ansh-Mishra04/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Ansh-Mishra04/subscriptions",
        "organizations_url": "https://api.github.com/users/Ansh-Mishra04/orgs",
        "repos_url": "https://api.github.com/users/Ansh-Mishra04/repos",
        "events_url": "https://api.github.com/users/Ansh-Mishra04/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Ansh-Mishra04/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": "Ansh Mishra",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": "Learning to code.\r\n",
        "twitter_username": null,
        "public_repos": 9,
        "public_gists": 0,
        "followers": 0,
        "following": 1,
        "created_at": "2022-09-24T04:37:25Z",
        "updated_at": "2024-12-12T22:19:35Z"
}
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter',(req,res)=>{
    res.send('AnshMishra')
});
app.get('/login',(req,res)=>{
    res.send('<h1>Login at College Hub</h1>')
});

app.get('/events',(req,res)=>{
    res.send('<h2>Events Live<h2>')
});
app.get('/github',(req,res)=>{
    res.json(githubData)
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
