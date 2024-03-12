import { Pressable,View,Text,StyleSheet,Platform} from "react-native";

const CategoryGridTile = ({title,color,onPress})=>{
   return(<View style={[styles.gridTile,{backgroundColor:color}]}>
    <Pressable android_ripple={{color:'#ccc'}} onPress={onPress}  style={({pressed})=>[styles.button,pressed?{opacity:0.4}:styles.button]}>
        <View style={styles.innerTile}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    </Pressable>
   </View>)
}

const styles = StyleSheet.create({
    gridTile:{
        flex:1,
        margin:28,
        height:150,
        elevation:6,
        shadowOffset:{width:0,height:2},
        shadowColor:'black',
        shadowOpacity:0.3,
        shadowRadius:8,
        borderRadius:8,
        overflow:Platform.select({ios:'visible',android:'hidden'})
    },
    button:{
       flex:1   
    },
    innerTile:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    titleText:{
     fontSize:15,
     fontWeight:'bold'
    }
})

export default CategoryGridTile;