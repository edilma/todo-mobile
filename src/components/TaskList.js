import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity,StyleSheet } from "react-native";
import AddTask from "./AddTask";
import TaskCard from "./TaskCard";

export  default function TaskList() {
    const [tasks, setTasks]=useState();
    
    //fetch tasklist in useEffect (run only once)
    useEffect(() => {
        fetch('https://todo-c9-api-bc.web.app/tasks')
        .then(res => res.json())
        .then(setTasks)
        .catch(console.error)
    }, [])
    const toggleDone = (task)=>{
       
        // is task done?
        const done = !!!task.done //true, false, undefinde
        // we need to send a patch request to `/task/${task.taskID}
        //in the body we need to send {done: __}
        fetch(`https://todo-c9-api-bc.web.app/tasks/${task.tasksID}`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({done})
        })
        .then(res=>res.json())
        .then(setTasks)
        .catch (console.error)
    }
    // return ScrollView with TaskList mapped to TaskCard
    return (
        <ScrollView>
            <Text style={styles.h1}>To Do List</Text>

            <AddTask 
            setTasks = {setTasks} />
                  
           {
            !tasks
            ?<Text>Loading ...</Text>
            :tasks.map((element)=>(
               <TouchableOpacity 
               onPress={()=>toggleDone(element)}    
               key={element.tasksID}>
                <TaskCard 
                data={element} />
                </TouchableOpacity>
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