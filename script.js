const username="zohaibhaider-01-dev";
fetch(`https://api.github.com/users/${username}`)
  .then(r=>r.ok?r.json():Promise.reject())
  .then(d=>{
    document.querySelector("#repoCount").textContent=d.public_repos ?? "0";
    document.querySelector("#followerCount").textContent=d.followers ?? "0";
    document.querySelector("#followingCount").textContent=d.following ?? "0";
  }).catch(()=>{});
