import { useEffect, useState } from "react";
import { ScrollView, Text, ImageBackground,StyleSheet } from "react-native";
import TaskCard from "./TaskCard";

export default function TaskList() {
    const [tasks, setTasks]=useState();

    //fetch tasklist in useEffect (run only once)
    useEffect(() => {
        fetch('https://todo-jsohndata-api.web.app/tasks')
            .then(res => res.json())
            .then(setTasks)
            .catch(console.error)
    }, [])
    // return ScrollView with TaskList mapped to TaskCard
    return (
        <ScrollView>
            <Text style={styles.h1}>To Do List</Text>
                  
           {
            !tasks
            ?<Text>Loading ...</Text>
            :tasks.map((element)=>(
               
                <TaskCard key={element.tasksID}
                data={element} />
                
            ))

           }
          
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex:1,
        justifyContent: "center"
    },
    h1 : {
        fontSize: 30,
        fontWeight:"700",
        display: "flex",
        textAlign: "center"

    }
})