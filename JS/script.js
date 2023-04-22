async function fetchText(link) {
	let response = await fetch(link);
	let data = await response.text();
	console.log(data);
}

async function getUsers(url) {
    // let url = link;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers(link, val) {
    let user = await getUsers(link);
    let html = '';
	console.log(user);

	films = user.films
	species = user.species
	vehicles = user.vehicles
	starships = user.starships

	let htmlFilm = ``;
	films.forEach(film => {
		htmlFilm += `<p><a href=${film}>${film}</a></p>`;
	});

	let htmlspecie = ``;
	species.forEach(specie => {
		htmlspecie += `<p><a href=${specie}>${specie}</a></p>`;
	});

	let htmlvehicle = ``;
	vehicles.forEach(vehicle => {
		htmlvehicle += `<p><a href=${vehicle}>${vehicle}</a></p>`;
	});

	let htmlstarship = ``;
	starships.forEach(starship => {
		htmlstarship += `<p><a href=${starship}>${starship}</a></p>`;
	});

	console.log(films);
    // users.forEach(user => {
	let htmlSegment = `<div class="user">
						<p>Name: ${user.name} </p>
						<p>Height: ${user.height} </p>
						<p>Mass: ${user.mass}</p>
						<p>Hair_color: ${user.hair_color}</p>
						<p>Skin_color: ${user.skin_color}</p>
						<p>Eye_color: ${user.eye_color}</p>
						<p>Birth_year: ${user.birth_year}</p>
						<p>Gender: ${user.gender}</p>
						<p><button type="button" id='films' onclick=window.location.href='films.html?userid=${val}';> Films </button></p>
						<p><button type="button" id='Species' onclick=window.location.href='species.html?userid=${val}';>Species </button></p>
						<p><button type="button" id='Vehicles' onclick=window.location.href='vehicles.html?userid=${val}';>Vehicles </button></p>
						<p><button type="button" id='Starships' onclick=window.location.href='starship.html?userid=${val}';>Starship </button></p>
						
					</div>`;

    html += htmlSegment;
	let container = document.querySelector('.container');
    container.innerHTML = html;
	
}

function showActor(val)
{
	link = "https://swapi.dev/api/people/"+val
	renderUsers(link, val);
}

function get_actor_info()
{

	val = document.getElementById("quantity").value ;
	// alert("selected actor is"+val);
	showActor(val);
}
