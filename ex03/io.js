/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywakamiy <ywakamiy@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/10/31 13:46:29 by ywakamiy          #+#    #+#             */
/*   Updated: 2024/10/31 19:22:11 by ywakamiy         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const fileContent = fs.readFileSync(process.argv[2]).toString();

let count = 0;
for (let i = 0; i < fileContent.length; i++) {
  if (fileContent[i] === "\n") {
    count++;
  }
}

console.log(count);
