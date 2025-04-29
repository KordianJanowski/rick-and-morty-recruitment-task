import {StyleSheet} from 'react-native';
import colors from '../../utils/constants/colors';

export const styles = StyleSheet.create({
  filterCharactersBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 25,
    borderWidth: 1,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: colors.PrimaryGreen,
  },
  filterCharacterBoxButtonsContainer: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  filterCharacterBoxButton: {
    borderWidth: 1,
    borderColor: colors.PrimaryGreen,
    borderRadius: 100,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16
  },
  filterCharacterBoxButtonApply: {
    backgroundColor: colors.PrimaryGreen
  },
  filterCharacterBoxButtonText: {
    fontFamily: 'DMMono_400Regular',
    fontSize: 14,
    textTransform: "uppercase",
    color: colors.PrimaryGreen
  },
  filterCharacterBoxButtonTextApply: {
    color: '#FFFFFF'
  }
});
