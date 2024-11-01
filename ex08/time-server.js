/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   time-server.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ywakamiy <ywakamiy@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/10/31 13:46:43 by ywakamiy          #+#    #+#             */
/*   Updated: 2024/11/01 16:10:08 by ywakamiy         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const zeroFill = (num) => {
  return (num < 10 ? "0" : "") + num;
};

const getCurrentTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = zeroFill(date.getMonth() + 1);
  const day = zeroFill(date.getDate());
  const hours = zeroFill(date.getHours());
  const minutes = zeroFill(date.getMinutes());
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const net = require("net");
const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    const request = data.toString();
    if (request.startsWith("GET")) {
      const currentTime = getCurrentTime();
      const httpResponse = `HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length: ${currentTime.length}\r\n\r\n${currentTime}\n`;
      socket.write(httpResponse);
      socket.end();
    }
  });
});

server.listen(process.argv[2], () => {
  console.log(`Server listening on port ${process.argv[2]}`);
});
