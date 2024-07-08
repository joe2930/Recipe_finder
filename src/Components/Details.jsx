import React,{useContext, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RecipeContext } from './RecipeContext';


const Details = () => {

  const {id}=useParams();
  const { recipes } = useContext(RecipeContext);
  const recipe = recipes.find(recipe => recipe.idMeal === id);
  const navigate=useNavigate();

  const backh = async ()=>
  {
      navigate('/');
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>

      <div className='box'>
          <div className='headd'>
            <h1> INGREDIENTS</h1>
          </div>
          <ul className='lis'>
            {Array.from({ length: 20 }, (_, i) => i + 1).map
            (
              i =>
                recipe[`strIngredient${i}`] && (
                  <li key={i} className='row'>
                    <span className='inc'>{recipe[`strIngredient${i}`]}</span>
                    <span className='msr'>{recipe[`strMeasure${i}`]}</span>
                  </li>
                )
            )
            }
          </ul>
          </div>
          <div className='headd'>
              <h1> INSTRUCTIONS</h1>
            </div>
          <div className='ins'>
            <p>{recipe.strInstructions}</p>
          </div>
          <div className='headd'>
              <h1> REFERENCE</h1>
            </div>
          <div className='src'>
          <iframe
    className='vd'
    src={`https://www.youtube.com/embed/${recipe.strYoutube.split('=')[1]}`}
    
    
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
          </div>

          <div className='back'>
            <button onClick={backh}>Back To Search</button>
          </div>
        </div>
     
  );
};

export default Details;
