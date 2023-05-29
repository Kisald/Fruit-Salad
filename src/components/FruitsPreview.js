function FruitPreview() {
function onClick() {
    console.log(fruit.name);
}
function getImage() {
    return"/images/"+fruit.name.toLowerCase()+".png";
}

    return(
        <li>{Fruit.name}</li>
    )
}

export default FruitPreview;