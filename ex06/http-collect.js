/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywakamiy <ywakamiy@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/10/31 13:46:35 by ywakamiy          #+#    #+#             */
/*   Updated: 2024/10/31 19:39:22 by ywakamiy         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

http.get(process.argv[2], (response) => {
  let rawData = "";

  response.setEncoding("utf8");
  response.on("data", (chunk) => {
    rawData += chunk;
  });

  response.on("end", () => {
    console.log(rawData.length);
    console.log(rawData);
  });

  response.on("error", (err) => {
    console.error(err);
  });
});
