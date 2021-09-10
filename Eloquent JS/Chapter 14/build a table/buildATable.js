const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

// Your code here
const mountainDiv = document.querySelector('#mountains')

mountainDiv.innerHTML = `
    <table>
        <tr>
            <th>name</th>
            <th>height</th>
            <th>place</th>
        </tr>
    </table>
`

const table = document.querySelector('table')

for (const mountain of MOUNTAINS) {
    const tmpDiv = document.createElement('tr')

    tmpDiv.innerHTML = `
        <td>${mountain.name}</td>
        <td>${mountain.height}</td>
        <td>${mountain.place}</td>
    `

    table.appendChild(tmpDiv)
}

