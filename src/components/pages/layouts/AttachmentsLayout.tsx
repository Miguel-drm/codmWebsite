import React from 'react';

interface AttachmentsLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const AttachmentsLayout = ({ leftContent, rightContent }: AttachmentsLayoutProps) => (
  <div className="max-w-4xl mx-auto mt-24 px-2 sm:px-4">
    <div className="bg-black/70 rounded-2xl shadow-2xl p-4 sm:p-8 flex flex-col sm:flex-row gap-6 relative overflow-hidden min-h-[400px]">
      {/* Left: Gun Categories */}
      <aside className="w-full sm:w-1/3 flex-shrink-0 mb-4 sm:mb-0">
        <div className="bg-black/40 rounded-xl p-4 h-full flex flex-col gap-4">
          {leftContent}
        </div>
      </aside>
      {/* Right: Attachments */}
      <main className="w-full sm:w-2/3 flex-1">
        <div className="bg-black/30 rounded-xl p-4 h-full min-h-[200px] flex flex-col gap-4">
          {rightContent}
        </div>
      </main>
    </div>
  </div>
);

export default AttachmentsLayout; 