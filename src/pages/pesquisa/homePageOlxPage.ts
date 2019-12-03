
class HomePage_OlxPage {

    public get homeOlx()  { return browser.element('div#___gatsby header > a') }    
    public get pesquisaTxt()  { return browser.element('input#q') }    
    public get buscarBtn()  { return browser.element('div#___gatsby button[type="submit"]') } 

    public get titulo1()  { return browser.element('#main-ad-list > li:nth-of-type(1) > a.OLXad-list-link > div:nth-of-type(2) > div:nth-of-type(1) > h2.OLXad-list-title') }   
    public get valor1()  { return browser.element('ul#main-ad-list li:nth-child(1) > a > div.col-3 > p') }   
    public get titulo2()  { return browser.element('ul#main-ad-list li:nth-child(2) > a > div.col-2 > div.OLXad-list-line-1.mb5px > h2') }   
    public get valor2() { return browser.element('ul#main-ad-list li:nth-child(2) > a > div.col-3 > p') }   
    public get titulo3()  { return browser.element('ul#main-ad-list li:nth-child(6) > a > div.col-2 > div.OLXad-list-line-1.mb5px > h2') }   
    public get valor3()  { return browser.element('ul#main-ad-list li:nth-child(6) > a > div.col-3 > p') }   
    public get titulo4()  { return browser.element('ul#main-ad-list li:nth-child(7) > a > div.col-2 > div.OLXad-list-line-1.mb5px > h2') }   
    public get valor4()  { return browser.element('ul#main-ad-list li:nth-child(7) > a > div.col-3 > p') }   
    public get titulo5()  { return browser.element('ul#main-ad-list li:nth-child(8) > a > div.col-2 > div.OLXad-list-line-1.mb5px > h2') }   
    public get valor5()  { return browser.element('ul#main-ad-list li:nth-child(8) > a > div.col-3 > p') }   

    public get proximaPagina()  { return browser.element('body.has_module-advertising-position-right-out:nth-child(2) div.wrapper:nth-child(53) div.site_wrapper:nth-child(9) main.site_main.OLXcampaign.esquadrao-desapega:nth-child(4) div.page_listing:nth-child(5) div.grid-row div.grid-col.col-2:nth-child(2) div.section_listing:nth-child(4) div.module_pagination:nth-child(11) ul.list li.item.next:nth-child(16) > a.link') }   
    public get pagina02()  { return browser.element('div.module_pagination > ul.list > li:nth-of-type(2) > a.link') }   
    public get confirmandoPaginacao()  { return browser.element('span.counter') } 
 
    public get paginacaoCampoBusca()  { return browser.element('h4[class*="search-category-title"]') }   

    public open(): void {
        browser.url('/')
    }
}
const HomePageOlxPage = new HomePage_OlxPage();
export default HomePageOlxPage