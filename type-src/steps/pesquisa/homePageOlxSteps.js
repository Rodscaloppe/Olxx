"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let expect = require('chai').expect;
const homePageOlxPage_1 = require("../../pages/pesquisa/homePageOlxPage");
var module;
module.exports = function suite() {
    this.Given(/^Estou no site Olx$/, () => {
        homePageOlxPage_1.default.open();
    });
    this.When(/^Estou na tela home Olx$/, () => {
        homePageOlxPage_1.default.homeOlx.waitForVisible();
    });
    this.When(/^Realizo uma busca na barra de pesquisa$/, () => {
        homePageOlxPage_1.default.homeOlx.waitForVisible();
        homePageOlxPage_1.default.pesquisaTxt.setValue("jeep");
        homePageOlxPage_1.default.buscarBtn.isVisible();
        homePageOlxPage_1.default.buscarBtn.click();
    });
    this.Then(/^Eu visualizo os 5 primeiros$/, () => {
        homePageOlxPage_1.default.paginacaoCampoBusca.waitForVisible();
        console.log("Titulo 1 -", homePageOlxPage_1.default.titulo1.getText());
        console.log("valor 1 -", homePageOlxPage_1.default.valor1.getText());
        console.log("Titulo 2 - ", homePageOlxPage_1.default.titulo2.getText());
        console.log("valor 2 - ", homePageOlxPage_1.default.valor2.getText());
        console.log("Titulo 3 - ", homePageOlxPage_1.default.titulo3.getText());
        console.log("valor 3 - ", homePageOlxPage_1.default.valor3.getText());
        console.log("Titulo 4 - ", homePageOlxPage_1.default.titulo4.getText());
        console.log("valor 4 - ", homePageOlxPage_1.default.valor4.getText());
        console.log("Titulo 5 - ", homePageOlxPage_1.default.titulo5.getText());
        console.log("valor 5 -", homePageOlxPage_1.default.valor5.getText());
    });
    this.When(/^Sou direcionado para proxima pagina$/, () => {
        homePageOlxPage_1.default.paginacaoCampoBusca.waitForVisible();
        homePageOlxPage_1.default.proximaPagina.click();
    });
    this.Then(/^Eu Valido a paginacao$/, () => {
        browser.pause(1000);
        homePageOlxPage_1.default.confirmandoPaginacao.isVisible();
        console.log("Confirmação da paginação ", homePageOlxPage_1.default.confirmandoPaginacao.getText());
        browser.screenshot();
    });
};
