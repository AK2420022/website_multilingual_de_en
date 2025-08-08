import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        ecosystem: "Ecosystem", 
        useCases: "Use Cases",
        contact: "Contact",
        getStarted: "Get Started"
      },
      
      // Hero Section
      hero: {
        badge: "AI-Powered Robotics Revolution",
        title: "Engineering",
        titleRobotic: "Robotic", 
        titleEcosystems: "Ecosystems",
        subtitle: "Discover the future of automation with our comprehensive robotics ecosystem. We are revolutionizing industries with AI-driven robotic solutions that adapt, learn, and excel.",
        exploreEcosystem: "Explore Ecosystem",
        viewUseCases: "View Use Cases"
      },
      
      // Ecosystem Section
      ecosystem: {
        badge: "Comprehensive Solutions",
        title: "Complete Robotics",
        titleEcosystem: "Ecosystem",
        subtitle: "Our integrated platform combines cutting-edge hardware, intelligent software, and seamless connectivity to deliver unparalleled automation solutions across industries.",
        
        aiIntelligence: {
          title: "AI Intelligence",
          description: "Advanced machine learning algorithms that enable robots to learn, adapt, and optimize their performance in real-time."
        },
        
        modularDesign: {
          title: "Modular Design", 
          description: "Flexible, scalable architecture that grows with your needs and integrates seamlessly with existing systems."
        },
        
        realTimeAnalytics: {
          title: "Real-time Analytics",
          description: "Comprehensive monitoring and insights dashboard that provides actionable data for continuous improvement."
        },
        
        cloudIntegration: {
          title: "Cloud Integration",
          description: "Secure, scalable cloud connectivity for remote monitoring, updates, and collaborative robot management."
        },
        
        roboticArms: {
          title: "Robotic Arms",
          description: "Precision-engineered robotic arms designed for complex tasks requiring accuracy and reliability."
        },
        
        autonomousVehicles: {
          title: "Autonomous Vehicles", 
          description: "Self-navigating robotic vehicles for material transport and logistics automation."
        }
      },
      
      // Easy Implementation Section
      implementation: {
        badge: "Simple Integration",
        title: "Easy to Implement,",
        titlePowerful: "Powerful to Scale",
        subtitle: "Get started with our robotics ecosystem in just a few steps. Our intuitive setup process and comprehensive documentation make implementation seamless.",
        
        step1: {
          title: "Connect & Configure",
          description: "Simple plug-and-play setup with automated device discovery and configuration."
        },
        
        step2: {
          title: "Customize & Deploy",
          description: "Use our visual programming interface to customize behaviors and deploy across your fleet."
        },
        
        step3: {
          title: "Monitor & Optimize", 
          description: "Real-time monitoring dashboard with AI-powered optimization recommendations."
        },
        
        getStarted: "Get Started Today"
      },
      
      // Use Cases Section
      useCases: {
        badge: "Industry Applications",
        title: "Transforming Industries with",
        titleIntelligent: "Intelligent Automation",
        subtitle: "Our robotics solutions are revolutionizing operations across diverse sectors, delivering measurable improvements in efficiency, safety, and productivity.",
        
        manufacturing: {
          title: "Manufacturing",
          description: "Precision assembly, quality control, and automated production lines that increase output while maintaining exceptional quality standards.",
          efficiency: "efficiency improvement",
          quality: "defect reduction",
          productivity: "productivity increase"
        },
        
        logistics: {
          title: "Logistics & Warehousing", 
          description: "Automated sorting, inventory management, and intelligent routing systems that streamline operations and reduce costs.",
          speed: "faster processing",
          accuracy: "inventory accuracy",
          cost: "cost reduction"
        },
        
        agriculture: {
          title: "Precision Agriculture",
          description: "Smart farming solutions including automated planting, harvesting, and crop monitoring for sustainable agriculture.",
          yield: "crop yield increase",
          water: "water usage reduction", 
          labor: "labor cost savings"
        }
      },
      
      // Contact Section
      contact: {
        badge: "Get In Touch",
        title: "Ready to Transform",
        titleYourBusiness: "Your Business?",
        subtitle: "Contact our team of experts to discuss how our robotics ecosystem can revolutionize your operations and drive unprecedented growth.",
        
        form: {
          fullName: "Full Name",
          fullNamePlaceholder: "Enter your full name",
          companyName: "Company Name", 
          companyNamePlaceholder: "Enter your company name",
          email: "Email Address",
          emailPlaceholder: "Enter your email address",
          phone: "Phone Number",
          phonePlaceholder: "Enter your phone number",
          industry: "Industry",
          industryPlaceholder: "Select your industry",
          message: "Message",
          messagePlaceholder: "Tell us about your automation needs...",
          submit: "Send Message",
          submitting: "Sending..."
        },
        
        industries: {
          manufacturing: "Manufacturing",
          automotive: "Automotive", 
          healthcare: "Healthcare",
          agriculture: "Agriculture",
          logistics: "Logistics",
          construction: "Construction",
          other: "Other"
        },
        
        info: {
          email: "hello@reksairobotics.com",
          phone: "+1 (555) 123-4567",
          address: "123 Innovation Drive, Tech Valley, CA 94025"
        }
      },
      
      // Footer
      footer: {
        copyright: "© 2025 Reksai Robotics. All rights reserved.",
        dataPrivacy: "Data Privacy",
        security: "Security",
        language: "Language"
      },
      
      // Language Selector
      language: {
        english: "English",
        german: "German", 
        japanese: "Japanese"
      }
    }
  },
  
  de: {
    translation: {
      // Navigation
      nav: {
        home: "Startseite",
        ecosystem: "Ökosystem",
        useCases: "Anwendungsfälle", 
        contact: "Kontakt",
        getStarted: "Loslegen"
      },
      
      // Hero Section
      hero: {
        badge: "KI-gestützte Robotik Revolution",
        title: "Entwicklung von",
        titleRobotic: "Robotik",
        titleEcosystems: "Ökosystemen", 
        subtitle: "Entdecken Sie die Zukunft der Automatisierung mit unserem umfassenden Robotik-Ökosystem. Wir revolutionieren Branchen mit KI-gesteuerten Robotiklösungen, die sich anpassen, lernen und übertreffen.",
        exploreEcosystem: "Ökosystem erkunden",
        viewUseCases: "Anwendungsfälle ansehen"
      },
      
      // Ecosystem Section
      ecosystem: {
        badge: "Umfassende Lösungen",
        title: "Vollständiges Robotik",
        titleEcosystem: "Ökosystem",
        subtitle: "Unsere integrierte Plattform kombiniert modernste Hardware, intelligente Software und nahtlose Konnektivität, um branchenübergreifend unvergleichliche Automatisierungslösungen zu liefern.",
        
        aiIntelligence: {
          title: "KI-Intelligenz",
          description: "Fortschrittliche maschinelle Lernalgorithmen, die Robotern ermöglichen, in Echtzeit zu lernen, sich anzupassen und ihre Leistung zu optimieren."
        },
        
        modularDesign: {
          title: "Modulares Design",
          description: "Flexible, skalierbare Architektur, die mit Ihren Anforderungen wächst und nahtlos in bestehende Systeme integriert."
        },
        
        realTimeAnalytics: {
          title: "Echtzeit-Analytik", 
          description: "Umfassendes Überwachungs- und Insights-Dashboard, das umsetzbare Daten für kontinuierliche Verbesserung liefert."
        },
        
        cloudIntegration: {
          title: "Cloud-Integration",
          description: "Sichere, skalierbare Cloud-Konnektivität für Remote-Überwachung, Updates und kollaboratives Robotermanagement."
        },
        
        roboticArms: {
          title: "Roboterarme", 
          description: "Präzisionsgefertigte Roboterarme für komplexe Aufgaben, die Genauigkeit und Zuverlässigkeit erfordern."
        },
        
        autonomousVehicles: {
          title: "Autonome Fahrzeuge",
          description: "Selbstnavigierende Roboterfahrzeuge für Materialtransport und Logistikautomatisierung."
        }
      },
      
      // Easy Implementation Section
      implementation: {
        badge: "Einfache Integration",
        title: "Einfach zu implementieren,",
        titlePowerful: "Kraftvoll zu skalieren",
        subtitle: "Beginnen Sie mit unserem Robotik-Ökosystem in nur wenigen Schritten. Unser intuitiver Einrichtungsprozess und die umfassende Dokumentation machen die Implementierung nahtlos.",
        
        step1: {
          title: "Verbinden & Konfigurieren",
          description: "Einfache Plug-and-Play-Einrichtung mit automatischer Geräteerkennung und -konfiguration."
        },
        
        step2: {
          title: "Anpassen & Bereitstellen",
          description: "Verwenden Sie unser visuelles Programmierinterface, um Verhalten anzupassen und in Ihrer Flotte bereitzustellen."
        },
        
        step3: {
          title: "Überwachen & Optimieren",
          description: "Echtzeit-Überwachungs-Dashboard mit KI-gestützten Optimierungsempfehlungen."
        },
        
        getStarted: "Heute loslegen"
      },
      
      // Use Cases Section  
      useCases: {
        badge: "Branchenanwendungen",
        title: "Branchen transformieren mit",
        titleIntelligent: "Intelligenter Automatisierung", 
        subtitle: "Unsere Robotiklösungen revolutionieren Abläufe in verschiedenen Sektoren und liefern messbare Verbesserungen in Effizienz, Sicherheit und Produktivität.",
        
        manufacturing: {
          title: "Fertigung",
          description: "Präzisionsmontage, Qualitätskontrolle und automatisierte Produktionslinien, die den Output steigern und gleichzeitig außergewöhnliche Qualitätsstandards beibehalten.",
          efficiency: "Effizienzsteigerung", 
          quality: "Defektreduzierung",
          productivity: "Produktivitätssteigerung"
        },
        
        logistics: {
          title: "Logistik & Lagerhaltung",
          description: "Automatisierte Sortierung, Bestandsverwaltung und intelligente Routingsysteme, die Abläufe optimieren und Kosten senken.",
          speed: "schnellere Verarbeitung",
          accuracy: "Bestandsgenauigkeit", 
          cost: "Kostenreduzierung"
        },
        
        agriculture: {
          title: "Präzisionslandwirtschaft",
          description: "Smart-Farming-Lösungen einschließlich automatisierter Pflanzung, Ernte und Pflanzenüberwachung für nachhaltige Landwirtschaft.",
          yield: "Ertragssteigerung",
          water: "Wasserverbrauchsreduzierung",
          labor: "Arbeitskosteneinsparung"
        }
      },
      
      // Contact Section
      contact: {
        badge: "Kontakt aufnehmen", 
        title: "Bereit, Ihr",
        titleYourBusiness: "Unternehmen zu transformieren?",
        subtitle: "Kontaktieren Sie unser Expertenteam, um zu besprechen, wie unser Robotik-Ökosystem Ihre Abläufe revolutionieren und beispielloses Wachstum vorantreiben kann.",
        
        form: {
          fullName: "Vollständiger Name",
          fullNamePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
          companyName: "Firmenname",
          companyNamePlaceholder: "Geben Sie Ihren Firmennamen ein", 
          email: "E-Mail-Adresse",
          emailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
          phone: "Telefonnummer",
          phonePlaceholder: "Geben Sie Ihre Telefonnummer ein",
          industry: "Branche",
          industryPlaceholder: "Wählen Sie Ihre Branche",
          message: "Nachricht",
          messagePlaceholder: "Erzählen Sie uns von Ihren Automatisierungsanforderungen...",
          submit: "Nachricht senden", 
          submitting: "Senden..."
        },
        
        industries: {
          manufacturing: "Fertigung",
          automotive: "Automobilindustrie",
          healthcare: "Gesundheitswesen", 
          agriculture: "Landwirtschaft",
          logistics: "Logistik",
          construction: "Bauwesen",
          other: "Andere"
        },
        
        info: {
          email: "hello@reksairobotics.com",
          phone: "+1 (555) 123-4567", 
          address: "123 Innovation Drive, Tech Valley, CA 94025"
        }
      },
      
      // Footer
      footer: {
        copyright: "© 2025 Reksai Robotics. Alle Rechte vorbehalten.",
        dataPrivacy: "Datenschutz",
        security: "Sicherheit", 
        language: "Sprache"
      },
      
      // Language Selector
      language: {
        english: "Englisch",
        german: "Deutsch",
        japanese: "Japanisch"
      }
    }
  },
  
  ja: {
    translation: {
      // Navigation
      nav: {
        home: "ホーム",
        ecosystem: "エコシステム",
        useCases: "使用事例", 
        contact: "お問い合わせ",
        getStarted: "開始する"
      },
      
      // Hero Section  
      hero: {
        badge: "AI駆動ロボティクス革命",
        title: "ロボティック",
        titleRobotic: "エコシステムの",
        titleEcosystems: "エンジニアリング",
        subtitle: "包括的なロボティクスエコシステムで自動化の未来を発見してください。適応し、学習し、優秀なAI駆動ロボティクスソリューションで産業を革命化しています。",
        exploreEcosystem: "エコシステムを探索",
        viewUseCases: "使用事例を見る"
      },
      
      // Ecosystem Section
      ecosystem: {
        badge: "包括的ソリューション", 
        title: "完全なロボティクス",
        titleEcosystem: "エコシステム",
        subtitle: "当社の統合プラットフォームは、最先端のハードウェア、インテリジェントソフトウェア、シームレスな接続性を組み合わせ、業界全体で比類のない自動化ソリューションを提供します。",
        
        aiIntelligence: {
          title: "AI知能",
          description: "ロボットがリアルタイムで学習、適応、パフォーマンス最適化を可能にする高度な機械学習アルゴリズム。"
        },
        
        modularDesign: {
          title: "モジュラーデザイン",
          description: "お客様のニーズに合わせて成長し、既存システムにシームレスに統合する柔軟でスケーラブルなアーキテクチャ。" 
        },
        
        realTimeAnalytics: {
          title: "リアルタイム分析",
          description: "継続的改善のための実行可能なデータを提供する包括的な監視とインサイトダッシュボード。"
        },
        
        cloudIntegration: {
          title: "クラウド統合", 
          description: "リモート監視、更新、協調ロボット管理のための安全でスケーラブルなクラウド接続。"
        },
        
        roboticArms: {
          title: "ロボットアーム",
          description: "精度と信頼性を要求する複雑なタスクのために精密に設計されたロボットアーム。"
        },
        
        autonomousVehicles: {
          title: "自律走行車両",
          description: "材料輸送と物流自動化のための自己ナビゲーションロボット車両。" 
        }
      },
      
      // Easy Implementation Section
      implementation: {
        badge: "シンプルな統合",
        title: "実装が簡単、",
        titlePowerful: "スケールが強力", 
        subtitle: "わずか数ステップで当社のロボティクスエコシステムを開始できます。直感的なセットアップ・プロセスと包括的なドキュメントにより、実装がシームレスになります。",
        
        step1: {
          title: "接続・設定",
          description: "自動デバイス検出と設定によるシンプルなプラグアンドプレイセットアップ。"
        },
        
        step2: {
          title: "カスタマイズ・展開",
          description: "ビジュアルプログラミングインターフェースを使用して動作をカスタマイズし、フリート全体に展開。"
        },
        
        step3: {
          title: "監視・最適化",
          description: "AI搭載最適化推奨事項を含むリアルタイム監視ダッシュボード。" 
        },
        
        getStarted: "今すぐ開始"
      },
      
      // Use Cases Section
      useCases: {
        badge: "産業アプリケーション",
        title: "インテリジェント",
        titleIntelligent: "オートメーションで産業を変革", 
        subtitle: "当社のロボティクスソリューションは多様な分野で運営を革命化し、効率性、安全性、生産性の測定可能な改善を提供しています。",
        
        manufacturing: {
          title: "製造業",
          description: "出力を増加させながら優れた品質基準を維持する精密組立、品質管理、自動生産ライン。",
          efficiency: "効率改善",
          quality: "欠陥削減", 
          productivity: "生産性向上"
        },
        
        logistics: {
          title: "物流・倉庫業",
          description: "運営を合理化し、コストを削減する自動仕分け、在庫管理、インテリジェントルーティングシステム。",
          speed: "高速処理",
          accuracy: "在庫精度",
          cost: "コスト削減"
        },
        
        agriculture: {
          title: "精密農業", 
          description: "持続可能な農業のための自動植付け、収穫、作物監視を含むスマート農業ソリューション。",
          yield: "作物収量増加",
          water: "水使用量削減",
          labor: "労働コスト削減"
        }
      },
      
      // Contact Section
      contact: {
        badge: "お問い合わせ",
        title: "ビジネスを", 
        titleYourBusiness: "変革する準備はできていますか？",
        subtitle: "当社のロボティクスエコシステムがお客様の運営をどのように革命化し、前例のない成長を推進できるかについて、専門家チームにお問い合わせください。",
        
        form: {
          fullName: "氏名",
          fullNamePlaceholder: "氏名を入力してください",
          companyName: "会社名", 
          companyNamePlaceholder: "会社名を入力してください",
          email: "メールアドレス",
          emailPlaceholder: "メールアドレスを入力してください",
          phone: "電話番号",
          phonePlaceholder: "電話番号を入力してください",
          industry: "業界",
          industryPlaceholder: "業界を選択してください",
          message: "メッセージ",
          messagePlaceholder: "自動化のニーズについてお聞かせください...",
          submit: "メッセージを送信", 
          submitting: "送信中..."
        },
        
        industries: {
          manufacturing: "製造業",
          automotive: "自動車",
          healthcare: "ヘルスケア",
          agriculture: "農業", 
          logistics: "物流",
          construction: "建設",
          other: "その他"
        },
        
        info: {
          email: "hello@reksairobotics.com",
          phone: "+1 (555) 123-4567",
          address: "123 Innovation Drive, Tech Valley, CA 94025"
        }
      },
      
      // Footer
      footer: {
        copyright: "© 2025 Reksai Robotics. 無断複写・転載禁止。",
        dataPrivacy: "データプライバシー", 
        security: "セキュリティ",
        language: "言語"
      },
      
      // Language Selector
      language: {
        english: "英語",
        german: "ドイツ語",
        japanese: "日本語"
      }
    }
  }
};

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;