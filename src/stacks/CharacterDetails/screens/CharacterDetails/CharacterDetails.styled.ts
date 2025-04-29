import {StyleSheet} from 'react-native';
import colors from '../../../../utils/constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LightGreen,
    width: "100%",
    display: "flex",
    alignItems: "center"
  },
  goBackButtonContainer: {
    width: "90%",
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap"
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.MediumGreen,
    borderBottomWidth: 1,
    marginTop: 16,
    marginBottom: 16,
    justifyContent: "flex-start"
  },
  goBackButtonText: {
    marginLeft: 5,
    fontSize: 12,
    color: colors.MediumGreen,
    fontFamily: 'Inter_400Regular'
  },
  characterDetails: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: colors.PrimaryGreen,
  },
  characterCardImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.PrimaryGreen,
    marginBottom: 16
  },
  characterCardHeader: {
    padding: 8
  },
  characterCardHeaderLabel: {
    fontFamily: "DMMono_500Medium",
    fontSize: 14,
    color: colors.MediumGreen,
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  characterCardHeaderText: {
    fontFamily: "Inter_500Medium",
    fontSize: 36,
    color: colors.DarkGreen,
    letterSpacing: -2,
    marginBottom: 16
  },
  characterInfoTiles: {
    width: "100%"
  },
  characterInfoTilesRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  likeCharacterToggleButton: {
    backgroundColor: colors.PrimaryGreen,
    borderRadius: 100,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8
  },
  likeCharacterToggleButtonPressed: {
    backgroundColor: colors.DarkGreen,
  },
  likeCharacterToggleButtonText: {
    color: "#FFFFFF",
    fontFamily: "DMMono_400Regular",
    fontSize: 14,
    textTransform: "uppercase",
    marginLeft: 4
  }
});
