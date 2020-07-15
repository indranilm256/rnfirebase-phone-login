import {StyleSheet} from 'react-native';

('use strict');
export default StyleSheet.create({
  footerContainer: {
    height: 65,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
  },
  ftButton: {
    width: '50%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 3,
  },
  ftButtonText: {
    color: 'yellow',
    fontFamily: 'Roboto',
    marginTop: 2,
    fontSize: 13,
  },
  textSelected: {
    color: 'blue',
  },
  textUnSelected: {
    color: 'brown',
  },
  selectedBt: {
    borderColor: 'blue',
  },
  unSelectedBt: {
    borderColor: 'white',
  },
  menuButtonIcon: {
    width: 23,
    height: 23,
  },
});
