import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text,StyleSheet ,ActivityIndicator,KeyboardAvoidingView,TextInput,Button} from 'react-native';
function Message({route, navigation }) {

  const {idm} = route.params;
  const {idu} = route.params;
  const {idp} = route.params;
  const {idpar} = route.params;
  const [messages, setMessages] = useState([{}]);
  const [text, setText] = useState('');
  const [show, setshow] = React.useState(true);
  const scrollViewRef = useRef();
  React.useEffect(() => {
   
    storeData()
    setInterval(()=>{ storeData()},10000);


      
      },[]);
    


storeData = async() => {

     return fetch('http://192.168.8.113:8000/api/message/'+idp+'/'+idm+'/'+idu, {
  method: "GET"

})
    .then(response => response.json())
    .then(json => {
      console.log(json);
      setMessages(json.msg)
      setshow(false)
      scrollViewRef.current?.scrollToEnd({ animated: true });
    })
    .catch(error => {
     
    });
}

const sendMessage = () => {
  setText('')
  // Send a message to the WebSocket server
  return fetch('http://192.168.8.113:8000/api/sendmessage/'+idp+'/'+idm+'/'+idu+'/'+idpar+'/'+text, {
    method: "GET"
  
  })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      
       
      })
      .catch(error => {
       
      });
};

  return (
    <View style={styles.container}>  
    <ScrollView style={styles.inputContainer} ref={scrollViewRef}>
    {messages.length>0 && messages.map((x)=>(
  

   
      <View style={{display:'flex',flexDirection:idpar==x.msgpar ?'row' :'row-reverse'}}>
   <View style={{backgroundColor:idpar==x.msgpar ?'#3544FE':'#F16C1A',borderRadius:15,marginTop:'5%',paddingHorizontal:15,
   paddingVertical:10, alignSelf: 'flex-start'}}>
   <Text  style={{color:'white',fontSize:18 }}>{x.msg}</Text>
   </View></View>

))

    }
</ScrollView>



<View style={{display:'flex',height:'12%',
flexDirection:'row',justifyContent:'space-around',
alignItems:'center',backgroundColor:'white'
}}>


<KeyboardAvoidingView
 style={{ width:'75%'}}
 behavior="padding"
 enabled
>

   <TextInput
     style={{ height:45, fontSize:18,width: '100%',backgroundColor: 'white',
     borderRadius: 10,
     padding: 10,
     borderColor:'black',
     borderWidth:1,
     paddingHorizontal:15
    }}
     onChangeText={setText}
     value={text}
   />
 
</KeyboardAvoidingView>






   <Button title="Send"   onPress={sendMessage} />
</View>


{ show && (
        <>
          <View
            style={{
              position: 'absolute',
              top: '0%',
              left: '0%',
              width: '106%',
              height: '104%',
              backgroundColor: 'black',
              opacity: 0.5,
            }}></View>
          <ActivityIndicator
            style={{ position: 'absolute', top: '45%', left: '47%' }}
            size="large"
            color="#003EC5"
          />
        </>
      )}
</View>
  )
}


const styles = StyleSheet.create({
  container: {
height:'100%',
    backgroundColor:'#FCFCFC'
  },
  inputContainer: {
    borderBottomColor:'#ECECED',
    borderBottomWidth:1,
    height:'88%',
    paddingHorizontal:10
  
  },
  input: {
  
    height:'60%',
    borderWidth: 1,
    borderRadius: 20,
   paddingHorizontal:15,
    fontSize:18,
    width:'75%',
    backgroundColor:'white'
  },
  message: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default Message