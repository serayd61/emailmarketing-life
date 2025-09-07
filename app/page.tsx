'use client';

import Link from 'next/link';
import { Brain, Zap, Sparkles, Mail, BarChart3, Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="backdrop-blur-sm bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">EM</span>
              </div>
              <span className="text-xl font-bold text-white">EmailMarketing.AI</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link className="text-gray-300 hover:text-white transition-colors" href="/features">Features</Link>
              <Link className="text-gray-300 hover:text-white transition-colors" href="/pricing">Pricing</Link>
              <Link className="text-gray-300 hover:text-white transition-colors" href="/integrations">Integrations</Link>
              <Link className="text-gray-300 hover:text-white transition-colors" href="/auth/signin">Sign In</Link>
              <Link className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg" href="/auth/signup">
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered Email
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Marketing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your email campaigns with advanced AI automation, behavioral segmentation, and intelligent optimization that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-xl" href="/auth/signup">
                Start Free Trial
              </Link>
              <Link className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200" href="/demo">
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">300%</div>
              <div className="text-gray-400">ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">94.2%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">127%</div>
              <div className="text-gray-400">Conversion Lift</div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to automate and optimize every aspect of your email marketing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-blue-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Behavioral Segmentation</h3>
              <p className="text-gray-400 mb-6">
                Automatically segment your audience based on behavior patterns and engagement history for personalized campaigns.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Active Segments</span>
                  <span className="text-white font-semibold">847</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Accuracy Rate</span>
                  <span className="text-blue-400 font-semibold">94.2%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-purple-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Emotional State Marketing</h3>
              <p className="text-gray-400 mb-6">
                Analyze customer emotions and send personalized messages based on their current emotional state and engagement patterns.
              </p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <div className="text-yellow-400 font-semibold">34,891</div>
                  <div className="text-gray-500">Happy</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">12,457</div>
                  <div className="text-gray-500">Stressed</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-400 font-semibold">28,093</div>
                  <div className="text-gray-500">Neutral</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-green-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Purchase Intent Scoring</h3>
              <p className="text-gray-400 mb-6">
                AI-powered scoring system that identifies customers most likely to purchase, enabling targeted campaigns for maximum ROI.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">High Intent</span>
                  <span className="text-green-400 font-semibold">8,947 users</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Medium Intent</span>
                  <span className="text-yellow-400 font-semibold">15,623 users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI Marketing Agents</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Deploy intelligent AI agents that work 24/7 to optimize your marketing campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Content Creator AI</h3>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Generates personalized email content based on customer behavior and preferences
              </p>
              <div className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">
                Active - 24/7
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Segmentation AI</h3>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Continuously analyzes and updates customer segments for maximum relevance
              </p>
              <div className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded">
                Processing - 847 segments
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-orange-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">N8N Automation AI</h3>
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Connects with your N8N workflows for seamless automation and data sync
              </p>
              <div className="text-xs text-orange-400 bg-orange-400/10 px-2 py-1 rounded">
                Connected - 5 workflows
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of businesses already using AI to drive better results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-xl" href="/auth/signup">
              Start Free Trial - No Credit Card Required
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            14-day free trial • Cancel anytime • Enterprise support available
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">EM</span>
                </div>
                <span className="text-xl font-bold text-white">EmailMarketing.AI</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Advanced AI-powered email marketing platform that helps businesses create personalized, high-converting campaigns with intelligent automation.
              </p>
              <div className="text-sm text-gray-500">
                <p>🔒 GDPR Compliant • 🇨🇭 Swiss Data Storage • ⚡ 99.9% Uptime</p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link className="hover:text-white transition-colors" href="/features">Features</Link></li>
                <li><Link className="hover:text-white transition-colors" href="/pricing">Pricing</Link></li>
                <li><Link className="hover:text-white transition-colors" href="/integrations">Integrations</Link></li>
                <li><Link className="hover:text-white transition-colors" href="/dashboard">Dashboard</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link className="hover:text-white transition-colors" href="/docs">Documentation</Link></li>
                <li><Link className="hover:text-white transition-colors" href="/support">Help Center</Link></li>
                <li><Link className="hover:text-white transition-colors" href="/contact">Contact Us</Link></li>
                <li><Link className="hover:text-white transition-colors" href="/status">System Status</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 EmailMarketing.AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link className="text-gray-500 hover:text-white text-sm transition-colors" href="/privacy">Privacy Policy</Link>
              <Link className="text-gray-500 hover:text-white text-sm transition-colors" href="/terms">Terms of Service</Link>
              <Link className="text-gray-500 hover:text-white text-sm transition-colors" href="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
