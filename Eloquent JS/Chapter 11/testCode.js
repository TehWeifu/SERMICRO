var bigOak = require("./crow-tech").bigOak;
var defineRequestType = require("./crow-tech").defineRequestType;
var everywhere = require("./crow-tech").everywhere


class Timeout extends Error {}

function request(nest, target, type, content) {
    return new Promise((resolve, reject) => {
        let done = false;
        function attempt(n) {
            nest.send(target, type, content, (failed, value) => {
                done = true;
                if (failed) reject(failed);
                else resolve(value);
            });
            setTimeout(() => {
                if (done) return;
                else if (n < 3) attempt(n + 1);
                else reject(new Timeout("Timed out"));
            }, 250);
        }
        attempt(1);
    });
}

function requestType(name, handler) {
    defineRequestType(name, (nest, content, source,
                             callback) => {
        try {
            Promise.resolve(handler(nest, content, source))
                .then(response => callback(null, response),
                    failure => callback(failure));
        } catch (exception) {
            callback(exception);
        }
    });
}
//
// requestType("ping", () => "pong");
//
// function availableNeighbors(nest) {
//     let requests = nest.neighbors.map(neighbor => {
//         return request(nest, neighbor, "ping")
//             .then(() => true, () => false);
//     });
//     return Promise.all(requests).then(result => {
//         return nest.neighbors.filter((_, i) => {
//             console.log(_)
//          return result[i]});
//     });
// }
//
// availableNeighbors(bigOak).then(list => console.log(list))

requestType("connections", (nest, {name, neighbors}, source) => {
    console.log('INSIDE HANDLER')
    console.log(nest.state.connections)
    console.log(neighbors)

    let connections = nest.state.connections;

    if (JSON.stringify(connections.get(name)) ===
        JSON.stringify(neighbors)) return;
    connections.set(name, neighbors);
    broadcastConnections(nest, name, source);
});

function broadcastConnections(nest, name, exceptFor = null) {
    console.log('INSIDE BROADCASTCONECTIONS')
    console.log(nest.name)
    console.log(name)

    for (let neighbor of nest.neighbors) {
        if (neighbor === exceptFor) continue;
        request(nest, neighbor, "connections", {
            name,
            neighbors: nest.state.connections.get(name)
        });
    }
}

everywhere(nest => {
    console.log('\nINSIDE EVERYWHERE')
    console.log(nest.name)
    nest.state.connections = new Map();
    nest.state.connections.set(nest.name, nest.neighbors);
    broadcastConnections(nest, nest.name);
});

