import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  characterCard: {
    backgroundColor: '#F4F6F5',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 200,
    borderRadius: 24,
    padding: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#224229',
  },
  characterCardInfoBox: {
    height: 180
  },
  characterCardImage: {
    width: 180,
    height: 180,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#224229',
  }
});
