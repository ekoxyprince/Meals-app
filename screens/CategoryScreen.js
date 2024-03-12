import { FlatList,StyleSheet,View } from "react-native";
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from "../components/CategoryGridTile";
import {useNavigation} from '@react-navigation/native'


const CategoryScreen = ({navigation})=>{
    //const navigate = useNavigation()
    function renderCategoryItem(data){
        function handleNavigate(){
            navigation.navigate('Overview',{categoryId:data.item.id})
            //navigate.navigate('Overview')
        }
        return(
            <CategoryGridTile title={data.item.title} color={data.item.color} onPress={handleNavigate}
        />
    )
    }
    return(
    <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderCategoryItem} numColumns={2}/>
)
}

export default CategoryScreen

