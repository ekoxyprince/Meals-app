import { View,Text,Pressable,Image,StyleSheet,Platform } from "react-native"
import MealDetails from "./MealDetails"

const MealItem = ({id,title,imageUrl,duration,complexity,affordability,onPress})=>{
   return<View style={styles.mealItem}>
      <Pressable onPress={onPress.bind(this,id)} android_ripple={'#ccc'} style={({pressed})=>pressed?styles.pressed:null}>
         <View style={styles.innerContainer}>
         <Image source={{uri:imageUrl}} style={styles.image}/>
         <Text style={styles.title}>{title}</Text>
         </View>
     <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
      </Pressable>
   </View>
}
export default MealItem
const styles = StyleSheet.create({
   mealItem:{
      flex:1,
      margin:12,
      borderRadius:8,
      overflow:Platform.select({ios:'visible',android:'hidden'}),
      backgroundColor:'#ffffff',
      elevation:4,
      shadowOffset:{width:0,height:2},
      shadowColor:'black',
      shadowOpacity:0.3,
      shadowRadius:8,
      borderRadius:8,
      width:340,
      height:290
   },
   innerContainer:{
    borderRadius:8,
    overflow:'hidden'
   },
   image:{
      width:'100%',
   height:200
   },
   title:{
      fontWeight:'bold',
      fontSize:18,
      textAlign:'center',
      margin:8
   },
   pressed:{
      opacity:0.4
   }
})