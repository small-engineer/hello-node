/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   time-server.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywakamiy <ywakamiy@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/10/31 13:46:43 by ywakamiy          #+#    #+#             */
/*   Updated: 2024/11/01 16:04:05 by ywakamiy         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

if (process.argv.length < 3) {
  console.log("No arguments");
  process.exit(-1);
}

const url = `http://localhost:${process.argv[2]}`;
const timeoutDuration = 5000;

try {
  const req = http.get(url, (res) => {
    let rawData = "";

    res.setEncoding("utf8");

    res.on("data", (chunk) => {
      rawData += chunk;
    });

    res.on("end", () => {
      console.log(rawData.length);
      console.log(rawData);
    });
  });

  req.setTimeout(timeoutDuration, () => {
    console.log("request timed out");
    req.abort();
  });

  req.on("error", (err) => {
    console.log(err.message);
  });
} catch (err) {
  console.log(err.message);
}
