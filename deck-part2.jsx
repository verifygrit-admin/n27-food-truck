// N27 Deck — Part 2: slides 7-11 (Traction, Economics Table, GTM, Financials, Competitive)

// Slide 7 — Traction & Validation
const TractionSlide = () => {
  const cases = [
    { brand:'Cousins Maine Lobster', stat:'$1.3M AUV', body:'Single LA truck (2012) → >$1B systemwide, ~100 trucks, 30+ states by 2025. Franchisees average 6 units. Validated by Item 19 FDD.' },
    { brand:'Kona Ice', stat:'1,800+ units', body:'Fixed-fee royalty ($3–4K) instead of % of sales. Single operator built 3 additional truck brands. Proof mobile-first franchising compounds.' },
    { brand:"Auntie Anne's · Taco Bell · Burger King", stat:'Tested mobile', body:'Legacy QSR brands have all piloted food-truck activations to enter markets, validate menus, reach new day-parts. The channel is no longer experimental.' },
  ];
  return (
    <div className="deck-slide">
      <div className="slide-eyebrow">07 · TRACTION &amp; VALIDATION</div>
      <h3 className="slide-title">The de-risked playbook already exists.</h3>
      <p className="slide-sub">We're not writing a new playbook — we're syndicating the one that already works.</p>
      <div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr',gap:22,marginTop:24,flex:1}}>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {cases.map((c,i)=>(
            <div key={i} style={{background:'var(--n27-ivory)',borderLeft:'3px solid var(--n27-lime)',padding:'16px 22px'}}>
              <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',marginBottom:8,gap:20}}>
                <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:17,letterSpacing:'.04em'}}>{c.brand}</div>
                <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:20,color:'var(--n27-lime)',letterSpacing:'.02em',whiteSpace:'nowrap'}}>{c.stat}</div>
              </div>
              <div style={{fontSize:12,lineHeight:1.5,color:'var(--n27-ink)'}}>{c.body}</div>
            </div>
          ))}
        </div>
        <div style={{background:'#0A0A0A',color:'var(--n27-ivory)',padding:'22px 22px'}}>
          <Eyebrow lime>N27 POSITION</Eyebrow>
          <h4 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:20,letterSpacing:'.04em',color:'var(--n27-ivory)',margin:'0 0 12px'}}>We sit between brand and operator.</h4>
          <div style={{color:'var(--n27-lime)',fontSize:13,marginBottom:14}}>★</div>
          <ul style={{listStyle:'none',padding:0,margin:0}}>
            <Bullet dark>Decades of real-estate, restaurant, and mobile-food operating experience — grounded by N27's live restaurant operations.</Bullet>
            <Bullet dark>Boston permit, commissary, and site-lottery fluency — a moat no out-of-state consultancy can match.</Bullet>
            <Bullet dark>Relationships with both franchisors (brand side) and HNW/family-office capital (franchisee side).</Bullet>
          </ul>
        </div>
      </div>
      <SlideFooter n={7}/>
    </div>
  );
};

// Slide 8 — Franchise Model (Table)
const EconomicsSlide = () => (
  <div className="deck-slide">
    <div className="slide-eyebrow">08 · FRANCHISE MODEL</div>
    <h3 className="slide-title">The unit economics of a franchised truck.</h3>
    <p className="slide-sub">Illustrative model — actual figures vary by anchor brand and are finalized in each partner's FDD.</p>
    <div style={{marginTop:20,flex:1,display:'flex',flexDirection:'column'}}>
      <table className="n27" style={{fontSize:12}}>
        <thead><tr><th>LINE ITEM</th><th style={{textAlign:'center'}}>TIER I (GLOBAL QSR)</th><th style={{textAlign:'center'}}>TIER II (FAST CASUAL)</th><th style={{textAlign:'center'}}>TIER III (REGIONAL/CHEF)</th></tr></thead>
        <tbody>
          <tr><td className="first">Initial franchise fee</td><td className="num">$30–45K</td><td className="num">$20–40K</td><td className="num">$25–35K</td></tr>
          <tr><td className="first">Royalty (% gross sales)</td><td className="num">4.0%</td><td className="num">5.0–6.0%</td><td className="num">6.0–7.0%</td></tr>
          <tr><td className="first">Marketing fund</td><td className="num">4.0%</td><td className="num">2.75–4.5%</td><td className="num">2.0%</td></tr>
          <tr><td className="first">Total turnkey investment</td><td className="num">$250K–$400K</td><td className="num">$175K–$300K</td><td className="num">$150K–$275K</td></tr>
          <tr><td className="first">Year-1 gross sales / truck</td><td className="num">$450K–$650K</td><td className="num">$400K–$600K</td><td className="num">$350K–$550K</td></tr>
          <tr><td className="first">Franchisee net margin</td><td className="num">12–18%</td><td className="num">15–22%</td><td className="num">18–25%</td></tr>
          <tr><td className="first">Payback period</td><td className="num">18–24 mo</td><td className="num">14–20 mo</td><td className="num">12–18 mo</td></tr>
          <tr><td className="first">Brand support</td><td className="num">Full corporate</td><td className="num">Full corporate</td><td className="num">Co-branded w/ N27</td></tr>
        </tbody>
      </table>
      <div style={{background:'var(--n27-cream)',padding:'14px 22px',marginTop:14,fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:14,color:'var(--n27-ink)',textAlign:'center',border:'1px solid var(--n27-rule)',borderTop:0}}>
        Franchisees get a mobile money machine backed by a proven brand. N27 earns advisory fees + equity tail on each deal we structure.
      </div>
    </div>
    <SlideFooter n={8}/>
  </div>
);

