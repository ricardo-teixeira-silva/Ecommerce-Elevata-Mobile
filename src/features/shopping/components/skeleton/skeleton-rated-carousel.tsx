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
    <View className="mr-4 w-[170px] p-4 bg-white rounded-3xl">
      <View className="items-center">
        <Animated.View style={anim} className="w-full h-[140px] rounded-3xl" />
        <Animated.View style={anim} className="mt-2 h-4 w-24 rounded-full" />
        <Animated.View style={anim} className="mt-1 h-3 w-32 rounded-full" />
        <Animated.View style={anim} className="mt-2 h-5 w-16 rounded-full" />
      </View>
    </View>
  );
};

export const SkeletonRatedCarousel = () => {
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
