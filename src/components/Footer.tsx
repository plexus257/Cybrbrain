'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    // Links stagger reveal
    if (linksRef.current) {
      const cols = linksRef.current.querySelectorAll('.footer-col');
      gsap.fromTo(cols, {
        opacity: 0, y: 30,
      }, {
        opacity: 1, y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 88%',
        },
      });
    }

    // Giant name text reveal
    if (nameRef.current) {
      gsap.fromTo(nameRef.current, {
        opacity: 0,
        scale: 0.95,
        filter: 'blur(12px)',
      }, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: nameRef.current,
          start: 'top 90%',
        },
      });
    }

    // Bottom section
    if (bottomRef.current) {
      gsap.fromTo(bottomRef.current, {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bottomRef.current,
          start: 'top 95%',
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="text-white pt-16 pb-10 px-6 md:px-12 lg:px-20 w-full"
      style={{
        background: '#0a0a0b',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Top Links Section */}
      <div
        ref={linksRef}
        className="max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 md:mb-24"
      >
        {/* Left Column - Tagline */}
        <div className="lg:w-5/12 flex flex-col justify-start footer-col">
          <h2
            className="text-[2rem] md:text-[2.5rem] font-medium tracking-tight text-white leading-[1.1]"
          >
            Compliance + Cashflow Infrastructure for regulated MSMEs.
          </h2>
        </div>

        {/* Right Columns - Links */}
        <div className="lg:w-7/12 flex flex-wrap justify-start lg:justify-end gap-12 md:gap-20 lg:gap-24">
          {/* Column 1: Product */}
          <div className="flex flex-col gap-3.5 footer-col">
            <span className="text-[15px] font-semibold text-white mb-1">Product</span>
            <Link href="/product" className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors">Compliance OS</Link>
            <Link href="/product" className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors">Cashflow OS</Link>
            <Link href="/product" className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors">Decision Intelligence</Link>
            <Link href="/pricing" className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors">Pricing</Link>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-3.5 footer-col">
            <span className="text-[15px] font-semibold text-white mb-1">Company</span>
            <Link href="/about" className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors">About</Link>
            <Link href="/industries" className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors">Industries</Link>
            <Link href="/how-it-works" className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors">How It Works</Link>
            <Link href="/waitlist" className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col gap-3.5 footer-col">
            <span className="text-[15px] font-semibold text-white mb-1">Connect</span>
            <a href="#" className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>

      {/* Giant Typography Section - Edge to Edge */}
      <div
        ref={nameRef}
        className="max-w-[1600px] mx-auto w-full flex justify-center mb-12 md:mb-16"
        style={{ opacity: 0 }}
      >
        <Image
          src="/name.png"
          alt="Cybrbrain"
          width={1200}
          height={200}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Bottom Footer Section */}
      <div
        ref={bottomRef}
        className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-4"
        style={{ opacity: 0 }}
      >
        {/* Logo / Copyright */}
        <div className="flex items-center gap-3 select-none">
          <Image
            src="/logo.png"
            alt="Cybrbrain"
            width={28}
            height={28}
            className="rounded-md"
            style={{ filter: 'brightness(0.8) contrast(1.2)' }}
          />
          <span className="text-[13px] font-semibold text-gray-500 tracking-wider uppercase">
            © {new Date().getFullYear()} Cybrbrain
          </span>
        </div>

        {/* Legal & Extra Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[14px] font-medium text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
