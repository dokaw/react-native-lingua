import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TAB_COUNT = 5;
const TAB_WIDTH = SCREEN_WIDTH / TAB_COUNT;
const CIRCLE_SIZE = 52;
const TAB_BAR_HEIGHT = 64;

const PRIMARY = "#6C4EF5";
const INACTIVE_COLOR = "#9CA3AF";

type IconLibrary = "Ionicons" | "MaterialCommunityIcons";

type TabConfig = {
  name: string;
  label: string;
  activeIcon: string;
  inactiveIcon: string;
  library: IconLibrary;
};

const TABS: TabConfig[] = [
  {
    name: "index",
    label: "Home",
    activeIcon: "home",
    inactiveIcon: "home-outline",
    library: "Ionicons",
  },
  {
    name: "learn",
    label: "Learn",
    activeIcon: "book",
    inactiveIcon: "book-outline",
    library: "Ionicons",
  },
  {
    name: "ai-teacher",
    label: "AI Teacher",
    activeIcon: "robot",
    inactiveIcon: "robot-outline",
    library: "MaterialCommunityIcons",
  },
  {
    name: "chat",
    label: "Chat",
    activeIcon: "chatbubble",
    inactiveIcon: "chatbubble-outline",
    library: "Ionicons",
  },
  {
    name: "profile",
    label: "Profile",
    activeIcon: "person",
    inactiveIcon: "person-outline",
    library: "Ionicons",
  },
];

function TabIcon({
  library,
  icon,
  color,
  size,
}: {
  library: IconLibrary;
  icon: string;
  color: string;
  size: number;
}) {
  if (library === "MaterialCommunityIcons") {
    return (
      <MaterialCommunityIcons name={icon as any} size={size} color={color} />
    );
  }
  return <Ionicons name={icon as any} size={size} color={color} />;
}

function circleLeft(index: number) {
  return index * TAB_WIDTH + (TAB_WIDTH - CIRCLE_SIZE) / 2;
}

export default function CustomTabBar({
  state,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const activeIndex = state.index;

  const circleX = useSharedValue(circleLeft(activeIndex));

  useEffect(() => {
    circleX.value = withSpring(circleLeft(activeIndex), {
      damping: 22,
      stiffness: 220,
      mass: 0.8,
    });
  }, [activeIndex, circleX]);

  const animatedCircleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: circleX.value }],
  }));

  return (
    <View style={styles.wrapper}>
      {/* Fixed-height row that contains the visible tab bar */}
      <View style={styles.tabRow}>
        {/* Sliding circle — absolutely positioned within tabRow */}
        <Animated.View style={[styles.activeCircle, animatedCircleStyle]} />

        {/* Tab items rendered on top of the circle */}
        {state.routes.map((route, index) => {
          const tab = TABS[index];
          const isActive = index === activeIndex;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isActive && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params as any);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tab}
              onPress={onPress}
              activeOpacity={0.75}
            >
              <TabIcon
                library={tab.library}
                icon={isActive ? tab.activeIcon : tab.inactiveIcon}
                color={isActive ? "#FFFFFF" : INACTIVE_COLOR}
                size={23}
              />
              {!isActive && (
                <Text style={styles.label} numberOfLines={1}>
                  {tab.label}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Safe area spacer */}
      <View style={{ height: insets.bottom, backgroundColor: "#FFFFFF" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    // Android elevation
    elevation: 8,
  },
  tabRow: {
    flexDirection: "row",
    height: TAB_BAR_HEIGHT,
    position: "relative",
  },
  activeCircle: {
    position: "absolute",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: PRIMARY,
    top: (TAB_BAR_HEIGHT - CIRCLE_SIZE) / 2,
    left: 0,
    zIndex: 0,
  },
  tab: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    zIndex: 1,
  },
  label: {
    fontSize: 11,
    fontFamily: "Poppins-Regular",
    color: INACTIVE_COLOR,
    lineHeight: 14,
  },
});
