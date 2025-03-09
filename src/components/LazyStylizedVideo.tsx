'use client';
import { useEffect, useRef, useState } from 'react';
import { StylizedVideo, type VideoProps } from './StylizedVideo';

type LazyStylizedVideoProps = VideoProps & { shape?: 0 | 1 | 2 };

export function LazyStylizedVideo(props: LazyStylizedVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '200px', // Load video when it's 200px from entering viewport
        threshold: 0 
      }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  return (
    <div ref={containerRef}>
      {isVisible ? (
        <StylizedVideo {...props} />
      ) : (
        <div 
          className="w-full h-full bg-neutral-100"
          style={{ aspectRatio: '719/680' }}
        />
      )}
    </div>
  );
}