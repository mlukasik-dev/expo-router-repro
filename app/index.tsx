import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import { useMemo } from "react";
import { Button, View } from "react-native";

const firstRandomNumber = Math.floor(Math.random() * 1000) + 1;

export default function HomeScreen() {
  const currentRandomNumber = +(useSearchParams().get("rand") ?? 0);

  const nextRandomNumber = useMemo(() => {
    return Math.floor(Math.random() * 1000) + 1;
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>
        Random number: {currentRandomNumber || firstRandomNumber}
      </ThemedText>

      <Link
        href={{ pathname: "/", params: { rand: nextRandomNumber } }}
        push
        asChild
      >
        <Button title="Get a new random number" />
      </Link>
    </View>
  );
}
