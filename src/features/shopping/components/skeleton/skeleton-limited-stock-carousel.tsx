import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const SKELETON_ITEMS = Array.from({ length: 6 });

const usePulseColor = () => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 900,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true,
    );
  }, []);

  return useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      ["#b4bac0", "#e6eaee"],
    ),
  }));
};

const SkeletonBlock = () => {
  const anim = usePulseColor();

  return (
    <View className="mr-4 w-[80%] p-4 bg-white rounded-3xl">
      <Animated.View style={anim} className="w-full h-[140px] rounded-3xl" />
      <View className="mt-4 gap-2">
        <Animated.View style={anim} className="h-4 w-24 rounded-full" />
        <Animated.View style={anim} className="h-3 w-16 rounded-full" />
      </View>
      <View className="mt-5 flex-row justify-between items-end">
        <Animated.View style={anim} className="h-6 w-20 rounded-full" />
        <View className="items-end gap-2">
          <Animated.View style={anim} className="h-3 w-20 rounded-full" />
          <Animated.View style={anim} className="h-[6px] w-14 rounded-full" />
        </View>
      </View>
    </View>
  );
};

export const SkeletonLimitedStockCarousel = () => {
  return (
    <View className="gap-2">
      <View className="flex-row">
        {SKELETON_ITEMS.map((_, index) => (
          <SkeletonBlock key={index} />
        ))}
      </View>
    </View>
  );
};
