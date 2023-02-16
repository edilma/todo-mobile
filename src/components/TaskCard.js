import {View, ImageBackground, StyleSheet, Text, Button} from "react-native"

export default function TaskCard({data}){
    const {task, done} = data;
    const handleDelete=()=>{

    }
    return(
  
        <View style={styles.taskCardContainer}>
            <Text style={done? styles.textColorDone : styles.textColor}>• {task}</Text>
           
                {/* <Button 
                title="Delete More"
                color="#841584"
                accessibilityLabel="Delete This"
                style={styles.button}
                /> */}
            
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
    textColorDone: {
        color: "#ffffff",
        fontSize: 20,
        textDecorationLine: "line-through"
      
    },
    textColor: {
        color: "black",
        fontSize: 20
         
      
    },

    button: {
        backgroundColor: "#000000",
        borderWidth: 5,


    }
})