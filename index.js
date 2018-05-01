const request = require('request');

function getAllServers() {
  return new Promise(function(sendSuccess, sendError) {
    request('http://servers-live.fivem.net/api/servers/', function (error, response, body) {
      if (error) {
        sendError(error);
        return;
      }

      sendSuccess(JSON.parse(body));
    });
  });
}

function getServerInfo(ip) {
  return new Promise(function(sendSuccess, sendError) {
    var server = {}
    request("http://"+ip+"/info.json", function (error, response, body) {
      if (error) {
        sendError(error);
        return;
      }

      server.infos = JSON.parse(body);

      request("http://"+ip+"/players.json", function (error, response, body) {
        if (error) {
          sendError(error);
          return;
        }

        server.players = JSON.parse(body);

        getAllServers().then(function(servers) {
          for (let serv of servers) {
            if (serv.EndPoint == ip) {
              server.infos.vars.sv_hostname = serv.Data.hostname
            }
          }

          sendSuccess(server)
        })

      });

    });
  });
}

exports.getServerInfo = getServerInfo
getServerInfo("185.223.30.29:30120").then((server) => console.log(server.infos))
