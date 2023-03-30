// Gli oggetti ci servono per avere dei metodi, avessi bisogno solo dei dati non servirebbe. Una volta ottenuto un json
// dal server devo ricostruirlo assegnandoci i metodi propri di quell'oggetto.

import {Collector, User} from "./user.js";
import {Watch} from "./collectable.js";


export async function createApp() {
    const app = {
        users: {},
        watches: {}
    }


    await initWatches(app);
    await initUsers(app);
    simulateLoan(app);

    return app; // returning a promise of the app obj
}


// Initialized watches data
async function initWatches(app) {

    const res = await fetch("../data/watches.json"); // Fetch data from a simulated DB
    const plants = await res.json(); // equivalent to JSON.parse()

    try {
        for (let watch of watches) {
            app.watch[watch.name] = new Watch(watch.name, watch.description, watch.img, watch.productor,
            watch.year, watch.material);
        }
    } catch (err) {
        // Todo: handle errors
    }
}

// Initialized users data
async function initUsers(app) {
    try {

        const res = await fetch("../data/users.json"); // Fetch data from a simulated DB
        const users = await res.json();

        for (let user of users) {
            // If the user is a collector..., else...
            if (user.collector) {
                app.users[user.name] = new Collector(user.name, user.surname, user.age, user.sentence, user.img, user.job, user.collector);
                for (let watch of user.items) {
                    app.users[user.name].collect(app.watches[watch]); // assign items to the user's collection
                }
            } else {
                app.users[user.name] = new User(user.name, user.surname, user.age, user.sentence, user.img, user.job, user.collector);
            }
        }
    } catch (err) {
        // Todo: handle errors
    }
}


// Simulate a loans once users and plants have been initialized
function simulateLoan(app) {
    app.users["Guido"].loan(app.watches["Santos"], app.users["Myss"]);
    app.users["Guido"].loan(app.watches["Speedmaster Moonwatch"], app.users["Michael"]);
    app.users["Guido"].loan(app.watches["Radiomir"], app.users["Michael"]);
    app.users["Myss"].loan(app.watches["Milgauss"], app.users["Guido"]);
    app.users["Myss"].loan(app.watches["Overseas"], app.users["Guido"]);
}