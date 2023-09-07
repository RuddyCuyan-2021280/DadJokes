const jokes = document.getElementById("jokes")
const btn = document.getElementById("jokesbtn")

btn.addEventListener("click", getJokes)

getJokes();

async function getJokes(){
    const config = {
        headers:{
            Accept: "application/json"
        },
    }

    const res =  await fetch("https://icanhazdadjoke.com/", config)
    console.log(res);
    const data = await res.json()
    console.log(data);
    jokes.innerText = data.joke;
}