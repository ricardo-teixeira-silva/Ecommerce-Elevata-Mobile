import { Slot } from "expo-router";
import { FontProvider } from "../providers/FontProvider";
import "../styles/global.css";

export default function Layout() {
  return (
    <FontProvider>
      <Slot />
    </FontProvider>
  );
}
