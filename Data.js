//general
let $ = (selector)=> document.querySelector(selector);
let $all = (selector)=> document.querySelectorAll(selector);
let goBackButton = $('.button_go-back');
let goDataBaseButton = $('.button_go-data-base');

//Data Base
let sectionDataBase = $('.data-base');
let dataBaseInputs = {
    inputs:$all('.item-info__input'),
    values: boxDatabase
}
let buttonSave = $('.data-base__buton-save');
//Creation Zone
let sectionCreate = $('.creation-zone');
    //menu
let itemsOfMenu = $all('.box-items_button');
let itemsOfMenuImg = $('.creation-menu_img');
let itemsOfMenuImgTxt = $('.creation-menu_img-txt');
    //info
let itemsOfMenuInfoContainer = $('.creation-menu_info');
let itemsOfMenuInfoTittle = $('.menu-info_tittle');
let itemsOfMenuInfoSubTittle = $('.menu-info_sub-tittle')
let itemsOfMenuInfo = $('.menu-info_txt');
let initInfo = $('.init-info');
    //components
let itemsOfMenuComponentsImg = $all('.component-card_img');
let itemsOfMenuComponentsTxt = $all('.component-card_txt');
    //create element
let itemsOfMenuInput = $('.create-element_input');
let itemsOfMenuButtonCreate = $('.create-element_button');
// results
let sectionResults = $('.results');
    //table
let resultsTable = {
    names:$all('.name'),
    unitPrices:$all('.unit-price'),
    amounts:$all('.amount'),
    totals:$all('.total')
}
    //resumen
let resumenTable = {
    values1: $all('.value1'),
    values2: $all('.value2')
}
let resumenResults = {
    createdBlisters:[],
    totalCostMaterials:[],
    saleValue:[],
    profits:[]
}
//warnings
let sectionWarning = $('.warning');
let firstInit = $('.first-time');

firstInit.style.display = 'flex'
sectionDataBase.style.display = 'none'
sectionCreate.style.display = 'none'
sectionResults.style.display = 'none'
goBackButton.style.display = 'none'


