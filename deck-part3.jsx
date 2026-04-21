// N27 Deck — Part 3: slides 12-16 (Team, Ask, Risks, Timeline, Close)

// Slide 12 — Team & Leadership
const TeamSlide = () => {
  const pillars = [
    ['Real estate','Site selection, lease structuring, and zip-by-zip market read — the Boston advantage.'],
    ['Restaurants','Live restaurant subsidiary provides the commissary, the QA lens, and the operating muscle.'],
    ['Mobile food','Permitting, commissary licensing, and fleet ops experience — earned, not Googled.'],
    ['Franchising','Relationships on both sides of the table: brand legal/FDD and HNW franchisee capital.'],
  ];
  return (
    <div className="deck-slide">
      <div className="slide-eyebrow">12 · TEAM &amp; LEADERSHIP</div>
      <h3 className="slide-title">Built by an operator who's done each of these individually.</h3>
      <p className="slide-sub">N27 is the intersection of four disciplines. Most teams have one or two. We have all four.</p>
      <div style={{display:'grid',gridTemplateColumns:'1.3fr 1fr',gap:24,marginTop:24,flex:1}}>
        <div style={{background:'#0A0A0A',color:'var(--n27-ivory)',padding:'26px 28px',display:'flex',flexDirection:'column'}}>
          <Eyebrow lime>FOUNDER &amp; MANAGING PARTNER</Eyebrow>
          <h4 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:30,letterSpacing:'.06em',color:'var(--n27-ivory)',margin:'4px 0 4px'}}>MARLON BENJAMIN</h4>
          <div style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:15,color:'var(--n27-lime)',marginBottom:18}}>Founder, Number 20 Seven LLC</div>
          <div style={{color:'var(--n27-lime)',letterSpacing:'.4em',marginBottom:16}}>★ ★ ★</div>
          <p style={{fontSize:13,lineHeight:1.6,color:'#E8E0D2',margin:0}}>Operator-investor with two decades across Boston real estate, hospitality, and mobile food. Builds the deal, structures the SPV, and stays close enough to the trucks to taste the food.</p>
          <div style={{marginTop:'auto',paddingTop:18,borderTop:'1px solid #222',fontFamily:'var(--font-ui)',fontSize:11,letterSpacing:'.18em',textTransform:'uppercase',color:'#B8AE9E',fontWeight:700}}>
            857.919.1552 · marlon@n27llc.com
          </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          <Eyebrow>FOUR PILLARS UNDER ONE ROOF</Eyebrow>
          {pillars.map(([h,b],i)=>(
            <div key={i} style={{background:'var(--n27-ivory)',borderLeft:'3px solid var(--n27-lime)',padding:'11px 16px'}}>
              <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:14,letterSpacing:'.04em',marginBottom:2}}>{h}</div>
              <div style={{fontSize:11.5,lineHeight:1.45}}>{b}</div>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter n={12}/>
    </div>
  );
};

// Slide 13 — Revenue Model (N27 economics)
const RevenueModelSlide = () => {
  const streams = [
    ['Advisory retainer','$25–75K / brand','Paid by franchisor partners to stand up the mobile playbook, truck spec, and operator pipeline.'],
    ['Placement fee','2% of gross franchise sale','Per executed franchisee deal — paid at close, covering sourcing and diligence.'],
    ['Ongoing override','0.5–1% of gross truck sales','Light, long-tail royalty via the franchisor structure. Aligned, not extractive.'],
    ['SPV equity','Co-invest option','N27 and strategic LPs can co-invest in operator SPVs — alignment and upside.'],
  ];
  return (
    <div className="deck-slide">
      <div className="slide-eyebrow">13 · REVENUE MODEL</div>
      <h3 className="slide-title">How N27 gets paid.</h3>
      <p className="slide-sub">Four stacked revenue streams. Capital-light. Brand-aligned. Built to compound.</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginTop:24,flex:1}}>
        {streams.map(([h,a,b],i)=>(
          <div key={i} style={{background:'#fff',border:'1px solid var(--n27-rule)',padding:'20px 22px',position:'relative'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'var(--n27-lime)'}}/>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12,marginBottom:8}}>
              <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:17,letterSpacing:'.04em'}}>{h}</div>
              <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:14,color:'var(--n27-lime)',whiteSpace:'nowrap'}}>{a}</div>
            </div>
            <div style={{fontSize:12.5,lineHeight:1.55,color:'var(--n27-ink)'}}>{b}</div>
          </div>
        ))}
      </div>
      <SlideFooter n={13}/>
    </div>
  );
};

