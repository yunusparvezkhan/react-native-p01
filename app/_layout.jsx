import { Slot } from 'expo-router'
import { NativeWindStyleSheet } from "nativewind"

const RootLayout = () => {
  return (
    <>
      <Slot />
    </>
  )
}

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default RootLayout