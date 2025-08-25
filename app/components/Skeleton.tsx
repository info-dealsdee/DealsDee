import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Skeleton({ className = '', width, height }: SkeletonProps) {
  return (
    <div 
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{ width, height }}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden h-full flex flex-col animate-pulse">
      <div className="relative w-full aspect-[16/10] bg-gray-200"></div>
      <div className="flex-1 p-6 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-12" />
        </div>
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-4/5" />
        <div className="flex-1">
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  );
}

export function ReviewSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-12 w-4/5 mb-6" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-1 rounded-full" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-1 rounded-full" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2">
            <Skeleton className="w-full aspect-[16/10] rounded-xl mb-8" />
            
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              
              <div className="py-4">
                <Skeleton className="h-6 w-32 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-4/5" />
              </div>
              
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <div className="text-center mb-6">
                <Skeleton className="h-16 w-16 rounded-full mx-auto mb-2" />
                <Skeleton className="h-4 w-16 mx-auto" />
              </div>
              
              <Skeleton className="w-full aspect-square rounded-lg mb-4" />
              
              <div className="space-y-4">
                <div>
                  <Skeleton className="h-5 w-16 mb-2" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
                
                <div>
                  <Skeleton className="h-5 w-16 mb-2" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                </div>
                
                <Skeleton className="h-12 w-full rounded-lg" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CategorySkeleton() {
  return (
    <div className="animate-pulse max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <Skeleton className="h-12 w-64 mb-4" />
        <Skeleton className="h-6 w-96" />
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}