import {View, ImageBackground, StyleSheet, Text, TouchableOpacity, Button} from "react-native"

export default function TaskCard({data}){
    const {task} = data;
    const handleDelete=()=>{

    }
    return(
  
        <View style={styles.taskCardContainer}>
            <Text style={styles.textColor}>• {task}</Text>
            <TouchableOpacity>
                <Button 
                title="Delete More"
                elevation= "3"
                
                backgroundColor='black'
                color="#841584"
                accessibilityLabel="Delete This"
                style={styles.button}
                />
            </TouchableOpacity>
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
      
    },

    button: {
        backgroundColor: "#000000",
        borderWidth: 5,


    }
})