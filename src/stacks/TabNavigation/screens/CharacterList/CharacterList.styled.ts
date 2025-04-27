import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F4F6F5"
  },
  characterCard: {
    backgroundColor: '#F4F6F5',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 200,
    borderRadius: 24,
    marginBottom: 25,
    borderWidth: 1,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#224229',
  },
  characterCardInfoBox: {
    width: "45%",
    height: "100%",
    padding: 16,
  },
  characterCardImageBox: {
    width: "55%",
    padding: 10
  },
  characterCardInfoBoxLabel: {
    fontSize: 12,
    fontFamily: "DMMono_500Medium",
    color: "#59695C",
    textTransform: "uppercase",
    letterSpacing: 1
  },
  characterCardInfoBoxText: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: "#162C1B",
    marginBottom: 8
  },
  characterCardImage: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#224229',
  }
});
