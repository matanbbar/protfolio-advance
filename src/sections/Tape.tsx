import StarIcon from '@/assets/icons/star.svg';
import { Fragment } from 'react';

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scaleable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimizied",
  "Useable",
  "Reliable",
]

const TapeSection = () => {
  return (
    <section className="py-16 overflow-x-clip lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s] pr-4">
            {
              [...new Array(2)].fill(0).map((_, index) => (
                <Fragment key={index}>
                  {
                    words.map(word => (
                      <div key={word} className="inline-flex gap-4 items-center">
                        <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                        <StarIcon className="size-6 text-gray-900 -rotate-12" />
                      </div>
                    ))
                  }
                </Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default TapeSection;
