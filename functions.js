// funciones generales
/*

let obtainedMulticraft = 0 // obtenido del multicrafteo
*/
let multiCraftProb = 25.1 // probabilidad de multicraft
let units  // cantidad de componentes
let recipeSelected // receta seleccionada
let first = 0 //variable de un solo uso(para mostrar alerta al comienzo)
let xxxx = 0
function Random(min, max) {
    return Math.floor(Math.random() * (max - min+1) + min)
}

//seleccionar receta
function SelectRecipe(recipe){
    recipeSelected = boxOfBlisters[recipe];
    CraftRecipe(recipeSelected);
    initInfo.classList.add("inactive");
}

// creación de recetas
function CraftRecipe(blister){
    units = []
    //cantidad de componenetes que requiere la receta
    switch (blister.name) {
        case boxOfBlisters[0].name:
            units[0]={
                a: 1,b: 10,
                c: 5,d: 2
            }
            break;
        case boxOfBlisters[1].name:
            units[0] = {
                a: 1, b: 1,
                c: 9, d: 2
            }
            break;
        case boxOfBlisters[2].name:
            units[0] = {
                a: 1, b: 1,
                c: 9, d: 2
            }
            break;
        case boxOfBlisters[3].name:
            units[0] = {
                a: 2, b: 16,
                c: 2
            }
            break;
        case boxOfBlisters[4].name:
            units[0] = {
                a: 1, b: 1,
                c: 5, d: 2
            }
            break;

        default:
            break;
    }
    
    units.push({
        a: blister.components.component1,
        b: blister.components.component2,
        c: blister.components.component3,
    })

    if(blister.components.component4 != undefined){

        units[1].d = blister.components.component4
    }
    
    //imagen del blister
    itemsOfMenuImg.src = blister.blisterImg
    itemsOfMenuImg.classList.remove("inactive");
    itemsOfMenuImgTxt.classList.remove("inactive");
    //informacion de los componentes
    itemsOfMenuComponentsImg[0].src = blister.components.component1.img
    itemsOfMenuComponentsImg[0].setAttribute('alt', blister.components.component1.name);
    itemsOfMenuComponentsImg[0].classList.remove("inactive");
    itemsOfMenuComponentsTxt[0].innerText = units[0].a

    itemsOfMenuComponentsImg[1].src = blister.components.component2.img
    itemsOfMenuComponentsImg[1].setAttribute('alt', blister.components.component2.name);
    itemsOfMenuComponentsImg[1].classList.remove("inactive");
    itemsOfMenuComponentsTxt[1].innerText = units[0].b

    itemsOfMenuComponentsImg[2].src = blister.components.component3.img
    itemsOfMenuComponentsImg[2].setAttribute('alt', blister.components.component3.name);
    itemsOfMenuComponentsImg[2].classList.remove("inactive");
    itemsOfMenuComponentsTxt[2].innerText = units[0].c

    if(blister.components.component4 == undefined){
        itemsOfMenuComponentsImg[3].classList.add("inactive");
        itemsOfMenuComponentsTxt[3].classList.add("inactive");
    }else {
        itemsOfMenuComponentsImg[3].classList.remove("inactive");
        itemsOfMenuComponentsTxt[3].classList.remove("inactive");
        itemsOfMenuComponentsImg[3].src = blister.components.component4.img
        itemsOfMenuComponentsImg[3].setAttribute('alt', blister.components.component4.name);
        itemsOfMenuComponentsTxt[3].innerText = units[0].d
    }
    // textos de la descripción
    itemsOfMenuInfoContainer.classList.remove("inactive");
    itemsOfMenuInfoTittle.innerText = blister.name
    itemsOfMenuInfoSubTittle.innerText = blister.itemLvl
    itemsOfMenuInfo.innerText = blister.description
    //cantidad a crear
    itemsOfMenuInput.classList.remove("inactive");
    itemsOfMenuButtonCreate.classList.remove("inactive");
}


