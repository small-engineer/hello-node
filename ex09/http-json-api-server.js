/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-json-api-server.js                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywakamiy <ywakamiy@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/10/31 13:46:47 by ywakamiy          #+#    #+#             */
/*   Updated: 2024/10/31 16:58:25 by ywakamiy         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import http from "http";
import { parse } from "url";

const parseTime = (isoDate) => {
  const date = new Date(isoDate);
  return {
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
  };
};

const unixTime = (isoDate) => ({ unixtime: new Date(isoDate).getTime() });

const server = http.createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  const { pathname, query } = parsedUrl;
  const iso = query.iso;

  if (pathname === "/api/parsetime" && iso) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(parseTime(iso)));
  } else if (pathname === "/api/unixtime" && iso) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(unixTime(iso)));
  } else {
    res.writeHead(404);
    res.end();
  }
});

const port = Number(process.argv[2]);
server.listen(port, () => console.log(`Server listening on port ${port}`));
