import axios from "axios";
import { Transform, Writable } from "stream";

const url = "http://localhost:3232";

async function consumo() {
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream", // vai falar para o axios nao esperar a função terminar
  });

  return response.data;
}

const stream = await consumo();

stream
  .pipe(
    new Transform({
      transform(chunk, encode, callback) {
        const item = JSON.parse(chunk);

        const myNumber = /\d+/.exec(item.name)[0];

        let name = item.name;

        if (myNumber % 2 === 0) name = name.concat(" é par ");
        else name = name.concat(" é impar ");
        item.name = name;

        callback(null, JSON.stringify(item));
      },
    })
  )
  .pipe(
    new Writable({
      write(chunk, encode, callback) {
        console.log("ja chegou o disco voador", chunk.toString());

        callback();
      },
    })
  );
