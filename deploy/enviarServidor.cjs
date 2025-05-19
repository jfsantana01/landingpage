/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const utils = require("./util.cjs");
const Sftp = require("./sftpService.cjs");
require("dotenv").config();
async function start() {
  var servidor = process.argv[2];
  console.log("Preparando build para " + servidor + " ...");
  let host;
  let user;
  let password;
  let destino;
  let urlApi;
  let userAPI;
  let passwordAPI;

  if (servidor == "contabo1") {
    urlApi = process.env.API_ADM_HOST;
    host = process.env.CONTABO1_HOST;
    user = process.env.CONTABO1_USER;
    password = process.env.CONTABO1_PASSWORD;
    destino = process.env.CONTABO1_DESTINO;
    userAPI = process.env.API_ADM_USER;
    passwordAPI = process.env.API_ADM_PASSWORD;
  } else if (servidor == "contabo1hml") {
    urlApi = process.env.API_ADM_HOST_HML;
    host = process.env.CONTABO1_HOST_HML;
    user = process.env.CONTABO1_USER_HML;
    password = process.env.CONTABO1_PASSWORD_HML;
    destino = process.env.CONTABO1_DESTINO_HML;
    userAPI = process.env.API_ADM_USER_HML;
    passwordAPI = process.env.API_ADM_PASSWORD_HML;
  } else {
    console.log("Servidor não informado");
    return;
  }

  if (servidor == "contabo1") {
    let versao = await utils.retornaProximaVersao();
    console.log("Alterando versao para ... " + versao);
    var resultAlterarVersao = await utils.alterarVersao(urlApi, "ERP-JFSIS-WEB", versao, userAPI, passwordAPI);
    if (resultAlterarVersao.statuscode != 200) {
      console.log(resultAlterarVersao.message);
      return;
    }
  }
  console.log("Executando build...");
  var resultCompilar = await utils.executar(`vue-tsc && vite build --mode ${servidor}`);
  if (resultCompilar.statuscode != 200) {
    console.log(resultCompilar.message);
    return;
  }

  console.log("Copiando para servidor...");
  const resultSftp = await new Sftp(host, 22, user, password).enviar("./dist", destino, true);
  if (resultSftp.statuscode != 200) {
    console.log(resultSftp.message);
    return;
  }
  console.log("Fim");
}

start();
