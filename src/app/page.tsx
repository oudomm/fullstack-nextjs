import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.300)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.700)_1px,transparent_0)] [background-size:24px_24px] opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Section */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    ✨ Professional Financial Planning
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
                    Financial
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Excellence
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
                    for Growth
                  </span>
                </h1>
              </div>

              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your business with intelligent financial strategies.
                We deliver personalized solutions that drive sustainable growth
                and maximize your potential.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
                >
                  <span>Get Started</span>
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
                  href="#learn-more"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Learn More
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100">
                    500+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Clients Served
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100">
                    $50M+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Assets Managed
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100">
                    98%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-tl from-blue-500/10 to-purple-500/10 rounded-3xl"></div>

                {/* Main Image Container */}
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-2xl">
                  <Image
                    width={600}
                    height={600}
                    unoptimized
                    className="w-full h-auto rounded-2xl transition-all duration-500 hover:scale-105"
                    src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
                    alt="Professional financial planning illustration"
                    priority
                  />
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700 animate-bounce">
                  <div className="text-2xl">📈</div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Growth
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700 animate-bounce delay-500">
                  <div className="text-2xl">💰</div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Profit
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