// creación de items y cálculos
function MakeBlister(create = 0){
    create = itemsOfMenuInput.value;
    let totalCostMaterials 

    /*
    formula
      
    costoTotal = valor del componente * (cantidad de componentes * cantidad a crear)  
    precio unitario = valor del componente
    cantidad = cantidad de componentes * crear
    total = costoTotal
    */

    // traladando datos a la tabla de resultados
        //nombres
    resultsTable.names[0].innerText = recipeSelected.name
    resultsTable.names[1].innerText = recipeSelected.components.component1.name
    resultsTable.names[2].innerText = recipeSelected.components.component2.name
    resultsTable.names[3].innerText = recipeSelected.components.component3.name
        // precios por unidad
    resultsTable.unitPrices[0].innerText = recipeSelected.value
    resultsTable.unitPrices[1].innerText = recipeSelected.components.component1.value
    resultsTable.unitPrices[2].innerText = recipeSelected.components.component2.value
    resultsTable.unitPrices[3].innerText = recipeSelected.components.component3.value
        // cantidad de objetos necesarios
    resultsTable.amounts[0].innerText = create *2
    resultsTable.amounts[1].innerText = units[0].a * create
    resultsTable.amounts[2].innerText = units[0].b * create
    resultsTable.amounts[3].innerText = units[0].c * create
        //resultado => precio unitario * (cantidad de objeto * cantidad a crear)
    resultsTable.totals[0].innerText = (recipeSelected.value * (create *2)).toFixed(2)
    resultsTable.totals[1].innerText = (recipeSelected.components.component1.value * (units[0].a * create)).toFixed(2);
    resultsTable.totals[2].innerText = (recipeSelected.components.component2.value * (units[0].b * create)).toFixed(2);
    resultsTable.totals[3].innerText = (recipeSelected.components.component3.value * (units[0].c * create)).toFixed(2);
        // valores del cuarto componente
    if(recipeSelected.components.component4 != undefined){
        resultsTable.names[4].innerText = recipeSelected.components.component4.name
        resultsTable.unitPrices[4].innerText = recipeSelected.components.component4.value
        resultsTable.amounts[4].innerText = units[0].d * create
        resultsTable.totals[4].innerText = (recipeSelected.components.component4.value * (units[0].d * create)).toFixed(2);
        
        resultsTable.names[4].style.display = 'flex';
        resultsTable.unitPrices[4].style.display = 'flex';
        resultsTable.amounts[4].style.display = 'flex';
        resultsTable.totals[4].style.display = 'flex';
    }else{
        resultsTable.names[4].style.display = 'none';
        resultsTable.unitPrices[4].style.display = 'none';
        resultsTable.amounts[4].style.display = 'none';
        resultsTable.totals[4].style.display = 'none';
    }

/*
    formula para el resumen

    ampollas creadas = (S/Mult -> create * 2) (C/Mult
     -> en la función multicraft)

    costo total en materiales = (costo del material * cantidad de la receta)
        realizar para cada componente necesario y luego sumar todo
    
    valor de venta = blister.value * (create*2)

    ganancias = valor de venta - costo total en materiales

*/
    if(recipeSelected.components.component4 != undefined){
        totalCostMaterials = ((recipeSelected.components.component1.value * (units[0].a*create))+
        (recipeSelected.components.component2.value * (units[0].b*create))+
        (recipeSelected.components.component3.value * (units[0].c*create))+
        (recipeSelected.components.component4.value *(units[0].d*create))).toFixed(2);
    } else {
        totalCostMaterials = ((recipeSelected.components.component1.value * (units[0].a*create))+
        (recipeSelected.components.component2.value * (units[0].b*create))+
        (recipeSelected.components.component3.value * (units[0].c*create))).toFixed(2);
    }

    xxxx = totalCostMaterials
    resumenTable.values1[0].innerText = create * 2
    resumenTable.values1[1].innerText = totalCostMaterials
    resumenTable.values2[1].innerText = totalCostMaterials
    resumenTable.values1[2].innerText = (recipeSelected.value * (create * 2)).toFixed(2)
    resumenTable.values1[3].innerText = ((recipeSelected.value * (create * 2))-xxxx).toFixed(2)

    //resumenTable.values1[1].innerText =  

    MultiCraft(create);
    sectionCreate.style.display = 'none'
    sectionResults.style.display = 'flex'
    goBackButton.style.display = 'flex'
}
// creación de items y cálculos con multicraft
function MultiCraft(toCraft = 0){
    let count = 0 
    let obtainedPerCount = 0 //obtenido por cada creación
    let multiCrafting = 0 //valor random que determina si la tirada es V o F para el multicraft
    let obtainedTotal = 0 //total obtenido

    /*
        para las cuentas multicraft

        traer la cantidad de ampollas a crear y usarlas como contador
        si la evaluación es true(aplicar el multicraft random) si es false
        (sumar +2)

        las recetas crean 2 ampollas por proceso

        si la cantidad a crear son 10 es igual a 20 ampollas 
    
    */

    do {
        multiCrafting = Random(1,100)
        obtainedPerCount = Random(2,9)

        if(multiCrafting <= multiCraftProb){
            obtainedTotal = obtainedTotal + obtainedPerCount
        } else {
            obtainedTotal = obtainedTotal + 2
            
        }
        count++

    } while(count < toCraft)

    /*
        formula para mostrar resultados en multicraft

        precio = recipeSelected.value
        cantidad = obtainedTotal * tocraft
        total = recipeSelected.value * cantidad
    */

    resultsTable.unitPrices[5].innerText = recipeSelected.value
    resultsTable.amounts[5].innerText = obtainedTotal
    resultsTable.totals[5].innerText = (recipeSelected.value*obtainedTotal).toFixed(2);
    console.log()
    resumenTable.values2[0].innerText = obtainedTotal
    resumenTable.values2[2].innerText = (obtainedTotal*recipeSelected.value).toFixed(2);
    resumenTable.values2[3].innerText = ((recipeSelected.value*obtainedTotal)-xxxx).toFixed(2);
}
// volver a la sección de creación
function ButtonGoBack(){
    if(sectionDataBase.style.display == 'flex'){
        sectionDataBase.style.display = 'none'
        sectionResults.style.display  = 'none'
        sectionCreate.style.display   = 'flex'
        goBackButton.style.display = 'none'
        goDataBaseButton.style.display = 'flex'
    }
    if(sectionResults.style.display == 'flex'){
        sectionDataBase.style.display = 'none'
        sectionResults.style.display = 'none'
        sectionCreate.style.display = 'flex'
        goBackButton.style.display = 'none'
        goDataBaseButton.style.display = 'flex'
    }
    
}
// ir a la base de datos
function ButtonDataBase(value = ""){
    if(sectionCreate.style.display == 'flex'){
        sectionCreate.style.display = 'none'
        sectionResults.style.display = 'none'
        sectionDataBase.style.display = 'flex'
        goDataBaseButton.style.display = 'none'
        goBackButton.style.display = 'flex'
    }
    if(sectionResults.style.display == 'flex'){
        sectionCreate.style.display = 'none'
        sectionResults.style.display = 'none'
        sectionDataBase.style.display = 'flex'
        goDataBaseButton.style.display = 'none'
        goBackButton.style.display = 'flex'
    }
    if(value == true){
        if(firstInit.style.display == 'flex'){
            firstInit.style.display = 'none'
            sectionCreate.style.display = 'none'
            sectionResults.style.display = 'none'
            sectionDataBase.style.display = 'flex'
            goDataBaseButton.style.display = 'none'
            goBackButton.style.display = 'flex'
        }
    } else {
        if(firstInit.style.display == 'flex'){
            firstInit.style.display = 'none'
            sectionCreate.style.display = 'flex'
            sectionResults.style.display = 'none'
            sectionDataBase.style.display = 'none'
            goDataBaseButton.style.display = 'flex'
            goBackButton.style.display = 'none'
        }
        localStorage.setItem('first', 1);
    }

}
// guardar valores en la base de datos
function Save(){
    let count = 0
    let value
    boxDatabase.forEach(element => {
        value = dataBaseInputs.inputs[count].value;
        if(value != ""){
            localStorage.setItem(boxDatabase[count].name,value);
        }
        count++
    });
    Load();
    alert("Los datos fueron guardados exitosamente!");
    sectionDataBase.style.display = 'none'
    sectionResults.style.display  = 'none'
    sectionCreate.style.display   = 'flex'
    goBackButton.style.display = 'none'
    goDataBaseButton.style.display = 'flex'
}

