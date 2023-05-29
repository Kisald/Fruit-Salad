import Fruit from "../models/Fruit";
import "./FruitDetails.css";
import Fruit from "../models/Fruit";
import { useParams } from "react-router-dom";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://fruits.shrp.dev",
    timeout: 1000,
    headers: {},
    });

function FruitsDetail() {

    const { fruitName } = useParams();
    //récupère la valeur du nom du fruit en minuscules dans l'URI ex: fruits/:fruitName -> fruits/cerise
  
    const [fruit, setFruit] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    useEffect(() => {
    async function fetchAPI() {
        try {
            const nameWithFirstLetterUppercase =
            fruitName.charAt(0).toUpperCase() + fruitName.slice(1);
          //fruitName = pomme -> nameWithFirstLetterUppercase = Pomme

            setLoading(true);

            const response = await axiosInstance.get(
            `/items/fruits?fields=*.*&filter[name][_eq]=${nameWithFirstLetterUppercase}`
            );
            const jsonData = response.data.data[0];
  
            const aFruit = new Fruit(
            jsonData.name,
            jsonData.color,
            jsonData.image,
            jsonData.id,
            jsonData.price,
            jsonData.stock,
            jsonData.origin.name,
            jsonData.season
        );
  
            setFruit(aFruit);
            setLoading(false);
            setError(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(true);
        }
    }
  
        fetchAPI();
    }, [fruitName]);

}

function getImage() {
    return('/images/'+fruit.name.toLowerCase()+".png")
}

export default FruitsDetails;