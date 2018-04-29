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
		"identifiers": array, // Les identifiers du joueur (lles mêmes que dans les resources FiveM)
		"name": string, // Le pseudo du joueur
		"ping": int, // Le ping :grinning:
	}],
	"infos": {
		"enhancedHostSupport": boolean,
		"icon": string, // L'icon du serveur en Base64
		"resources": array, // Toutes les resouces start sur le serveur
		"server": string, // Nom de la version du FXServer utiliser
		"vars": { // Toutes les variables (ou presque) définie dans server.cfg
			"sv_enhancedHostSupport": boolean,
			"sv_lan": boolean,
			"sv_licenseKeyToken": string,
			"sv_maxClients": int,
			"sv_scriptHookAllowed": boolean,
			"sv_hostname": string,
		},
		"version": int, // Sans doute le nombre correspondant a la version utiliser de FXServer
	}
}
```

Si vous avez des idées de fonctions envoyé les 
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjAyNDQ4MDE5MywyNDU5MjgxMDIsMTM2Nj
c4MzExM119
-->