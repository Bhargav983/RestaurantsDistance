import React, { useState,useEffect,Component} from 'react';
import { StyleSheet,Text,FlatList,Image, View,TouchableHighlight } from 'react-native';
import Geolocation from '@react-native-community/geolocation';


import {fetchReport} from '../redux/actions/reportActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class ListenRedux extends Component{
    state = { curLat: 17.4612769,curLong:78.3995058 };

    onMove = () => {
        try{
        Geolocation.getCurrentPosition((data) => {
            console.log(data)
            this.setState({ curLat:JSON.stringify(data.coords.latitude),curLong:JSON.stringify(data.coords.longitude) });
            console.log('curLat',this.state.curLat);
            console.log('curLong',this.state.curLong);
          })}
          catch(e){
            console.log(e);
          }
       
        
    }
  componentDidMount() {
     this.onMove();
    this.props.fetchReport();
    
    console.log('fetched data=',this.props.randomData['data']['data']);
   
  }

 goMap(item){
    console.log("Pressed",item.latitude,item.longitude);
    // this.props.navigation.navigate('Map',{OriLat:item.latitude.toString(),OriLong:item.longitude.toString()});
    this.props.navigation.navigate('Map',{OriLat:item.latitude.toString(),OriLong:item.longitude.toString(),curLat:this.state.curLat.toString(),curLong:this.state.curLong.toString()});
 }

render(){
return (
    <View style={styles.list}>
        {/* <Text style={{color:'red'}}>{this.state.curLat} {this.state.curLong}</Text> */}
     <FlatList
      style={styles.listStyle}
      keyExtractor={(key) => {
        return key.id;
      }}
      data={this.props.randomData['data']['data']}
      renderItem={({ item }) => {
        // console.log(item.title);
        return (
          <View style={{flex:1,flexDirection:'column',justifyContent:'space-between'}}>
        <View style={{alignItems:'center',flex:1,flexDirection:'row',justifyContent:'space-between',backgroundColor:'white'}}>
          <Image
      style={{width: 50, height: 50,margin:5,marginLeft:10,borderRadius:10}}
      source={{uri: item.images[0].url}}
    />
          
          <View style={{flex:1,flexDirection:'column'}}>
          <Text style={styles.listStyle}> {item.title} </Text>
          <Text style={styles.listStyle}> Rating: {item.rating} </Text>
          </View>

          <TouchableHighlight onPress={()=>{this.goMap(item);}} >
          <Image
              style={{width: 40, height: 40,margin:5,marginLeft:10,borderRadius:10}}
              
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNvqugXh0VzdRykozxtrXzW-n0L-d-4KNRA&usqp=CAU'}}
          /> 
          </TouchableHighlight>

          </View>
          <View  style={{backgroundColor:'black',height:1,marginBottom:20}}>

          </View>
          </View>
         
          
          )
      }}
    />
 </View>
  )
}}

ListenRedux.propTypes={
     fetchReport:PropTypes.func.isRequired,
    randomData:PropTypes.object.isRequired,
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 40,
    backgroundColor: "white",
    margin: 10,
    color: "black",
    borderRadius:16,
    borderBottomColor:'red',
        borderBottomWidth:2,
        
  },
  listStyle: {
    textAlign: "center",
    padding: 10,
    fontSize:16,    fontWeight: 'bold'

  },
  list:{
    flex : 1, flexGrow :1
  }
});


const mapStateToProps=state=>{
    return{
        randomData:state,
    }
}

export default connect(mapStateToProps,{fetchReport})(ListenRedux)
