import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DatabaseInitializer } from "../providers/DatabaseInitializer";
import { FontProvider } from "../providers/FontProvider";
import { NetworkProvider } from "../providers/NetworkProvider";
import "../styles/global.css";

const client = new QueryClient();

export default function Layout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={client}>
        <DatabaseInitializer>
          <FontProvider>
            <NetworkProvider>
              <Stack screenOptions={{ headerShown: false }} />
            </NetworkProvider>
          </FontProvider>
        </DatabaseInitializer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
