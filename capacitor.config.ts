
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.144ebc5870a547d6b7dd589f97c7888b',
  appName: 'Namma-Hangal',
  webDir: 'dist',
  server: {
    url: 'https://144ebc58-70a5-47d6-b7dd-589f97c7888b.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined,
      keystorePassword: undefined,
      keystoreAliasPassword: undefined,
      signingType: undefined
    }
  }
};

export default config;
