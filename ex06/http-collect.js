/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywakamiy <ywakamiy@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/10/31 13:46:35 by ywakamiy          #+#    #+#             */
/*   Updated: 2024/10/31 13:46:35 by ywakamiy         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require("http");
const bl = require("bl");

http.get(process.argv[2], (response) => {
  response.pipe(
    bl((err, data) => {
      if (err) return console.error(err);
      console.log(data.length);
      console.log(data.toString());
    })
  );
});
