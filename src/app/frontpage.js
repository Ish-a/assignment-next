import React from 'react';
import './frontpage.css';
import NavigationMenuDemo from './NavigationMenuDemo';
import RightIsland from './RightIsland';
// import _carousel from './Carousel.js';
import _carousel from './carouselSec.js';
import _landingProd from './landingProdSec.js';

const FrontPage = () => {
  return (
    <div>
      <div className='nav-inner-header'>
        <div className='navbar'>
          <NavigationMenuDemo />
          <RightIsland />
        </div>
      </div>

      <div className='bg-white' style={{ margin: "-1px auto 0 auto" }}>
        <div className='container-bg-white hero-landing'>
          <div className='bg-front fill-bg'>
            <div className='img-root'>
              <img
                src="https://images.ctfassets.net/xny2w179f4ki/4hSa4PqT8hc38vwdXMwAcN/541d6322a174645b2c9573afb5d02a25/hero-bg.webp?&q=80"
                srcSet="
                  https://images.ctfassets.net/xny2w179f4ki/4hSa4PqT8hc38vwdXMwAcN/541d6322a174645b2c9573afb5d02a25/hero-bg.webp?&q=80&w=480 480w,
                  https://images.ctfassets.net/xny2w179f4ki/4hSa4PqT8hc38vwdXMwAcN/541d6322a174645b2c9573afb5d02a25/hero-bg.webp?&q=80&w=640 640w,
                  https://images.ctfassets.net/xny2w179f4ki/4hSa4PqT8hc38vwdXMwAcN/541d6322a174645b2c9573afb5d02a25/hero-bg.webp?&q=80&w=960 960w,
                  https://images.ctfassets.net/xny2w179f4ki/4hSa4PqT8hc38vwdXMwAcN/541d6322a174645b2c9573afb5d02a25/hero-bg.webp?&q=80&w=1280 1280w,
                  https://images.ctfassets.net/xny2w179f4ki/4hSa4PqT8hc38vwdXMwAcN/541d6322a174645b2c9573afb5d02a25/hero-bg.webp?&q=80&w=1512 1512w,
                  https://images.ctfassets.net/xny2w179f4ki/4hSa4PqT8hc38vwdXMwAcN/541d6322a174645b2c9573afb5d02a25/hero-bg.webp?&q=80&w=1920 1920w,
                  https://images.ctfassets.net/xny2w179f4ki/4hSa4PqT8hc38vwdXMwAcN/541d6322a174645b2c9573afb5d02a25/hero-bg.webp?&q=80&w=2560 2560w
                "
                sizes="(min-width: 1920px) 1920px, 100vw"
                alt="background"
                width="2560"
                height="5219"
                loading="eager"
                className="bg-main-img"
              />
              {/* Uncomment and correct the mobile image if needed */}
              {/* <img
                src="https://images.ctfassets.net/xny2w179f4ki/27GkkGcmLIhisyZGAXTS4W/93692929c381734e6fd9e879bfd7e7e4/home_hero_mob.webp?&q=80"
                srcSet="..."
                sizes="..."
                alt="background"
                loading="eager"
                className="bg-main-img2"
              /> */}
              <section className="intro-front" data-i2-child="display">
                <h1 className='intro-font'>
                  <span className="intro-display-front share-tech-mono-regular">The new age</span>
                  <span className="intro-display-front share-tech-mono-regular">of customer service</span>
                  <span className="intro-display-front3 share-tech-mono-regular">is AI-first</span>
                </h1>

                <hr style={{ width: '33%', textAlign: 'left', marginLeft: '2%' }} />

                <div className='intro-font-desc-container'>
                  <p className='intro-font-desc'>
                    AI-first is a totally new way to deliver customer service. The entire Intercom platform is powered by AI—so customers get instant support with an AI agent, agents get instant answers with an AI copilot, and support leaders get instant AI insights.
                  </p>
                </div>

                <a href="/demo">
                  <span className='intro-view-demo intro-btn'>
                    View Demo
                  </span>
                </a>

                <a href="/trial">
                  <span className='intro-free-trial intro-btn'>
                    Start free trial
                  </span>
                </a>
              </section>

              <div className='bg-next-sec'>
                <div className='intro-next-sec-container'>
                    <h2 className='intro-next-sec-display'>Intercom is the only complete AI-first customer service platform
                    </h2>
                  </div>
                  <div className='next-sec-carousel'>
                    <_carousel />
                  </div>                
              </div>
            </div>
          </div>
        </div>
                {/* the next section */}
        <div className='believe-root-main'>
          <div className='believe-root-container'>
            <div className='believe-root-content'>
              <div className='believe-root-textarea'>
                <div>
                  <div className='textarea-content-prose'>
                    <h3 className='prose-heading'>
                    An open letter from our CEO: welcome to the age of AI-first<br />
                    </h3>


                    <p  className='prose-wrapper-head'>
                    <br />In customer service, we all share the same goal: to provide
                    <span className='highlight-text'>
                    best-in-class customer experiences.<br />
                    </span>
                    </p>


                    <p  className='prose-wrapper-head2'>
                    <br /> AI represents an unprecedented new way—not just to achieve that goal—but to redefine it. Our 
                    <span className='highlight-text'>AI-first</span>
                    platform is built on a single AI system with three major components designed to transform customer service for everyone.<br />
                    </p>


                    <p  className='prose-wrapper-head2'>
                    <span class="highlight-text"><br />AI Agent</span>
                    provides instant, accurate answers for <br /> customers 24/7. 
                    <span class="highlight-text">AI Copilot</span>
                    provides instant, always-on assistance for support agents. 
                    <span class="highlight-text">AI Analyst</span>
                    -coming in 2024-provides holistic AI insights and recommendations for support leaders.<br />
                    </p>

                    <p  className='prose-wrapper-head2'>
                    <br />All three learn from every customer conversation to improve the system. That’s what makes Intercom
                    <span class="highlight-text">the only complete AI-first customer service platform.</span>
                    And we are determined to make Intercom the best, and the only customer service platform you will ever need.<br />
                    </p>

                  </div>
                </div>

                <div className='textarea-signature-box'>
                  <div className='sign-wrapper'>
                  <div style={{ opacity: 1, display: 'block', position: 'relative', width: '300px', height: '40px' }}>
                    <img alt="signature" srcset="https://images.ctfassets.net/xny2w179f4ki/1aKnL9Zb7CZkBwcOUka4UB/4e3d24d259bc862390df98e05fe9dc40/signature.svg 1x, https://images.ctfassets.net/xny2w179f4ki/1aKnL9Zb7CZkBwcOUka4UB/4e3d24d259bc862390df98e05fe9dc40/signature.svg 2x" 
                    src="https://images.ctfassets.net/xny2w179f4ki/1aKnL9Zb7CZkBwcOUka4UB/4e3d24d259bc862390df98e05fe9dc40/signature.svg" 
                    width="344px" height="100px" decoding="async" data-nimg="future" class="" loading="lazy" 
                    style={{ color: 'transparent', width:"344px",height:"100px"}}/></div>
                  {/* <div style={{ opacity: 0, display: 'none', position: 'relative', width: '300px', height: '40px' }}><img alt="signature" srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F2aap84o1FhGRJzRwuWvJxh%2Fdd3b99a7228cfd0270c56a3c73abf307%2F04.png%3Ffm%3Dwebp&amp;w=384&amp;q=80 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F2aap84o1FhGRJzRwuWvJxh%2Fdd3b99a7228cfd0270c56a3c73abf307%2F04.png%3Ffm%3Dwebp&amp;w=768&amp;q=80 2x" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F2aap84o1FhGRJzRwuWvJxh%2Fdd3b99a7228cfd0270c56a3c73abf307%2F04.png%3Ffm%3Dwebp&amp;w=768&amp;q=80" width="300" height="40" decoding="async" data-nimg="future" class="" loading="lazy" style={{ color: 'transparent' }}/></div>
                  <div style={{ opacity: 0, display: 'none', position: 'relative', width: '300px', height: '40px' }}><img alt="signature" srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F2XyUVrnhxdwlFJdXd3tnja%2Fbc527e120a046892653a71ecab4d1ca4%2F13.png%3Ffm%3Dwebp&amp;w=384&amp;q=80 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F2XyUVrnhxdwlFJdXd3tnja%2Fbc527e120a046892653a71ecab4d1ca4%2F13.png%3Ffm%3Dwebp&amp;w=768&amp;q=80 2x" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F2XyUVrnhxdwlFJdXd3tnja%2Fbc527e120a046892653a71ecab4d1ca4%2F13.png%3Ffm%3Dwebp&amp;w=768&amp;q=80" width="300" height="40" decoding="async" data-nimg="future" class="" loading="lazy" style={{ color: 'transparent' }}/></div>
                  <div style={{ opacity: 0, display: 'none', position: 'relative', width: '300px', height: '40px' }}><img alt="signature" srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F4HeHSzAAizxrbji2mfOzAc%2F1031910b7ec7d2b5f0086e216a391878%2F05.png%3Ffm%3Dwebp&amp;w=384&amp;q=80 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F4HeHSzAAizxrbji2mfOzAc%2F1031910b7ec7d2b5f0086e216a391878%2F05.png%3Ffm%3Dwebp&amp;w=768&amp;q=80 2x" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F4HeHSzAAizxrbji2mfOzAc%2F1031910b7ec7d2b5f0086e216a391878%2F05.png%3Ffm%3Dwebp&amp;w=768&amp;q=80" width="300" height="40" decoding="async" data-nimg="future" class="" loading="lazy" style={{ color: 'transparent' }}/></div>
                  <div style={{ opacity: 0, display: 'none', position: 'relative', width: '300px', height: '40px' }}><img alt="signature" srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F7InGjQ3eU8dfJ75nLOWAVx%2Ff9bb80e9ea1376aa9952da8fc3a1445d%2F09.png%3Ffm%3Dwebp&amp;w=384&amp;q=80 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F7InGjQ3eU8dfJ75nLOWAVx%2Ff9bb80e9ea1376aa9952da8fc3a1445d%2F09.png%3Ffm%3Dwebp&amp;w=768&amp;q=80 2x" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F7InGjQ3eU8dfJ75nLOWAVx%2Ff9bb80e9ea1376aa9952da8fc3a1445d%2F09.png%3Ffm%3Dwebp&amp;w=768&amp;q=80" width="300" height="40" decoding="async" data-nimg="future" class="" loading="lazy" style={{ color: 'transparent' }}/></div>
                  <div style={{ opacity: 0, display: 'none', position: 'relative', width: '300px', height: '40px' }}><img alt="signature" srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F7qD9LERdYhkeaLb0UU7ks3%2F78367c8651227ece49804c7edf1d9bce%2F10.png%3Ffm%3Dwebp&amp;w=384&amp;q=80 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F7qD9LERdYhkeaLb0UU7ks3%2F78367c8651227ece49804c7edf1d9bce%2F10.png%3Ffm%3Dwebp&amp;w=768&amp;q=80 2x" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F7qD9LERdYhkeaLb0UU7ks3%2F78367c8651227ece49804c7edf1d9bce%2F10.png%3Ffm%3Dwebp&amp;w=768&amp;q=80" width="300" height="40" decoding="async" data-nimg="future" class="" loading="lazy" style={{ color: 'transparent' }}/></div>
                  <div style={{ opacity: 0, display: 'none', position: 'relative', width: '300px', height: '40px' }}><img alt="signature" srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F4Z3ZIix6BtS15XKty2KPLF%2Fa4b4b3c6d10ba99b6074d9d82b99a0de%2F06.png%3Ffm%3Dwebp&amp;w=384&amp;q=80 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F4Z3ZIix6BtS15XKty2KPLF%2Fa4b4b3c6d10ba99b6074d9d82b99a0de%2F06.png%3Ffm%3Dwebp&amp;w=768&amp;q=80 2x" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F4Z3ZIix6BtS15XKty2KPLF%2Fa4b4b3c6d10ba99b6074d9d82b99a0de%2F06.png%3Ffm%3Dwebp&amp;w=768&amp;q=80" width="300" height="40" decoding="async" data-nimg="future" class="" loading="lazy" style={{ color: 'transparent' }}/></div>
                  <div style={{ opacity: 0, display: 'none', position: 'relative', width: '300px', height: '40px' }}><img alt="signature" srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F285S3xOzxoyi0IO7tJT5kz%2F0d8e7f485d90b27c7c9e0d57024f12b9%2F11.png%3Ffm%3Dwebp&amp;w=384&amp;q=80 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F285S3xOzxoyi0IO7tJT5kz%2F0d8e7f485d90b27c7c9e0d57024f12b9%2F11.png%3Ffm%3Dwebp&amp;w=768&amp;q=80 2x" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F285S3xOzxoyi0IO7tJT5kz%2F0d8e7f485d90b27c7c9e0d57024f12b9%2F11.png%3Ffm%3Dwebp&amp;w=768&amp;q=80" width="300" height="40" decoding="async" data-nimg="future" class="" loading="lazy" style={{ color: 'transparent' }}/></div>
                  <div style={{ opacity: 0, display: 'none', position: 'relative', width: '300px', height: '40px' }}><img alt="signature" srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F5JH6Ul8UUDFMNjYeL0Bios%2Fff4a1a3a453ade3650a9b7814d3d47e7%2F07.png%3Ffm%3Dwebp&amp;w=384&amp;q=80 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F5JH6Ul8UUDFMNjYeL0Bios%2Fff4a1a3a453ade3650a9b7814d3d47e7%2F07.png%3Ffm%3Dwebp&amp;w=768&amp;q=80 2x" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F5JH6Ul8UUDFMNjYeL0Bios%2Fff4a1a3a453ade3650a9b7814d3d47e7%2F07.png%3Ffm%3Dwebp&amp;w=768&amp;q=80" width="300" height="40" decoding="async" data-nimg="future" class="" loading="lazy" style={{ color: 'transparent' }}/></div>
                  <div style={{ opacity: 0, display: 'none', position: 'relative', width: '300px', height: '40px' }}><img alt="signature" srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2Fb0ed7tW1LzkGVmHSYHtyV%2F824f21246c345d279370f8386c34c776%2F14.png%3Ffm%3Dwebp&amp;w=384&amp;q=80 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2Fb0ed7tW1LzkGVmHSYHtyV%2F824f21246c345d279370f8386c34c776%2F14.png%3Ffm%3Dwebp&amp;w=768&amp;q=80 2x" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2Fb0ed7tW1LzkGVmHSYHtyV%2F824f21246c345d279370f8386c34c776%2F14.png%3Ffm%3Dwebp&amp;w=768&amp;q=80" width="300" height="40" decoding="async" data-nimg="future" class="" loading="lazy" style={{ color: 'transparent' }}/></div>
                  <div style={{ opacity: 0, display: 'none', position: 'relative', width: '300px', height: '40px' }}><img alt="signature" srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F3vIIpcudXwTJ0xeJ589FDz%2F0f47339b26dc09d018cd9d90e2002280%2F12.png%3Ffm%3Dwebp&amp;w=384&amp;q=80 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F3vIIpcudXwTJ0xeJ589FDz%2F0f47339b26dc09d018cd9d90e2002280%2F12.png%3Ffm%3Dwebp&amp;w=768&amp;q=80 2x" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F3vIIpcudXwTJ0xeJ589FDz%2F0f47339b26dc09d018cd9d90e2002280%2F12.png%3Ffm%3Dwebp&amp;w=768&amp;q=80" width="300" height="40" decoding="async" data-nimg="future" class="" loading="lazy" style={{ color: 'transparent' }}/></div>
                  <div style={{ opacity: 0, display: 'none', position: 'relative', width: '300px', height: '40px' }}><img alt="signature" srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2FdLgWk4cbuAqwzIYY7Uor8%2F09c4b0c8362c390aea23234ce87cf4ed%2F08.png%3Ffm%3Dwebp&amp;w=384&amp;q=80 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2FdLgWk4cbuAqwzIYY7Uor8%2F09c4b0c8362c390aea23234ce87cf4ed%2F08.png%3Ffm%3Dwebp&amp;w=768&amp;q=80 2x" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2FdLgWk4cbuAqwzIYY7Uor8%2F09c4b0c8362c390aea23234ce87cf4ed%2F08.png%3Ffm%3Dwebp&amp;w=768&amp;q=80" width="300" height="40" decoding="async" data-nimg="future" class="" loading="lazy" style={{ color: 'transparent' }}/></div>
                  <div style={{ opacity: 0, display: 'none', position: 'relative', width: '300px', height: '40px' }}><img alt="signature" srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F4jng1MdYi1fCDowvFom7QA%2F9eded8e1e9430ccf34e72fed31a3eceb%2F03.png%3Ffm%3Dwebp&amp;w=384&amp;q=80 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F4jng1MdYi1fCDowvFom7QA%2F9eded8e1e9430ccf34e72fed31a3eceb%2F03.png%3Ffm%3Dwebp&amp;w=768&amp;q=80 2x" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F4jng1MdYi1fCDowvFom7QA%2F9eded8e1e9430ccf34e72fed31a3eceb%2F03.png%3Ffm%3Dwebp&amp;w=768&amp;q=80" width="300" height="40" decoding="async" data-nimg="future" class="" loading="lazy" style={{ color: 'transparent' }}/></div>
                  <div style={{ opacity: 0, display: 'none', position: 'relative', width: '300px', height: '40px' }}><img alt="signature" srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F6gAWZf08Qo6uy3onnHZSiR%2F62b295420460b27f84c543084663a718%2F02.png%3Ffm%3Dwebp&amp;w=384&amp;q=80 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F6gAWZf08Qo6uy3onnHZSiR%2F62b295420460b27f84c543084663a718%2F02.png%3Ffm%3Dwebp&amp;w=768&amp;q=80 2x" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F6gAWZf08Qo6uy3onnHZSiR%2F62b295420460b27f84c543084663a718%2F02.png%3Ffm%3Dwebp&amp;w=768&amp;q=80" width="300" height="40" decoding="async" data-nimg="future" class="" loading="lazy" style={{ color: 'transparent' }}/></div>
                  <div style={{ opacity: 0, display: 'none', position: 'relative', width: '300px', height: '40px' }}><img alt="signature" srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F6wOmTQHwepv5orqZkccQvx%2F254c492fe321b5a26c7320c15bbf311b%2F01.png%3Ffm%3Dwebp&amp;w=384&amp;q=80 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F6wOmTQHwepv5orqZkccQvx%2F254c492fe321b5a26c7320c15bbf311b%2F01.png%3Ffm%3Dwebp&amp;w=768&amp;q=80 2x" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxny2w179f4ki%2F6wOmTQHwepv5orqZkccQvx%2F254c492fe321b5a26c7320c15bbf311b%2F01.png%3Ffm%3Dwebp&amp;w=768&amp;q=80" width="300" height="40" decoding="async" data-nimg="future" class="" loading="lazy" style={{ color: 'transparent' }}/></div> */}

                  </div>



                </div>
                <ol className='text-area-footer'>
                    <li className='footer-footnotes'>
                      <span>
                        Eoghan McCabe 
                        <br/>
                        CEO and Co-founder
                      </span>
                    </li>
                    {/* <li>
                      <span></span>
                    </li> */}
                </ol>


              <div className='graphic-illustration'>



              <div
      className='believe-root-graphic'
      style={{
        '--lqip-reveal-step': '100ms',
        '--img-reveal-delay': '0ms',
        '--img-aspect-ratio': '1400 / 2833',
        '--img-reveal-duration': '0.8s',
        width: '400px',
        height: '806px',
        // overflow: 'hidden',
        position: 'relative',
        marginLeft:'800px',
        marginTop:'-900px',

      }}
    >
      <img
        alt="Planets coming out of a compass"
        style={{
          width: '100%',
          height: '100%',
          // objectFit: 'cover', 
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        src="https://images.ctfassets.net/xny2w179f4ki/5QsvhzvGSny1DhthAbKK6f/6681b1a206207108f68d178f1425ac17/Homepage_Spot_1_1400.webp?&amp;q=80"
        srcSet="https://images.ctfassets.net/xny2w179f4ki/5QsvhzvGSny1DhthAbKK6f/6681b1a206207108f68d178f1425ac17/Homepage_Spot_1_1400.webp?&amp;q=80&amp;w=480 480w, https://images.ctfassets.net/xny2w179f4ki/5QsvhzvGSny1DhthAbKK6f/6681b1a206207108f68d178f1425ac17/Homepage_Spot_1_1400.webp?&amp;q=80&amp;w=640 640w, https://images.ctfassets.net/xny2w179f4ki/5QsvhzvGSny1DhthAbKK6f/6681b1a206207108f68d178f1425ac17/Homepage_Spot_1_1400.webp?&amp;q=80&amp;w=960 960w, https://images.ctfassets.net/xny2w179f4ki/5QsvhzvGSny1DhthAbKK6f/6681b1a206207108f68d178f1425ac17/Homepage_Spot_1_1400.webp?&amp;q=80&amp;w=1280 1280w, https://images.ctfassets.net/xny2w179f4ki/5QsvhzvGSny1DhthAbKK6f/6681b1a206207108f68d178f1425ac17/Homepage_Spot_1_1400.webp?&amp;q=80&amp;w=1512 1512w, https://images.ctfassets.net/xny2w179f4ki/5QsvhzvGSny1DhthAbKK6f/6681b1a206207108f68d178f1425ac17/Homepage_Spot_1_1400.webp?&amp;q=80&amp;w=1920 1920w, https://images.ctfassets.net/xny2w179f4ki/5QsvhzvGSny1DhthAbKK6f/6681b1a206207108f68d178f1425ac17/Homepage_Spot_1_1400.webp?&amp;q=80&amp;w=2560 2560w"
        sizes="(min-width: 1920px) 1920px, 100vw"
      />
    </div>


              </div>
            </div>
          </div>
          </div>
        </div>

        <div style={{backgroundColor:'black'}}>
          <_landingProd/>
        </div>
      </div>
    </div>
  )
}

export default FrontPage;
