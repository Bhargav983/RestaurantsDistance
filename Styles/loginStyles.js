import { StyleSheet,Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
      },
      bigCircle: {
        width: Dimensions.get('window').height * 0.7,
        height: Dimensions.get('window').height * 0.7,
        backgroundColor: '#3AB0FF',
        borderRadius: 1000,
        position: 'absolute',
        right: Dimensions.get('window').width * 0.25,
        top: -50,
      },
      smallCircle: {
        width: Dimensions.get('window').height * 0.4,
        height: Dimensions.get('window').height * 0.4,
        backgroundColor: '#FF06B7',
        borderRadius: 1000,
        position: 'absolute',
        bottom: Dimensions.get('window').width * -0.2,
        right: Dimensions.get('window').width * -0.3,
      },
      centerizedView: {
        width: '100%',
        top: '15%',
      },
      authBox: {
        width: '80%',
        backgroundColor: '#DAEAF1',
        borderRadius: 20,
        alignSelf: 'center',
        paddingHorizontal: 14,
        paddingBottom: 30,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderColor:'red',
        borderWidth:2
      },
      logoBox: {
        width: 100,
        height: 100,
        backgroundColor: '#FF06B7',
        borderRadius: 1000,
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: -50,
        marginBottom: -50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      },
      TitleText: {
        fontSize: 26,
        fontWeight: '600',
        marginTop: 20,
        color:'black',
        textAlign:'center'
      },
      hr: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#444',
        marginTop: 6,
      },
      inputBox: {
        marginTop: 10,
      },
      inputLabel: {
        fontSize: 18,
        marginBottom: 6,
        fontWeight:'600',
        color:'black',
        marginTop:6
      },
      input: {
        width: '100%',
        height: 40,
        backgroundColor: '#F2D1D1',
        borderRadius: 4,
        paddingHorizontal: 10,
        color:'black',
        fontWeight:'500',
        fontSize:15
      },
      BlueButton: {
        backgroundColor: '#3AB0FF',
        marginTop: 35,
        paddingVertical: 10,
        borderRadius: 4,
        marginBottom:30
      },
      PinkButton:{
        backgroundColor: '#FA2FB5',
        marginTop: 35,
        paddingVertical: 10,
        borderRadius: 4,
        marginBottom:30
      },

      ButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      },
      registerText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color:'black',
        fontWeight:'400'
      },
      
});