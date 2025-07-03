import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <>
      {/* Hero About Section */}
      <section className="relative mt-10 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50/30 py-20 lg:py-32 dark:from-slate-950 dark:via-slate-900 dark:to-green-950/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.300)_1px,transparent_0)] [background-size:24px_24px] opacity-20 dark:bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.700)_1px,transparent_0)]"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 h-full w-full rounded-3xl bg-gradient-to-br from-green-500/20 to-blue-500/20 blur-xl"></div>
                <div className="absolute -right-6 -bottom-6 h-full w-full rounded-3xl bg-gradient-to-tl from-green-500/10 to-blue-500/10"></div>

                {/* Main Image Container */}
                <div className="relative rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80">
                  <Image
                    width={600}
                    height={600}
                    unoptimized
                    className="h-auto w-full rounded-2xl transition-all duration-500 hover:scale-105"
                    alt="About Our Company - Professional team collaboration"
                    src="https://i.imgur.com/WbQnbas.png"
                  />
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -top-4 -right-4 animate-bounce rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-800">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      10+
                    </div>
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      Years
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 animate-bounce rounded-2xl border border-slate-200 bg-white p-4 shadow-xl delay-500 dark:border-slate-700 dark:bg-slate-800">
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
            <div className="order-1 space-y-8 lg:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 dark:border-green-800 dark:bg-green-950/50">
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    🏢 About Our Company
                  </span>
                </div>

                <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent dark:from-slate-100 dark:via-slate-200 dark:to-slate-300">
                    Building the
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-green-600 via-green-500 to-blue-600 bg-clip-text text-transparent">
                    Future
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent dark:from-slate-100 dark:via-slate-200 dark:to-slate-300">
                    Together
                  </span>
                </h1>
              </div>

              <p className="py-4 text-lg text-gray-600 md:py-6 2xl:py-8 2xl:pr-5 dark:text-gray-300">
                Empowering you to make better financial decisions.
                <br />
                <span className="font-medium text-green-700 dark:text-green-300">
                  We truly are professional money planners...
                </span>
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#team"
                  className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-600 to-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-green-700 hover:to-green-800 hover:shadow-xl hover:shadow-green-500/25"
                >
                  <span>Meet Our Team</span>
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-8 py-4 text-lg font-semibold text-slate-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl dark:text-slate-100">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              The principles that guide our work and define our culture
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🎯",
                title: "Excellence",
                description:
                  "We strive for perfection in every project, delivering solutions that exceed expectations and set new industry standards.",
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork, fostering an environment where diverse perspectives create innovative solutions.",
              },
              {
                icon: "🚀",
                title: "Innovation",
                description:
                  "We embrace cutting-edge technologies and creative approaches to solve complex challenges and drive progress.",
              },
              {
                icon: "💡",
                title: "Integrity",
                description:
                  "We conduct business with transparency, honesty, and ethical practices that build lasting trust with our clients.",
              },
              {
                icon: "🌱",
                title: "Growth",
                description:
                  "We&apos;re committed to continuous learning and development, both for our team and our clients&apos; success.",
              },
              {
                icon: "🎨",
                title: "Creativity",
                description:
                  "We bring fresh perspectives and artistic vision to every project, creating memorable and impactful experiences.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-green-600"
              >
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-green-100">
              Delivering results that speak for themselves
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "500+", label: "Happy Clients", icon: "😊" },
              { number: "50M+", label: "Revenue Generated", icon: "💰" },
              { number: "98%", label: "Success Rate", icon: "📈" },
              { number: "24/7", label: "Support Available", icon: "🛠️" },
            ].map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className="mb-2 text-4xl font-bold transition-colors duration-300 group-hover:text-yellow-300 lg:text-5xl">
                  {stat.number}
                </div>
                <div className="text-lg text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-slate-900 lg:text-4xl dark:text-slate-100">
              Our Mission
            </h2>
            <p className="mb-12 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
              To empower businesses and individuals with innovative digital
              solutions that drive growth, enhance user experiences, and create
              lasting value in an ever-evolving technological landscape.
            </p>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl lg:p-12 dark:border-slate-700 dark:bg-slate-800">
              <blockquote className="text-2xl leading-relaxed font-light text-slate-700 italic lg:text-3xl dark:text-slate-300">
                &quot;Innovation distinguishes between a leader and a follower.
                We choose to lead.&quot;
              </blockquote>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-blue-600">
                  <span className="font-bold text-white">CEO</span>
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
