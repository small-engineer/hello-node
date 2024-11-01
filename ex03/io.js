/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywakamiy <ywakamiy@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/10/31 13:46:29 by ywakamiy          #+#    #+#             */
/*   Updated: 2024/11/01 15:33:11 by ywakamiy         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const fileContent = fs.readFileSync(process.argv[2]).toString();

let count = 0;
let index = 0;

while (fileContent.charAt(index) !== "") {
  if (fileContent.charAt(index) === "\n") {
    count++;
  }
  index++;
}

console.log(count);
