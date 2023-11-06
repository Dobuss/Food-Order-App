export default function Meals(){
    fetch('http://localhost:3000/meals');
    return <ul id="meals">

    </ul>
}