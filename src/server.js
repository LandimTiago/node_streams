import http from "http";
import { Readable } from "stream";
import { randomUUID } from "crypto";

// * run declara para a função que envie os dados independente se acabou o processamento
function* run() {
  for (let i = 0; i <= 99; i++) {
    const data = {
      id: randomUUID(),
      name: `Tiago - ${i}`,
    };

    // Sinaliza para que assim que o for rodar a primeira linha ja passe a informação
    // e comece o processamento da segunda logo em seguida
    yield data;

    // yield so vai funcionar se tiver a assinatura * na funçao (function * nome())
  }
}

function handler(request, response) {
  const readable = new Readable({
    read() {
      for (const data of run()) {
        console.log(`Sending`, data);

        this.push(JSON.stringify(data) + "\n");
      }

      // para informar que os dados acabaram
      this.push(null);
    },
  });

  readable.pipe(response);
}

http
  .createServer(handler)
  .listen(3232)
  .on("listening", () => console.log("Server is runing at 3232"));
