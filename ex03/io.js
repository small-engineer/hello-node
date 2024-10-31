/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywakamiy <ywakamiy@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/10/31 13:46:29 by ywakamiy          #+#    #+#             */
/*   Updated: 2024/10/31 13:46:30 by ywakamiy         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const count =
  fs.readFileSync(process.argv[2]).toString().split("\n").length - 1;

console.log(count);