// Slide 14 — The Ask
const AskSlide = () => (
  <div className="deck-slide dark">
    <div className="slide-eyebrow">14 · THE ASK</div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1.3fr',gap:36,flex:1,marginTop:12,alignItems:'center'}}>
      <div>
        <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:96,color:'var(--n27-ivory)',letterSpacing:'.02em',lineHeight:1}}>$5M</div>
        <div style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:17,color:'#E8E0D2',margin:'16px 0 18px',lineHeight:1.4}}>Growth capital — Series A equity or structured revenue share with board-seat option.</div>
        <div style={{width:140,borderTop:'2px solid var(--n27-lime)',marginBottom:18}}/>
        <ul style={{listStyle:'none',padding:0,margin:0}}>
          <Bullet dark>Fuels the first 50 franchised truck launches across Greater Boston.</Bullet>
          <Bullet dark>Seeds 5 brand-partner agreements by 2028.</Bullet>
          <Bullet dark>Establishes the national brick-and-mortar-to-truck playbook.</Bullet>
        </ul>
      </div>
      <div>
        <Eyebrow lime>USE OF FUNDS</Eyebrow>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          {[['$2.0M','40%','Truck design &amp; fleet','Spec, commissary, permitting for 10 Phase-1 units.'],
            ['$1.5M','30%','Marketing &amp; digital','Brand co-marketing, POS/loyalty integration.'],
            ['$1.0M','20%','Franchise sales &amp; legal','FDD support per brand partner, operator training.'],
            ['$0.5M','10%','Working capital','12-month runway, pilot reserve, contingency.']].map(([a,p,h,d],i)=>(
              <div key={i} style={{background:'#141414',padding:'16px 16px',position:'relative'}}>
                <div style={{position:'absolute',top:0,bottom:0,left:0,width:2,background:'var(--n27-lime)'}}/>
                <span style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:22,color:'var(--n27-lime)',letterSpacing:'.02em'}}>{a}</span>
                <span style={{fontFamily:'var(--font-ui)',fontSize:9,fontWeight:700,letterSpacing:'.16em',color:'#B8AE9E',marginLeft:8}}>{p}</span>
                <div style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--n27-ivory)',margin:'10px 0 4px',fontWeight:600}} dangerouslySetInnerHTML={{__html:h}}/>
                <div style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:11,color:'#B8AE9E',lineHeight:1.4}} dangerouslySetInnerHTML={{__html:d}}/>
              </div>
            ))}
        </div>
      </div>
    </div>
    <SlideFooter n={14}/>
  </div>
);

// Slide 15 — Risks & Mitigations
const RisksSlide = () => {
  const rows = [
    ['Permit / lottery friction','Boston and peer cities cap truck licenses and use lottery systems.','N27\'s local fluency + private-site strategy (corporate parks, festivals, stadiums) sidesteps public-right-of-way constraints.'],
    ['Seasonality','New England weather compresses the high-season revenue window.','Commissary catering, corporate events, and southern market expansion smooth the curve. Winter covered catering accounts for ~25% of revenue.'],
    ['Brand partner concentration','Early revenue concentrated in 2–3 anchor brands.','Tiered portfolio (Global QSR, Fast Casual, Celebrity) with non-compete zoning by tier. Target 5 partners by Year 3.'],
    ['Operator quality','Franchisee execution varies; one bad truck hurts the system.','Vetted operator pipeline, mandatory training, mystery-shop QA, and truck redeployment clauses in each SPV.'],
  ];
  return (
    <div className="deck-slide">
      <div className="slide-eyebrow">15 · RISKS &amp; MITIGATIONS</div>
      <h3 className="slide-title">What we watch. What we've solved for.</h3>
      <p className="slide-sub">Every risk here has a mitigation grounded in N27's operating history, not theory.</p>
      <div style={{marginTop:22,flex:1,display:'flex',flexDirection:'column'}}>
        <table className="n27" style={{fontSize:12}}>
          <thead><tr><th style={{width:'22%'}}>Risk</th><th style={{width:'36%'}}>What it is</th><th style={{width:'42%'}}>N27 mitigation</th></tr></thead>
          <tbody>
            {rows.map(([a,b,c],i)=>(
              <tr key={i}><td className="first" style={{verticalAlign:'top'}}>{a}</td><td style={{verticalAlign:'top'}}>{b}</td><td style={{verticalAlign:'top'}}>{c}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <SlideFooter n={15}/>
    </div>
  );
};

// Slide 16 — Close / Thank You
const CloseSlide = () => (
  <div className="deck-slide dark" style={{alignItems:'center',justifyContent:'center',textAlign:'center'}}>
    <div style={{margin:'auto 0',display:'flex',flexDirection:'column',alignItems:'center',gap:0}}>
      <div style={{color:'var(--n27-lime)',fontSize:28,letterSpacing:'.4em'}}>★</div>
      <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:22,letterSpacing:'.22em',color:'var(--n27-ivory)',margin:'18px 0 2px',whiteSpace:'nowrap'}}>NUMBER 20 SEVEN</div>
      <div style={{color:'var(--n27-lime)',letterSpacing:'.5em',fontSize:10,fontFamily:'var(--font-display)',fontWeight:600,marginBottom:30,whiteSpace:'nowrap'}}>L L C</div>
      <div style={{width:160,borderTop:'2px solid var(--n27-lime)',marginBottom:30}}/>
      <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:56,letterSpacing:'.02em',color:'var(--n27-ivory)',margin:'0 0 12px',lineHeight:1.05}}>Let's take them mobile.</h2>
      <div style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:22,color:'var(--n27-lime)',marginBottom:36}}>Together.</div>
      <div style={{color:'var(--n27-lime)',letterSpacing:'.5em',marginBottom:32,fontSize:13}}>★ ★ ★</div>
      <div style={{fontFamily:'var(--font-ui)',fontSize:10,fontWeight:700,letterSpacing:'.22em',textTransform:'uppercase',color:'#B8AE9E',marginBottom:10,whiteSpace:'nowrap'}}>NEXT STEP · INVESTOR CONVERSATION</div>
      <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:18,letterSpacing:'.14em',color:'var(--n27-ivory)',margin:'0 0 4px',whiteSpace:'nowrap'}}>MARLON BENJAMIN</div>
      <div style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:14,color:'#E8E0D2',marginBottom:6,whiteSpace:'nowrap'}}>Founder &amp; Managing Partner</div>
      <div style={{fontFamily:'var(--font-body)',fontSize:13,color:'#B8AE9E',whiteSpace:'nowrap'}}>857.919.1552 &nbsp;·&nbsp; marlon@n27llc.com</div>
    </div>
    <SlideFooter n={16}/>
  </div>
);

