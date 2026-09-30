import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import {
  Users,
  Headphones,
  PhoneCall,
  Settings,
  TrendingUp,
  MessageSquare,
  BarChart3,
  Briefcase,
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

// Reusable Animated Card Component
const AnimatedCard = ({ children, delay = 0, style = {} }) => {
  const translateY = useRef(new Animated.Value(50)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 600,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, [delay, opacity, translateY]);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default function App() {
  const dashboardData = [
    {
      id: '1',
      title: 'Customer Base & Lifecycle Analytics',
      desc: 'Tracks unit economics, customer acquisition funnels, retention, and overall CLM metrics.',
      icon: Users,
      color: '#6366F1', // Indigo
      bgColor: '#EEF2FF',
    },
    {
      id: '2',
      title: 'Telesales & KAM Performance Analytics',
      desc: 'Evaluates sales representative efficiency, Key Account Management metrics, conversion rates, and revenue targets.',
      icon: Headphones,
      color: '#3B82F6', // Blue
      bgColor: '#EFF6FF',
    },
    {
      id: '3',
      title: 'Call-Center & Facebook Performance Analytics',
      desc: 'Monitors incoming customer inquiries, social ad campaign ROI, acquisition channels, and lead performance.',
      icon: PhoneCall,
      color: '#06B6D4', // Cyan
      bgColor: '#ECFEFF',
    },
    {
      id: '4',
      title: 'Back Office Operations Analytics',
      desc: 'Measures operational turnaround time, order processing efficiency, supply chain bottlenecks, and workflow health.',
      icon: Settings,
      color: '#10B981', // Emerald
      bgColor: '#ECFDF5',
    },
    {
      id: '5',
      title: 'Growth & Business Performance Analytics',
      desc: 'Analyzes top-line revenue trends, business scaling metrics, profitability, and key performance indicators (KPIs).',
      icon: TrendingUp,
      color: '#8B5CF6', // Violet
      bgColor: '#F5F3FF',
    },
    {
      id: '6',
      title: 'Voice of Customer & Complaint Analytics',
      desc: 'Assesses customer satisfaction (CSAT/NPS), common complaint categories, ticket resolution times, and feedback trends.',
      icon: MessageSquare,
      color: '#F43F5E', // Rose
      bgColor: '#FFF1F2',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* WORK SUMMARY SECTION */}
        <AnimatedCard delay={100} style={styles.summaryCard}>
          <View style={styles.summaryBadge}>
            <Briefcase size={14} color="#6366F1" />
            <Text style={styles.summaryBadgeText}>WORK SUMMARY</Text>
          </View>
          <Text style={styles.summaryText}>
            Strategic breakdown of Customer Lifecycle Management (CLM), unit
            economics, customer acquisition funnels, and retention analytics.
          </Text>
        </AnimatedCard>

        {/* METABASE DASHBOARD SECTION */}
        <View style={styles.dashboardSection}>
          <AnimatedCard delay={250} style={styles.headerContainer}>
            <View style={styles.headerLeft}>
              <BarChart3 size={24} color="#4F46E5" />
              <Text style={styles.headerTitle}>Metabase Dashboard</Text>
            </View>
            <Text style={styles.headerSubtitle}>
              Key operational & business growth modules
            </Text>
          </AnimatedCard>

          {/* DASHBOARD CARDS GRID */}
          <View style={styles.grid}>
            {dashboardData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <AnimatedCard
                  key={item.id}
                  delay={350 + index * 120}
                  style={[
                    styles.itemCard,
                    { borderLeftColor: item.color },
                  ]}
                >
                  <View style={styles.cardHeader}>
                    <View
                      style={[
                        styles.iconContainer,
                        { backgroundColor: item.bgColor },
                      ]}
                    >
                      <IconComponent size={22} color={item.color} />
                    </View>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                  </View>
                  <Text style={styles.cardDesc}>{item.desc}</Text>
                </AnimatedCard>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  summaryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },
  summaryBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6366F1',
    letterSpacing: 0.8,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334155',
    lineHeight: 24,
  },
  dashboardSection: {
    gap: 16,
  },
  headerContainer: {
    marginBottom: 8,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
  },
  grid: {
    gap: 16,
  },
  itemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E293B',
    flex: 1,
    lineHeight: 20,
  },
  cardDesc: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 20,
  },
});
