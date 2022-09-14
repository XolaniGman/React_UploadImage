import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import  {useState} from "react";
import  {Storage} from "./firebase";
import {Ref, UploadByte} from "firebase/Storage";
import {V4} from "uuid";
import { Button } from "react-native-web";

function App(){
    const [imageUpload,setImageUpLoad] = useState(null);
    const uploadImage = ()=>{
        if(imageUpload ==null) return;
        const imageRef = ref(Storage, 'images/${imageUpload.name +v4()}');
        UploadByte(imageRef,imageUpload);


    };
}
return (
    <div  className = "App">
        <input
        type="file"
        onChange ={(event) => {
            setImageUpload(event.target.files[0]);
         }}
         />
         <Button OnClick ={uploadImage}>Upload Image</Button>
        
    </div>
)


export default App;


