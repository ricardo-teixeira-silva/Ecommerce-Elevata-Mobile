import { Text, TouchableOpacity, View } from "react-native";

type TitleActionProps = {
  title: string;
  actionLabel: string;
  badgeTitle?: string;
  onPress?: () => void;
  children: React.ReactNode;
};

export const TitleAction = ({
  title,
  actionLabel,
  badgeTitle,
  onPress,
  children,
}: TitleActionProps) => {
  return (
    <View className="gap-2">
      <View className="flex-row justify-between">
        <View className="flex-row items-center justify-center gap-2">
          <Text className="leading-10 text-color_black text-lg font-semibold">
            {title}
          </Text>
          {badgeTitle && (
            <Text className="bg-[#BA1A1A] text-white font-inter_bold text-[10px] px-3 py-1 rounded-full">
              {badgeTitle.toUpperCase()}
            </Text>
          )}
        </View>
        <TouchableOpacity
          className="h-12 items-center justify-center"
          onPress={onPress}
        >
          <Text className="font-inter_medium text-color_blue_strong text-sm">
            {actionLabel}
          </Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};
