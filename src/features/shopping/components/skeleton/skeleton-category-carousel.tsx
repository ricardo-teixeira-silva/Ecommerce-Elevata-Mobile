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

  return useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ["#b4bac0", "#e6eaee"],
    );

    return {
      backgroundColor,
    };
  });
};

const SkeletonBlock = () => {
  const anim = usePulseColor();

  return (
    <Animated.View className="w-20 items-center justify-start mr-4">
      <Animated.View style={anim} className="w-full h-16 rounded-2xl" />
      <Animated.View style={anim} className="mt-2 h-3 w-12 rounded-full" />
    </Animated.View>
  );
};

export const SkeletonCategoryCarousel = () => {
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
