let expect = require('chai').expect;
import HomePageOlxPage from '../../pages/pesquisa/homePageOlxPage';


var module: any;
module.exports = function suite() {

    //Background
    this.Given(/^Estou no site Olx$/, () => {

        HomePageOlxPage.open();
        
    });

    this.When(/^Estou na tela home Olx$/, () => {

        HomePageOlxPage.homeOlx.waitForVisible()
        
    });

    this.When(/^Realizo uma busca na barra de pesquisa$/, () => {
        
        HomePageOlxPage.homeOlx.waitForVisible()
        HomePageOlxPage.pesquisaTxt.setValue("jeep")
        HomePageOlxPage.buscarBtn.isVisible()
        HomePageOlxPage.buscarBtn.click()

    });

    this.Then(/^Eu visualizo os 5 primeiros$/, () => {
        
        HomePageOlxPage.paginacaoCampoBusca.waitForVisible()
        console.log("Titulo 1 -", HomePageOlxPage.titulo1.getText())
        console.log("valor 1 -", HomePageOlxPage.valor1.getText())
        console.log("Titulo 2 - ", HomePageOlxPage.titulo2.getText())
        console.log("valor 2 - ", HomePageOlxPage.valor2.getText())
        console.log("Titulo 3 - ", HomePageOlxPage.titulo3.getText())
        console.log("valor 3 - ", HomePageOlxPage.valor3.getText())
        console.log("Titulo 4 - ", HomePageOlxPage.titulo4.getText())
        console.log("valor 4 - ", HomePageOlxPage.valor4.getText())
        console.log("Titulo 5 - ", HomePageOlxPage.titulo5.getText())
        console.log("valor 5 -", HomePageOlxPage.valor5.getText())

    });

    //# Printscreen

    this.When(/^Sou direcionado para proxima pagina$/, () => {

        HomePageOlxPage.paginacaoCampoBusca.waitForVisible()
        HomePageOlxPage.proximaPagina.click()
        



    });

    this.Then(/^Eu Valido a paginacao$/, () => {
        
        browser.pause(1000)
        HomePageOlxPage.confirmandoPaginacao.isVisible()
        console.log("Confirmação da paginação ", HomePageOlxPage.confirmandoPaginacao.getText())
        browser.screenshot()
        // visualizacao do screenshot fica nesta pasta ./reports/allure-results/
    });

 
}