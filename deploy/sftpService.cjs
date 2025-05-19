/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const fs = require("fs");
const Client = require("ssh2-sftp-client");

require("events").EventEmitter.defaultMaxListeners = 1000;
module.exports = class sftp {
  constructor(host, port, username, password) {
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
  }
  async enviar(origem, destino, recursive) {
    const sftp = new Client();
    try {
      await sftp.connect(this);
      if (recursive) {
        await this.uploadRecursivo(origem, destino, sftp);
      } else {
        await sftp.put(origem, destino);
      }

      return { statuscode: 200, message: "OK" };
    } catch (error) {
      console.log(error);
      return { statuscode: 500, message: error.message };
    } finally {
      await sftp.end();
    }
  }
  async criarDiretorioRemoto(sftp, diretorioRemoto) {
    try {
      await sftp.stat(diretorioRemoto);
    } catch (error) {
      await sftp.mkdir(diretorioRemoto, true);
    }
  }
  async uploadRecursivo(caminhoLocal, caminhoRemoto, sftp) {
    const listaArquivos = fs.readdirSync(caminhoLocal);
    await Promise.all(
      listaArquivos.map(async (arquivo) => {
        const caminhoArquivoLocal = caminhoLocal + "/" + arquivo;
        const caminhoArquivoRemoto = caminhoRemoto + "/" + arquivo;
        if (fs.statSync(caminhoArquivoLocal).isDirectory()) {
          await this.criarDiretorioRemoto(sftp, caminhoArquivoRemoto);
          await this.uploadRecursivo(
            caminhoArquivoLocal,
            caminhoArquivoRemoto,
            sftp
          );
        } else {
          console.log(caminhoArquivoLocal, caminhoArquivoRemoto);
          await sftp.put(caminhoArquivoLocal, caminhoArquivoRemoto);
        }
      })
    );
  }
};
