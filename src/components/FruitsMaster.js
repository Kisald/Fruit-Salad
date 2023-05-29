import react, {useEffect} from 'react;'
import Fruits from '../data/fruits';
import {v4 as uuid} from 'uuid';
import FruitsPreview from './FruitsPreview';
import axios from "axios"


const axiosInstance = axios.create({
    baseURL: "https://fruits.shrp.dev",
    timeout: 3000,
    headers: {},
});

function FruitsMaster() {

    useEffect(() => {
        async function fetchFruitsFromAPI() {
            try {
                setLoading(true);
                const response = await axiosInstance.get("/items/fruits");
                const collectionOfFruitItems = response.data.data.map(
                (jsonItem) => new Fruit(jsonItem.name, jsonItem.color, jsonItem.image)
                    );
                setFruits(collectionOfFruitItems);
                setLoading(false);
                setError(false);
            }
            catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }
    fetchFruitsFromAPI();
    }, [needToReload]);

    return(
        <div className = "FruitsMaster">
            return(
                
                <div className = "FruitsMaster">
                <select value = {saison} onChange={e => setsaison(e.target.value)}>
                    <option value="Tous">Tous</option>
                    <option value="Printemps">Printemps</option>
                    <option value="Ete">Ete</option>
                    <option value="Automne">Autumn</option>
                    <option value="Hiver">Hiver</option>
                </select>
                    <ul>
                        if (saison == "Tous"){
                            fruits.map((fruit) =>(<FruitPreview key ={uuid()} Fruit={Fruits} />))
                        }
                        else :{
                            fruits.map((fruit) =>(<FruitPreview key ={uuid()} Fruit={Fruits.filter(season == {saison})} />))
                        }
                    </ul>
                </div>
                <img src="/images/fruit-salad.png" alt="Saalde2fruit" />
            )
        </div>
    )
}

export default FruitsMaster;