const rimraf = require('rimraf');

rimraf('./reports/allure-results/*', function () {

    console.log("Clean allure-results");

})

// rimraf('./newman/*', function () {

//     console.log("Clean newman-htmlextra");

// })