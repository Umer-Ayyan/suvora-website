import Skeleton from 'react-loading-skeleton';

const PageSkeleton = () => {
  return (
    <div className="min-h-screen bg-suvora-900 px-6 py-24">

      <div className="max-w-6xl mx-auto">

        <Skeleton height={60} width={400} />

        <div className="mt-8">
          <Skeleton count={3} height={25} />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <Skeleton height={250} borderRadius={24} />
          <Skeleton height={250} borderRadius={24} />
          <Skeleton height={250} borderRadius={24} />

        </div>

      </div>

    </div>
  );
};

export default PageSkeleton;