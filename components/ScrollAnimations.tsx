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
          y: 12,
          duration: 0.6,
        })
        .from(
          "[data-hero-title]",
          {
            opacity: 0,
            y: 30,
            duration: 0.9,
          },
          "-=0.35",
        )
        .from(
          "[data-hero-text]",
          {
            opacity: 0,
            y: 18,
            duration: 0.7,
          },
          "-=0.45",
        )
        .from(
          "[data-hero-actions]",
          {
            opacity: 0,
            y: 16,
            duration: 0.7,
          },
          "-=0.45",
        )
        .from(
          "[data-hero-preview]",
          {
            opacity: 0,
            y: 30,
            duration: 0.9,
          },
          "-=0.8",
        );

      /* Hero preview subtle parallax */
      gsap.to("[data-hero-preview]", {
        y: -24,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero]",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* Generic section reveal */
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });

      /* Selected work entrance */
      gsap.utils
        .toArray<HTMLElement>("[data-project]")
        .forEach((project) => {
          gsap.from(project, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 88%",
              once: true,
            },
          });
        });

      /* Process steps */
      gsap.from("[data-process-step]", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-process-list]",
          start: "top 82%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
