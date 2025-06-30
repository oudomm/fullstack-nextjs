import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
  return (
    <>
      {/* Hero About Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20 overflow-hidden mt-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.300)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.700)_1px,transparent_0)] [background-size:24px_24px] opacity-20"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-tl from-blue-500/10 to-purple-500/10 rounded-3xl"></div>

                {/* Main Image Container */}
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-2xl">
                  <Image
                    width={600}
                    height={600}
                    unoptimized
                    className="w-full h-auto rounded-2xl transition-all duration-500 hover:scale-105"
                    alt="About Our Company - Professional team collaboration"
                    src="https://i.imgur.com/WbQnbas.png"
                  />
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700 animate-bounce">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      10+
                    </div>
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      Years
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700 animate-bounce delay-500">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      500+
                    </div>
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    🏢 About Our Company
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
                    Building the
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Future
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
                    Together
                  </span>
                </h1>
              </div>

              <p className="py-4 text-lg text-gray-600 dark:text-gray-300 2xl:py-8 md:py-6 2xl:pr-5">
                Empowering you to make better financial decisions.<br />
                <span className="font-medium text-blue-700 dark:text-blue-300">
                  We truly are professional money planners...
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#team"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
                >
                  <span>Meet Our Team</span>
                  <svg
                    className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              The principles that guide our work and define our culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Excellence',
                description:
                  'We strive for perfection in every project, delivering solutions that exceed expectations and set new industry standards.',
              },
              {
                icon: '🤝',
                title: 'Collaboration',
                description:
                  'We believe in the power of teamwork, fostering an environment where diverse perspectives create innovative solutions.',
              },
              {
                icon: '🚀',
                title: 'Innovation',
                description:
                  'We embrace cutting-edge technologies and creative approaches to solve complex challenges and drive progress.',
              },
              {
                icon: '💡',
                title: 'Integrity',
                description:
                  'We conduct business with transparency, honesty, and ethical practices that build lasting trust with our clients.',
              },
              {
                icon: '🌱',
                title: 'Growth',
                description:
                  "We&apos;re committed to continuous learning and development, both for our team and our clients&apos; success.",
              },
              {
                icon: '🎨',
                title: 'Creativity',
                description:
                  'We bring fresh perspectives and artistic vision to every project, creating memorable and impactful experiences.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Delivering results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Happy Clients', icon: '😊' },
              { number: '50M+', label: 'Revenue Generated', icon: '💰' },
              { number: '98%', label: 'Success Rate', icon: '📈' },
              { number: '24/7', label: 'Support Available', icon: '🛠️' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
              To empower businesses and individuals with innovative digital
              solutions that drive growth, enhance user experiences, and create
              lasting value in an ever-evolving technological landscape.
            </p>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
              <blockquote className="text-2xl lg:text-3xl font-light text-slate-700 dark:text-slate-300 italic leading-relaxed">
                &quot;Innovation distinguishes between a leader and a follower. We choose to lead.&quot;
              </blockquote>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">CEO</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    John Smith
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Chief Executive Officer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
