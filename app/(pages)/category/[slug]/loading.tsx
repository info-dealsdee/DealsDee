export default function CategoryLoading() {
  return (
    <div className="py-8 md:py-12 animate-pulse">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-300 rounded-lg max-w-md mx-auto mb-4"></div>
          <div className="h-6 bg-gray-200 rounded-lg max-w-2xl mx-auto"></div>
        </div>
        
        {/* Filter Bar Skeleton */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
              <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
              <div className="h-10 w-32 bg-gray-200 rounded-lg"></div>
              <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="h-10 w-40 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
        
        {/* Products Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                {/* Image Skeleton */}
                <div className="bg-gray-300 h-48 rounded-md"></div>
                
                {/* Content Skeleton */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                    <div className="h-4 w-12 bg-gray-200 rounded"></div>
                  </div>
                  
                  <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                  
                  <div className="space-y-1">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  </div>
                  
                  <div className="h-3 bg-gray-200 rounded w-24"></div>
                </div>
                
                {/* Button Skeleton */}
                <div className="h-10 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Skeleton */}
        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            <div className="h-10 w-20 bg-gray-200 rounded-lg"></div>
            <div className="h-10 w-10 bg-gray-300 rounded-lg"></div>
            <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
            <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
            <div className="h-10 w-20 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}