// Final slide registry + viewer — assembled from all three parts
const NSlides = [
  { key:'cover',       component: CoverSlide,        title:'Cover' },
  { key:'premise',     component: PremiseSlide,      title:'The Premise' },
  { key:'problem',     component: ProblemSlide,      title:'The Problem' },
  { key:'solution',    component: SolutionSlide,     title:'The Solution' },
  { key:'market',      component: MarketSlide,       title:'Market Opportunity' },
  { key:'scenarios',   component: ScenariosSlide,    title:'Brand Scenarios' },
  { key:'traction',    component: TractionSlide,     title:'Traction &amp; Validation' },
  { key:'economics',   component: EconomicsSlide,    title:'Franchise Model' },
  { key:'gtm',         component: GTMSlide,          title:'Go-to-Market' },
  { key:'financials',  component: FinancialsSlide,   title:'Financial Projections' },
  { key:'competitive', component: CompetitiveSlide,  title:'Competitive Advantage' },
  { key:'team',        component: TeamSlide,         title:'Team &amp; Leadership' },
  { key:'revenue',     component: RevenueModelSlide, title:'Revenue Model' },
  { key:'ask',         component: AskSlide,          title:'The Ask' },
  { key:'risks',       component: RisksSlide,        title:'Risks &amp; Mitigations' },
  { key:'close',       component: CloseSlide,        title:'Close' },
];

const NDeckViewer = () => {
  const [idx, setIdx] = React.useState(() => {
    const s = +localStorage.getItem('n27-deck-idx');
    return (s >= 0 && s < NSlides.length) ? s : 0;
  });
  const scalerRef = React.useRef(null);
  const frameRef  = React.useRef(null);

  React.useEffect(() => { localStorage.setItem('n27-deck-idx', idx); }, [idx]);

  React.useEffect(() => {
    const onKey = (e) => {
      // Only hijack arrows when the deck area has focus-ish (user scrolled it into view)
      const rect = scalerRef.current && scalerRef.current.getBoundingClientRect();
      if (!rect) return;
      const onScreen = rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1;
      if (!onScreen) return;
      if (e.key === 'ArrowRight') setIdx(i => Math.min(NSlides.length - 1, i + 1));
      if (e.key === 'ArrowLeft')  setIdx(i => Math.max(0, i - 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  React.useEffect(() => {
    const scale = () => {
      if (!scalerRef.current || !frameRef.current) return;
      const w = scalerRef.current.clientWidth;
      const s = Math.min(1, w / 1120);
      frameRef.current.style.transform = `scale(${s})`;
    };
    scale();
    window.addEventListener('resize', scale);
    return () => window.removeEventListener('resize', scale);
  }, []);

  const Slide = NSlides[idx].component;
  return (
    <div className="deck-shell">
      <div className="deck-scaler" ref={scalerRef}>
        <div className="deck-frame" ref={frameRef}>
          <Slide/>
        </div>
      </div>
      <div className="deck-controls">
        <button className="deck-nav" onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0}>‹ Prev</button>
        <div className="deck-dots">
          {NSlides.map((s, i) => (
            <button key={s.key} className={"deck-dot " + (i === idx ? 'active' : '')} aria-label={s.title} onClick={() => setIdx(i)}/>
          ))}
        </div>
        <div className="deck-counter">{String(idx + 1).padStart(2, '0')} / {String(NSlides.length).padStart(2, '0')}</div>
        <button className="deck-nav" onClick={() => setIdx(Math.min(NSlides.length - 1, idx + 1))} disabled={idx === NSlides.length - 1}>Next ›</button>
      </div>
    </div>
  );
};

Object.assign(window, {
  TeamSlide, RevenueModelSlide, AskSlide, RisksSlide, CloseSlide,
  NSlides, NDeckViewer,
});
