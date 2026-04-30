import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";

import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // <-- Ini perbaikannya

const { width } = Dimensions.get("window");
const Tab = createBottomTabNavigator();

// ==========================================
// 1. DATA STATIS
// ==========================================
const DATA = {
  hero: {
    title1: "WEB DEVELOPER",
    title2: "& PROGRAMMER",
    name: "Sandro Mahesa",
    location: "Malang, Indonesia",
    image: require("../assets/images/sandro.png"),
  },
  about: {
    text1:
      "I am a web developer with 3 years of experience in the world of programming. I am experienced in developing websites for brands from several industries.",
    text2:
      "My expertise spans across both front-end and back-end ecosystems using Laravel, CodeIgniter, Tailwind CSS, and React Native.",
  },
  projects: [
    {
      id: "1",
      title: "E-Commerce App",
      tech: ["Laravel", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500",
    },
    {
      id: "2",
      title: "Company Profile",
      tech: ["React", "CSS"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
    },
  ],
  skills: [
    { id: "1", name: "Laravel", category: "Backend", percent: "90%" },
    { id: "2", name: "React Native", category: "Mobile", percent: "85%" },
    { id: "3", name: "Tailwind CSS", category: "Frontend", percent: "95%" },
    { id: "4", name: "PHP Native", category: "Backend", percent: "80%" },
  ],
  experience: [
    {
      id: "1",
      year: "2023 - Present",
      role: "Fullstack Developer",
      company: "Dromaa Tech",
    },
    {
      id: "2",
      year: "2021 - 2023",
      role: "Frontend Web Developer",
      company: "Creative Agency",
    },
  ],
  education: [
    {
      id: "1",
      year: "2019 - 2023",
      degree: "Bachelor of Computer Science",
      school: "Universitas Brawijaya",
    },
    {
      id: "2",
      year: "2016 - 2019",
      degree: "Software Engineering",
      school: "SMK Telkom Malang",
    },
  ],
};

// ==========================================
// 2. KOMPONEN HALAMAN
// ==========================================
function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.heroSection}>
        <Text style={styles.heroTitleMain}>{DATA.hero.title1}</Text>
        <Text style={styles.heroTitleSub}>{DATA.hero.title2}</Text>
        <View style={styles.heroInfoRow}>
          <View>
            <Text style={styles.labelSmall}>BASED IN</Text>
            <Text style={styles.labelValue}>{DATA.hero.location}</Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.labelSmall}>KNOWN AS</Text>
            <Text style={styles.labelValue}>{DATA.hero.name}</Text>
          </View>
        </View>
        <View style={styles.domeContainer}>
          <Image source={DATA.hero.image} style={styles.domeImage} />
        </View>
      </View>
      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>
          ABOUT <Text style={styles.textOutline}>ME.</Text>
        </Text>
        <Text style={styles.aboutText}>{DATA.about.text1}</Text>
        <Text style={[styles.aboutText, { color: "#7BBDE8", marginTop: 15 }]}>
          {DATA.about.text2}
        </Text>
      </View>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

function ProjectsScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.pagePadding}>
        <Text style={styles.sectionTitle}>
          MY <Text style={styles.textOutline}>PROJECTS.</Text>
        </Text>
        {DATA.projects.map((p) => (
          <View key={p.id} style={styles.card}>
            <Image source={{ uri: p.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{p.title}</Text>
              <View style={styles.badgeRow}>
                {p.tech.map((tech, i) => (
                  <View key={tech} style={styles.badge}>
                    <Text style={styles.badgeText}>{tech}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function SkillsScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.pagePadding}>
        <Text style={styles.sectionTitle}>
          MY <Text style={styles.textOutline}>SKILLS.</Text>
        </Text>
        <View style={styles.gridContainer}>
          {DATA.skills.map((s) => (
            <View key={s.id} style={styles.gridCard}>
              <Text style={styles.cardTitle}>{s.name}</Text>
              <View style={[styles.badgeRow, { marginTop: 10 }]}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{s.percent}</Text>
                </View>
                <Text style={styles.labelSmall}>{s.category}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

function ExperienceScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.pagePadding}>
        <Text style={styles.sectionTitle}>
          WORK <Text style={styles.textOutline}>EXPERIENCE.</Text>
        </Text>
        {DATA.experience.map((e) => (
          <View key={e.id} style={styles.listCard}>
            <Text style={styles.labelSmall}>{e.year}</Text>
            <Text style={styles.cardTitle}>{e.role}</Text>
            <Text style={styles.aboutText}>{e.company}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function EducationScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.pagePadding}>
        <Text style={styles.sectionTitle}>
          MY <Text style={styles.textOutline}>EDUCATION.</Text>
        </Text>
        {DATA.education.map((e) => (
          <View key={e.id} style={styles.listCard}>
            <Text style={styles.labelSmall}>{e.year}</Text>
            <Text style={styles.cardTitle}>{e.degree}</Text>
            <Text style={styles.aboutText}>{e.school}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// ==========================================
// 3. NAVIGASI UTAMA
// ==========================================
export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0B1120" />

      {/* Bungkus NavigationContainer dengan pohon independen sesuai permintaan error */}
      <NavigationIndependentTree>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle: {
                backgroundColor: "#001D39",
                borderTopColor: "rgba(255,255,255,0.05)",
                paddingBottom: 5,
                paddingTop: 5,
                height: 60,
              },
              tabBarActiveTintColor: "#7BBDE8",
              tabBarInactiveTintColor: "#6EA2B3",
              tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },
              tabBarIcon: ({ focused, color }) => {
                // Perbaikan TypeScript: Tambahkan ': any' agar tidak diprotes
                let iconName: any;

                if (route.name === "Home")
                  iconName = focused ? "home" : "home-outline";
                else if (route.name === "Projects")
                  iconName = focused ? "code-slash" : "code-slash-outline";
                else if (route.name === "Skills")
                  iconName = focused ? "flash" : "flash-outline";
                else if (route.name === "Experience")
                  iconName = focused ? "briefcase" : "briefcase-outline";
                else if (route.name === "Education")
                  iconName = focused ? "school" : "school-outline";

                return <Ionicons name={iconName} size={24} color={color} />;
              },
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Projects" component={ProjectsScreen} />
            <Tab.Screen name="Skills" component={SkillsScreen} />
            <Tab.Screen name="Experience" component={ExperienceScreen} />
            <Tab.Screen name="Education" component={EducationScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    </SafeAreaView>
  );
}

// ==========================================
// 4. GAYA (STYLING)
// ==========================================
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#0B1120" },
  container: { flex: 1, backgroundColor: "#0B1120" },
  pagePadding: { paddingHorizontal: 25, paddingTop: 40, paddingBottom: 40 },
  heroSection: { paddingTop: 40, paddingHorizontal: 20, alignItems: "center" },
  heroTitleMain: {
    fontSize: 42,
    fontWeight: "900",
    color: "#ffffff",
    textAlign: "center",
    letterSpacing: -1,
  },
  heroTitleSub: {
    fontSize: 38,
    fontWeight: "900",
    color: "transparent",
    textShadowColor: "rgba(255, 255, 255, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    textAlign: "center",
    marginTop: -5,
  },
  heroInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 10,
    zIndex: 10,
  },
  domeContainer: {
    width: 280, // Lebar tetap agar presisi
    height: 380, // Tinggi gambar
    backgroundColor: "#0A4174",
    borderTopLeftRadius: 140, // WAJIB setengah dari width (280/2) agar lengkung sempurna
    borderTopRightRadius: 140, // WAJIB setengah dari width (280/2)
    overflow: "hidden",
    marginTop: 40, // Jarak aman dari teks 'BASED IN' di atasnya
    alignSelf: "center", // Taruh tepat di tengah layar
    borderWidth: 1,
    borderColor: "rgba(123, 189, 232, 0.4)",
    shadowColor: "#0A4174", // Tambahan efek bayangan
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10, // Bayangan khusus Android
  },
  domeImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Mencegah gambar menjadi gepeng/tertarik
    opacity: 0.9,
  },
  sectionTitle: {
    fontSize: 38,
    fontWeight: "900",
    color: "#ffffff",
    marginBottom: 20,
    letterSpacing: -1,
  },
  textOutline: { color: "#7BBDE8" },
  aboutSection: { paddingHorizontal: 25, marginTop: 40 },
  aboutText: {
    color: "#BDD8E9",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "500",
  },
  labelSmall: {
    color: "#6EA2B3",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 4,
    textTransform: "uppercase",
  },
  labelValue: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  card: {
    backgroundColor: "rgba(0, 29, 57, 0.4)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 25,
  },
  cardImage: { width: "100%", height: 180, backgroundColor: "#0A4174" },
  cardContent: { padding: 20 },
  cardTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#ffffff",
    marginBottom: 10,
  },
  badgeRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "center" },
  badge: {
    backgroundColor: "#BDD8E9",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  badgeText: { color: "#001D39", fontSize: 10, fontWeight: "bold" },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridCard: {
    width: "47%",
    backgroundColor: "rgba(0, 29, 57, 0.6)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
  },
  listCard: {
    backgroundColor: "rgba(0, 29, 57, 0.4)",
    borderLeftWidth: 3,
    borderLeftColor: "#7BBDE8",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
  },
});
