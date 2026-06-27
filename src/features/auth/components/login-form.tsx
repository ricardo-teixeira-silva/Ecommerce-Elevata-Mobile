import { Button, Input } from "@/src/shared/components";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Keyboard, View } from "react-native";
import { FormDataTypes, formSchema } from "../schemas/login.schema";
import { useAuth } from "../screens/login/useAuth.model";
import { FeedbackModal } from "./feedback-modal";
import { ForgotPassword } from "./forgot-password";

export const LoginForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [tempLoading, setTempLoading] = useState(false);
  const { login } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormDataTypes>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormDataTypes) => {
    Keyboard.dismiss();
    console.log(data);
    setTempLoading(true);
    setTimeout(() => {
      setTempLoading(false);
      setShowModal(true);
    }, 3000);
  };

  return (
    <View className="flex-1 gap-4">
      <Input
        name="email"
        control={control}
        placeholder="E-mail ou usuário"
        placeholderTextColor="#737687"
        iconLeft={<FontAwesome name="envelope-o" size={24} color="#737687" />}
      />
      <Input
        name="password"
        control={control}
        secureTextEntry
        placeholder="Sua senha"
        placeholderTextColor="#737687"
        iconLeft={<Octicons name="shield-lock" size={24} color="#737687" />}
      />
      <ForgotPassword />
      <Button
        title="Entrar"
        loading={tempLoading}
        textLoading="Autenticando..."
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
      <FeedbackModal
        modalVisible={showModal}
        onCloseModal={() => setShowModal((prev) => !prev)}
      />
    </View>
  );
};
