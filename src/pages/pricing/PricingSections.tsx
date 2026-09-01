import ShowcaseWrapper from '../../components/ui/ShowcaseWrapper';
import React from 'react';
import {
  Check, ChevronRight,        CheckCircle, Sparkles, Zap
} from 'lucide-react';

const PricingSections: React.FC = () => {
  const section1Html = `<!-- Two tiers with emphasized right tier -->
<div class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 overflow-hidden">
  <div class="absolute inset-x-0 -top-3 px-3 -z-10 transform-gpu opacity-30 blur-3xl" aria-hidden="true">
    <div class="ml-[50%] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-[#16232A] to-[#FF5B04]"></div>
  </div>
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-base font-semibold leading-7 text-[#FF5B04]">Pricing</h2>
    <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Choose the right plan for you</p>
    <p class="mt-6 text-lg leading-8 text-gray-600">Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
  </div>
  <div class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
    <!-- Hobby Plan -->
    <div class="relative rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 lg:rounded-r-none lg:p-10 backdrop-blur-sm border-white/20">
      <h3 id="tier-hobby" class="text-base font-semibold leading-7 text-[#16232A]">Hobby</h3>
      <p class="mt-4 flex items-baseline gap-x-2">
        <span class="text-5xl font-bold tracking-tight text-gray-900">$29</span>
        <span class="text-base text-gray-500">/month</span>
      </p>
      <p class="mt-6 text-base leading-7 text-gray-600">The perfect plan if you're just getting started with our product.</p>
      <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-[#FF5B04]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          25 products
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-[#FF5B04]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Up to 10,000 subscribers
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-[#FF5B04]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Advanced analytics
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-[#FF5B04]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          24-hour support response time
        </li>
      </ul>
      <a href="#" aria-describedby="tier-hobby" class="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold leading-6 text-[#16232A] ring-1 ring-inset ring-slate-200 hover:ring-[#FF5B04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B04] sm:mt-10">Get started today</a>
    </div>
    <!-- Enterprise Plan -->
    <div class="relative rounded-3xl bg-slate-900 p-8 shadow-2xl ring-1 ring-slate-900 sm:p-10 lg:z-10 lg:rounded-l-none">
      <h3 id="tier-enterprise" class="text-base font-semibold leading-7 text-[#FF5B04]">Enterprise</h3>
      <p class="mt-4 flex items-baseline gap-x-2">
        <span class="text-5xl font-bold tracking-tight text-white">$99</span>
        <span class="text-base text-gray-400">/month</span>
      </p>
      <p class="mt-6 text-base leading-7 text-gray-300">Dedicated support and infrastructure for your company.</p>
      <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 sm:mt-10">
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-[#FF5B04]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Unlimited products
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-[#FF5B04]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Unlimited subscribers
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-[#FF5B04]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Advanced analytics
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-[#FF5B04]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Dedicated support representative
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-[#FF5B04]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Marketing automations
        </li>
        <li class="flex gap-x-3">
          <svg class="h-6 w-5 flex-none text-[#FF5B04]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          Custom integrations
        </li>
      </ul>
      <a href="#" aria-describedby="tier-enterprise" class="mt-8 block rounded-md bg-[#FF5B04] px-3.5 py-2.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#e04f00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5B04] sm:mt-10">Get started today</a>
    </div>
  </div>
</div>`;

  const section2Html = `<!-- Three tiers with emphasized middle tier -->
<div class="bg-gray-100 dark:bg-slate-900 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-base font-semibold leading-7 text-[#FF5B04]">Pricing Plans</h2>
      <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Our Flexible Pricing</p>
    </div>
    <div class="isolate mx-auto mt-16 grid max-h-full grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <!-- Starter -->
      <div class="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-800 p-8 ring-1 ring-gray-200 dark:ring-slate-700 xl:p-10">
        <div>
          <h3 class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Starter</h3>
          <p class="mt-4 text-sm leading-6 text-gray-600 dark:text-slate-400">Perfect for individuals and small projects.</p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">$15</span>
            <span class="text-sm font-semibold leading-6 text-gray-600 dark:text-slate-400">/month</span>
          </p>
          <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-slate-400">
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-[#FF5B04]" /> 5 projects</li>
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-[#FF5B04]" /> Basic support</li>
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-[#FF5B04]" /> Community access</li>
          </ul>
        </div>
        <a href="#" class="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-[#16232A] ring-1 ring-inset ring-slate-200 hover:ring-[#FF5B04]">Buy Starter</a>
      </div>
      <!-- Professional -->
      <div class="flex flex-col justify-between rounded-3xl bg-[#16232A] p-8 ring-1 ring-slate-900 xl:p-10 scale-110 z-10 shadow-xl">
        <div>
          <h3 class="text-lg font-semibold leading-8 text-white">Professional</h3>
          <p class="mt-4 text-sm leading-6 text-gray-300">The best choice for growing businesses.</p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-bold tracking-tight text-white">$49</span>
            <span class="text-sm font-semibold leading-6 text-gray-300">/month</span>
          </p>
          <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300">
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-[#FF5B04]" /> 20 projects</li>
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-[#FF5B04]" /> Priority support</li>
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-[#FF5B04]" /> Advanced analytics</li>
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-[#FF5B04]" /> Team collaboration</li>
          </ul>
        </div>
        <a href="#" class="mt-8 block rounded-md bg-[#FF5B04] px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#e04f00]">Buy Pro</a>
      </div>
      <!-- Enterprise -->
      <div class="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-800 p-8 ring-1 ring-gray-200 dark:ring-slate-700 xl:p-10">
        <div>
          <h3 class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Enterprise</h3>
          <p class="mt-4 text-sm leading-6 text-gray-600 dark:text-slate-400">Everything you need for large-scale operations.</p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">$99</span>
            <span class="text-sm font-semibold leading-6 text-gray-600 dark:text-slate-400">/month</span>
          </p>
          <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-slate-400">
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-[#FF5B04]" /> Unlimited projects</li>
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-[#FF5B04]" /> 24/7 Dedicated support</li>
            <li class="flex gap-x-3"><Check className="h-6 w-5 flex-none text-[#FF5B04]" /> Custom integrations</li>
          </ul>
        </div>
        <a href="#" class="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-[#16232A] ring-1 ring-inset ring-slate-200 hover:ring-[#FF5B04]">Buy Enterprise</a>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            가격 정책 섹션
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>페이지</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#16232A] dark:text-[#FF5B04] font-medium">가격 정책 섹션</span>
          </div>
        </div>
      </div>

      {/* Variation 1: Two tiers with emphasized right tier */}
      <ShowcaseWrapper title="우측이 강조된 두 가지 티어" description="" snippet={{ react: '', html: section1Html, css: '', js: '', fullHtml: section1Html }}>
        <div className="relative isolate bg-white dark:bg-slate-950 px-6 py-24 sm:py-32 lg:px-8 overflow-hidden rounded-2xl">
          <div className="absolute inset-x-0 -top-3 px-3 -z-10 transform-gpu opacity-30 blur-3xl" aria-hidden="true">
            <div className="ml-[50%] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-[#FF5B04]/30 to-[#075056]/30"></div>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-[#FF5B04]">가격 정책</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">당신에게 맞는 요금제를 선택하세요</p>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">오디언스의 참여를 유도하고, 고객 충성도를 구축하며, 매출을 촉진하는 데 필요한 최고의 기능을 갖춘 합리적인 요금제를 선택하세요.</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
            {/* Hobby Plan */}
            <div className="relative rounded-3xl bg-white/60 dark:bg-white/5 p-8 ring-1 ring-slate-900/10 dark:ring-white/10 sm:mx-8 lg:mx-0 lg:rounded-r-none lg:p-10 backdrop-blur-sm border-white/20">
              <h3 className="text-base font-semibold leading-7 text-[#16232A] dark:text-[#FF5B04]">취미</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white">$29</span>
                <span className="text-base text-slate-500 dark:text-slate-400">/월</span>
              </p>
              <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-400">우리 제품을 처음 시작하시는 분들에게 완벽한 요금제입니다.</p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:mt-10">
                {[
                  "25개 제품",
                  "최대 10,000명의 구독자",
                  "고급 분석",
                  "24시간 내 지원 응답 타임"
                ].map((feature, i) => (
                  <li key={i} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-[#FF5B04]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold leading-6 text-[#16232A] dark:text-[#FF5B04] ring-1 ring-inset ring-slate-200 dark:ring-slate-700 hover:ring-[#FF5B04] transition-all">
                오늘 바로 시작하기
              </button>
            </div>
            {/* Enterprise Plan */}
            <div className="relative rounded-3xl bg-slate-900 dark:bg-[#16232A] p-8 shadow-2xl ring-1 ring-slate-900 dark:ring-slate-700 sm:p-10 lg:z-10 lg:rounded-l-none">
              <h3 className="text-base font-semibold leading-7 text-[#FF5B04]">엔터프라이즈</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-white">$99</span>
                <span className="text-base text-slate-400">/월</span>
              </p>
              <p className="mt-6 text-base leading-7 text-slate-300">회사에 맞춤화된 전용 지원 및 인프라를 제공합니다.</p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-300 sm:mt-10">
                {[
                  "무제한 제품",
                  "무제한 구독자",
                  "고급 분석",
                  "전담 지원 담당자",
                  "마케팅 자동화",
                  "사용자 맞춤형 통합"
                ].map((feature, i) => (
                  <li key={i} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-[#FF5B04]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 block w-full rounded-md bg-[#FF5B04] hover:bg-[#e04f00] px-3.5 py-2.5 text-center text-sm font-semibold leading-6 text-white shadow-sm transition-all">
                오늘 바로 시작하기
              </button>
            </div>
          </div>
        </div>
      </ShowcaseWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* Variation 2: Three tiers with emphasized middle tier */}
      <ShowcaseWrapper title="본문이 강조되는 3가지 티어" description="" snippet={{ react: '', html: section2Html, css: '', js: '', fullHtml: section2Html }}>
        <div className="bg-slate-50 dark:bg-slate-900 py-24 sm:py-32 rounded-2xl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-semibold leading-7 text-[#16232A] dark:text-[#FF5B04]">가격 요금제</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">우리의 유연한 가격 정책</p>
              <p className="mt-4 text-slate-600 dark:text-slate-400">모든 규모의 기업을 위한 간단하고 투명한 가격 정책입니다.</p>
            </div>
            <div className="isolate mx-auto mt-16 grid max-h-full grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 items-center">
              {/* Starter */}
              <div className="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-800/50 p-8 ring-1 ring-slate-200 dark:ring-slate-700 xl:p-10 transition-all hover:shadow-lg">
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-slate-900 dark:text-white">스타터</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">개인 및 소규모 프로젝트에 완벽합니다.</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">$15</span>
                    <span className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400">/월</span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {["5개 프로젝트", "기본 지원", "커뮤니티 액세스"].map((feat, i) => (
                      <li key={i} className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-[#075056] dark:text-[#FF5B04]" /> {feat}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-[#16232A] dark:text-[#FF5B04] ring-1 ring-inset ring-slate-200 dark:ring-slate-700 hover:ring-[#FF5B04]">스타터 구매하기</button>
              </div>
              {/* Professional */}
              <div className="relative flex flex-col justify-between rounded-3xl bg-[#16232A] p-8 ring-1 ring-slate-900 xl:p-10 lg:scale-105 z-10 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-[#FF5B04] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">가장 인기 있음</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-white">프로페셔널</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">성장하는 기업을 위한 최고의 선택입니다.</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">$49</span>
                    <span className="text-sm font-semibold leading-6 text-slate-400">/월</span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-300">
                    {["20개 프로젝트", "우선 지원", "고급 분석", "팀 협업"].map((feat, i) => (
                      <li key={i} className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-[#FF5B04]" /> {feat}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 block rounded-md bg-[#FF5B04] hover:bg-[#e04f00] px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm transition-all">프로페셔널 구매하기</button>
              </div>
              {/* Enterprise */}
              <div className="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-800/50 p-8 ring-1 ring-slate-200 dark:ring-slate-700 xl:p-10 transition-all hover:shadow-lg">
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-slate-900 dark:text-white">엔터프라이즈</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">대규모 운영에 필요한 모든 것을 제공합니다.</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">$99</span>
                    <span className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400">/월</span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {["무제한 프로젝트", "연중무휴 전담 지원", "사용자 맞춤형 통합", "화이트 라벨링"].map((feat, i) => (
                      <li key={i} className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-[#075056] dark:text-[#FF5B04]" /> {feat}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-[#16232A] dark:text-[#FF5B04] ring-1 ring-inset ring-slate-200 dark:ring-slate-700 hover:ring-[#FF5B04]">엔터프라이즈 구매하기</button>
              </div>
            </div>
          </div>
        </div>
      </ShowcaseWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* Variation 3: Simple horizontal tiers */}
      <ShowcaseWrapper title="간단한 세 개의 기준열" description="" snippet={{ react: '', html: section2Html, css: '', js: '', fullHtml: section2Html }}>
        <div className="bg-white dark:bg-slate-950 py-24 sm:py-32 rounded-2xl transition-all">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
              {[
                { name: "퍼스널", price: "$0", bg: "bg-slate-50 dark:bg-slate-900", text: "text-slate-900 dark:text-white", btn: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white" },
                { name: "스타트업", price: "$24", bg: "bg-[#16232A]", text: "text-white", btn: "bg-[#FF5B04] text-white" },
                { name: "비즈니스", price: "$48", bg: "bg-slate-50 dark:bg-slate-900", text: "text-slate-900 dark:text-white", btn: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white" }
              ].map((tier, i) => (
                <div key={i} className={`p-8 ${tier.bg} rounded-3xl transition-transform hover:-translate-y-2 duration-300`}>
                  <h3 className={`text-lg font-bold ${tier.text}`}>{tier.name}</h3>
                  <p className={`mt-4 text-4xl font-black ${tier.text}`}>{tier.price} <span className="text-sm font-normal opacity-60">/월</span></p>
                  <ul className={`mt-6 space-y-3 text-sm font-medium ${tier.text} opacity-80`}>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 핵심 기능</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 커뮤니티 포럼</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 이메일 지원</li>
                  </ul>
                  <button className={`mt-8 w-full py-3 ${tier.btn} rounded-xl font-bold hover:opacity-90 transition-all shadow-sm`}>시작하기</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ShowcaseWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* Variation 4: Centered with badges and micro-animations */}
      <ShowcaseWrapper title="기능이 풍부한 중앙 정렬" description="" snippet={{ react: '', html: `<!-- Content omitted for brevity in this mock -->`, css: '', js: '', fullHtml: `<!-- Content omitted for brevity in this mock -->` }}>
        <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 py-24 sm:py-32 rounded-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#16232A] via-[#075056] to-[#FF5B04]"></div>
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E4EEF0] dark:bg-[#075056]/20 border border-slate-200 dark:border-[#075056]/30 text-[#16232A] dark:text-[#E4EEF0] text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5B04]" />
              기간 한정 제공: 연간 결제 시 20% 할인
            </div>
            <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-6">자신 있게 확장하세요</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">사이드 프로젝트에서 엔터프라이즈급 솔루션까지. 필요할 때 필요한 기능을 이용하세요.</p>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center gap-12 text-left relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#075056]/5 rounded-full blur-3xl group-hover:bg-[#075056]/10 transition-colors"></div>
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#16232A] dark:bg-[#FF5B04] rounded-2xl">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">프로 액셀러레이터</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">고속 성장하는 스타트업에게 가장 인기가 높습니다.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "실시간 사기 탐지",
                    "우선 API 접근 권한",
                    "맞춤형 보고 후크",
                    "전담 계정 매니저",
                    "SLA 99.9% 보장",
                    "RBAC 및 SSO 통합"
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                      <Check className="w-4 h-4 text-emerald-500" /> {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="shrink-0 w-full md:w-[280px] p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-700 text-center">
                <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2">시작가</p>
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="text-5xl font-black text-[#16232A] dark:text-[#FF5B04]">$49</span>
                  <span className="text-slate-400 font-medium">/월</span>
                </div>
                <button className="w-full py-4 bg-[#16232A] hover:bg-[#23343e] dark:bg-[#FF5B04] dark:hover:bg-[#e04f00] text-white rounded-2xl font-bold transition-all shadow-lg mb-4">
                  지금 확장하기
                </button>
                <p className="text-[11px] text-slate-400">14일 평가판에는 신용카드가 필요하지 않습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </ShowcaseWrapper>
    </div>
  );
};

export default PricingSections;
