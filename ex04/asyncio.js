/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   asyncio.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywakamiy <ywakamiy@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/10/31 13:46:31 by ywakamiy          #+#    #+#             */
/*   Updated: 2024/10/31 19:28:59 by ywakamiy         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");

fs.readFile(process.argv[2], (err, data) => {
  if (err) return console.log(err);
  console.log(data.toString().split("\n").length - 1);
});
