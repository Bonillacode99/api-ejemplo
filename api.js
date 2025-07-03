async function getAnime() {
    const res = await fetch("https://api.jikan.moe/v4/top/anime?type=ona")
    const anime  = await res.json()
    console.log(anime); 
    animelist=" "
    anime.data.forEach(animeA => {
       animelist += animeA.source + " " + animeA.popularity + "<br> "
    })    
    console.log(animelist);
    document.getElementById("episode").innerHTML = animelist
}