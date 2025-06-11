import React, { useRef, useEffect, useState } from 'react';
import EducationSection from './EducationSection';
import WorkExperienceSection from './WorkExperienceSection';

const EducationAndWork = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="flex justify-center gap-10 p-8 overflow-hidden"
      style={{ minHeight: '400px' }}
    >
      <EducationSection trigger={visible} />
      <WorkExperienceSection trigger={visible} />
    </div>
  );
};

export default EducationAndWork;