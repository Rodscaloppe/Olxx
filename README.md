![olx-gif](https://github.com/skimono/Olxx/tree/master/support/util/upload/Peek2.gif)


### Olx 
====================

*Projeto para automação de teste com WebdriverIO, cucumber e typescript.*
---
## Para começar:
1. NodeJS instalado globalmente no sistema operacional. Instale sempre a versão estável.
[caso o node de erro, instalar sem usar apt-get e instalar primeiro o nvm

2. Git instalado;
3. Navegador Chrome ou Firefox instalado;
4. JAVA SDK: 
4. Editor de texto (Opcional) 

``` 
npm i
```
```
npm install -g allure-commandline
```
## Executar os Scripts

```
npm run test-local
```

### CucumberOpts Tags (Arquivo: local.conf.js)
Configuração define as configurações de compilação do Cucumber, como as tags específicas das features que serão executadas.

``` 
cucumberOpts: {
        compiler: ["ts:ts-node/register"],
        require: [
            './src/steps/'
        ], // <string[]> (file/dir) require files before executing features
        backtrace: true, // <boolean> show full backtrace for errors

        // EXTENSION after requiring MODULE (repeatable)
        dryRun: false, // <boolean> invoke formatters without executing steps
        failFast: false, // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output
        colors: true, // <boolean> disable colors in formatter output
        snippets: true, // <boolean> hide step definition snippets for pending
        // steps
        source: true, // <boolean> hide source uris
        profile: [], // <string[]> (name) specify the profile to use
        strict: true, // <boolean> fail if there are any undefined or pending
        timeout: 50000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to
        tags: ['@testes', '@all', '@qualquerOutro']
}

```

### Relatório HTML
Projeto integrado com [wdio-allure-reporte](https://docs.qameta.io/allure/#_about), que é gerado na pasta `..\reports\allure-results` quando executa o comando `npm run test-local`.
Podendo ser personalizados de acordo com a necessidade.
Para gerar o relatório Allure, execute o comando abaixo no terminal:

**A visualizacao do screenshot fica nesta pasta tambem**

```
allure serve ./reports/allure-results/ && allure open

```




