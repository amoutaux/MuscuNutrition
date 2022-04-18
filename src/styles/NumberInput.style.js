import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerStyle: {
    display: 'flex',
    marginLeft: 10,
  },
  innerContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputStyle: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 14,
    elevation: 5,
    height: 35,
  },
  textInvalid: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
});
