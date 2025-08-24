export default function ReviewLoading() {
  return (
    <div className="py-8 md:py-12 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title Skeleton */}
          <div className="mb-8">
            <div className="h-12 bg-gray-300 rounded-lg mb-4 max-w-3xl"></div>
            <div className="flex gap-4">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-4 bg-gray-200 rounded w-32"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
          </div>
          
          <div className="lg:flex lg:gap-8">
            {/* Main Content Column Skeleton */}
            <div className="lg:flex-1 max-w-[800px]">
              {/* Mobile Magic Box Skeleton */}
              <div className="lg:hidden mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
                  <div className="h-20 bg-gray-300 rounded-lg mb-4"></div>
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-12 bg-accent/20 rounded-lg"></div>
                </div>
              </div>
              
              {/* Featured Image Skeleton */}
              <div className="h-[400px] bg-gray-300 rounded-lg mb-8"></div>
              
              {/* Content Skeleton */}
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6 mb-6"></div>
                
                <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
                
                <div className="h-6 bg-gray-300 rounded w-2/3 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
            
            {/* Desktop Sidebar Skeleton */}
            <aside className="hidden lg:block lg:w-[320px]">
              <div className="sticky top-24">
                <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
                  <div className="h-20 bg-gray-300 rounded-lg mb-4"></div>
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-12 bg-accent/20 rounded-lg"></div>
                    <div className="h-12 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}