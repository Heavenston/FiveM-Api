# FiveM-Api
C'est une api pour intéragir avec le petite api FiveM

**Pour l'installer :**
```
npm i fivem-api
```
**Pour l'utiliser :**
Ex, pour afficher le nombre de joueurs sur un serveur : 
```javascript
const fivem = require("fivem-api");
fivem.getServerInfo("185.223.30.29:30120").then((server) => console.log(server.players.length))
```
Comment l'utiliser : 
```javascript
fivem.getServerInfo(ipServer)
```
ipServer -> Ip du serveur

Redonne une `Promise` qui elle redonne un objet :
```json
{
"players": [{
	"endpoint"; "127.0.0.1",
	"id": id, // L'id serveur du joueur
	identifiers: ["steam", "license"], // Les identifiers 
}]
}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTgwNjA5MzAwOCwxMzY2NzgzMTEzXX0=
-->