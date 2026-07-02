import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const TAB_BAR_BOTTOM_OFFSET = 50;

  return (
    <SafeAreaView
      className="flex-1 bg-color_container"
      edges={["left", "right", "bottom"]}
      style={{ bottom: insets.bottom + TAB_BAR_BOTTOM_OFFSET }}
    >
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          scrollEnabled
          contentContainerStyle={{ flexGrow: 0 }}
          automaticallyAdjustKeyboardInsets
          scrollEventThrottle={16}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 px-5 py-4 gap-6">{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
