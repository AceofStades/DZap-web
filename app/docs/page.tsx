"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, ChevronRight } from "lucide-react"

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "why-electron", title: "Why Electron" },
  { id: "tutorial", title: "Tutorial" },
  { id: "processes", title: "Processes" },
  { id: "best-practices", title: "Best Practices" },
  { id: "examples", title: "Examples" },
  { id: "development", title: "Development" },
  { id: "references", title: "References" },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderContent = () => {
    switch (activeSection) {
      case "introduction":
        return (
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">Introduction</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Welcome to the SecureErase documentation. This comprehensive guide will help you understand and implement
              secure drive erasure solutions for your organization.
            </p>
            <p className="text-muted-foreground mb-4">
              SecureErase provides enterprise-grade data destruction capabilities that ensure complete data removal
              while maintaining compliance with industry standards such as NIST, DoD, GDPR, and HIPAA.
            </p>
            <p className="text-muted-foreground">
              Whether you're a system administrator, security professional, or compliance officer, this documentation
              will guide you through the implementation and best practices for secure data erasure.
            </p>
          </div>
        )
      case "why-electron":
        return (
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">Why Electron</h1>
            <p className="text-lg text-muted-foreground mb-6">
              SecureErase leverages Electron to provide a cross-platform desktop application that delivers consistent
              performance across Windows, macOS, and Linux environments.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Cross-Platform Compatibility</h3>
                <p className="text-muted-foreground">
                  Deploy the same application across all major operating systems without platform-specific
                  modifications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Native System Access</h3>
                <p className="text-muted-foreground">
                  Direct access to system-level operations required for secure drive erasure and hardware detection.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Modern UI Framework</h3>
                <p className="text-muted-foreground">
                  Built with modern web technologies while maintaining native desktop application performance.
                </p>
              </div>
            </div>
          </div>
        )
      case "tutorial":
        return (
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">Tutorial</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Follow this step-by-step tutorial to get started with SecureErase and perform your first secure drive
              erasure.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Step 1: Installation</h3>
                <p className="text-muted-foreground mb-2">Download and install SecureErase on your system:</p>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm font-mono">
                    # Download the installer for your platform
                    <br /># Windows: SecureErase-Setup.exe
                    <br /># macOS: SecureErase.dmg
                    <br /># Linux: SecureErase.AppImage
                  </code>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Step 2: Initial Configuration</h3>
                <p className="text-muted-foreground">
                  Configure your organization settings, compliance requirements, and user permissions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Step 3: Drive Detection</h3>
                <p className="text-muted-foreground">
                  Connect the drives you want to erase and let SecureErase automatically detect available storage
                  devices.
                </p>
              </div>
            </div>
          </div>
        )
      case "processes":
        return (
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">Processes</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Understanding the core processes that power SecureErase's secure data destruction capabilities.
            </p>
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">Drive Detection Process</h3>
                  <p className="text-muted-foreground">
                    Automatically scans and identifies all connected storage devices, including internal drives,
                    external USB devices, and network-attached storage.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">Erasure Algorithms</h3>
                  <p className="text-muted-foreground">
                    Implements multiple erasure standards including DoD 5220.22-M, NIST 800-88, and custom patterns for
                    maximum security assurance.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">Verification Process</h3>
                  <p className="text-muted-foreground">
                    Performs comprehensive verification to ensure complete data destruction and generates cryptographic
                    proof of erasure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case "best-practices":
        return (
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">Best Practices</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Follow these best practices to ensure optimal security and compliance when using SecureErase.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Pre-Erasure Checklist</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Verify drive ownership and authorization</li>
                  <li>Create backup of any required data</li>
                  <li>Document drive serial numbers and specifications</li>
                  <li>Ensure stable power supply during erasure</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Security Considerations</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Use appropriate erasure standards for your compliance requirements</li>
                  <li>Maintain physical security of drives during the process</li>
                  <li>Store erasure certificates in secure, auditable locations</li>
                  <li>Implement proper chain of custody procedures</li>
                </ul>
              </div>
            </div>
          </div>
        )
      case "examples":
        return (
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">Examples</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Code examples and configuration snippets for integrating SecureErase into your workflows.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Configuration File Example</h3>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm font-mono text-muted-foreground">
                    <code>{`{
  "organization": {
    "name": "Acme Corporation",
    "compliance_standards": ["NIST", "DoD", "GDPR"]
  },
  "erasure_settings": {
    "default_algorithm": "DoD_5220_22_M",
    "verification_required": true,
    "certificate_generation": true
  },
  "reporting": {
    "auto_generate": true,
    "export_format": ["PDF", "JSON"],
    "retention_period": "7_years"
  }
}`}</code>
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">API Integration Example</h3>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm font-mono text-muted-foreground">
                    <code>{`// Initialize SecureErase API
const secureErase = new SecureEraseAPI({
  apiKey: 'your-api-key',
  endpoint: 'https://api.secureerase.com'
});

// Start erasure process
const result = await secureErase.startErasure({
  driveId: 'drive-12345',
  algorithm: 'NIST_800_88',
  generateCertificate: true
});

console.log('Erasure started:', result.jobId);`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )
      case "development":
        return (
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">Development</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Development guidelines and technical specifications for extending SecureErase functionality.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">System Requirements</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Node.js 18.0 or higher</li>
                  <li>Electron 25.0 or higher</li>
                  <li>Administrative privileges for drive access</li>
                  <li>Minimum 4GB RAM for large drive operations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Plugin Development</h3>
                <p className="text-muted-foreground mb-2">Create custom plugins to extend SecureErase functionality:</p>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm font-mono text-muted-foreground">
                    npm install @secureerase/plugin-sdk
                    <br />
                    npm run create-plugin my-custom-plugin
                  </code>
                </div>
              </div>
            </div>
          </div>
        )
      case "references":
        return (
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-6">References</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Additional resources, standards documentation, and external references.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Compliance Standards</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-accent hover:underline">
                      NIST SP 800-88 Rev. 1: Guidelines for Media Sanitization
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-accent hover:underline">
                      DoD 5220.22-M: National Industrial Security Program Operating Manual
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-accent hover:underline">
                      GDPR Article 17: Right to Erasure
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-accent hover:underline">
                      HIPAA Security Rule: Administrative Safeguards
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Technical Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-accent hover:underline">
                      Electron Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-accent hover:underline">
                      Node.js API Reference
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-accent hover:underline">
                      SecureErase API Documentation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
      default:
        return <div>Section not found</div>
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-200 ease-in-out lg:transform-none ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
            <h2 className="text-lg font-semibold text-sidebar-foreground">Documentation</h2>
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      setActiveSection(section.id)
                      setSidebarOpen(false)
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-between group ${
                      activeSection === section.id
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    {section.title}
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${
                        activeSection === section.id ? "rotate-90" : "group-hover:translate-x-1"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="lg:hidden bg-background border-b border-border p-4">
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)} className="flex items-center gap-2">
            <Menu className="h-4 w-4" />
            Documentation
          </Button>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 lg:p-8">{renderContent()}</div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-muted/30 p-4">
          <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
            © 2024 SecureErase. All rights reserved. | Documentation v2.1.0
          </div>
        </footer>
      </div>
    </div>
  )
}
