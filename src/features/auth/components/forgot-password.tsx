import { Text, TouchableOpacity } from "react-native";

type ForgotPasswordProps = {
  onPress?: () => void;
};

export const ForgotPassword = ({ onPress }: ForgotPasswordProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="items-end">
      <Text className="text-xs text-color_blue font-inter_medium">
        Esqueceu a senha?
      </Text>
    </TouchableOpacity>
  );
};
