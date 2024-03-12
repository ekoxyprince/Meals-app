import { View,Text,StyleSheet,FlatList } from "react-native";
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from "../components/MealItem";
import { useLayoutEffect, } from "react";

const MealsOverviewScreen = ({route,navigation})=>{
   useLayoutEffect(()=>{
    const {categoryId} = route.params 
    const categoryTitle = CATEGORIES.find(cat=>cat.id===categoryId).title
    navigation.setOptions({title:categoryTitle})
   },[])
   function renderMealDetails(mId){
    navigation.navigate("Details",{mealId:mId})
   }
   const selectedMeals = MEALS.filter(meal=>meal.categoryIds.indexOf(route.params.categoryId)>=0)
   function renderMealItem(data){
    const item = data.item
    const mealItemProps ={
        id:item.id,
        title:item.title,
        imageUrl:item.imageUrl,
        affordability:item.affordability,
        duration:item.duration,
        complexity:item.complexity,
        onPress:renderMealDetails
    }
    return<MealItem {...mealItemProps} />
}
    return<View style={styles.container}>
        <FlatList style={styles.sliderContainer} data={selectedMeals} horizontal keyExtractor={(item)=>item.id} renderItem={renderMealItem}/>
        <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Select Your Favorite Dish</Text>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.box}><Text>Quick</Text></View>
                <View style={styles.box}><Text>Easy</Text></View>
                <View style={styles.box}><Text>Cheap</Text></View>
            </View>
        </View>
    </View>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:6,
    },
    sliderContainer:{
        flex:1,
    },
    contentContainer:{
        flex:1
    },
    textContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        fontSize:20,
        color:'#fff'
    },
    boxContainer:{
        flexDirection:'row',
        gap:10,
        justifyContent:'center',
        padding:12
    },
    box:{
        width:120,
        height:150,
        backgroundColor:'#fff',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    }
})
