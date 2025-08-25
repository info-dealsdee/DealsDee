import { Skeleton, CardSkeleton } from '@/app/components/Skeleton';

export default function HomeLoading() {
  return (
    <main className="w-full">
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent/20 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
          <div className="mx-auto max-w-4xl text-center animate-pulse">
            <Skeleton className="h-6 w-48 mx-auto mb-6 bg-white/20" />
            <Skeleton className="h-16 w-full mb-6 bg-white/20" />
            <Skeleton className="h-8 w-3/4 mx-auto mb-10 bg-white/20" />
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Skeleton className="h-14 w-40 bg-white/20" />
              <Skeleton className="h-14 w-40 bg-white/20" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Categories Section Skeleton */}
      <section className="px-6 py-16 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center animate-pulse">
            <Skeleton className="h-12 w-48 mx-auto mb-3" />
            <Skeleton className="h-6 w-80 mx-auto" />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                  <Skeleton className="h-12 w-12 mx-auto mb-3" />
                  <Skeleton className="h-5 w-full mb-1" />
                  <Skeleton className="h-4 w-16 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section Skeleton */}
      <section className="bg-white px-6 py-16 sm:px-12 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-10 animate-pulse">
            <div>
              <Skeleton className="h-12 w-56 mb-2" />
              <Skeleton className="h-6 w-96" />
            </div>
            <Skeleton className="h-6 w-24 hidden sm:block" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Tool Promotion Section Skeleton */}
      <section className="bg-gray-50 px-6 py-16 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl animate-pulse">
          <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left flex-1">
                <Skeleton className="h-12 w-64 mb-4 bg-white/20" />
                <Skeleton className="h-6 w-full mb-4 bg-white/20" />
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Skeleton className="h-8 w-24 bg-white/20" />
                  <Skeleton className="h-8 w-20 bg-white/20" />
                  <Skeleton className="h-8 w-24 bg-white/20" />
                </div>
              </div>
              <div className="text-center">
                <Skeleton className="h-20 w-20 rounded-full bg-white/20" />
                <Skeleton className="h-12 w-32 mt-4 bg-white/90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section Skeleton */}
      <section className="bg-gradient-to-r from-primary to-accent px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center animate-pulse">
          <Skeleton className="h-12 w-64 mx-auto mb-4 bg-white/20" />
          <Skeleton className="h-6 w-80 mx-auto mb-8 bg-white/20" />
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Skeleton className="h-12 w-80 bg-white/20" />
            <Skeleton className="h-12 w-40 bg-white/20" />
          </div>
        </div>
      </section>
    </main>
  );
}