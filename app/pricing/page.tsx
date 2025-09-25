import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, ArrowRight, HelpCircle } from "lucide-react"

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "Basic",
      price: "$299",
      period: "/month",
      description: "Perfect for small to medium businesses with basic erasure needs.",
      features: [
        "Up to 100 devices per month",
        "Standard erasure methods",
        "Basic reporting",
        "Email support",
        "Certificate generation",
        "Single user account",
      ],
      notIncluded: ["Advanced compliance reporting", "API access", "Priority support", "Custom workflows"],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Enterprise",
      price: "$899",
      period: "/month",
      description: "Comprehensive solution for large organizations with advanced requirements.",
      features: [
        "Unlimited devices",
        "All erasure methods (DoD, NIST)",
        "Advanced compliance reporting",
        "24/7 priority support",
        "API access",
        "Multi-user management",
        "Custom workflows",
        "Audit trail integration",
        "Bulk operations",
      ],
      notIncluded: ["On-premise deployment", "Custom integrations"],
      cta: "Contact Sales",
      popular: true,
    },
    {
      name: "Custom",
      price: "Contact Us",
      period: "",
      description: "Tailored solutions for unique requirements and enterprise-scale deployments.",
      features: [
        "Everything in Enterprise",
        "On-premise deployment",
        "Custom integrations",
        "Dedicated account manager",
        "Custom SLA agreements",
        "Training and certification",
        "White-label options",
        "Advanced analytics",
      ],
      notIncluded: [],
      cta: "Get Quote",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "What erasure standards are supported?",
      answer:
        "SecureErase supports all major standards including DoD 5220.22-M, NIST 800-88, and custom patterns. Our Enterprise and Custom plans include access to all methods.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for our Basic plan. No credit card required. You can erase up to 10 devices during the trial period.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Absolutely. You can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.",
    },
    {
      question: "What kind of support is included?",
      answer:
        "Basic plans include email support with 24-hour response time. Enterprise plans include 24/7 priority support with phone and chat options.",
    },
    {
      question: "Do you offer volume discounts?",
      answer:
        "Yes, we offer significant discounts for high-volume customers and multi-year contracts. Contact our sales team for custom pricing.",
    },
    {
      question: "Is the software cloud-based or on-premise?",
      answer:
        "Our Basic and Enterprise plans are cloud-based. On-premise deployment is available with our Custom plan for organizations with specific security requirements.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Choose the plan that fits your organization's needs. All plans include our core secure erasure technology
              with varying levels of features and support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`bg-card border-border relative ${
                  tier.popular ? "ring-2 ring-accent shadow-lg scale-105" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-card-foreground mb-2">{tier.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-card-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <p className="text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </div>
                    ))}
                    {tier.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3 opacity-50">
                        <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${
                      tier.popular
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Compare Plans</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed comparison of features across all pricing tiers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Features</th>
                  <th className="text-center py-4 px-6 font-semibold text-foreground">Basic</th>
                  <th className="text-center py-4 px-6 font-semibold text-foreground">Enterprise</th>
                  <th className="text-center py-4 px-6 font-semibold text-foreground">Custom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { feature: "Monthly device limit", basic: "100", enterprise: "Unlimited", custom: "Unlimited" },
                  { feature: "Erasure methods", basic: "Standard", enterprise: "All methods", custom: "All methods" },
                  { feature: "Compliance reporting", basic: "Basic", enterprise: "Advanced", custom: "Advanced" },
                  { feature: "API access", basic: "✗", enterprise: "✓", custom: "✓" },
                  { feature: "Priority support", basic: "✗", enterprise: "✓", custom: "✓" },
                  { feature: "Custom workflows", basic: "✗", enterprise: "✓", custom: "✓" },
                  { feature: "On-premise deployment", basic: "✗", enterprise: "✗", custom: "✓" },
                  { feature: "Dedicated account manager", basic: "✗", enterprise: "✗", custom: "✓" },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-muted/50">
                    <td className="py-4 px-6 text-foreground">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">{row.basic}</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">{row.enterprise}</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">{row.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our pricing and features.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <HelpCircle className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-card-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Trusted by Organizations Worldwide</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime SLA</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
              <p className="text-sm text-muted-foreground">Enterprise Support</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">SOC 2</div>
              <p className="text-sm text-muted-foreground">Type II Certified</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">14-Day</div>
              <p className="text-sm text-muted-foreground">Free Trial</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
            Start your free trial today or speak with our sales team to find the perfect plan for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
