import {View, ImageBackground, StyleSheet, Text} from "react-native"

export default function TaskCard({data}){
    const {task} = data;
    return(
  
        
        <View style={styles.taskCardContainer}>
            <Text style={styles.textColor}>• {task}</Text>
        </View>
       
    
    )
}


const styles = StyleSheet.create({
    bg: {
        flex:1,
        justifyContent: "center"
    },
    taskCardContainer : {
        backgroundColor: "red",
        padding: 20,
        backgroundColor: "#ff6984",
        lineHeight: 10
        
    },
    textColor: {
        color: "#ffffff",
        fontSize: 20
      
    }
})