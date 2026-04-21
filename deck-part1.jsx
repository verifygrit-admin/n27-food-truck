// N27 Deck — Part 1: slides 1-6 (Cover, Premise, Problem, Solution, Market, Scenarios)

const SlideFooter = ({ n }) => (
  <div className="slide-footer">
    <span className="l">NUMBER 20 SEVEN LLC</span>
    <span className="c">CONFIDENTIAL · INVESTOR DECK</span>
    <span className="r">{String(n).padStart(2,'0')} / 16</span>
  </div>
);

const Bullet = ({ children, dark }) => (
  <li style={{position:'relative',paddingLeft:20,marginBottom:9,fontFamily:'var(--font-body)',fontSize:13,lineHeight:1.5,color:dark?'#E8E0D2':'var(--n27-ink)'}}>
    <span style={{position:'absolute',left:0,top:1,color:'var(--n27-lime)',fontSize:12}}>★</span>{children}
  </li>
);

const Eyebrow = ({ children, lime }) => (
  <div style={{fontFamily:'var(--font-ui)',fontSize:10,fontWeight:700,letterSpacing:'.18em',textTransform:'uppercase',color: lime?'var(--n27-lime)':'var(--n27-mute)',marginBottom:10}}>{children}</div>
);

// Slide 1 — Cover
const CoverSlide = () => (
  <div className="deck-slide cover-slide">
    <div className="cv-star">★</div>
    <div className="cv-name" style={{whiteSpace:'nowrap'}}>NUMBER 20 SEVEN</div>
    <div className="cv-llc" style={{whiteSpace:'nowrap'}}>— L L C —</div>
    <div className="cv-tag" style={{whiteSpace:'nowrap'}}>REAL ESTATE · RESTAURANTS · MOBILE FOOD</div>
    <span className="cv-hair"></span>
    <div className="cv-title" style={{whiteSpace:'nowrap'}}>Food Truck</div>
    <div className="cv-sub" style={{whiteSpace:'nowrap'}}><em>Franchise Expansion</em></div>
    <div className="cv-stars3">★ ★ ★</div>
    <div className="cv-thesis">A thesis on inverting the restaurant-to-truck playbook.</div>
    <div className="cv-meta" style={{whiteSpace:'nowrap'}}>INVESTOR PROSPECTUS · APRIL 2026 · CONFIDENTIAL</div>
  </div>
);

// Slide 2 — The Premise
const PremiseSlide = () => (
  <div className="deck-slide">
    <div className="slide-eyebrow">02 · THE PREMISE</div>
    <h3 className="slide-title">Inverting the restaurant-to-truck playbook.</h3>
    <p className="slide-sub">Food trucks built the brick-and-mortar brands of the last decade. We're flipping it.</p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,marginTop:24,flex:1}}>
      <div style={{background:'var(--n27-ivory)',border:'1px solid var(--n27-rule)',padding:'22px 26px'}}>
        <Eyebrow>YESTERDAY</Eyebrow>
        <h4 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:22,letterSpacing:'.04em',margin:'0 0 12px'}}>Truck → Brick-and-mortar</h4>
        <div style={{color:'var(--n27-lime)',fontSize:13,marginBottom:12}}>★</div>
        <ul style={{listStyle:'none',padding:0,margin:0}}>
          <Bullet>Micro-dining concepts proved accessibility is itself a profitable vertical.</Bullet>
          <Bullet>Cousins Maine Lobster: one LA truck → &gt;$1B systemwide sales, ~100 units.</Bullet>
          <Bullet>Kogi BBQ, Halal Guys, Roxy's Grilled Cheese — trucks became chains.</Bullet>
        </ul>
      </div>
      <div style={{background:'#0A0A0A',color:'var(--n27-ivory)',padding:'22px 26px',position:'relative'}}>
        <div style={{position:'absolute',top:0,bottom:0,left:0,width:3,background:'var(--n27-lime)'}}/>
        <Eyebrow lime>OUR THESIS</Eyebrow>
        <h4 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:22,letterSpacing:'.04em',margin:'0 0 12px',color:'var(--n27-ivory)'}}>Brick-and-mortar → Truck</h4>
        <div style={{color:'var(--n27-lime)',fontSize:13,marginBottom:12}}>★</div>
        <ul style={{listStyle:'none',padding:0,margin:0}}>
          <Bullet dark>Established QSR brands can "test" new markets via mobile before $1M+ leases.</Bullet>
          <Bullet dark>Lower franchisee barrier → more operators, faster unit growth, same royalty.</Bullet>
          <Bullet dark>Trucks double as real-estate reconnaissance: best sites self-identify via traffic.</Bullet>
        </ul>
      </div>
    </div>
    <SlideFooter n={2}/>
  </div>
);