// Slide 9 — Go-to-Market
const GTMSlide = () => {
  const rows = [
    { y:'2026', h:'Phase 1 — Boston',     d:'2 anchor brand partners. 10 trucks across Seaport, Kendall, Fenway, Financial District, Back Bay.' },
    { y:'2027', h:'Phase 2 — New England',d:'+3 brand partners, +25 trucks. Cambridge, Somerville, Revere, Quincy, Providence, Worcester, Manchester NH.' },
    { y:'2028', h:'Phase 3 — Scale',      d:'50 trucks in-market. National playbook documented. West Coast + mid-Atlantic open.' },
  ];
  const support = [
    'Turnkey truck design, fabrication RFP, permitting',
    'Commissary sourcing & kitchen partnerships',
    'Site-lottery strategy + private-site acquisition',
    'Digital marketing, POS, and loyalty-app integration',
    'Event booking, corporate catering pipeline',
    'Ongoing operations training + mystery-shop QA',
  ];
  return (
    <div className="deck-slide">
      <div className="slide-eyebrow">09 · GO-TO-MARKET</div>
      <h3 className="slide-title">Greater Boston, then New England, then national.</h3>
      <p className="slide-sub">Five brand partners, 50 trucks in-market by 2028 — Boston's density is the test bed.</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:0,marginTop:18,border:'1px solid var(--n27-rule)',background:'#fff'}}>
        {rows.map((r,i)=>(
          <div key={i} style={{padding:'18px 20px',borderRight:i<2?'1px solid var(--n27-rule)':0}}>
            <div style={{width:54,height:54,borderRadius:'50%',border:'2px solid var(--n27-lime)',background:'var(--n27-ivory)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:700,fontSize:13,color:'var(--n27-lime)',letterSpacing:'.04em',marginBottom:14}}>{r.y}</div>
            <h4 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:16,letterSpacing:'.04em',margin:'0 0 8px'}}>{r.h}</h4>
            <p style={{fontSize:12,lineHeight:1.5,margin:0}}>{r.d}</p>
          </div>
        ))}
      </div>
      <div style={{marginTop:18,flex:1}}>
        <Eyebrow lime>SUPPORT STACK WE DELIVER</Eyebrow>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'6px 20px'}}>
          {support.map((s,i)=>(
            <div key={i} style={{position:'relative',paddingLeft:18,fontSize:12,lineHeight:1.5}}>
              <span style={{position:'absolute',left:0,color:'var(--n27-lime)'}}>★</span>{s}
            </div>
          ))}
        </div>
      </div>
      <SlideFooter n={9}/>
    </div>
  );
};