function Load(){
    let count = 0
    let values
    boxOfComponents.forEach(element => {
        values = localStorage.getItem(element.name);
        if(values != null){
            element.value = values
        }
        
        count++
    });

    let index = localStorage.getItem('first');
    if(index == '1'){
        firstInit.style.display = 'none'
        sectionCreate.style.display = 'flex'
        sectionResults.style.display = 'none'
        sectionDataBase.style.display = 'none'
        goDataBaseButton.style.display = 'flex'
        goBackButton.style.display = 'none'
    } else{
        firstInit.style.display = 'flex'
        sectionCreate.style.display = 'none'
        sectionResults.style.display = 'none'
        sectionDataBase.style.display = 'none'
        goDataBaseButton.style.display = 'flex'
        goBackButton.style.display = 'none'
    }
}

//advertencia al eliminar la base de datos
function WarningAfterRemoveDB(){
    sectionWarning.classList.remove("inactive");
}
//eliminar base de datos
function RemoveLocalStorageDB(yes){
    if(yes == 'Y'){
        boxDatabase.forEach(element => {
            localStorage.removeItem(element.name);
            sectionWarning.classList.add("inactive");
        });
        alert("Base de datos eliminada exitosamente.")
    }
    if(yes == 'N'){
        sectionWarning.classList.add("inactive");
    }

}

Load();


buttonSave.addEventListener('click', Save)
goDataBaseButton.addEventListener('click', ButtonDataBase);
goBackButton.addEventListener('click', ButtonGoBack);
itemsOfMenuButtonCreate.addEventListener('click', MakeBlister);