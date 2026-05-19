import * as WebBrowser from "expo-web-browser";

// Completes the OAuth flow by passing the auth code back to the initiating screen
WebBrowser.maybeCompleteAuthSession();

export default function OAuthCallback() {
  return null;
}
