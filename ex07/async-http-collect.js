/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywakamiy <ywakamiy@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/10/31 13:46:37 by ywakamiy          #+#    #+#             */
/*   Updated: 2024/10/31 19:39:47 by ywakamiy         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");

const urls = process.argv.slice(2, 5);
const results = Array(urls.length).fill("");
let completedRequests = 0;

urls.forEach((url, index) => {
  http
    .get(url, (response) => {
      response.setEncoding("utf8");
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        results[index] = data;
        completedRequests++;
        if (completedRequests === urls.length) {
          results.forEach((content) => console.log(content));
        }
      });
    })
    .on("error", (err) => {
      console.error(`Error fetching ${url}: ${err.message}`);
      completedRequests++;
      if (completedRequests === urls.length) {
        results.forEach((content) => console.log(content));
      }
    });
});
