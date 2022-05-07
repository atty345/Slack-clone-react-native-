import * as React from 'react';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { func } from './src/constants';

// root stack navigation
import RootStack from './src/navigation/RootStack';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function prepare() {
      try {
        // keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        // pre-load/cache assets: images, fonts, and videos
        await func.loadAssetsAsync();
      } catch (e) {
        // console.warn(e);
      } finally {
        // loading is complete, show app
        setIsLoading(false);
      }
    }

    prepare();
  }, []);

  React.useEffect(() => {
    console.log('wat');
    // if loading is completed
    if (isLoading === false) {
      // hide splash function
      const hideSplash = async () => SplashScreen.hideAsync();
      // hide Splash Screen and show app
      hideSplash();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />

      <RootStack />
    </React.Fragment>
  );
};

export default App;
