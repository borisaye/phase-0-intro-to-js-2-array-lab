const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
    return;

}

function destructivelyPrependCat(name){
    cats.unshift(name)
    return;

}

function destructivelyRemoveLastCat(){
    cats.pop()
    return;

}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return;

}

function appendCat(name){
    const newCats = [...cats, name];
    return newCats;

}

function prependCat(name){
    const newCats = [name, ...cats,];
    return newCats;

}

function removeLastCat(name){
    const newCats = [...cats];
    newCats.pop()
    return newCats;
}

function removeFirstCat(name){
    const newCats = [...cats];
    newCats.shift()
    return newCats;
}