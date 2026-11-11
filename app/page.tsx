'use client';

import { useState } from 'react';
import Preloader from "./components/Preloader"; // تأكدي من مسار مكون البريلودر
import HomeSection from "./components/HomeSection"; // مسار قسم الهوم

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full min-h-screen relative">
      {/* شاشة التحميل الاحترافية تظهر أولاً عند فتح الصفحة */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* أقسام الموقع تظهر بانسيابية وسلاسة بعد اكتمال التحميل */}
      {isLoaded && (
        <div className="animate-fadeIn">
          <HomeSection />
          {/* هنا يمكنكِ إضافة بقية الأقسام لاحقاً مثل: */}
          {/* <AboutSection /> */}
          {/* <ProjectsSection /> */}
        </div>
      )}
    </div>
  );
}