// Slide 3 — The Problem
const ProblemSlide = () => {
  const stats = [
    { n:'$1.3–2.3M', body:"Total investment to open a single McDonald's location — before land or the $45K franchise fee.", src:'QualiFi / FDD, 2025' },
    { n:'12–24 mo',  body:'Typical break-even for a new fast-food franchise — assuming the site works. Many don\'t.', src:'QSR benchmarks, 2025' },
    { n:'75%',       body:'Annualized restaurant turnover. Fixed labor + fixed rent in a volatile labor market.', src:'Industry composite' },
  ];
  return (
    <div className="deck-slide">
      <div className="slide-eyebrow">03 · THE PROBLEM</div>
      <h3 className="slide-title">Fixed restaurants have a scaling problem.</h3>
      <p className="slide-sub">Real-estate cost, site risk, and capex are crushing traditional QSR expansion.</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:18,marginTop:30,flex:1}}>
        {stats.map((s,i)=>(
          <div key={i} style={{background:'#fff',border:'1px solid var(--n27-rule)',padding:'24px 22px',position:'relative'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:'var(--n27-lime)'}}/>
            <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:34,color:'var(--n27-lime)',letterSpacing:'.02em',lineHeight:1,marginBottom:14}}>{s.n}</div>
            <p style={{margin:'0 0 10px',fontSize:13,lineHeight:1.5}}>{s.body}</p>
            <div style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:11,color:'var(--n27-mute)'}}>{s.src}</div>
          </div>
        ))}
      </div>
      <SlideFooter n={3}/>
    </div>
  );
};

// Slide 4 — The Solution
const SolutionSlide = () => {
  const items = [
    ['I','Same menu, mobile kitchen.','Portable SKUs engineered with brand partner\'s R&D team. No compromise on taste or quality.'],
    ['II','Dual-format commissary model.','Prep in existing B&M kitchens. Incremental revenue per truck. Zero new real-estate overhead.'],
    ['III','Designed for demand.','Corporate parks, festivals, beaches, late-night corridors. Trucks chase traffic; buildings wait for it.'],
    ['IV','A rolling billboard.','Each truck is a brand activation — visible on roads, at events, across social media.'],
  ];
  const rightStats = [
    ['~90 days','Truck launch vs. 12–18 months for a restaurant build-out.'],
    ['$70K–$650K','Mobile investment range across leading franchise brands.'],
    ['$1.3M','Cousins Maine Lobster truck AUV (2024, Item 19 FDD).'],
  ];
  return (
    <div className="deck-slide">
      <div className="slide-eyebrow">04 · THE SOLUTION</div>
      <h3 className="slide-title">One brand. Two formats. Incredible reach.</h3>
      <p className="slide-sub">A franchised mobile unit is 30–50% cheaper to launch and 5× faster to deploy than brick-and-mortar.</p>
      <div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr',gap:28,marginTop:26,flex:1}}>
        <div>
          {items.map(([r,h,b])=>(
            <div key={r} style={{display:'grid',gridTemplateColumns:'44px 1fr',gap:16,marginBottom:16,alignItems:'start'}}>
              <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:22,color:'var(--n27-lime)',letterSpacing:'.04em'}}>{r}.</div>
              <div>
                <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:15,letterSpacing:'.04em',marginBottom:4}}>{h}</div>
                <div style={{fontSize:13,lineHeight:1.5,color:'var(--n27-ink)'}}>{b}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{background:'#0A0A0A',color:'var(--n27-ivory)',padding:'24px 22px'}}>
          <Eyebrow lime>WHY MOBILE WINS</Eyebrow>
          {rightStats.map(([n,b],i)=>(
            <div key={i} style={{paddingBottom:14,marginBottom:14,borderBottom:i<rightStats.length-1?'1px solid #222':0}}>
              <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:22,color:'var(--n27-ivory)',letterSpacing:'.02em',lineHeight:1,marginBottom:4}}>{n}</div>
              <div style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:12,color:'#B8AE9E',lineHeight:1.4}}>{b}</div>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter n={4}/>
    </div>
  );
};

