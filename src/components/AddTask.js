import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";


export default function AddTask({setTasks}){
    const [task, setTask]= useState("set something")

    const handleAddNewTask = ()=>{
        //set task
        console.log("handle task", task)
        const newTask ={
            done: false,
            task: task
        }
       // console.log(JSON.stringify(newTask))

        // fetch(`https://todo-c9-api-bc.web.app/tasks/`,{
        //     method: "POST",
        //     headers:{
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(newTask)
        // })
        // .then(res=>res.json())
        // .then(setTasks)
        // .catch (console.error)

    }
    
    return (
        <>
       <View>
        
        <Text > Add New Task</Text>
        <TextInput
            style ={styles.input} 
            value ={task}
            onChange={setTask}
            />
            <Button
            title="Press Here"
            onPress={handleAddNewTask} />
        </View>
        
        </>
    )

}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin:12,
        borderWidth:1,
        padding: 10
    }
})