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
		"endpoint"; string,
		"id": int, // L'id serveur du joueur
		identifiers: array, // Les identifiers du joueur (lles mêmes que dans les resources FiveM)
		name: string, // Le pseudo du joueur
		ping: int, // Le ping :grinning:
	}],
	"infos": {
		enhancedHostSupport: boolean,
		resources: array, // Toutes les resouces start sur le serveur
		server: string, // Nom de la version du FXServer utiliser
		vars: { // Toutes les variables (ou presque) définie dans server.
			sv_enhancedHostSupport: boolean
		}
	}
}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTgxOTY5NDgzOSwyNDU5MjgxMDIsMTM2Nj
c4MzExM119
-->