// Slide 10 — Financial Projections
const FinancialsSlide = () => {
  const bars = [
    { label:'Year 1', sys:2.25, n27:0.40, sysH:22, n27H:4 },
    { label:'Year 2', sys:11.80, n27:0.98, sysH:118, n27H:10 },
    { label:'Year 3', sys:22.50, n27:1.75, sysH:180, n27H:18 },
  ];
  const maxH = 180;
  return (
    <div className="deck-slide">
      <div className="slide-eyebrow">10 · FINANCIAL PROJECTIONS</div>
      <h3 className="slide-title">System-wide revenue scales fast because trucks do.</h3>
      <p className="slide-sub">Illustrative, based on a blended $450K average unit volume across Tier I–III brands.</p>
      <div style={{display:'grid',gridTemplateColumns:'1.7fr 1fr',gap:22,marginTop:22,flex:1}}>
        <div style={{background:'#fff',border:'1px solid var(--n27-rule)',padding:'18px 22px',display:'flex',flexDirection:'column'}}>
          <Eyebrow lime>SYSTEM-WIDE TRUCK REVENUE (BLENDED, $M)</Eyebrow>
          <div style={{display:'flex',alignItems:'flex-end',gap:30,height:200,borderBottom:'1px solid var(--n27-rule)',marginTop:10,paddingBottom:2,flex:1}}>
            {bars.map((b,i)=>(
              <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4,justifyContent:'flex-end',height:'100%'}}>
                <div style={{display:'flex',alignItems:'flex-end',gap:6,width:'100%',justifyContent:'center',height:'100%'}}>
                  <div style={{width:50,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
                    <div style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:11,color:'var(--n27-mute)'}}>${b.sys}</div>
                    <div style={{width:'100%',background:'var(--n27-lime)',height:`${b.sysH}px`}}/>
                  </div>
                  <div style={{width:50,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
                    <div style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:11,color:'var(--n27-mute)'}}>${b.n27}</div>
                    <div style={{width:'100%',background:'var(--n27-lime-dark)',height:`${b.n27H}px`}}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{display:'flex',gap:30,marginTop:6,fontFamily:'var(--font-ui)',fontSize:10,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--n27-mute)',fontWeight:700}}>
            {bars.map((b,i)=>(<div key={i} style={{flex:1,textAlign:'center'}}>{b.label} ({[10,35,50][i]} trucks)</div>))}
          </div>
          <div style={{display:'flex',gap:16,marginTop:14,fontFamily:'var(--font-ui)',fontSize:10,letterSpacing:'.14em',textTransform:'uppercase',fontWeight:700}}>
            <div style={{display:'flex',alignItems:'center',gap:6}}><div style={{width:12,height:12,background:'var(--n27-lime)'}}/>SYSTEM TRUCK REVENUE</div>
            <div style={{display:'flex',alignItems:'center',gap:6}}><div style={{width:12,height:12,background:'var(--n27-lime-dark)'}}/>N27 ADVISORY + EQUITY</div>
          </div>
        </div>
        <div style={{background:'var(--n27-ivory)',border:'1px solid var(--n27-rule)',padding:'20px 22px',display:'flex',flexDirection:'column'}}>
          <Eyebrow lime>KEY ASSUMPTIONS</Eyebrow>
          <div style={{fontSize:12,lineHeight:1.6}}>
            <div><strong>Blended AUV:</strong> $450K per truck</div>
            <div><strong>Truck gross margin:</strong> 35–45%</div>
            <div><strong>N27 economics:</strong> Retainer + 2% gross + SPV equity</div>
            <div><strong>Brand royalty:</strong> 5% avg pass-through</div>
            <div><strong>Ramp:</strong> Y1 50% · Y2 75% · Y3 90%</div>
          </div>
          <div style={{marginTop:'auto',paddingTop:14,borderTop:'1px solid var(--n27-rule)',textAlign:'center'}}>
            <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:36,color:'var(--n27-lime)',letterSpacing:'.02em',lineHeight:1}}>$3.13M</div>
            <div style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic',fontSize:12,color:'var(--n27-mute)',marginTop:6}}>Projected cumulative N27 revenue by Year 3</div>
          </div>
        </div>
      </div>
      <SlideFooter n={10}/>
    </div>
  );
};

// Slide 11 — Competitive Advantage
const CompetitiveSlide = () => {
  const cards = [
    ['Dual-format synergy', 'Trucks drive traffic to restaurants; restaurants commissary the trucks. The flywheel is built in — and proven in N27\'s own restaurant subsidiary.'],
    ['Brand equity already paid for', 'Anchor brands aren\'t starting from zero. Every truck launches at 80%+ brand recognition Day 1.'],
    ['Mobile marketing, no CAC', 'A truck is a rolling billboard. Social amplification is free. Cost per impression trends to zero.'],
    ['Lower overhead, more flex', 'No 10-year lease, no $500K build-out, no stranded capex if a zip code under-performs. Trucks redeploy.'],
  ];
  return (
    <div className="deck-slide">
      <div className="slide-eyebrow">11 · COMPETITIVE ADVANTAGE</div>
      <h3 className="slide-title">Why nobody else is positioned to do this.</h3>
      <p className="slide-sub">Food-truck consultants don't know franchising. Franchise consultants don't know trucks. We know both — and we run a restaurant.</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18,marginTop:26,flex:1}}>
        {cards.map(([h,b],i)=>(
          <div key={i} style={{background:'var(--n27-ivory)',borderLeft:'3px solid var(--n27-lime)',padding:'22px 26px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <h4 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:19,letterSpacing:'.04em',margin:'0 0 10px'}}>{h}</h4>
            <div style={{fontSize:13,lineHeight:1.55,color:'var(--n27-ink)'}}>{b}</div>
          </div>
        ))}
      </div>
      <SlideFooter n={11}/>
    </div>
  );
};

Object.assign(window, { TractionSlide, EconomicsSlide, GTMSlide, FinancialsSlide, CompetitiveSlide });
