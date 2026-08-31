"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollAnimations() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      /* Hero entrance */
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from("[data-hero-badge]", {
          opacity: 0,
          y: 14,
          duration: 0.6,
        })
        .from(
          "[data-hero-title]",
          {
            opacity: 0,
            y: 40,
            duration: 0.9,
          },
          "-=0.35",
        )
        .from(
          "[data-hero-text]",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.45",
        )
        .from(
          "[data-hero-actions]",
          {
            opacity: 0,
            y: 18,
            duration: 0.7,
          },
          "-=0.45",
        )
        .from(
          "[data-hero-preview]",
          {
            opacity: 0,
            y: 45,
            scale: 0.96,
            rotateY: -4,
            rotateX: 3,
            duration: 1,
          },
          "-=0.9",
        );

      /* Hero preview scroll movement */
      gsap.to("[data-hero-preview]", {
        y: -30,
        scale: 1.015,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero]",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* Trust */
      gsap.from("[data-trust-item]", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-trust]",
          start: "top 88%",
          once: true,
        },
      });

      /* Generic section reveal */
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 35,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });

      /* Portfolio projects */
      gsap.utils
        .toArray<HTMLElement>("[data-project]")
        .forEach((project) => {
          gsap.from(project, {
            opacity: 0,
            y: 50,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 82%",
              once: true,
            },
          });

          const mockup = project.querySelector("[data-project-mockup]");

          if (mockup) {
            gsap.fromTo(
              mockup,
              {
                y: 50,
                rotate: -1.5,
              },
              {
                y: 12,
                rotate: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: project,
                  start: "top bottom",
                  end: "bottom 45%",
                  scrub: 0.8,
                },
              },
            );
          }
        });

      /* Process steps */
      gsap.from("[data-process-step]", {
        opacity: 0,
        x: 30,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-process-list]",
          start: "top 80%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

