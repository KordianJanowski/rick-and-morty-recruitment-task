import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/stacks/Main';
import { useFonts } from '@expo-google-fonts/dm-mono/useFonts';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { DMMono_400Regular, DMMono_500Medium } from '@expo-google-fonts/dm-mono';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App(): React.JSX.Element {
  const [fontsLoaded] = useFonts({
    DMMono_400Regular,
    DMMono_500Medium,
    Inter_500Medium,
    Inter_400Regular,
  });

  if(!fontsLoaded) {
    return <></>
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </QueryClientProvider>
    );

  }
}

export default App;
