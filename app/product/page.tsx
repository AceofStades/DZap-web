import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Zap,
  FileCheck,
  Database,
  CheckCircle,
  ArrowRight,
  Settings,
  Search,
  ShieldCheck,
  Award,
} from "lucide-react"

export default function ProductPage() {
  const features = [
    {
      icon: Shield,
      title: "Full Drive Erasure",
      description:
        "Complete data destruction across all sectors of storage devices with military-grade security standards.",
    },
    {
      icon: Zap,
      title: "SSD/NVMe Support",
      description: "Optimized erasure methods specifically designed for modern solid-state drives and NVMe technology.",
    },
    {
      icon: FileCheck,
      title: "Compliance Reporting",
      description:
        "Comprehensive audit trails and tamper-evident certificates for regulatory compliance documentation.",
    },
    {
      icon: Settings,
      title: "Automation Ready",
      description: "Seamless integration with existing IT workflows and automated scheduling capabilities.",
    },
    {
      icon: Database,
      title: "Scalability for Data Centers",
      description: "Enterprise-grade performance capable of handling thousands of drives simultaneously.",
    },
    {
      icon: Award,
      title: "Certificates & Audit Trails",
      description: "Detailed documentation and certificates proving complete data destruction for compliance.",
    },
  ]

  const workflowSteps = [
    {
      step: 1,
      title: "Detect Drives",
      description: "Automatically scan and identify all storage devices connected to your system.",
      icon: Search,
    },
    {
      step: 2,
      title: "Erase Securely",
      description: "Apply certified erasure methods based on your security and compliance requirements.",
      icon: Shield,
    },
    {
      step: 3,
      title: "Verify Data Wipe",
      description: "Perform comprehensive verification to ensure complete data destruction.",
      icon: CheckCircle,
    },
    {
      step: 4,
      title: "Issue Certificate",
      description: "Generate tamper-evident certificates and detailed audit reports for compliance.",
      icon: FileCheck,
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              The Most Trusted Drive Erasure Solution
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Enterprise-grade secure data destruction with military-level security standards. Ensure complete data
              elimination with full compliance documentation and audit trails for regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-accent/10 bg-transparent">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Product List Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Products</h2>
            <p className="text-lg text-muted-foreground">
              Complete suite of secure data erasure solutions for every need
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="#"
              className="group flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
            >
              <div>
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  DZap Drive Eraser
                </h3>
                <p className="text-muted-foreground mt-1">Complete drive erasure for HDDs, SSDs, and NVMe drives</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="#"
              className="group flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
            >
              <div>
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  DZap Drive Verifier
                </h3>
                <p className="text-muted-foreground mt-1">Verify and validate complete data destruction</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="#"
              className="group flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
            >
              <div>
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  DZap File Eraser
                </h3>
                <p className="text-muted-foreground mt-1">Selective file and folder erasure with precision</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="#"
              className="group flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
            >
              <div>
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  DZap Mobile Diagnostics
                </h3>
                <p className="text-muted-foreground mt-1">Comprehensive mobile device testing and erasure</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="#"
              className="group flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
            >
              <div>
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  DZap Management Console
                </h3>
                <p className="text-muted-foreground mt-1">Centralized management and reporting dashboard</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="#"
              className="group flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
            >
              <div>
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  DZap LUN Eraser
                </h3>
                <p className="text-muted-foreground mt-1">Enterprise SAN and LUN erasure solution</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid - 6 cards as requested */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Enterprise Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive data destruction capabilities designed for enterprise environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Meets Global Standards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Certified to meet industry regulations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="bg-card border-border text-center p-6">
              <div className="mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  NIST
                </Badge>
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">NIST 800-88</h3>
              <p className="text-sm text-muted-foreground">National Institute Standards</p>
            </Card>

            <Card className="bg-card border-border text-center p-6">
              <div className="mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  DoD
                </Badge>
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">DoD 5220.22-M</h3>
              <p className="text-sm text-muted-foreground">Department of Defense</p>
            </Card>

            <Card className="bg-card border-border text-center p-6">
              <div className="mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  GDPR
                </Badge>
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">GDPR Ready</h3>
              <p className="text-sm text-muted-foreground">European Data Protection</p>
            </Card>

            <Card className="bg-card border-border text-center p-6">
              <div className="mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  HIPAA
                </Badge>
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">HIPAA Compliant</h3>
              <p className="text-sm text-muted-foreground">Healthcare Data Protection</p>
            </Card>

            <Card className="bg-card border-border text-center p-6">
              <div className="mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  ISO
                </Badge>
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">ISO 27001</h3>
              <p className="text-sm text-muted-foreground">Information Security</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined 4-step process ensures complete data destruction with full verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-card border-border text-center p-6 h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-muted/50 border-2 border-dashed border-border rounded-lg p-12">
              <ShieldCheck className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">[Placeholder for workflow diagram/illustration]</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Secure Your Data?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
            Join thousands of enterprises who trust our secure drive erasure solution for their most critical data
            destruction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Talk to Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
