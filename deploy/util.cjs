/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const axios = require("axios");
const packageJson = require("../package.json");
const fs = require("fs");
const { promisify } = require("util");
const execute =
  process.env.SystemDrive == "C:" ? promisify(require("child_process").exec) : require("@getvim/execute").execute;

class Util {
  async retornaProximaVersao() {
    let versaoAnteriorSplit = packageJson.version.split(".");
    let maiorVersao = parseInt(versaoAnteriorSplit[0]);
    let menorVersao = parseInt(versaoAnteriorSplit[1]);
    let revisao = parseInt(versaoAnteriorSplit[2]) + 1;

    if (revisao > 99) {
      revisao = 0;
      menorVersao += 1;
    }
    if (menorVersao > 99) {
      revisao = 0;
      menorVersao = 0;
      maiorVersao += 1;
    }

    return maiorVersao + "." + menorVersao + "." + revisao;
  }
  async executar(cmd) {
    let result = await execute(cmd)
      .then(async () => {
        return { statuscode: 200, message: "OK", data: [] };
      })
      .catch((error) => {
        return { statuscode: 500, message: error.message, data: [] };
      });
    return result;
  }
  async removePasta(pasta) {
    try {
      if (fs.existsSync(pasta)) {
        fs.rmSync(pasta, { recursive: true, force: true });
      }
      return { message: pasta + "removido", statuscode: 200 };
    } catch (error) {
      return { message: error.message, statuscode: 500 };
    }
  }
  async alterarVersao(host, app, versao, user, password) {
    //const resultToken = await this.getTokenAPI(host, user, password);
    //if (resultToken.statuscode !== 200) return resultToken;
    await this.executar(`npm version ${versao} --no-git-tag-version`);
    console.log(host);
    return { statuscode: 200, message: "ok" };

    // try {
    //   const response = await axios.put(
    //     `${host}/api/versao/v1`,
    //     {
    //       nm_versao: app,
    //       ds_versao: versao,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${resultToken.data}`, // Enviando o token no header
    //         "Content-Type": "application/json",
    //       },
    //     },
    //   );

    //   return { statuscode: 200, message: "OK", data: response.data };
    // } catch (error) {
    //   return {
    //     statuscode: error.response?.status || 500,
    //     message: error.response?.data?.message || error.message,
    //     data: [],
    //   };
    // }
  }
  async getTokenAPI(host, user, password) {
    let result = axios
      .post(`${host}/api/auth/v1`, {
        ds_login: user,
        ds_senha: password,
      })
      .then(function (response) {
        return { statuscode: 200, message: "OK", data: response.data.data[0].token.access_token };
      })
      .catch(function (error) {
        return { statuscode: 500, message: error.response.data.message || error.message, data: [] };
      });
    return result;
  }
}
module.exports = new Util();
