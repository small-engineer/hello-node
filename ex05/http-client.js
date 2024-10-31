/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywakamiy <ywakamiy@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/10/31 13:46:33 by ywakamiy          #+#    #+#             */
/*   Updated: 2024/10/31 13:46:34 by ywakamiy         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding("utf8");
  response.on("data", (chunk) => {
    console.log(chunk);
  });
});
