export default function MealItem({meal}){
    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
            <div>
            <h3>{meal.name}</h3>
            <p className="meal-iitem-price">{meal.price}</p>
            <p className="meal-iitem-description">{meal.description}</p>
            </div>
            <p className="meal-iitem-actions">
                <button>Add to Cart</button>
            </p>
        </article>
    </li>
}