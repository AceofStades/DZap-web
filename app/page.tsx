import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Zap, Award, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-bg py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 text-balance animate-slide-in-up">
              Erase Data. Ensure Security.
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto text-pretty animate-slide-in-up">
              Enterprise-grade secure drive erasure solutions that guarantee complete data destruction and regulatory
              compliance for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-scale">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted bg-transparent shadow-elegant hover:shadow-lg transition-all duration-300"
              >
                Watch Demo
              </Button>
              <Link href="/docs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 bg-transparent shadow-elegant hover:shadow-glow transition-all duration-300"
                >
                  View Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-slide-in-up">
              Why Choose DZap?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-up">
              Trusted by enterprises worldwide for complete data security and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105 animate-fade-in-scale group">
              <CardContent className="p-10 text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-accent/20 transition-colors duration-300 animate-float">
                  <CheckCircle className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-6">Regulatory Compliance</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Meet NIST, DoD, GDPR, and HIPAA standards with certified erasure methods and comprehensive audit
                  trails.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105 animate-fade-in-scale group">
              <CardContent className="p-10 text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-accent/20 transition-colors duration-300 animate-float">
                  <Zap className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-6">Automated Workflows</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Streamline your data destruction process with automated scheduling, reporting, and certificate
                  generation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105 animate-fade-in-scale group">
              <CardContent className="p-10 text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-accent/20 transition-colors duration-300 animate-float">
                  <Award className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-6">Verified Destruction</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Get cryptographic proof of complete data erasure with tamper-evident certificates and detailed
                  reports.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Logos Section */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-foreground mb-6 animate-slide-in-up">
              Trusted Compliance Standards
            </h2>
            <p className="text-lg text-muted-foreground animate-slide-in-up">
              Certified to meet the highest industry standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-items-center">
            <div className="bg-muted rounded-xl p-8 w-full h-24 flex items-center justify-center shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in-scale">
              <span className="font-bold text-muted-foreground text-lg">NIST</span>
            </div>
            <div className="bg-muted rounded-xl p-8 w-full h-24 flex items-center justify-center shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in-scale">
              <span className="font-bold text-muted-foreground text-lg">DoD 5220.22-M</span>
            </div>
            <div className="bg-muted rounded-xl p-8 w-full h-24 flex items-center justify-center shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in-scale">
              <span className="font-bold text-muted-foreground text-lg">GDPR</span>
            </div>
            <div className="bg-muted rounded-xl p-8 w-full h-24 flex items-center justify-center shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in-scale">
              <span className="font-bold text-muted-foreground text-lg">HIPAA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-slide-in-up">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground animate-slide-in-up">See what our customers say about DZap</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105 animate-fade-in-scale">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    /* Increased star size */
                  ))}
                </div>
                <p className="text-card-foreground mb-6 text-lg leading-relaxed">
                  "DZap has transformed our data destruction process. The compliance reporting alone has saved us
                  countless hours during audits."
                </p>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-base">Sarah Johnson</p>
                  <p>IT Security Manager, Fortune 500 Company</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105 animate-fade-in-scale">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 text-lg leading-relaxed">
                  "The automated workflows and detailed certificates give us complete confidence in our data security
                  practices."
                </p>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-base">Michael Chen</p>
                  <p>CTO, Healthcare Organization</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105 animate-fade-in-scale">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 text-lg leading-relaxed">
                  "Outstanding support and rock-solid reliability. DZap is an essential part of our security
                  infrastructure."
                </p>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-base">David Rodriguez</p>
                  <p>Security Director, Financial Services</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 gradient-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-balance animate-slide-in-up">
            Ready to Secure Your Data?
          </h2>
          <p className="text-xl lg:text-2xl mb-10 text-primary-foreground/90 text-pretty animate-slide-in-up">
            Join thousands of organizations that trust DZap for their data destruction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-scale">
            <Button
              size="lg"
              variant="secondary"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-elegant hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent shadow-elegant hover:shadow-lg transition-all duration-300"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
