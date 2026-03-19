"use client";

export const HomeSkeleton = () => {
  return (
    <div className="min-h-screen bg-canvas-default text-fg-default font-sans animate-pulse">
      {/* Header Skeleton */}
      <header className="sticky top-0 z-[100] bg-canvas-default border-b border-border-default h-16 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
             <div className="w-8 h-8 rounded-full bg-border-default" />
             <div className="w-24 h-4 bg-border-default rounded hidden sm:block" />
             <div className="w-64 h-8 bg-border-default rounded-md hidden md:block ml-4" />
          </div>
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full bg-border-default" />
             <div className="w-8 h-8 rounded-full bg-border-default" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-x-8 lg:gap-x-12 gap-y-12">
          
          {/* Left Sidebar Skeleton */}
          <aside className="flex flex-col gap-6 lg:gap-8 min-w-[280px]">
            <div className="w-full aspect-square rounded-full bg-border-default" />
            <div className="space-y-3">
              <div className="h-7 bg-border-default rounded w-3/4" />
              <div className="h-5 bg-border-default rounded w-1/2" />
              <div className="h-16 bg-border-default rounded w-full mt-4" />
              <div className="h-10 bg-border-default rounded w-full mt-2" />
            </div>
            <div className="space-y-4 pt-4 border-t border-border-default">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="w-4 h-4 rounded-full bg-border-default" />
                   <div className="h-4 bg-border-default rounded w-full" />
                 </div>
               ))}
            </div>
            <div className="flex gap-2.5 mt-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="w-14 h-14 rounded-full bg-border-default" />
               ))}
            </div>
          </aside>

          {/* Main Content Skeleton */}
          <div className="flex flex-col gap-6">
            {/* Tab Nav Skeleton */}
            <div className="flex items-center gap-1 border-b border-border-default mb-2">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="px-6 py-4">
                    <div className="w-20 h-4 bg-border-default rounded" />
                 </div>
               ))}
            </div>

            {/* Overview Content Skeleton */}
            <div className="space-y-10">
              {/* Contribution Graph Skeleton */}
              <div className="github-card h-40 w-full bg-border-muted/50 border-border-default" />
              
              {/* Pinned Repos Skeleton */}
              <div className="space-y-4">
                <div className="h-6 bg-border-default rounded w-24 mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="github-card h-32 w-full bg-border-muted/50 border-border-default" />
                  ))}
                </div>
              </div>

              {/* Skills Skeleton */}
              <div className="github-card space-y-8 p-8">
                <div className="h-6 bg-border-default rounded w-40 mb-8" />
                {[1, 2, 3].map(i => (
                  <div key={i} className="space-y-4">
                    <div className="flex justify-between">
                       <div className="h-4 bg-border-default rounded w-32" />
                       <div className="h-4 bg-border-default rounded w-10" />
                    </div>
                    <div className="h-2.5 bg-border-default rounded-full w-full" />
                  </div>
                ))}
              </div>

              {/* Experience Skeleton */}
              <div className="github-card space-y-8 p-8">
                 <div className="h-6 bg-border-default rounded w-48 mb-6" />
                 <div className="space-y-10 pl-6 border-l-2 border-border-default">
                    {[1, 2].map(i => (
                      <div key={i} className="relative space-y-3">
                         <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-border-default border-2 border-canvas-default" />
                         <div className="h-5 bg-border-default rounded w-1/3" />
                         <div className="h-4 bg-border-default rounded w-1/4" />
                         <div className="h-10 bg-border-default rounded w-full mt-4" />
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
