import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainText: {
    color: '#162C1B',
    fontFamily: 'Inter_500Medium',
    fontSize: 36,
    marginBottom: 16
  },
  searchCharactersBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#162C1B',
    paddingLeft: 10,
    paddingRight: 15,
    marginBottom: 16,
    height: 40,
  },
  searchCharactersBarTextInput: {
    flex: 1,
    fontSize: 16,
    color: "#162C1B",
  },
  searchCharacterBarClearBtnFocused: {
    backgroundColor: "#DAE4DC",
    borderRadius: 4
  },
  filterCharactersButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    backgroundColor: '#224229',
    height: 34,
    width: 113,
    marginBottom: 32,
  },
  filterCharactersButtonText: {
    fontFamily: 'DMMono_400Regular',
    color: '#FFFFFF',
    fontSize: 14,
    marginRight: 6
  }
});