// Slide 5 — Market Opportunity
const MarketSlide = () => {
  const bars = [['2021',1.16,73],['2023',1.05,66],['2025',1.09,68],['2027E',1.24,78],['2029E',1.41,89],['2031E',1.59,100]];
  const cards = [['$1.09B','U.S. food truck market (2025)'],['$1.59B','U.S. market by 2031'],['7.86%','Franchise CAGR \'26–\'31'],['$346K','Avg. annual revenue / truck']];
  return (
    <div className="deck-slide">
      <div className="slide-eyebrow">05 · MARKET OPPORTUNITY</div>
      <h3 className="slide-title">A $1.1B U.S. market growing at 6.5% CAGR.</h3>
      <p className="slide-sub">Franchise mobile food is the fastest-growing sub-segment — 7.9% CAGR through 2031.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:12,marginTop:20,marginBottom:16}}>
        {cards.map(([n,b],i)=>(
          <div key={i} style={{background:'#fff',border:'1px solid var(--n27-rule)',padding:'14px 14px',position:'relative'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'var(--n27-lime)'}}/>
            <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:22,color:'var(--n27-lime)',letterSpacing:'.02em',lineHeight:1,marginBottom:6}}>{n}</div>
            <div style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:11,color:'var(--n27-mute)',lineHeight:1.4}}>{b}</div>
          </div>
        ))}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:20,flex:1}}>
        <div style={{background:'#fff',border:'1px solid var(--n27-rule)',padding:'16px 20px'}}>
          <Eyebrow lime>U.S. FOOD TRUCK MARKET REVENUE ($B)</Eyebrow>
          <div style={{display:'flex',alignItems:'flex-end',gap:10,height:150,borderBottom:'1px solid var(--n27-rule)',marginTop:8}}>
            {bars.map(([y,v,h],i)=>(
              <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4,justifyContent:'flex-end',height:'100%'}}>
                <div style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:10,color:'var(--n27-mute)'}}>${v.toFixed(2)}</div>
                <div style={{width:'100%',background:'var(--n27-lime)',height:`${h*1.05}px`}}/>
              </div>
            ))}
          </div>
          <div style={{display:'flex',gap:10,marginTop:6,fontFamily:'var(--font-ui)',fontSize:9,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--n27-mute)',fontWeight:700}}>
            {bars.map(([y])=>(<div key={y} style={{flex:1,textAlign:'center'}}>{y}</div>))}
          </div>
        </div>
        <div style={{background:'#0A0A0A',color:'var(--n27-ivory)',padding:'20px 22px'}}>
          <Eyebrow lime>WHY NOW</Eyebrow>
          <ul style={{listStyle:'none',padding:0,margin:0}}>
            <Bullet dark>City reforms replacing lottery caps with merit-based licensing.</Bullet>
            <Bullet dark>Franchise segment growing 3× faster than independents.</Bullet>
            <Bullet dark>Remote work redistributed lunch into residential corridors.</Bullet>
          </ul>
          <div style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:10,color:'#8A8070',marginTop:14,borderTop:'1px solid #222',paddingTop:10}}>Sources: Mordor Intelligence, IBISWorld, Grand View Research (2025–26).</div>
        </div>
      </div>
      <SlideFooter n={5}/>
    </div>
  );
};

// Slide 6 — Brand Scenarios
const ScenariosSlide = () => {
  const cards = [
    { t:'I',  eb:'GLOBAL QSR',  nm:"McDonald's-class", why:'Real-estate masters. Huge brand equity. Capex-heavy B&M expansion.', plug:'Market-entry scouts in secondary zips and event corridors.', econ:'$45K fee · 4% royalty · 4% marketing · $250–400K truck vs. $1.3–2.3M B&M.' },
    { t:'II', eb:'FAST CASUAL', nm:'Qdoba / Teriyaki Madness-class',  why:'5–6% royalty, scale through franchisees. Territory economics fit.', plug:'Phase-0 market testing before a 10-year lease.', econ:'Non-traditional precedent in FDDs ($20K Qdoba non-trad fee). Clean slot-in.' },
    { t:'III',eb:'CELEBRITY / REGIONAL',   nm:'Wahlburgers / Tasty Burger-class',  why:'Brand equity outruns footprint. Boston-rooted, nationally known.', plug:'3× trade-area reach without new leases.', econ:'Higher royalty tolerance (6–7%) in exchange for marketing lift.' },
  ];
  return (
    <div className="deck-slide">
      <div className="slide-eyebrow">06 · BRAND SCENARIOS</div>
      <h3 className="slide-title">Three brand archetypes. Three paths to scale.</h3>
      <p className="slide-sub">Brand-agnostic by design — the model works across QSR, fast-casual, and celebrity-chef tiers.</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:16,marginTop:24,flex:1}}>
        {cards.map(c=>(
          <div key={c.t} style={{background:'#fff',border:'1px solid var(--n27-rule)',padding:'22px 20px',display:'flex',flexDirection:'column'}}>
            <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:30,color:'var(--n27-lime)',letterSpacing:'.06em',lineHeight:1}}>TIER {c.t}</div>
            <div style={{fontFamily:'var(--font-ui)',fontSize:9,fontWeight:700,letterSpacing:'.18em',textTransform:'uppercase',color:'var(--n27-mute)',margin:'6px 0 10px'}}>{c.eb}</div>
            <h4 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:17,letterSpacing:'.04em',margin:'0 0 14px'}}>{c.nm}</h4>
            <div style={{fontSize:12,lineHeight:1.5,marginBottom:8}}><strong style={{fontWeight:600}}>Why they need this.</strong> {c.why}</div>
            <div style={{fontSize:12,lineHeight:1.5,marginBottom:8}}><strong style={{fontWeight:600}}>Where we plug in.</strong> {c.plug}</div>
            <div style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:11,lineHeight:1.4,color:'var(--n27-mute)',marginTop:'auto',paddingTop:10,borderTop:'1px solid var(--n27-rule)'}}>{c.econ}</div>
          </div>
        ))}
      </div>
      <SlideFooter n={6}/>
    </div>
  );
};

Object.assign(window, { SlideFooter, Bullet, Eyebrow, CoverSlide, PremiseSlide, ProblemSlide, SolutionSlide, MarketSlide, ScenariosSlide });
