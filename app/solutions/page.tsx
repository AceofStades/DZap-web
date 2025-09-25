import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Server, Recycle, ArrowRight, CheckCircle, Users, Shield, Zap } from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise Organizations",
      description: "Comprehensive data destruction solutions for large organizations with complex IT infrastructures.",
      features: [
        "Centralized management dashboard",
        "Multi-location deployment support",
        "Advanced user role management",
        "Integration with existing IT systems",
        "24/7 enterprise support",
      ],
      cta: "Learn More",
    },
    {
      icon: Server,
      title: "Data Centers",
      description: "Specialized solutions for data center operators managing high-volume storage decommissioning.",
      features: [
        "Bulk erasure capabilities",
        "Automated workflow orchestration",
        "Real-time progress monitoring",
        "Compliance reporting at scale",
        "Hardware lifecycle management",
      ],
      cta: "Explore Features",
    },
    {
      icon: Recycle,
      title: "IT Asset Disposition",
      description: "Complete ITAD solutions ensuring secure data destruction throughout the asset lifecycle.",
      features: [
        "Chain of custody tracking",
        "Certificate of destruction",
        "Asset inventory management",
        "Regulatory compliance documentation",
        "Environmental impact reporting",
      ],
      cta: "Get Started",
    },
  ]

  const customSolutionFeatures = [
    {
      icon: Shield,
      title: "Security First",
      description: "Tailored security protocols to meet your specific compliance requirements.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Assigned customer success team to ensure optimal implementation and ongoing support.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Fast implementation with minimal disruption to your existing operations.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Solutions for Every Industry
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Whether you're a large enterprise, data center operator, or ITAD provider, we have the right secure
              erasure solution for your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                <CardHeader className="text-center pb-6">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <solution.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl text-card-foreground mb-4">{solution.title}</CardTitle>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="space-y-3 mb-8 flex-grow">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    {solution.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Trusted Across Industries</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organizations worldwide rely on SecureErase for their critical data destruction needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">85%</div>
              <p className="text-muted-foreground">Fortune 500 Companies</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">1,200+</div>
              <p className="text-muted-foreground">Data Centers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <p className="text-muted-foreground">ITAD Providers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">50M+</div>
              <p className="text-muted-foreground">Devices Erased</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Need a Custom Solution?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every organization has unique requirements. Our team works closely with you to design and implement a
                secure erasure solution that fits your specific needs, compliance requirements, and operational
                constraints.
              </p>

              <div className="space-y-6 mb-8">
                {customSolutionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Discuss Your Requirements
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">What's Included in Custom Solutions:</h3>
              <div className="space-y-4">
                {[
                  "Detailed requirements analysis",
                  "Custom workflow design",
                  "Integration planning and testing",
                  "Staff training and certification",
                  "Ongoing optimization and support",
                  "Compliance audit assistance",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-card-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how organizations like yours have transformed their data destruction processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-sm text-accent font-semibold mb-2">CASE STUDY</div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  Global Bank Reduces Compliance Costs by 60%
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn how a major financial institution streamlined their data destruction process across 200+
                  locations worldwide.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border text-foreground hover:bg-muted bg-transparent"
                >
                  Read Case Study
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-sm text-accent font-semibold mb-2">CASE STUDY</div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  Healthcare Network Achieves 100% HIPAA Compliance
                </h3>
                <p className="text-muted-foreground mb-4">
                  Discover how a healthcare organization ensured complete patient data protection during IT asset
                  retirement.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border text-foreground hover:bg-muted bg-transparent"
                >
                  Read Case Study
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-sm text-accent font-semibold mb-2">CASE STUDY</div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  Data Center Increases Throughput by 300%
                </h3>
                <p className="text-muted-foreground mb-4">
                  See how automation and bulk processing capabilities transformed a major data center's decommissioning
                  workflow.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border text-foreground hover:bg-muted bg-transparent"
                >
                  Read Case Study
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Find Your Perfect Solution?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
            Let our experts help you choose the right secure erasure solution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Compare Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
