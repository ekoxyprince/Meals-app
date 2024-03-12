import {View,Text,Image} from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'

const MealDetailScreen = ({route})=>{
  const currentMeal = MEALS.find(meal=>meal.id===route.params.mealId)
   return(
     <View>
         <Image source={{uri:currentMeal.imageUrl}}/>
         <Text>{currentMeal.title}</Text>
         <MealDetails complexity={currentMeal.complexity} affordability={currentMeal.affordability} duration={currentMeal.duration}/>
         <Text>Ingredients</Text>
         {currentMeal.ingredients.map((d,i)=>{
        return <Text key={i}>{d}</Text>
         })}
         <Text>Steps:</Text>
         {currentMeal.steps.map((d,i)=>{
        return <Text key={i}>{d}</Text>
         })}
     </View>
   )
} 
export default MealDetailScreen