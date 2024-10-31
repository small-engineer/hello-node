/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   time-server.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywakamiy <ywakamiy@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/10/31 13:46:43 by ywakamiy          #+#    #+#             */
/*   Updated: 2024/10/31 19:40:26 by ywakamiy         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const net = require("net");

function zeroFill(value) {
  return value < 10 ? "0" + value : value;
}

function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = zeroFill(now.getMonth() + 1);
  const day = zeroFill(now.getDate());
  const hours = zeroFill(now.getHours());
  const minutes = zeroFill(now.getMinutes());

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const server = net.createServer((socket) => {
  socket.end(getCurrentDateTime() + "\n");
});

const port = process.argv[2];
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
