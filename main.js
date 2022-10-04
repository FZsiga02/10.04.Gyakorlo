
let elelmiszerek = []

let osszKaloria = 0

let objburger = {
    name: "Hamburger",
    kaloria: 250
}

let objcsirke = {
    name: "Grillcsirke",
    kaloria: 150
}

let objviz = {
    name: "Víz",
    kaloria: 50
}

function ujElelem(elelmiszer){
    let label = document.createElement('label')
    label.textContent = elelmiszer.name + "(" + elelmiszer.kaloria + ")"
    return label
}

function burger(){
    osszKaloria+=250
    elelmiszerek.push('Hamburger (250)')
    let szuloElem = document.getElementById('lista')
        let listaElem = document.createElement('li')
        listaElem.appendChild(ujElelem(objburger))
        szuloElem.appendChild(listaElem)
        document.getElementById('kcal').textContent = osszKaloria

        let torol = document.createElement('button')
    torol.textContent = 'X'

    function torles(){
        listaElem.remove()
        osszKaloria-=250
        document.getElementById('kcal').textContent = osszKaloria
    }

    torol.addEventListener('click', torles)
    listaElem.appendChild(torol)
}

function csirke(){
    osszKaloria+=150
    elelmiszerek.push('Grillcsirke (150)')
    let szuloElem = document.getElementById('lista')
        let listaElem = document.createElement('li')
        listaElem.appendChild(ujElelem(objcsirke))
        szuloElem.appendChild(listaElem)
        document.getElementById('kcal').textContent = osszKaloria
    
        let torol = document.createElement('button')
        torol.textContent = 'X'
    
        function torles(){
            listaElem.remove()
            osszKaloria-=150
            document.getElementById('kcal').textContent = osszKaloria
        }
    
        torol.addEventListener('click', torles)
        listaElem.appendChild(torol)    
}

function viz(){
    osszKaloria+=50
    elelmiszerek.push('Víz (50)')
    let szuloElem = document.getElementById('lista')
    let listaElem = document.createElement('li')
    listaElem.appendChild(ujElelem(objviz))
    szuloElem.appendChild(listaElem)
    document.getElementById('kcal').textContent = osszKaloria
    let torol = document.createElement('button')
    torol.textContent = 'X'

    function torles(){
        listaElem.remove()
        osszKaloria-=50
        document.getElementById('kcal').textContent = osszKaloria
    }

    torol.addEventListener('click', torles)
    listaElem.appendChild(torol)
}

function alap(){
    var lista = document.getElementById('lista')
    lista.innerHTML = ''
    osszKaloria = 0
    document.getElementById('kcal').textContent = ''   
}

function init(){
    document.getElementById('burger').addEventListener('click', burger)
    document.getElementById('csirke').addEventListener('click', csirke)
    document.getElementById('viz').addEventListener('click', viz)
    document.getElementById('alap').addEventListener('click', alap)
}

document.addEventListener('DOMContentLoaded', init)
