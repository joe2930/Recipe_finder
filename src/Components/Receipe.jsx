import {  useNavigate } from 'react-router-dom';
import { useRef,useContext } from 'react';
import { RecipeContext } from './RecipeContext';



const apiurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const Receipe = () => {
  const { recipes, setRecipes } = useContext(RecipeContext);
  const srchinput=useRef(null);

  const srch =async()=>
    {
       let query=srchinput.current.value.trim();
        const url=apiurl+query;
        const res=await fetch(url);
        const data= await res.json();
        console.log(data);
        setRecipes(data.meals);
        srchinput.current.value=" ";
    }
  
  const navigate=useNavigate();
  const clcom= (recipe)=>
    {
      // slctrcp(recipe);
      navigate(`/details/${recipe.idMeal}`,{ state: { recipes } })
    }

    
  return (
    <div>
      <div className="app">
        <h1 className='headd'  >Welcome To Recipe Finder</h1>
        <div className='inp'>
          <input  className='inpu'  ref={srchinput}  type="text" placeholder='Search'/>
          <img  src='/search.png' alt='srch_icon' className='srch' onClick={srch}/>
        </div>
      </div>
    <div className='rcp'>
       { recipes.map(recipe=>
        (
          <div key={recipe.idMeal} className='card'>
              <h3>{recipe.strMeal}</h3>
              <img className='food' src={recipe.strMealThumb}  alt='food_img' /> 
               <button className='mored' onClick={()=>clcom(recipe)}>More Details</button>              
          </div> 
        ))}
      </div>
      
    </div>

  )
}

export default Receipe


