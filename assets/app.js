/* ===================== CONFIG ===================== */
// For launch on urbanpay.ca, paste a form endpoint (e.g. Formspree, HubSpot, Zapier webhook) here.
// All form submissions are emailed to urbanpaycanada@gmail.com via FormSubmit (free, no signup).
// One-time step: the first submission sends an activation email to that inbox — click "Activate Form".
const FORM_ENDPOINT = "https://formsubmit.co/ajax/urbanpaycanada@gmail.com";
const PHONE = "+1 604 360 7088", TEL = "tel:+16043607088";

/* ===================== ILLUSTRATIONS (original, generic) ===================== */
const A = (k, c='#C8F25A') => {
  const ink='#0A1633', ink2='#1d3266', s='#2BD9A0';
  const screen = (x,y,w,h,r=8)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${ink}"/><rect x="${x+6}" y="${y+6}" width="${w-12}" height="${h-12}" rx="${r-3}" fill="url(#g${k})"/>`;
  const defs = `<defs><linearGradient id="g${k}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1d3266"/><stop offset="1" stop-color="#2a4fa0"/></linearGradient><filter id="sh${k}" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#0A1633" flood-opacity=".25"/></filter></defs>`;
  const tap = (x,y)=>`<g transform="translate(${x},${y})" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"><path d="M0 0a10 10 0 0 1 0 16"/><path d="M7 -5a17 17 0 0 1 0 26"/><path d="M14 -10a24 24 0 0 1 0 36"/></g>`;
  const amount = (x,y,t='$48.50',fs=20)=>`<text x="${x}" y="${y}" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="${fs}" fill="#fff" text-anchor="middle">${t}</text>`;
  const keypad=(x,y,cols=3,rows=4,w=18,h=11,g=5)=>{let o='';for(let r=0;r<rows;r++)for(let q=0;q<cols;q++)o+=`<rect x="${x+q*(w+g)}" y="${y+r*(h+g)}" width="${w}" height="${h}" rx="3" fill="${r===rows-1&&q===cols-1?s:'#e8edf7'}"/>`;return o};
  const S = {
  handheld:`<svg viewBox="0 0 200 220">${defs}<g filter="url(#sh${k})"><rect x="68" y="6" width="64" height="40" rx="6" fill="#fff" stroke="#dfe3ec"/><path d="M76 14h48M76 22h36M76 30h42" stroke="#c9cfdc" stroke-width="3"/><rect x="50" y="34" width="100" height="176" rx="22" fill="#f4f6fb" stroke="#d6dbe7"/>${screen(60,48,80,112,10)}${amount(100,96)}<text x="100" y="114" font-family="Manrope" font-size="9" fill="#a9b9df" text-anchor="middle">TAP · INSERT · SWIPE</text>${tap(90,126)}<rect x="80" y="178" width="40" height="8" rx="4" fill="${c}"/></g></svg>`,
  countertop:`<svg viewBox="0 0 220 200">${defs}<g filter="url(#sh${k})"><path d="M40 190 L60 70 Q62 58 75 58 H145 Q158 58 160 70 L180 190Z" fill="#f4f6fb" stroke="#d6dbe7"/><rect x="72" y="20" width="76" height="70" rx="8" fill="${ink}" transform="rotate(-6 110 55)"/><rect x="79" y="27" width="62" height="56" rx="5" fill="url(#g${k})" transform="rotate(-6 110 55)"/><text x="110" y="62" transform="rotate(-6 110 55)" font-family="Bricolage Grotesque" font-weight="800" font-size="16" fill="#fff" text-anchor="middle">$22.10</text>${keypad(78,104,3,4,18,12,6)}<rect x="62" y="176" width="96" height="6" rx="3" fill="${c}"/></g></svg>`,
  smart:`<svg viewBox="0 0 220 200">${defs}<g filter="url(#sh${k})"><rect x="30" y="40" width="160" height="150" rx="18" fill="#f4f6fb" stroke="#d6dbe7"/>${screen(40,50,140,96,10)}<rect x="56" y="66" width="54" height="10" rx="5" fill="#a9b9df"/><rect x="56" y="84" width="40" height="8" rx="4" fill="#5d76b3"/><rect x="120" y="66" width="44" height="54" rx="8" fill="${c}" opacity=".9"/>${amount(142,98,'$9',18)}<rect x="56" y="104" width="50" height="22" rx="6" fill="#2BD9A0"/><rect x="70" y="160" width="80" height="14" rx="7" fill="#dfe3ec"/><rect x="80" y="10" width="60" height="34" rx="6" fill="#fff" stroke="#dfe3ec"/><path d="M88 20h44M88 28h30" stroke="#c9cfdc" stroke-width="3"/></g></svg>`,
  pinpad:`<svg viewBox="0 0 200 210">${defs}<g filter="url(#sh${k})"><rect x="55" y="10" width="90" height="190" rx="20" fill="#f4f6fb" stroke="#d6dbe7"/>${screen(65,22,70,62,8)}${amount(100,58,'PIN',16)}${keypad(70,98,3,4,16,13,6)}${tap(92,170)}</g></svg>`,
  mobile:`<svg viewBox="0 0 200 210">${defs}<g filter="url(#sh${k})"><rect x="62" y="10" width="76" height="160" rx="16" fill="${ink}"/><rect x="68" y="18" width="64" height="144" rx="11" fill="url(#g${k})"/>${amount(100,80,'$31',22)}${tap(92,102)}<rect x="50" y="150" width="100" height="52" rx="12" fill="#f4f6fb" stroke="#d6dbe7"/><rect x="62" y="162" width="76" height="6" rx="3" fill="${c}"/><rect x="62" y="176" width="50" height="6" rx="3" fill="#dfe3ec"/></g></svg>`,
  station:`<svg viewBox="0 0 260 200">${defs}<g filter="url(#sh${k})"><rect x="22" y="18" width="160" height="110" rx="10" fill="${ink}"/><rect x="30" y="26" width="144" height="94" rx="6" fill="url(#g${k})"/>${[0,1,2].map(r=>[0,1,2,3].map(q=>`<rect x="${38+q*26}" y="${34+r*26}" width="22" height="20" rx="4" fill="${(r+q)%3?'#3a5cab':c}" opacity=".95"/>`).join('')).join('')}<rect x="146" y="34" width="22" height="76" rx="4" fill="#fff" opacity=".9"/><path d="M92 128 L82 168 H122 L112 128Z" fill="#c9cfdc"/><rect x="50" y="166" width="104" height="22" rx="6" fill="#f4f6fb" stroke="#d6dbe7"/><rect x="190" y="88" width="56" height="70" rx="8" fill="${ink}"/><rect x="195" y="93" width="46" height="52" rx="5" fill="url(#g${k})"/>${amount(218,124,'$12',13)}<rect x="200" y="158" width="36" height="30" rx="4" fill="#d6dbe7"/></g></svg>`,
  tablet:`<svg viewBox="0 0 260 200">${defs}<g filter="url(#sh${k})"><rect x="40" y="16" width="180" height="128" rx="14" fill="${ink}" /><rect x="48" y="24" width="164" height="112" rx="8" fill="#fff"/><rect x="48" y="24" width="164" height="18" rx="8" fill="${ink2}"/>${[0,1].map(r=>[0,1,2].map(q=>`<rect x="${56+q*38}" y="${50+r*40}" width="32" height="32" rx="6" fill="${['#e9f0ff','#fff3d6','#e5fbf2'][q]}" stroke="#dfe3ec"/>`).join('')).join('')}<rect x="172" y="50" width="32" height="72" rx="6" fill="${c}"/><path d="M118 144 L108 186 H152 L142 144Z" fill="#c9cfdc"/><rect x="88" y="182" width="84" height="10" rx="5" fill="#d6dbe7"/></g></svg>`,
  kiosk:`<svg viewBox="0 0 200 220">${defs}<g filter="url(#sh${k})"><rect x="54" y="8" width="92" height="150" rx="12" fill="${ink}"/><rect x="61" y="15" width="78" height="136" rx="7" fill="#fff"/><rect x="61" y="15" width="78" height="26" rx="7" fill="${c}"/>${[0,1,2].map(r=>`<rect x="68" y="${50+r*30}" width="30" height="24" rx="5" fill="#e9f0ff"/><rect x="102" y="${50+r*30}" width="30" height="24" rx="5" fill="#fff3d6"/>`).join('')}<rect x="92" y="158" width="16" height="40" fill="#c9cfdc"/><rect x="66" y="196" width="68" height="12" rx="6" fill="#d6dbe7"/></g></svg>`,
  laptop:`<svg viewBox="0 0 260 190">${defs}<g filter="url(#sh${k})"><rect x="46" y="14" width="168" height="114" rx="10" fill="${ink}"/><rect x="53" y="21" width="154" height="100" rx="5" fill="#fff"/><rect x="66" y="32" width="70" height="8" rx="4" fill="${ink2}"/><rect x="66" y="48" width="128" height="14" rx="4" fill="#eef1f8" stroke="#dfe3ec"/><rect x="66" y="68" width="60" height="14" rx="4" fill="#eef1f8" stroke="#dfe3ec"/><rect x="132" y="68" width="62" height="14" rx="4" fill="#eef1f8" stroke="#dfe3ec"/><rect x="66" y="92" width="128" height="18" rx="9" fill="${c}"/><text x="130" y="105" font-family="Manrope" font-weight="800" font-size="9" fill="${ink}" text-anchor="middle">CHARGE $250.00</text><path d="M24 132 H236 L222 150 H38Z" fill="#d6dbe7"/><rect x="110" y="134" width="40" height="5" rx="2.5" fill="#bfc6d6"/><g transform="translate(196,120)"><circle r="22" fill="#2BD9A0"/><path d="M-9 0l6 6 12-12" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/></g></g></svg>`,
  browser:`<svg viewBox="0 0 260 200">${defs}<g filter="url(#sh${k})"><rect x="20" y="16" width="190" height="150" rx="12" fill="#fff" stroke="#d6dbe7"/><rect x="20" y="16" width="190" height="24" rx="12" fill="#eef1f8"/><circle cx="34" cy="28" r="4" fill="#FF7A59"/><circle cx="46" cy="28" r="4" fill="#ffc94d"/><circle cx="58" cy="28" r="4" fill="#2BD9A0"/><rect x="34" y="52" width="70" height="70" rx="8" fill="#e9f0ff"/><circle cx="69" cy="82" r="18" fill="${c}"/><rect x="114" y="54" width="80" height="9" rx="4" fill="${ink}"/><rect x="114" y="70" width="50" height="7" rx="3" fill="#c9cfdc"/><rect x="114" y="96" width="80" height="22" rx="11" fill="${ink}"/><text x="154" y="111" font-family="Manrope" font-weight="800" font-size="9" fill="${c}" text-anchor="middle">CHECKOUT</text><rect x="34" y="134" width="160" height="18" rx="6" fill="#f4f6fb"/><rect x="170" y="96" width="76" height="92" rx="12" fill="${ink}"/><rect x="176" y="104" width="64" height="76" rx="8" fill="url(#g${k})"/><rect x="184" y="150" width="48" height="18" rx="9" fill="#fff"/><text x="208" y="163" font-family="Manrope" font-weight="800" font-size="8" fill="${ink}" text-anchor="middle">PAY</text>${amount(208,136,'$64',15)}</g></svg>`,
  cheque:`<svg viewBox="0 0 280 190">${defs}<g filter="url(#sh${k})"><rect x="34" y="30" width="230" height="110" rx="8" fill="#e8f1ff" stroke="#c8d6f0" transform="rotate(-5 150 85)"/><rect x="18" y="52" width="240" height="118" rx="8" fill="#fff" stroke="#c8d6f0"/><rect x="18" y="52" width="240" height="118" rx="8" fill="url(#pat${k})" opacity=".55"/><defs><pattern id="pat${k}" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M0 10L10 0" stroke="#dbe6fb" stroke-width="2"/></pattern></defs><rect x="30" y="64" width="22" height="22" rx="5" fill="${ink}"/><rect x="58" y="66" width="70" height="7" rx="3" fill="${ink}"/><rect x="58" y="78" width="46" height="5" rx="2" fill="#9aa6bf"/><rect x="190" y="66" width="56" height="16" rx="3" fill="#fff" stroke="#9aa6bf"/><text x="218" y="78" font-family="Manrope" font-weight="800" font-size="9" fill="${ink}" text-anchor="middle">$1,250.00</text><path d="M30 104 H246" stroke="#9aa6bf"/><path d="M30 124 H160" stroke="#9aa6bf"/><path d="M178 140 q10 -14 20 0 t20 0 t18 -6" stroke="${ink2}" stroke-width="2" fill="none"/><path d="M178 146 H246" stroke="#9aa6bf"/><text x="30" y="160" font-family="monospace" font-size="10" fill="${ink}">⑈001234⑈ ⑆12345⑉001⑆ 1234567⑈</text><g transform="translate(236,112)"><circle r="12" fill="${c}"/><path d="M-4 -1v-3a4 4 0 0 1 8 0v3" stroke="${ink}" stroke-width="2" fill="none"/><rect x="-6" y="-1" width="12" height="9" rx="2" fill="${ink}"/></g></g></svg>`,
  ai:`<svg viewBox="0 0 240 210">${defs}<g filter="url(#sh${k})"><rect x="70" y="8" width="100" height="196" rx="20" fill="${ink}"/><rect x="77" y="16" width="86" height="180" rx="14" fill="#fff"/><rect x="85" y="28" width="58" height="22" rx="10" fill="#eef1f8"/><rect x="97" y="58" width="58" height="30" rx="10" fill="${ink2}"/><rect x="85" y="96" width="62" height="22" rx="10" fill="#eef1f8"/><rect x="85" y="128" width="70" height="40" rx="10" fill="${c}"/><text x="120" y="146" font-family="Manrope" font-weight="800" font-size="8" fill="${ink}" text-anchor="middle">20% OFF</text><text x="120" y="158" font-family="Manrope" font-weight="700" font-size="7" fill="${ink}" text-anchor="middle">TONIGHT ONLY</text></g><g fill="${c}"><path d="M40 60l5 12 12 5-12 5-5 12-5-12-12-5 12-5z"/><path d="M196 40l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/><path d="M200 150l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill="#2BD9A0"/></g><g transform="translate(30,130)"><rect width="48" height="40" rx="10" fill="#fff" stroke="#d6dbe7"/><path d="M10 28 l8 -10 8 6 12 -14" stroke="#2BD9A0" stroke-width="3" fill="none" stroke-linecap="round"/></g></svg>`,
  code:`<svg viewBox="0 0 260 200">${defs}<g filter="url(#sh${k})"><rect x="16" y="20" width="180" height="134" rx="12" fill="${ink}"/><circle cx="32" cy="34" r="4" fill="#FF7A59"/><circle cx="44" cy="34" r="4" fill="#ffc94d"/><circle cx="56" cy="34" r="4" fill="#2BD9A0"/>${[0,1,2,3,4,5].map(i=>`<rect x="${32+(i%3)*12}" y="${52+i*15}" width="${[60,90,70,110,50,80][i]}" height="7" rx="3" fill="${['#5AB8FF',c,'#8B7CFF','#a9b9df',c,'#2BD9A0'][i]}" opacity=".9"/>`).join('')}<rect x="168" y="60" width="74" height="132" rx="14" fill="#fff" stroke="#d6dbe7"/><rect x="176" y="72" width="58" height="40" rx="8" fill="${c}"/><rect x="176" y="118" width="58" height="8" rx="4" fill="#dfe3ec"/><rect x="176" y="132" width="40" height="8" rx="4" fill="#dfe3ec"/><rect x="176" y="160" width="58" height="20" rx="10" fill="${ink}"/></g></svg>`,
  loan:`<svg viewBox="0 0 240 200">${defs}<g filter="url(#sh${k})"><rect x="20" y="20" width="200" height="160" rx="16" fill="#fff" stroke="#d6dbe7"/>${[40,62,54,84,100].map((h,i)=>`<rect x="${44+i*32}" y="${160-h}" width="22" height="${h}" rx="5" fill="${i===4?c:'#c9d6f2'}"/>`).join('')}<path d="M48 110 L84 92 L116 100 L148 70 L184 50" stroke="${ink}" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="184" cy="50" r="7" fill="${ink}"/></g><g transform="translate(186,150)"><circle r="30" fill="${ink}"/><text y="11" font-family="Bricolage Grotesque" font-weight="800" font-size="32" fill="${c}" text-anchor="middle">$</text></g></svg>`,
  grant:`<svg viewBox="0 0 240 210">${defs}<g filter="url(#sh${k})"><rect x="50" y="14" width="140" height="182" rx="10" fill="#fff" stroke="#d6dbe7"/><rect x="68" y="34" width="80" height="10" rx="4" fill="${ink}"/>${[0,1,2,3,4].map(i=>`<rect x="68" y="${58+i*14}" width="${[104,96,104,70,90][i]}" height="6" rx="3" fill="#dfe3ec"/>`).join('')}<path d="M68 160 q10 -14 20 0 t20 0" stroke="${ink2}" stroke-width="2" fill="none"/></g><g transform="translate(166,150)"><path d="M-14 18 L-20 48 L0 38 L20 48 L14 18Z" fill="#FF7A59"/><circle r="30" fill="${c}" stroke="${ink}" stroke-width="3"/><path d="M0 -14l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1z" fill="${ink}"/></g></svg>`,
  giftcard:`<svg viewBox="0 0 240 200">${defs}<g filter="url(#sh${k})"><rect x="40" y="30" width="150" height="94" rx="12" fill="#7B61FF" transform="rotate(-10 115 77)"/><rect x="50" y="62" width="160" height="100" rx="12" fill="${ink}"/><rect x="50" y="62" width="160" height="100" rx="12" fill="url(#g${k})" opacity=".5"/><rect x="124" y="62" width="16" height="100" fill="${c}"/><rect x="50" y="104" width="160" height="16" fill="${c}"/><g transform="translate(132,106)" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"><path d="M0 0c-16-26-38-8-16 4z"/><path d="M0 0c16-26 38-8 16 4z"/></g><text x="64" y="90" font-weight="800" font-size="13" fill="#fff">GIFT CARD</text><text x="64" y="150" font-weight="800" font-size="16" fill="#fff">$50</text></g><g transform="translate(176,40)"><circle r="20" fill="#2BD9A0"/><text y="6" font-weight="800" font-size="15" fill="#fff" text-anchor="middle">★</text></g></svg>`,
  qr:`<svg viewBox="0 0 240 210">${defs}<g filter="url(#sh${k})"><path d="M30 196 L52 70 H130 L152 196Z" fill="#f4f6fb" stroke="#d6dbe7"/><rect x="58" y="88" width="66" height="66" rx="6" fill="#fff" stroke="${ink}" stroke-width="2"/>${(()=>{let o='';const m=[[0,0],[0,1],[1,0],[0,4],[1,4],[0,5],[4,0],[5,0],[4,1],[2,2],[3,3],[2,4],[4,3],[5,5],[3,5],[5,2],[1,2],[3,1],[4,4]];for(const [a,b2] of m)o+=`<rect x="${64+a*9}" y="${94+b2*9}" width="8" height="8" fill="${ink}"/>`;return o})()}<text x="91" y="176" font-weight="800" font-size="10" fill="${ink}" text-anchor="middle">SCAN TO PAY</text><rect x="140" y="40" width="78" height="150" rx="16" fill="${ink}"/><rect x="146" y="48" width="66" height="134" rx="11" fill="#fff"/><rect x="152" y="58" width="54" height="10" rx="4" fill="#eef1f8"/>${amount(179,98,'$42.80',15).replace('#fff',ink)}<rect x="152" y="110" width="54" height="16" rx="8" fill="${ink}"/><text x="179" y="121" font-weight="800" font-size="7" fill="#fff" text-anchor="middle">Apple Pay</text><rect x="152" y="131" width="54" height="16" rx="8" fill="#fff" stroke="${ink}"/><text x="179" y="142" font-weight="800" font-size="7" fill="${ink}" text-anchor="middle">Google Pay</text><rect x="152" y="152" width="54" height="16" rx="8" fill="${c}"/><text x="179" y="163" font-weight="800" font-size="7" fill="${ink}" text-anchor="middle">Card</text></g></svg>`,
  hero:`<svg viewBox="0 0 520 440">${defs}<circle cx="270" cy="230" r="190" fill="#14244d"/><circle cx="270" cy="230" r="140" fill="none" stroke="#2a4fa0" stroke-dasharray="4 8"/><g filter="url(#sh${k})"><rect x="140" y="80" width="250" height="170" rx="16" fill="#0A1633" stroke="#2a4fa0"/><rect x="152" y="92" width="226" height="146" rx="10" fill="#fff"/><rect x="152" y="92" width="226" height="28" rx="10" fill="#1d3266"/><text x="166" y="111" font-family="Bricolage Grotesque" font-weight="800" font-size="13" fill="${c}">UrbanPay Dashboard</text><text x="166" y="146" font-family="Manrope" font-weight="700" font-size="10" fill="#5B6478">TODAY'S SALES</text><text x="166" y="174" font-family="Bricolage Grotesque" font-weight="800" font-size="28" fill="#0A1633">$8,420</text>${[30,46,38,60,52,74,88].map((h,i)=>`<rect x="${270+i*14}" y="${222-h}" width="9" height="${h}" rx="3" fill="${i===6?c:'#c9d6f2'}"/>`).join('')}<rect x="166" y="190" width="86" height="8" rx="4" fill="#2BD9A0"/><rect x="166" y="206" width="60" height="8" rx="4" fill="#dfe3ec"/><path d="M250 250 L240 290 H290 L280 250Z" fill="#2a4fa0"/></g><g filter="url(#sh${k})" transform="translate(54,170) rotate(-8)"><rect width="96" height="168" rx="20" fill="#f4f6fb" stroke="#d6dbe7"/><rect x="9" y="12" width="78" height="104" rx="10" fill="#0A1633"/><rect x="14" y="17" width="68" height="94" rx="7" fill="url(#g${k})"/>${amount(48,62,'$48.50',16)}<g transform="translate(40,74)" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M0 0a8 8 0 0 1 0 13"/><path d="M6 -4a14 14 0 0 1 0 21"/></g><rect x="28" y="134" width="40" height="8" rx="4" fill="${c}"/></g><g filter="url(#sh${k})" transform="translate(372,214) rotate(7)"><rect width="104" height="70" rx="10" fill="#fff" stroke="#c8d6f0"/><rect x="10" y="10" width="14" height="14" rx="3" fill="#0A1633"/><rect x="30" y="12" width="40" height="5" rx="2" fill="#0A1633"/><path d="M10 40 H94 M10 52 H60" stroke="#9aa6bf"/><text x="10" y="64" font-family="monospace" font-size="6" fill="#0A1633">⑈001234⑈ ⑆12345⑆</text></g><g filter="url(#sh${k})" transform="translate(330,330)"><rect width="150" height="64" rx="14" fill="${c}"/><text x="16" y="26" font-family="Manrope" font-weight="800" font-size="10" fill="#0A1633">FUNDING APPROVED</text><text x="16" y="50" font-family="Bricolage Grotesque" font-weight="800" font-size="22" fill="#0A1633">$75,000</text></g></svg>`
  };
  const L={handheld:'Handheld payment terminal',countertop:'Countertop payment terminal',smart:'Smart dual-screen terminal',pinpad:'PIN pad terminal',mobile:'Mobile payment device',station:'POS station with customer display',tablet:'Tablet POS system',kiosk:'Self-order kiosk',laptop:'Virtual terminal on laptop',browser:'eCommerce checkout',cheque:'Secure business cheque',ai:'AI marketing on mobile',code:'Web and app development',loan:'Business loan growth chart',grant:'Business grant document',hero:'UrbanPay payments dashboard, terminal, cheque and funding',giftcard:'Branded gift card',qr:'QR code scan-to-pay on phone'};
  return (S[k]||'').replace('<svg ',`<svg role="img" aria-label="${L[k]||k}" `);
};

/* ===================== CONTENT ===================== */
const SOLUTIONS = [
 {id:'terminals',art:'handheld',t:'Payment Terminals',d:'Clover, Poynt, Ingenico, Dejavoo & PAX — countertop, wireless and smart terminals, set up and supported.'},
 {id:'pos',art:'station',t:'POS for Retail & Restaurants',d:'Clover, Lightspeed, Odoo, MYR and TouchBistro — matched to how your business actually runs.'},
 {id:'loyalty-gift-qr',art:'giftcard',t:'Loyalty & Gift Cards',d:'Points, punch cards, branded plastic and eGift cards that bring customers back and lift spend.'},
 {id:'loyalty-gift-qr',art:'qr',t:'QR & Tap-to-Pay',d:'Scan-to-pay at tables and on invoices, QR order-and-pay, and contactless payments on your phone.'},
 {id:'virtual-terminal',art:'laptop',t:'Virtual Terminal',d:'Key in card payments from any browser — phone orders, invoices, deposits and recurring billing.'},
 {id:'ecommerce',art:'browser',t:'eCommerce Payments',d:'Plug-ins for Shopify & WooCommerce, pay-by-link, hosted checkout and developer APIs.'},
 {id:'cheques',art:'cheque',t:'Cheque Printing',d:'Laser & manual business cheques with security features, your logo and proof-before-print.'},
 {id:'ai-marketing',art:'ai',t:'AI Marketing Tools',d:'Commission-free online ordering, loyalty, SEO, reviews and email — growth on autopilot.'},
 {id:'web-apps',art:'code',t:'Web & App Development',d:'Websites, online stores, iOS/Android apps and custom software — built and connected to payments.'},
 {id:'automation',art:'code',t:'Business Automation',d:'AI chat, booking, invoicing, accounting sync, CRM and marketing workflows that run themselves.'},
 {id:'loans',art:'loan',t:'Business Loans',d:'Merchant cash advance, receivable financing, inventory, expansion and equipment funding.'},
 {id:'grants',art:'grant',t:'Business Grants',d:'RTRI, REDIP and more — we screen eligibility and help you build a fundable application.'},
 {id:'contact',art:'browser',t:'Free Statement Review',d:'Upload last month\'s processing statement — we\'ll show your true effective rate and hidden fees.'},
];

const TERMINALS = [
 {brand:'Clover',name:'Clover Flex',art:'handheld',tag:'Best seller',sub:'Handheld all-in-one: POS, terminal and business manager in your palm.',f:['Tap, chip, swipe, Apple Pay & Google Pay','Built-in receipt printer & barcode camera','Wi-Fi + LTE for tableside, curbside & events','Tips, split bills and digital receipts'],m:['Flex','Flex Pocket'],link:'clover'},
 {brand:'Poynt',name:'Poynt Smart Terminal',art:'smart',sub:'Dual-screen smart terminal — one side for you, one for your customer.',f:['Merchant & customer-facing displays','Android app ecosystem for loyalty & invoicing','Built-in printer and NFC contactless','Ideal for retail counters & services'],m:['Smart Terminal','Poynt 5']},
 {brand:'Ingenico',name:'Ingenico Desk, Move & Lane',art:'countertop',sub:'Proven, secure terminals trusted by banks and big-box retailers worldwide.',f:['Countertop (Desk), portable (Move) & PIN pads (Lane)','Fast EMV & contactless acceptance','Integrates with many POS & ECR systems','AXIUM Android models for app-based selling'],m:['Desk/5000','Move/5000','Lane/3000','AXIUM']},
 {brand:'Dejavoo',name:'Dejavoo Z & P Series',art:'pinpad',sub:'Cost-effective, cloud-ready terminals with simple pricing and quick setup.',f:['Countertop, wireless and Android options','Cloud-connected for remote updates','Dual pricing / surcharging capable models*','Great value for high-volume counters'],m:['Z8','Z11','QD Series','P Series']},
 {brand:'PAX',name:'PAX A-Series',art:'mobile',sub:'Sleek Android smart terminals for counters, tables and on-the-go.',f:['A920 Pro: handheld with printer & camera','A80 countertop, A35 PIN pad, A77 mobile','Long battery life with 4G/Wi-Fi','App-ready for loyalty and gift cards'],m:['A920 Pro','A80','A35','A77']},
 {brand:'Clover',name:'Clover Station Duo',art:'station',tag:'Full POS',sub:'Countertop powerhouse with a customer-facing screen for fast lines.',f:['14" merchant screen + customer display','High-speed printer & cash drawer','Inventory, staff & sales reporting','Pairs with Flex for line-busting'],m:['Station Duo','Station Solo'],link:'clover'},
];

const CLOVER = [
 {name:'Clover Flex',art:'handheld',sub:'Portable, full-featured POS for tableside, curbside and on-the-go.',f:['Built-in receipt printer & barcode scanner','Wi-Fi + LTE connectivity','All-day battery for a typical shift','Tipping, signatures & split payments']},
 {name:'Clover Flex Pocket',art:'mobile',sub:'The slimmest Flex — digital-only receipts for pop-ups & services.',f:['Pocket-sized, no printer to maintain','Receipts by text or email','Wi-Fi + LTE','Tap, chip & swipe']},
 {name:'Clover Mini',art:'countertop',sub:'Compact countertop POS that fits any checkout.',f:['8" touchscreen','Wi-Fi, Ethernet & LTE options','Built-in printer','Use alone or as a Station Duo customer display']},
 {name:'Clover Station Duo',art:'station',sub:'Two screens, one powerful hub for busy counters.',f:['14" merchant + 8" customer screen','Printer, cash drawer, scanner support','Customer tips, loyalty & PIN entry','Best for QSR, retail & salons']},
 {name:'Clover Station Solo',art:'tablet',sub:'Single-screen countertop station for full-service POS.',f:['Large HD merchant display','High-speed receipt printer','Inventory & employee management','Add a Mini or Flex as you grow']},
 {name:'Clover Kiosk',art:'kiosk',sub:'Self-serve ordering that shortens lines and lifts ticket size.',f:['Customers order & pay themselves','Upsell prompts on every order','Sends orders straight to the kitchen','Frees staff for service']},
];

const CLOVER_PLANS = [
 ['Payments','Accept cards anywhere, basic reporting','Flex, Mini, Flex Pocket'],
 ['Essentials','Customer engagement, rewards, gift cards & tipping','Flex, Mini, Station'],
 ['Register (Retail)','Inventory, variants, barcode labels, discounts & employee roles','Flex, Mini, Station'],
 ['Counter Service Restaurant','Menus, modifiers, online ordering, kitchen printing/KDS','Flex, Mini, Station Duo'],
 ['Table Service Restaurant','Table layouts, coursing, tabs, tips, server management','Flex, Mini, Station Duo'],
];

const POS = [
 {name:'Clover POS',art:'station',fit:'Retail · Restaurants · Services',sub:'All-in-one hardware + software with a huge app market.',f:['Retail & restaurant software plans','Online ordering, loyalty & gift cards','Handheld, countertop and kiosk hardware','Payments built in — one partner, one bill']},
 {name:'Lightspeed',art:'tablet',fit:'Retail · Restaurants · Golf',sub:'Cloud POS loved by multi-location retailers and restaurants.',f:['Advanced inventory & purchase orders','Omnichannel: in-store + eCommerce','Restaurant floor plans & KDS','Deep analytics across locations']},
 {name:'Odoo POS',art:'code',fit:'Retail · Distribution · Growing SMBs',sub:'POS inside a full business suite — ERP, accounting, CRM & inventory.',f:['Real-time sync with inventory & accounting','Works on tablets, laptops & PCs, even offline','eCommerce, CRM and HR in one platform','Highly customizable modules']},
 {name:'MYR POS',art:'kiosk',fit:'Restaurants · Cafés · Retail',sub:'Canadian-built POS focused on speed, ordering and service.',f:['Counter, table and quick-service modes','Online ordering & self-serve options','Kitchen display & printer routing','Bilingual-friendly menus and receipts']},
 {name:'TouchBistro',art:'tablet',fit:'Full-service Restaurants · Bars',sub:'iPad restaurant POS built by restaurateurs for restaurateurs.',f:['Tableside ordering & payments','Floor plans, reservations & tabs','Kitchen display system & menu engineering','Staff scheduling and sales reports']},
];

const LOANS = [
 {name:'Merchant Cash Advance',art:'loan',tag:'Most popular',sub:'Get a lump sum today, repay automatically as a small share of future card sales.',f:['Based on card sales history — not just credit score','Repayment flexes with your sales: slow day, smaller payment','No fixed monthly installment','Use for anything: payroll, renovations, stock'],fit:'Restaurants, retail, salons with steady card volume'},
 {name:'Business Cash Receivable Loan',art:'grant',sub:'Turn unpaid invoices into working capital — stop waiting 30–90 days to get paid.',f:['Advance against outstanding invoices / receivables','Funding grows as your sales grow','Smooths cash-flow gaps from slow-paying clients','Keep operations and payroll on schedule'],fit:'B2B, trades, wholesale, contractors, staffing'},
 {name:'Inventory Loan',art:'browser',sub:'Stock up before peak season or seize bulk-buy discounts without draining cash.',f:['Finance purchases of inventory & raw materials','Inventory can help secure the facility','Buy at volume pricing, sell at full margin','Ideal pre-holiday and seasonal top-ups'],fit:'Retail, eCommerce, distributors, grocers'},
 {name:'Business Expansion Loan',art:'station',sub:'Open a new location, renovate, hire, or launch a new product line.',f:['Term loans structured to your growth plan','Fund leaseholds, fit-out, hiring & marketing','Predictable payments for budgeting','Pair with grants to stretch every dollar'],fit:'Established businesses ready to scale'},
 {name:'Equipment Loan & Leasing',art:'countertop',sub:'Get the equipment you need now and pay over its useful life.',f:['Kitchen, manufacturing, medical, vehicles & tech','The equipment itself secures the financing','Preserve cash and credit lines','Lease-to-own and upgrade options'],fit:'Restaurants, clinics, trades, manufacturers'},
 {name:'Business Line of Credit',art:'loan',sub:'A flexible safety net — draw what you need, pay interest only on what you use.',f:['Revolving access to capital','Cover payroll, gaps & surprise costs','Re-borrow as you repay','Great companion to a cash advance'],fit:'Any business with uneven cash flow'},
];

/* ===================== RETAIL & RESTAURANT BUNDLES ===================== */
const BUNDLES = {
 restaurants:[
  {key:'qsr',size:'Small · 1 location',name:'Café & Quick-Service Starter',fit:'Coffee shops, bakeries, takeout, QSR with 1–2 checkouts.',hw:'Clover Mini at the counter + Clover Flex for line-busting',sw:'Clover Counter Service plan — menus, modifiers, kitchen printing',grow:'Commission-free online ordering, digital loyalty punch card & eGift cards',fund:'Merchant cash advance for renos or a new espresso machine',art:'countertop'},
  {key:'fsr',size:'Mid · 30–150 seats',name:'Full-Service Restaurant',hot:true,fit:'Dine-in restaurants, bars & pubs that need tables, tabs and pay-at-table.',hw:'Clover Station Duo + 2–4 Clover Flex or PAX A920 Pro handhelds',sw:'Clover Table Service or TouchBistro — floor plans, coursing, tabs, KDS',grow:'QR order-and-pay at tables, branded gift cards, reservations & reviews',fund:'Equipment financing for kitchen upgrades',art:'station'},
  {key:'multi',size:'Mid · 2+ locations / high volume',name:'Multi-Location & High-Volume',fit:'Growing groups, food courts and busy QSR chains.',hw:'Self-order kiosks + kitchen display screens + handhelds',sw:'Lightspeed Restaurant or MYR POS — central menus & reporting',grow:'Branded app, loyalty and AI campaigns across locations',fund:'Expansion loan + inventory financing for new sites',art:'kiosk'},
  {key:'truck',size:'Small · mobile',name:'Food Truck & Pop-Up',fit:'Food trucks, markets, catering and event vendors.',hw:'Clover Flex Pocket or PAX A77 with LTE',sw:'Clover Essentials or Counter Service — quick menus & tips',grow:'QR scan-to-pay sign at the window + pay links for catering deposits',fund:'Cash advance for a second truck or event season',art:'mobile'},
 ],
 retail:[
  {key:'boutique',size:'Small · 1 store',name:'Boutique Starter',fit:'Boutiques, gift shops, specialty and lifestyle stores.',hw:'Clover Mini with built-in printer + cash drawer',sw:'Clover Register plan — variants, inventory, discounts, staff roles',grow:'Shopify/WooCommerce payments, loyalty points & branded gift cards',fund:'Inventory loan to stock up before peak season',art:'countertop'},
  {key:'growing',size:'Mid · busy single store',name:'Growing Store',hot:true,fit:'Busy shops needing barcode speed, label printing and an online store.',hw:'Clover Station Duo + scanner + label printer + Flex on the floor',sw:'Clover Register or Lightspeed Retail — advanced inventory & POs',grow:'Online store synced to in-store stock, loyalty program & eGift cards',fund:'Inventory loan + line of credit for seasonal swings',art:'station'},
  {key:'grocery',size:'Small–Mid · high transactions',name:'Grocery & Convenience',fit:'Grocers, convenience, liquor, pharmacies with fast lanes.',hw:'Ingenico Lane or PAX A35 PIN pads on each lane + countertop backup',sw:'Lightspeed Retail or Odoo POS — large catalogues, scale & scanner support (model-dependent)',grow:'Loyalty & weekly promo campaigns',fund:'Merchant cash advance + equipment financing for coolers',art:'pinpad'},
  {key:'omni',size:'Mid · 2+ stores / online',name:'Multi-Store & Omnichannel',fit:'Chains and brands selling in-store and online.',hw:'Mix of stations, handhelds & PIN pads per location',sw:'Lightspeed Retail or Odoo — central inventory, transfers, eCommerce, accounting',grow:'Custom website/app + AI marketing',fund:'Expansion loan for new locations',art:'browser'},
 ]
};
const bundleCard = (b,seg) => `<article class="bundle${b.hot?' hot':''}">${b.hot?'<span class="tag ribbon">Most chosen</span>':''}
 <div style="height:120px;display:grid;place-items:center">${A(b.art)}</div>
 <span class="size">${b.size}</span><h3>${b.name}</h3><p class="fit">${b.fit}</p>
 <dl><div><dt>Hardware</dt><dd>${b.hw}</dd></div><div><dt>POS software</dt><dd>${b.sw}</dd></div><div><dt>Grow sales</dt><dd>${b.grow}</dd></div><div><dt>Funding fit</dt><dd>${b.fund}</dd></div></dl>
 <button class="btn ${b.hot?'btn-lime':'btn-ink'} arrow" data-quote="${esc((seg==='restaurants'?'Restaurant':'Retail')+' bundle: '+b.name)}">Get This Bundle Quoted</button></article>`;

const matcher = (seg) => `<div class="matcher" data-matcher="${seg||''}">
 <div>
  <span class="eyebrow">60-second setup finder</span>
  <h3 style="font-size:30px;margin:10px 0 4px">Find your best setup</h3>
  <p class="kicker">Answer three questions — we'll match the bundle most small & mid-size ${seg==='retail'?'retailers':seg==='restaurants'?'restaurants':'businesses'} like yours choose.</p>
  ${seg?'':`<h4>1. Your business</h4><div class="opts" data-q="seg"><button class="on" data-v="restaurants">🍽 Restaurant / Café</button><button data-v="retail">🛍 Retail store</button></div>`}
  <h4>${seg?'1':'2'}. Your size</h4><div class="opts" data-q="size"><button class="on" data-v="s">Single location, small team</button><button data-v="m">Busy / mid-size</button><button data-v="l">2+ locations</button></div>
  <h4>${seg?'2':'3'}. Your style</h4><div class="opts" data-q="style"></div>
 </div>
 <div class="res" aria-live="polite"></div>
</div>`;
const MATCH = {
 restaurants:{styles:[['counter','Counter / takeout'],['table','Table service'],['mobile','Truck / events']],pick:(s,st)=>st==='mobile'?'truck':s==='l'?'multi':st==='table'?'fsr':s==='m'?'multi':'qsr'},
 retail:{styles:[['spec','Boutique / specialty'],['lanes','Grocery / convenience'],['online','Selling online too']],pick:(s,st)=>st==='lanes'?'grocery':s==='l'?'omni':st==='online'?(s==='s'?'boutique':'growing'):s==='m'?'growing':'boutique'}
};
function initMatcher(el){
  const fixed=el.dataset.matcher; const st={seg:fixed||'restaurants',size:'s',style:null};
  const styleBox=el.querySelector('[data-q=style]'), res=el.querySelector('.res');
  const drawStyles=()=>{styleBox.innerHTML=MATCH[st.seg].styles.map((x,i)=>`<button class="${i?'':'on'}" data-v="${x[0]}">${x[1]}</button>`).join('');st.style=MATCH[st.seg].styles[0][0]};
  const show=()=>{const b=BUNDLES[st.seg].find(x=>x.key===MATCH[st.seg].pick(st.size,st.style));
    res.classList.remove('flash');void res.offsetWidth;res.classList.add('flash');
    res.innerHTML=`<span class="tag">Your best match</span><h3>${b.name}</h3><p class="tagline">${b.fit}</p><ul><li><b>Hardware:</b> ${b.hw}</li><li><b>Software:</b> ${b.sw}</li><li><b>Grow:</b> ${b.grow}</li><li><b>Funding:</b> ${b.fund}</li></ul><button class="btn btn-lime arrow" data-quote="${esc((st.seg==='restaurants'?'Restaurant':'Retail')+' bundle: '+b.name)}">Get My Custom Quote</button>`};
  el.addEventListener('click',e=>{const b=e.target.closest('.opts button');if(!b)return;const q=b.parentElement.dataset.q;b.parentElement.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));st[q]=b.dataset.v;if(q==='seg')drawStyles();show()});
  drawStyles();show();
}

const SEGFAQ = {
 restaurants:[
  ['What is the best POS for a small restaurant in Canada?','For cafés and quick-service, Clover (Mini + Flex on a Counter Service plan) is a strong all-in-one choice. For full-service dining, TouchBistro and Clover Table Service lead on floor plans and pay-at-table. Multi-location groups often prefer Lightspeed Restaurant or MYR POS for central menus and reporting.'],
  ['Can guests pay at the table?','Yes. Handhelds like Clover Flex and PAX A920 Pro let guests tap, insert or swipe at the table, add tips and split bills — no card leaving their sight.'],
  ['How do I stop paying delivery-app commissions?','Add commission-free ordering on your own website and app with our AI Growth Suite. You keep 100% of those orders and own the customer relationship.'],
  ['Can you finance kitchen equipment or a renovation?','Yes — equipment loans/leasing and merchant cash advances based on your card sales are popular with restaurants.'],
 ],
 retail:[
  ['What is the best POS for a small retail store?','Clover Mini or Station Duo on the Register plan is a great value for single stores. Lightspeed Retail and Odoo are ideal when you need advanced inventory, purchase orders, multiple stores or a synced online shop.'],
  ['Can my online store and in-store inventory stay in sync?','Yes. Lightspeed, Odoo and Clover (with integrations) can sync stock between your POS and eCommerce so you never oversell.'],
  ['How can I lower my card processing costs?','Start with a free statement review. We look at your effective rate, pricing model (flat vs interchange-plus), Interac debit fees and any monthly or equipment-lease charges.'],
  ['Can I get financing for inventory?','Yes — inventory loans and lines of credit help you stock up before busy seasons without draining cash.'],
 ]
};

const segPage = (seg) => {
  const R = seg==='restaurants';
  return pageHero({crumb:R?'Restaurants':'Retail',eyebrow:R?'For small & mid-size restaurants':'For small & mid-size retailers',
   title:R?'Restaurant POS & payments that turn tables faster.':'Retail POS & payments built to sell more.',
   lead:R?'From a 10-seat café to a busy multi-location group — the best terminals, restaurant POS, commission-free online ordering and funding, bundled and set up by one local team.':'From a single boutique to a multi-store brand — fast checkout, smart inventory, a synced online store and funding for stock, bundled and set up by one local team.',
   art:R?'station':'tablet',
   ctas:`<a class="btn btn-lime arrow" href="#finder-${seg}" data-scroll>Find My Setup</a><button class="btn btn-ghost" style="color:#fff" data-quote="${R?'Restaurant':'Retail'} quote">Get a Quote</button>`,
   chips:R?['Pay-at-table & tips','Kitchen display','0% commission ordering','Equipment financing']:['Barcode & inventory','Online + in-store sync','Loyalty & promos','Inventory loans']}) + `
<section class="white"><div class="wrap">
  <div class="sec-head"><div class="eyebrow">The problems we fix</div><h2>${R?'Restaurants lose money in the gaps.':'Retailers lose sales at the checkout and on the shelf.'}</h2></div>
  <div class="grid g4">${(R?[['⏱','Slow table turns','Guests wait for the bill and card machine. Pay-at-table fixes it.'],['📲','App commissions','Delivery apps can take a large cut of every order.'],['🧾','Order mistakes','Hand-written tickets and missed modifiers cost food and reviews.'],['💸','Hidden fees','Unclear statements, long leases and high effective rates.']]:[['🐢','Long lines','Slow checkout means walk-outs at peak times.'],['📦','Stock blind spots','Overselling, dead stock and manual counts.'],['🌐','Offline-only sales','Customers want to buy online and pick up in store.'],['💸','Hidden fees','Unclear statements, long leases and high effective rates.']]).map(([i,h,p])=>`<div class="card"><div style="font-size:32px">${i}</div><h3 style="font-size:19px;margin:10px 0 6px">${h}</h3><p class="kicker">${p}</p></div>`).join('')}</div>
</div></section>
<section id="finder-${seg}" style="background:linear-gradient(180deg,var(--ink) 0 45%,var(--cream) 45%)"><div class="wrap">
  <div class="sec-head center dark" style="background:none"><div class="eyebrow">Setup finder</div><h2 style="color:#fff">Your best-fit ${R?'restaurant':'retail'} bundle in 60 seconds</h2></div>
  ${matcher(seg)}
</div></section>
<section><div class="wrap">
  <div class="sec-head"><div class="eyebrow">Recommended bundles</div><h2>The best offerings for ${R?'small & mid-size restaurants':'small & mid-size retailers'}</h2><p>Each bundle combines the hardware, software, growth tools and funding that ${R?'restaurants':'retailers'} like yours use most. Every piece can be swapped — we'll tailor it.</p></div>
  <div class="grid g2">${BUNDLES[seg].map(b=>bundleCard(b,seg)).join('')}</div>
</div></section>
<section class="dark"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">Must-have features</div><h2>What your system should do on day one</h2></div>
  <div class="grid g3">${(R?[['🍽','Table & floor management','Table maps, coursing, seat numbers and transfers.'],['🧑‍🍳','Kitchen display (KDS)','Orders route to the right station — no lost tickets.'],['💳','Pay-at-table & split bills','Tips on screen, split by seat or item.'],['🛵','Own online ordering','Pickup & delivery from your site — no commission.'],['🎁','Loyalty & gift cards','Bring regulars back more often.'],['📊','Menu & labour reports','Know your best sellers and busiest hours.']]:[['🔎','Barcode & variants','Sizes, colours and SKUs scanned in a second.'],['📦','Inventory & reorders','Low-stock alerts, purchase orders, counts.'],['🌐','Online store sync','One catalogue for in-store and online.'],['🎁','Loyalty & promos','Points, discounts and targeted campaigns.'],['👥','Staff roles & commissions','Permissions, timesheets and sales by staff.'],['📊','Sales analytics','Margins, best sellers and dead stock.']]).map(([i,h,p])=>`<div class="feat"><div class="ic">${i}</div><div><h4>${h}</h4><p>${p}</p></div></div>`).join('')}</div>
</div></section>
<section class="white"><div class="wrap">
  <div class="sec-head"><div class="eyebrow">Save on processing</div><h2>Small changes that protect your margins</h2></div>
  <div class="grid g4">${[['📄','Know your effective rate','Total fees ÷ card sales. We calculate it free from your statement.'],['🏧','Push Interac debit','In Canada, debit is usually priced per transaction — often far cheaper than credit.'],['📑','Avoid long leases','Watch for multi-year equipment leases. Owning or short terms often cost less.'],['⚡','Faster deposits','Next-day funding options keep cash flow steady.']].map(([i,h,p])=>`<div class="card"><div style="font-size:30px">${i}</div><h3 style="font-size:18px;margin:10px 0 6px">${h}</h3><p class="kicker">${p}</p></div>`).join('')}</div>
  <div class="center mt"><a class="btn btn-ink arrow" href="#contact" data-prefill="Free statement review">Get My Free Statement Review</a></div>
</div></section>
<section><div class="wrap split" style="align-items:start">
  <div><div class="eyebrow">FAQ</div><h2 style="font-size:clamp(30px,3.6vw,44px);margin:14px 0 24px">${R?'Restaurant':'Retail'} payments, answered</h2>${faq(SEGFAQ[seg])}</div>
  ${leadForm(seg+'Form',R?'Get your restaurant quote':'Get your retail quote','Tell us about your '+(R?'restaurant':'store')+' — we\'ll build the best bundle.')}
</div></section>
${ctaBand(R?'Turn more tables. Keep more margin.':'Sell faster. Stock smarter.','Book a free consultation and a no-obligation demo of the setup that fits your business.',R?'Restaurant':'Retail')}`;
};

/* ===================== PAGE BUILDERS ===================== */
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const li = a => a.map(x=>`<li>${x}</li>`).join('');
const quoteBtn = (p,label='Get Pricing') => `<button class="btn btn-ink btn-sm arrow" data-quote="${esc(p)}">${label}</button>`;

const pageHero = ({crumb,eyebrow,title,lead,art,ctas,chips=[]}) => `
<section class="hero page-hero"><span class="blob b1"></span><span class="blob b2"></span><div class="wrap hero-grid">
  <div>
    <div class="crumbs"><a href="#home">Home</a> / ${crumb}</div>
    <div class="eyebrow" style="margin-top:16px">${eyebrow}</div>
    <h1>${title}</h1>
    <p class="lead">${lead}</p>
    <div class="hero-ctas">${ctas||`<button class="btn btn-lime arrow" data-quote="${esc(crumb)}">Get a Free Quote</button><a class="btn btn-ghost" style="color:#fff" href="#contact" data-prefill="${esc(crumb)}">Talk to an Expert</a>`}</div>
    <div class="hero-checks">${chips.map(c=>`<span>${c}</span>`).join('')}</div>
  </div>
  <div class="hero-art" style="max-width:440px;margin:0 auto;width:100%">${A(art)}</div>
</div></section>`;

const prodCard = (p,ctx) => `<article class="card prod">
  <div class="art">${p.tag?`<span class="tag">${p.tag}</span>`:''}${A(p.art)}</div>
  <div class="body">
    ${p.brand?`<span class="kicker" style="font-weight:700;color:var(--ink3)">${p.brand}</span>`:''}${p.fit?`<span class="kicker" style="font-weight:700;color:var(--ink3)">${p.fit}</span>`:''}
    <h3>${p.name}</h3><p class="sub">${p.sub}</p>
    ${p.m?`<div class="models">${p.m.map(x=>`<span>${x}</span>`).join('')}</div>`:''}
    <ul>${li(p.f)}</ul>
    <div class="row">${quoteBtn(ctx+': '+p.name)}${p.link?`<a class="btn btn-ghost btn-sm" href="#${p.link}">Explore</a>`:''}</div>
  </div></article>`;

const ctaBand = (h='Ready to pay less and get more?',p='Tell us about your business — we’ll compare options across our partner network and come back with a clear recommendation.',ctx='') => `
<section><div class="wrap"><div class="band">
  <div><h2>${h}</h2><p>${p}</p></div>
  <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end"><button class="btn btn-ink arrow" data-quote="${esc(ctx)}">Get My Free Quote</button><a class="btn btn-ghost" href="#contact" data-prefill="${esc(ctx||'General')}">Contact Us</a></div>
</div></div></section>`;

const leadForm = (id,title='Get your free custom quote',hint='Takes 60 seconds. No obligation, no pressure.') => `
<div class="form" id="${id}">
 <div class="fwrap">
  <h3>${title}</h3><p class="hint">${hint}</p>
  <div class="progress"><i class="on"></i><i></i><i></i></div>
  <form novalidate>
   <div class="wstep on" data-s="0">
    <label>What are you interested in? <span style="color:var(--muted);font-weight:500">(pick all that apply)</span></label>
    <div class="chips">${['Payment Terminal','Clover','POS System','Virtual Terminal','eCommerce Payments','Cheque Printing','Loyalty / Gift Cards','QR / Tap to Pay','AI Marketing','Business Automation','Website / App','Business Loan','Business Grant','Free statement review'].map(x=>`<label><input type="checkbox" name="interest" value="${x}">${x}</label>`).join('')}</div>
    <div class="wnav"><button type="button" class="btn btn-ink arrow" data-next>Continue</button></div>
   </div>
   <div class="wstep" data-s="1"><div class="fgrid">
    <div class="full stmt" hidden><label>Upload last month's payment processing statement *</label>
     <label class="drop"><input type="file" name="statement" accept=".pdf,.jpg,.jpeg,.png,.heic,.webp"><span class="drop-ic">📄</span><span class="drop-t"><b>Tap to upload</b> or drag your statement here<br><small>PDF or photo · max 10 MB · used only for your free savings review</small></span></label></div>
    <div><label>Business type</label><select name="type"><option value="">Select…</option><option>Restaurant / Café / Bar</option><option>Retail Store</option><option>Grocery / Convenience</option><option>Salon / Spa / Wellness</option><option>Healthcare / Clinic</option><option>Professional Services</option><option>Trades / Contractor</option><option>eCommerce</option><option>Wholesale / Manufacturing</option><option>Non-profit</option><option>Other</option></select></div>
    <div><label>Monthly card sales</label><select name="volume"><option value="">Select…</option><option>Just starting</option><option>Under $10K</option><option>$10K – $50K</option><option>$50K – $150K</option><option>$150K – $500K</option><option>$500K+</option></select></div>
    <div><label>Locations</label><select name="locations"><option>1</option><option>2–5</option><option>6+</option></select></div>
    <div><label>Province</label><select name="province"><option>British Columbia</option><option>Alberta</option><option>Ontario</option><option>Quebec</option><option>Manitoba</option><option>Saskatchewan</option><option>Nova Scotia</option><option>New Brunswick</option><option>Newfoundland & Labrador</option><option>PEI</option><option>Territories</option></select></div>
    <div class="full"><label>Anything we should know? <span style="color:var(--muted);font-weight:500">(optional)</span></label><textarea name="notes" placeholder="e.g. current provider, contract end date, funding amount needed…"></textarea></div>
   </div>
   <div class="wnav"><button type="button" class="btn btn-ghost" data-prev>Back</button><button type="button" class="btn btn-ink arrow" data-next>Continue</button></div></div>
   <div class="wstep" data-s="2"><div class="fgrid">
    <div><label>Full name *</label><input name="name" required autocomplete="name"></div>
    <div><label>Business name</label><input name="business" autocomplete="organization"></div>
    <div><label>Email *</label><input name="email" type="email" required autocomplete="email"></div>
    <div><label>Phone *</label><input name="phone" type="tel" required autocomplete="tel"></div>
    <div class="full"><label>Best time to reach you</label><select name="time"><option>Anytime</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></div>
   </div>
   <div class="wnav"><button type="button" class="btn btn-ghost" data-prev>Back</button><button type="submit" class="btn btn-lime arrow">Get My Quote</button></div>
   <p class="fine">🔒 Your details stay private and are only used to prepare your quote.</p></div>
  </form>
 </div>
 <div class="success"><div class="tick">✓</div><h3>Thanks<span class="sn"></span>!</h3><p class="hint" style="margin-top:8px">Your request is in. An UrbanPay specialist will review it and get back to you with options — usually within one business day.</p><p class="hint">Need it sooner? Call <a href="tel:+16043607088" style="font-weight:800;color:var(--ink3)">+1 604 360 7088</a></p><p class="fine preview-note"></p></div>
</div>`;

const faq = items => `<div class="faq">${items.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;

/* ===================== PAGES ===================== */
const PAGES = {};

PAGES.home = () => `
<section class="hero"><span class="blob b1"></span><span class="blob b2"></span><span class="blob b3"></span><div class="wrap hero-grid">
  <div>
    <div class="eyebrow">Canada's one-stop payments partner</div>
    <h1>All payment solutions. <em>One place.</em><br><span style="font-size:.55em;color:#dfe6f7;font-weight:700">Built for <span class="rot" id="rot"><span class="on">restaurants</span><span>retail stores</span><span>cafés</span><span>boutiques</span><span>grocers</span><span>growing brands</span></span></span></h1>
    <p class="lead">Terminals, POS, online payments, cheques, AI marketing, websites, business loans and grants — compared across leading brands and delivered by one team that actually picks up the phone.</p>
    <div class="hero-ctas"><button class="btn btn-lime arrow" data-quote="">Get a Free Quote</button><a href="#contact" class="btn btn-ghost" style="color:#fff" data-prefill="Free statement review">Free Statement Review</a></div>
    <div class="hero-checks"><span>Vendor-neutral advice</span><span>Next-day deposits available</span><span>Local setup & support</span><span>Funding & grants under one roof</span></div>
  </div>
  <div class="hero-art">
    ${A('hero')}
    <div class="float-chip" style="top:8%;left:2%"><i></i>Payment approved · $48.50</div>
    <div class="float-chip" style="bottom:22%;left:-2%;animation-delay:-2s"><i style="background:var(--lime)"></i>Cheques shipped ✓</div>
  </div>
</div>
<div class="wrap"><div class="statrow">
  <div><b><span class="count" data-to="10">0</span>+</b><span>terminal & POS brands compared</span></div>
  <div><b><span class="count" data-to="9">0</span></b><span>solutions under one roof</span></div>
  <div><b><span class="count" data-to="6">0</span></b><span>business funding options</span></div>
  <div><b><span class="count" data-to="1">0</span></b><span>partner to call</span></div>
</div></div></section>
<div class="strip"><div class="strip-row">${(()=>{const r='<small>Solutions we offer</small><b>Clover</b><b>Poynt</b><b>Ingenico</b><b>Dejavoo</b><b>PAX</b><b>Lightspeed</b><b>TouchBistro</b><b>Odoo</b><b>MYR POS</b><small>Accept</small><b>Visa</b><b>Mastercard</b><b>Amex</b><b>Interac</b><b>Apple Pay</b><b>Google Pay</b>';return r+r})()}</div></div>

<section class="white"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">Who we serve best</div><h2>Specialists in small & mid-size <span class="hl">restaurants and retail</span>.</h2><p>Most of our merchants run restaurants and stores. So we've built ready-to-go bundles — hardware, POS, online sales and funding — for exactly how you operate.</p></div>
  <div class="seg">
    <a class="segcard r" href="#restaurants"><div class="bgart">${A('station')}</div><span class="tag" style="background:#fff;width:max-content">Restaurants & Cafés</span><h3>Turn tables faster. Keep 100% of online orders.</h3><p>Pay-at-table handhelds, kitchen display, commission-free ordering and equipment financing.</p><ul><li>Clover</li><li>TouchBistro</li><li>Lightspeed</li><li>MYR</li><li>PAX</li></ul><span class="btn btn-lime arrow" style="width:max-content">See Restaurant Bundles</span></a>
    <a class="segcard t" href="#retail"><div class="bgart">${A('tablet')}</div><span class="tag" style="width:max-content">Retail Stores</span><h3>Faster checkout. Smarter inventory. Sell online too.</h3><p>Barcode-ready POS, synced eCommerce, loyalty and inventory loans for busy seasons.</p><ul><li>Clover</li><li>Lightspeed</li><li>Odoo</li><li>Ingenico</li><li>Shopify-ready</li></ul><span class="btn btn-lime arrow" style="width:max-content">See Retail Bundles</span></a>
  </div>
  <div class="mt2">${matcher('')}</div>
</div></section>

<section><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">Everything your business needs to get paid & grow</div><h2>One partner. <span class="hl">Every way</span> to get paid and grow.</h2><p>Stop juggling a processor, a POS rep, a cheque printer, a web agency and a lender. UrbanPay brings it together — and makes every piece work with the others.</p></div>
  <div class="grid g3">${SOLUTIONS.map(s=>`<a class="card sol" href="#${s.id}"><div class="art">${A(s.art)}</div><h3>${s.t}</h3><p>${s.d}</p><span class="more">Explore</span></a>`).join('')}</div>
</div></section>

<section class="dark"><div class="wrap split">
  <div>
    <div class="eyebrow">Free fee check</div>
    <h2 style="font-size:clamp(32px,4vw,48px);margin:14px 0">What are you <span style="color:var(--lime)">really</span> paying to accept cards?</h2>
    <p style="font-size:17px;color:#a9b5d3">Most owners only see the advertised rate. Upload last month's statement and we'll find every hidden fee — free. Your <b style="color:#fff">effective rate</b> — total fees ÷ total card sales — tells the real story. Slide in the numbers from your last statement.</p>
    <div class="hero-ctas"><a href="#contact" class="btn btn-lime arrow" data-prefill="Free statement review">Upload Last Month's Statement</a></div>
  </div>
  <div class="calc" style="box-shadow:none">
    <div class="in" style="border-radius:24px 0 0 24px">
      <label>Monthly card sales</label><div class="val" id="cv">$40,000</div><input type="range" id="cvol" min="2000" max="500000" step="1000" value="40000">
      <label>Total processing fees on statement</label><div class="val" id="cf">$1,280</div><input type="range" id="cfee" min="20" max="20000" step="10" value="1280">
    </div>
    <div class="out" style="border-radius:0 24px 24px 0;background:#14244d">
      <span class="kicker" style="color:#a9b5d3;font-weight:700;letter-spacing:.1em;text-transform:uppercase">Your effective rate</span>
      <div class="big" id="er">3.20%</div>
      <div class="meter"><i id="erm" style="width:60%"></i></div>
      <p id="ermsg" style="font-size:15px;color:#cfd8ee">That's <b style="color:#fff">$15,360 a year</b> in fees. Let's see how much of that we can win back.</p>
    </div>
  </div>
</div></section>

<section id="whyanchor" class="white"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">Why UrbanPay</div><h2>Not another processor. Your payments partner.</h2><p>Single-brand providers sell you their box. We compare across our approved vendor network and pick what fits your business.</p></div>
  <table class="compare"><thead><tr><th></th><th class="us">UrbanPay</th><th>Typical processor</th><th>Big bank</th></tr></thead><tbody>
   <tr><td>Multiple terminal & POS brands to choose from</td><td class="us">✓</td><td class="no">One brand</td><td class="no">Limited</td></tr>
   <tr><td>Free statement review & rate comparison</td><td class="us">✓</td><td class="no">—</td><td class="no">—</td></tr>
   <tr><td>Cheque printing in the same place</td><td class="us">✓</td><td class="no">—</td><td>✓</td></tr>
   <tr><td>Merchant cash advance & business loans</td><td class="us">✓</td><td class="no">Sometimes</td><td>Strict criteria</td></tr>
   <tr><td>Grant screening (RTRI, REDIP & more)</td><td class="us">✓</td><td class="no">—</td><td class="no">—</td></tr>
   <tr><td>Websites, apps & AI marketing</td><td class="us">✓</td><td class="no">—</td><td class="no">—</td></tr>
   <tr><td>Local, human setup & training</td><td class="us">✓</td><td class="no">Call centre</td><td class="no">Branch hours</td></tr>
  </tbody></table>
</div></section>

<section><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">How it works</div><h2>From first call to first sale in four steps</h2></div>
  <div class="steps white" style="background:none">
   <div class="step"><h4>Tell us your needs</h4><p>60-second form or a quick call. Share a recent statement if you have one.</p></div>
   <div class="step"><h4>Get a side-by-side</h4><p>We compare hardware, software and pricing from our partner network.</p></div>
   <div class="step"><h4>We set it up</h4><p>Application, configuration, menu/inventory import and staff training.</p></div>
   <div class="step"><h4>Grow with support</h4><p>Ongoing help plus funding, marketing and web tools when you're ready.</p></div>
  </div>
</div></section>

<section class="white"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">Industries</div><h2>Built for the way Canadian businesses sell</h2></div>
  <div class="pill-list" style="justify-content:center">${['🍽 Restaurants & Cafés','🛍 Retail','🛒 Grocery & Convenience','💇 Salons & Spas','🩺 Healthcare & Dental','🔧 Trades & Contractors','💼 Professional Services','📦 eCommerce','🏭 Wholesale & Manufacturing','🎟 Events & Pop-ups','🤝 Non-profits','🚚 Mobile & Delivery'].map(x=>`<span>${x}</span>`).join('')}</div>
</div></section>

<section><div class="wrap split">
  <div>
    <div class="eyebrow">Get started</div>
    <h2 style="font-size:clamp(32px,4vw,48px);margin:14px 0">Your custom quote, minus the sales pitch.</h2>
    <p style="font-size:17px;color:var(--muted)">Tell us what you need. We'll come back with a clear comparison and honest recommendation — whether that's a $0-down terminal, a full restaurant POS, or $250K in working capital.</p>
    <div class="grid mt" style="gap:18px">
      <div class="feat"><div class="ic">⚡</div><div><h4>Fast response</h4><p>A real person reviews every request.</p></div></div>
      <div class="feat"><div class="ic">⚖</div><div><h4>Vendor-neutral</h4><p>We recommend what fits — not what pays us most.</p></div></div>
      <div class="feat"><div class="ic">🛡</div><div><h4>Secure by default</h4><p>PCI-compliant partners, EMV & tokenization.</p></div></div>
    </div>
  </div>
  ${leadForm('homeForm')}
</div></section>

<section class="white"><div class="wrap" style="max-width:860px">
  <div class="sec-head center"><div class="eyebrow">FAQ</div><h2>Questions, answered</h2></div>
  ${faq([
   ['Do I have to switch processors to work with UrbanPay?','No. We can start with a free statement review and show you options side-by-side. If staying put makes sense, we\'ll tell you.'],
   ['Which terminals and POS systems can you provide?','Clover, Poynt, Ingenico, Dejavoo and PAX terminals, plus Clover, Lightspeed, Odoo, MYR and TouchBistro POS. We match the system to your business type, volume and budget.'],
   ['How fast can I get set up?','Many merchants are processing within days of approval. We handle the application, configuration and training.'],
   ['Can you help with funding as well as payments?','Yes — merchant cash advances, receivable financing, inventory, expansion and equipment loans, plus grant screening for programs like RTRI and REDIP.'],
   ['Do you build websites and online stores?','Yes. We design and build websites, eCommerce stores, mobile apps and custom software — with payments built in from day one.'],
  ])}
</div></section>
${ctaBand()}`;

PAGES.terminals = () => pageHero({crumb:'Payment Terminals',eyebrow:'Countertop · Wireless · Smart',title:'The right payment terminal for every counter.',lead:'Clover, Poynt, Ingenico, Dejavoo and PAX — we compare them for you, set them up, and support you after. Accept tap, chip, swipe, Interac, Apple Pay and Google Pay.',art:'handheld',chips:['Tap / chip / swipe','Interac debit','Wi-Fi, LTE & Ethernet','Setup & training included']}) + `
<section><div class="wrap">
  <div class="sec-head"><div class="eyebrow">Compare terminals</div><h2>Five leading brands. One honest recommendation.</h2><p>Tap "Get Pricing" on any terminal and we'll send a tailored quote with hardware and rate options.</p></div>
  <div class="tabs" id="tfilter">${['All','Clover','Poynt','Ingenico','Dejavoo','PAX'].map((b,i)=>`<button class="${i?'':'on'}" data-b="${b}">${b}</button>`).join('')}</div>
  <div class="grid g3" id="tgrid">${TERMINALS.map(p=>`<div data-brand="${p.brand}">${prodCard(p,'Terminal')}</div>`).join('')}</div>
  <p class="kicker mt">*Surcharging and dual pricing are subject to card brand rules and provincial regulations. We'll advise what's permitted for your business.</p>
</div></section>
<section class="dark"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">Which one fits?</div><h2>Terminal quick-match</h2></div>
  <div class="grid g4">
   ${[['🍽','Table-service restaurant','Clover Flex or PAX A920 Pro for pay-at-table with tips & split bills.'],['🛍','Retail counter','Clover Mini, Station Duo or Ingenico Desk for fast lines and barcode scanning.'],['🚚','Mobile & field','Clover Flex Pocket, PAX A77 or Ingenico Move with LTE.'],['💰','High-volume, low cost','Dejavoo Z-series or PAX A80 with simple, competitive pricing.']].map(([i,h,p])=>`<div class="card"><div style="font-size:30px">${i}</div><h3 style="font-size:19px;margin:10px 0 6px">${h}</h3><p style="font-size:14.5px;color:#a9b5d3">${p}</p></div>`).join('')}
  </div>
</div></section>
<section><div class="wrap grid g3">
  <div class="feat"><div class="ic">⚡</div><div><h4>Next-day deposits</h4><p>Fast funding options keep cash flowing.</p></div></div>
  <div class="feat"><div class="ic">🔒</div><div><h4>EMV & end-to-end encryption</h4><p>PCI-compliant devices and tokenized card data.</p></div></div>
  <div class="feat"><div class="ic">🧰</div><div><h4>Setup, swap & support</h4><p>We configure, train, and help when something breaks.</p></div></div>
</div></section>
${ctaBand('Not sure which terminal to pick?','Tell us how and where you take payments — we\'ll recommend the best fit and quote it side-by-side.','Payment Terminal')}`;

PAGES.clover = () => pageHero({crumb:'Clover',eyebrow:'Clover Hub',title:'Run your whole business on Clover.',lead:'Clover is more than a terminal — it\'s a complete point-of-sale and business management system with handheld, countertop and self-serve devices that sync together, plus an app market for everything from loyalty to payroll.',art:'station',chips:['Flex · Mini · Station · Kiosk','Retail & restaurant plans','Online ordering & loyalty','Set up by UrbanPay']}) + `
<section><div class="wrap">
  <div class="sec-head"><div class="eyebrow">The Clover family</div><h2>Mix and match devices that work as one system.</h2><p>Start with one device and add more as you grow — every Clover device shares the same menu, inventory, staff and reporting.</p></div>
  <div class="grid g3">${CLOVER.map(p=>prodCard(p,'Clover')).join('')}</div>
</div></section>
<section class="white"><div class="wrap">
  <div class="sec-head"><div class="eyebrow">Software plans</div><h2>Pick the Clover plan that matches your business.</h2><p>Plans and pricing vary by setup — we'll quote the exact combination of hardware and software you need.</p></div>
  <table class="itable"><thead><tr><th>Plan</th><th>What you get</th><th>Works with</th><th></th></tr></thead><tbody>
  ${CLOVER_PLANS.map(([a,b,c])=>`<tr><td><b>${a}</b></td><td>${b}</td><td>${c}</td><td>${quoteBtn('Clover plan: '+a,'Quote')}</td></tr>`).join('')}
  </tbody></table>
</div></section>
<section class="dark"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">Why merchants love Clover</div><h2>Everything you need, built in.</h2></div>
  <div class="grid g3">
   ${[['📊','Real-time reporting','Track sales, best-sellers and staff performance from the Clover Dashboard or app.'],['📦','Inventory management','Variants, stock alerts, barcode labels and supplier tracking.'],['👥','Employee management','Roles, permissions, timesheets and tips.'],['🛍','Online ordering','Take pickup and delivery orders from your own website.'],['🎁','Loyalty & gift cards','Rewards and promotions that bring customers back.'],['🧩','App market','Add accounting, payroll, reservations, marketing and more.']].map(([i,h,p])=>`<div class="feat"><div class="ic">${i}</div><div><h4>${h}</h4><p>${p}</p></div></div>`).join('')}
  </div>
</div></section>
<section><div class="wrap split">
  <div><div class="eyebrow">Clover by industry</div><h2 style="font-size:clamp(30px,3.6vw,44px);margin:14px 0">Configured for how you sell.</h2>
  <div class="grid" style="gap:16px">
   <div class="card"><h4>🍔 Quick service & cafés</h4><p class="kicker">Station Duo up front, Flex for line-busting, Kiosk for self-serve, kitchen printing or KDS.</p></div>
   <div class="card"><h4>🍷 Full-service restaurants</h4><p class="kicker">Flex for pay-at-table, table maps, coursing, tabs and tip management.</p></div>
   <div class="card"><h4>🛒 Retail</h4><p class="kicker">Mini or Station Solo with barcode scanning, variants and inventory counts.</p></div>
   <div class="card"><h4>💇 Services & salons</h4><p class="kicker">Flex Pocket or Mini with appointments, deposits and customer profiles.</p></div>
  </div></div>
  ${leadForm('cloverForm','Get Clover pricing','We\'ll build your Clover bundle and quote it — hardware, plan and rates.')}
</div></section>
${ctaBand('Ready to run on Clover?','Book a free demo and we\'ll show you exactly how Clover would work for your business.','Clover demo')}`;

PAGES.pos = () => pageHero({crumb:'POS Systems',eyebrow:'Retail & Restaurant POS',title:'The POS that fits your business — not the other way around.',lead:'We work with Clover, Lightspeed, Odoo, MYR and TouchBistro, so you get an honest comparison and a system configured for your menu, inventory and team.',art:'tablet',chips:['5 leading POS platforms','Menu & inventory import','Staff training','Integrated payments']}) + `
<section><div class="wrap">
  <div class="tabs" id="posfilter">${['All','Restaurants','Retail'].map((b,i)=>`<button class="${i?'':'on'}" data-f="${b}">${b}</button>`).join('')}</div>
  <div class="grid g3" id="posgrid">${POS.map(p=>`<div data-fit="${p.fit}">${prodCard(p,'POS')}</div>`).join('')}
   <div><article class="card prod" style="background:var(--ink);color:#cfd8ee;border:0;height:100%"><div class="body" style="justify-content:center"><span class="tag">Not sure?</span><h3 style="color:#fff;font-size:26px">Get a side-by-side POS comparison</h3><p style="color:#a9b5d3">Tell us your business type, number of terminals and must-have features. We'll compare up to three systems with total cost of ownership.</p><div class="row"><button class="btn btn-lime arrow" data-quote="POS comparison">Compare POS Systems</button></div></div></article></div>
  </div>
</div></section>
<section class="white"><div class="wrap">
  <div class="sec-head"><div class="eyebrow">At a glance</div><h2>POS comparison</h2></div>
  <div style="overflow-x:auto"><table class="compare"><thead><tr><th>Feature</th><th>Clover</th><th>Lightspeed</th><th>Odoo</th><th>MYR</th><th>TouchBistro</th></tr></thead><tbody>
   <tr><td>Best for</td><td>All-round SMB</td><td>Multi-location</td><td>All-in-one ERP</td><td>Restaurants & cafés</td><td>Full-service dining</td></tr>
   <tr><td>Restaurant features</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
   <tr><td>Advanced retail inventory</td><td>✓</td><td>✓</td><td>✓</td><td>Basic</td><td class="no">—</td></tr>
   <tr><td>Online ordering / eCommerce</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
   <tr><td>Accounting / ERP built in</td><td>Via apps</td><td>Integrations</td><td>✓ Native</td><td>Integrations</td><td>Integrations</td></tr>
   <tr><td>Hardware</td><td>Clover devices</td><td>iPad + peripherals</td><td>Any device</td><td>Touchscreens / kiosks</td><td>iPad</td></tr>
  </tbody></table></div>
</div></section>
<section class="dark"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">What's included</div><h2>We don't just sell the POS. We launch it.</h2></div>
  <div class="steps"><div class="step"><h4>Discovery</h4><p>We map your workflow, menu or catalogue, and must-haves.</p></div><div class="step"><h4>Build</h4><p>Menu/inventory import, modifiers, taxes, printers and KDS.</p></div><div class="step"><h4>Train</h4><p>Hands-on training for owners, managers and staff.</p></div><div class="step"><h4>Support</h4><p>Ongoing help, updates and add-ons as you grow.</p></div></div>
</div></section>
${ctaBand('Upgrade your POS without the headache.','We\'ll compare systems, migrate your data, and get your team trained.','POS System')}`;

PAGES['virtual-terminal'] = () => pageHero({crumb:'Virtual Terminal',eyebrow:'Card-not-present payments',title:'Take payments from any browser. No hardware needed.',lead:'Turn any computer, tablet or phone into a payment terminal. Perfect for phone and mail orders, deposits, invoices and recurring billing.',art:'laptop',chips:['Phone & mail orders','Invoices & pay links','Recurring billing','Secure card-on-file']}) + `
<section><div class="wrap grid g3">
  ${[['⌨','Key-in payments','Securely enter card details for phone, email and mail orders.'],['🔁','Recurring billing','Schedule weekly, monthly or custom-interval charges automatically.'],['💳','Card on file','Tokenized storage lets you re-charge returning customers safely.'],['📧','Invoices & pay-by-link','Email or text a secure payment link — get paid faster.'],['↩','Refunds & voids','Process returns and adjustments in a few clicks.'],['👥','Multi-user access','Give staff their own logins and permissions.'],['📊','Reporting','Search transactions, export reports and reconcile easily.'],['🛡','Fraud tools','AVS/CVV checks and PCI-compliant processing.'],['🧾','Level-friendly receipts','Branded email receipts with your business details.']].map(([i,h,p])=>`<div class="feat"><div class="ic">${i}</div><div><h4>${h}</h4><p>${p}</p></div></div>`).join('')}
</div></section>
<section class="white"><div class="wrap split">
  <div>${A('laptop')}</div>
  <div><div class="eyebrow">Perfect for</div><h2 style="font-size:clamp(30px,3.6vw,44px);margin:14px 0">Businesses that get paid before or after the visit.</h2>
  <div class="pill-list">${['Contractors & trades','Clinics & dental','Law & accounting','Property management','Catering & events','B2B wholesale','Tutoring & coaching','Non-profit donations'].map(x=>`<span>${x}</span>`).join('')}</div>
  <div class="hero-ctas">${quoteBtn('Virtual Terminal','Get Virtual Terminal Pricing')}</div></div>
</div></section>
${ctaBand('Start accepting payments online today.','Get set up with a virtual terminal and pay links — no hardware, no hassle.','Virtual Terminal')}`;

PAGES.ecommerce = () => pageHero({crumb:'eCommerce Payments',eyebrow:'Online payments',title:'Checkout that converts. Payments that just work.',lead:'Whether you sell on Shopify, WooCommerce or a custom site — or don\'t have a website yet — we\'ll connect the right gateway and get you paid online.',art:'browser',chips:['Apple Pay & Google Pay','Shopify, WooCommerce & more','Subscriptions','3-D Secure & fraud tools']}) + `
<section><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">Choose your path</div><h2>Three ways to get paid online</h2><p>Pick the option that matches where you are today. We'll set it up and make sure it talks to your in-store sales too.</p></div>
  <div class="grid g3">
   ${[['No website yet','Pay Links & Hosted Pages','Share a secure payment link by email, text or social. Or use a branded hosted payment page. Live in a day.',['No coding needed','Great for deposits, invoices & social sellers','Accept cards, Apple Pay & Google Pay'],'browser'],['Using a platform','Plug-in Gateway','Connect your store in minutes with ready-made integrations for popular platforms.',['Shopify, WooCommerce, Wix, BigCommerce, Magento','Saved cards & one-click checkout','Unified reporting with in-store sales'],'laptop'],['Custom build','Developer API','Full control over checkout for custom websites, apps and SaaS platforms.',['Tokenization & recurring billing','Webhooks & sandbox testing','Our dev team can build it for you'],'code']].map(([k,h,p,f,a],i)=>`<article class="card prod"><div class="art">${i===0?'<span class="tag">Fastest</span>':''}${A(a)}</div><div class="body"><span class="kicker" style="font-weight:700;color:var(--ink3)">${k}</span><h3>${h}</h3><p class="sub">${p}</p><ul>${li(f)}</ul><div class="row">${quoteBtn('eCommerce: '+h)}</div></div></article>`).join('')}
  </div>
</div></section>
<section class="dark"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">Built for conversions</div><h2>Fewer abandoned carts. More completed sales.</h2></div>
  <div class="grid g4">${[['📱','Mobile wallets','Apple Pay & Google Pay for one-tap checkout.'],['🔁','Subscriptions','Memberships, boxes and SaaS billing on autopilot.'],['🛡','Fraud protection','3-D Secure, AVS and velocity checks.'],['🔗','Omnichannel','Online and in-store sales in one dashboard.']].map(([i,h,p])=>`<div class="card"><div style="font-size:30px">${i}</div><h3 style="font-size:19px;margin:10px 0 6px">${h}</h3><p style="font-size:14.5px;color:#a9b5d3">${p}</p></div>`).join('')}</div>
</div></section>
${ctaBand('Need a store too?','We build websites and online stores with payments built in from day one.','eCommerce + Website')}`;

PAGES.cheques = () => pageHero({crumb:'Cheque Printing',eyebrow:'Business cheques, done right',title:'Secure business cheques — printed, proofed & delivered.',lead:'Order laser or manual cheques with your logo and banking details, built to Canadian Payments standards with layered security features. We send a proof before anything is printed.',art:'cheque',ctas:`<button class="btn btn-lime arrow" data-cheque="1">Order Cheques Now</button><a class="btn btn-ghost" style="color:#fff" href="#contact" data-prefill="Cheque Printing">Ask a Question</a>`,chips:['Laser & manual cheques','Your logo, free','Proof before print','Shipped across Canada']}) + `
<section><div class="wrap">
  <div class="sec-head"><div class="eyebrow">Choose your cheque</div><h2>Cheques for every way you pay.</h2></div>
  <div class="grid g3">
   ${[{name:'Laser Cheques',art:'cheque',tag:'Most popular',sub:'Print from QuickBooks, Sage, Xero and most accounting software.',f:['Top, middle or bottom cheque position','Compatible with standard laser printers','Blank stubs for your software to fill','Ideal for payroll & accounts payable'],m:['Top','Middle','Bottom','3-per-page']},
     {name:'Manual Cheques',art:'grant',sub:'Hand-written cheque books with stubs to track every payment.',f:['Bound books with record stubs','1-part or duplicate options','Business or personal sizes','Perfect for small offices & trades'],m:['1-per-page','3-per-page book','Duplicate']},
     {name:'Deposit Books & Stamps',art:'loan',sub:'Matching deposit slips and endorsement stamps for a complete kit.',f:['Pre-encoded deposit books','Self-inking endorsement stamps','Matching envelopes available','Bundle & save with cheque orders'],m:['Deposit book','Stamp','Envelopes']}].map(p=>`<article class="card prod"><div class="art">${p.tag?`<span class="tag">${p.tag}</span>`:''}${A(p.art)}</div><div class="body"><h3>${p.name}</h3><p class="sub">${p.sub}</p><div class="models">${p.m.map(x=>`<span>${x}</span>`).join('')}</div><ul>${li(p.f)}</ul><div class="row"><button class="btn btn-ink btn-sm arrow" data-cheque="${p.name}">Order ${p.name}</button></div></div></article>`).join('')}
  </div>
</div></section>
<section class="dark"><div class="wrap split">
  <div><div class="eyebrow">Security built in</div><h2 style="font-size:clamp(30px,3.6vw,44px);margin:14px 0">Layers of protection against fraud.</h2><p style="color:#a9b5d3;font-size:17px">Our cheques are produced to meet Canadian Payments Association (CPA) Standard 006 requirements, with MICR encoding your bank can read reliably.</p>
  <div class="grid g2 mt">${[['🔐','Padlock security icon'],['🔬','Microprinted signature line'],['🌫','“VOID” pantograph'],['🧪','Chemical-reactive paper'],['💧','Artificial watermark'],['🧾','MICR encoding']].map(([i,t])=>`<div class="feat"><div class="ic">${i}</div><div><h4 style="font-size:16px;margin-top:12px">${t}</h4></div></div>`).join('')}</div></div>
  <div>${A('cheque')}</div>
</div></section>
<section class="white"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">How ordering works</div><h2>Four simple steps</h2></div>
  <div class="steps"><div class="step"><h4>Choose your style</h4><p>Laser or manual, position, colour and quantity.</p></div><div class="step"><h4>Send your details</h4><p>Business info, logo and a void cheque or bank letter.</p></div><div class="step"><h4>Approve your proof</h4><p>We email a digital proof — nothing prints until you approve.</p></div><div class="step"><h4>Printed & delivered</h4><p>Securely printed and shipped to your door.</p></div></div>
</div></section>
<section><div class="wrap split">
  <div><div class="eyebrow">Order online</div><h2 style="font-size:clamp(30px,3.6vw,44px);margin:14px 0">Start your cheque order</h2><p class="kicker" style="font-size:16px">Fill in the basics and we'll email your proof and a secure link to confirm banking details. <b>Never send full account numbers by regular email.</b></p>
  <div class="notice green mt">✓ Free logo setup · ✓ Proof before print · ✓ Re-orders in one click</div></div>
  <div class="form" id="chequeForm"><div class="fwrap"><h3>Cheque order request</h3><p class="hint">We'll confirm pricing and send your proof.</p>
   <form novalidate data-simple="Cheque Printing"><div class="fgrid">
    <div><label>Cheque type *</label><select name="cheque_type" required><option value="">Select…</option><option>Laser – Top</option><option>Laser – Middle</option><option>Laser – Bottom</option><option>Laser – 3 per page</option><option>Manual – Book</option><option>Manual – Duplicate</option><option>Deposit books / stamps</option></select></div>
    <div><label>Quantity</label><select name="qty"><option>250</option><option>500</option><option>1,000</option><option>2,500</option><option>5,000+</option></select></div>
    <div><label>Accounting software</label><select name="software"><option>QuickBooks</option><option>Sage</option><option>Xero</option><option>Other / none</option></select></div>
    <div><label>Cheque colour</label><select name="colour"><option>Blue</option><option>Green</option><option>Burgundy</option><option>Grey</option><option>Tan</option></select></div>
    <div class="full"><label>Business name (as printed) *</label><input name="business" required></div>
    <div><label>Contact name *</label><input name="name" required></div>
    <div><label>Phone *</label><input name="phone" type="tel" required></div>
    <div class="full"><label>Email *</label><input name="email" type="email" required></div>
    <div class="full"><label class="chips" style="display:flex"><label><input type="checkbox" name="logo" value="yes">Add my logo</label><label><input type="checkbox" name="reorder" value="yes">This is a re-order</label></label></div>
   </div><button class="btn btn-lime submit arrow">Request Proof & Pricing</button><p class="fine">🔒 We'll collect banking details through a secure channel after you approve.</p></form></div>
   <div class="success"><div class="tick">✓</div><h3>Thanks<span class="sn"></span>!</h3><p class="hint">Your cheque order request is in. We'll email your proof and pricing shortly.</p><p class="fine preview-note"></p></div></div>
</div></section>`;

PAGES['ai-marketing'] = () => pageHero({crumb:'AI Marketing Tools',eyebrow:'AI Growth Suite',title:'Your own online ordering + an AI marketing team.',lead:'Stop paying 20–30% commissions to delivery apps. Get commission-free online ordering on your own website and app, plus AI-powered loyalty, SEO, reviews and email marketing — for one flat monthly fee.',art:'ai',chips:['0% commission orders','Flat monthly fee','Google visibility','Loyalty that brings guests back']}) + `
<section><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">What's included</div><h2>Everything a growth team does — without hiring one.</h2><p>Built for restaurants and local businesses in Canada and the USA.</p></div>
  <div class="grid g3">
   ${[['🛒','Commission-free online ordering','Pickup & delivery orders on your own branded website and app — keep 100% of every order.'],['📱','Branded mobile app','Your logo on your customers\' home screens, with push notifications for offers.'],['🔁','Loyalty & rewards','Points, perks and win-back campaigns that turn first-timers into regulars.'],['🔎','SEO & Google visibility','Show up when hungry customers search nearby — optimized listings and pages.'],['⭐','Review generation','Automatically ask happy customers for reviews and boost your rating.'],['✉','AI email & SMS campaigns','AI-written promotions sent at the right time to the right customers.'],['📈','Insights dashboard','See which campaigns drive orders and revenue.'],['🤖','AI content assistant','Menu descriptions, social posts and offers written in seconds.'],['🔗','POS integration','Orders flow into your POS and kitchen — no re-keying.']].map(([i,h,p])=>`<div class="card"><div class="feat" style="flex-direction:column;gap:10px"><div class="ic">${i}</div><div><h4>${h}</h4><p>${p}</p></div></div></div>`).join('')}
  </div>
</div></section>
<section class="dark"><div class="wrap split">
  <div><div class="eyebrow">The math</div><h2 style="font-size:clamp(30px,3.6vw,44px);margin:14px 0">What delivery-app commissions are really costing you.</h2>
   <label style="color:#fff;font-weight:700">Monthly orders through delivery apps</label><div class="stat" id="aio">$20,000</div><input type="range" id="aiv" min="2000" max="150000" step="1000" value="20000" style="width:100%;accent-color:#C8F25A;margin:10px 0 20px">
   <label style="color:#fff;font-weight:700">Commission rate</label><div class="stat" id="aipc">25%</div><input type="range" id="aip" min="10" max="35" step="1" value="25" style="width:100%;accent-color:#C8F25A;margin-top:10px">
  </div>
  <div class="card" style="text-align:center;padding:40px"><p style="color:#a9b5d3;font-weight:700;letter-spacing:.1em;text-transform:uppercase;font-size:13px">You're paying apps up to</p><div class="calc-big" style="font-family:var(--display);font-size:64px;font-weight:800;color:var(--lime);line-height:1.1" id="aiyr">$60,000</div><p style="color:#cfd8ee">per year in commissions. Shift even a portion to your own commission-free ordering and keep that margin.</p><div class="hero-ctas" style="justify-content:center"><button class="btn btn-lime arrow" data-quote="AI Marketing">Get a Free Demo</button></div></div>
</div></section>
<section class="white"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">Launch</div><h2>Live fast. No tech skills required.</h2></div>
  <div class="steps"><div class="step"><h4>Free demo</h4><p>See your branded site & app mock-up.</p></div><div class="step"><h4>We build it</h4><p>Menu, photos, branding and POS connection.</p></div><div class="step"><h4>Go live</h4><p>Launch with a promo to drive first orders.</p></div><div class="step"><h4>AI runs growth</h4><p>Loyalty, reviews, SEO & campaigns on autopilot.</p></div></div>
</div></section>
${ctaBand('Keep 100% of your online orders.','Book a free demo of the UrbanPay AI Growth Suite.','AI Marketing')}`;

PAGES['web-apps'] = () => pageHero({crumb:'Web & App Development',eyebrow:'Design · Build · Grow',title:'Websites, apps & custom software that sell.',lead:'From a fast business website to a full mobile app or custom platform — we design, build and connect it to payments, bookings and marketing so it actually brings in revenue.',art:'code',chips:['Websites & online stores','iOS & Android apps','Custom software & portals','Payments built in']}) + `
<section><div class="wrap">
  <div class="sec-head"><div class="eyebrow">What we build</div><h2>Tell us the idea. We'll build the solution.</h2></div>
  <div class="grid g3">
   ${[{name:'Business Websites',art:'browser',sub:'Fast, mobile-first sites that turn visitors into calls, bookings and sales.',f:['Custom design & copywriting','SEO setup & Google Business Profile','Booking, quote & contact forms','Easy self-editing']},
      {name:'eCommerce Stores',art:'browser',sub:'Online stores on Shopify, WooCommerce or custom — payments ready.',f:['Product catalogue & inventory sync','Secure checkout with Apple/Google Pay','Shipping, taxes & discount rules','POS integration for in-store + online']},
      {name:'Mobile Apps',art:'mobile',sub:'Native-quality iOS & Android apps for ordering, loyalty, booking or services.',f:['UX/UI design & prototyping','Cross-platform development','Push notifications & in-app payments','App Store & Google Play launch']},
      {name:'Custom Software',art:'code',sub:'Portals, dashboards and tools built around how your business works.',f:['Customer & staff portals','Booking, quoting & job management','Reporting dashboards','API integrations & automation']},
      {name:'Booking & Membership',art:'tablet',sub:'Sell appointments, classes, memberships and subscriptions online.',f:['Online scheduling & reminders','Deposits & no-show protection','Recurring memberships','Client profiles & history']},
      {name:'Care & Growth Plans',art:'loan',sub:'Hosting, security, updates and monthly improvements — handled.',f:['Managed hosting & SSL','Backups & security monitoring','Monthly content & SEO updates','Analytics reporting']}].map(p=>prodCard(p,'Web & App')).join('')}
  </div>
</div></section>
<section class="dark"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">Our process</div><h2>Clear steps. No surprises.</h2></div>
  <div class="steps"><div class="step"><h4>Discover</h4><p>Goals, audience, features and a fixed-scope proposal.</p></div><div class="step"><h4>Design</h4><p>Wireframes and visual design you approve before build.</p></div><div class="step"><h4>Build & test</h4><p>Development with payments, forms and integrations.</p></div><div class="step"><h4>Launch & grow</h4><p>Go live, train your team, then optimize monthly.</p></div></div>
</div></section>
<section><div class="wrap split">
  <div><div class="eyebrow">Project brief</div><h2 style="font-size:clamp(30px,3.6vw,44px);margin:14px 0">Get a project estimate</h2><p class="kicker" style="font-size:16px">Share a few details and we'll send a scope, timeline and estimate. Have a design or example site you like? Mention it in the notes.</p>
  <div class="pill-list mt">${['Restaurants','Retail','Clinics','Trades','Real estate','Startups','Non-profits','Professional services'].map(x=>`<span>${x}</span>`).join('')}</div></div>
  <div class="form"><div class="fwrap"><h3>Tell us about your project</h3><p class="hint">We reply with next steps and a ballpark estimate.</p>
   <form novalidate data-simple="Web & App Development"><div class="fgrid">
    <div><label>Project type *</label><select name="project" required><option value="">Select…</option><option>Business website</option><option>eCommerce store</option><option>Mobile app</option><option>Custom software / portal</option><option>Redesign existing site</option><option>Not sure yet</option></select></div>
    <div><label>Budget range</label><select name="budget"><option>Not sure</option><option>Under $5K</option><option>$5K – $15K</option><option>$15K – $50K</option><option>$50K+</option></select></div>
    <div><label>Timeline</label><select name="timeline"><option>ASAP</option><option>1–3 months</option><option>3–6 months</option><option>Flexible</option></select></div>
    <div><label>Current website (if any)</label><input name="site" placeholder="www."></div>
    <div class="full"><label>Describe your idea</label><textarea name="notes"></textarea></div>
    <div><label>Name *</label><input name="name" required></div>
    <div><label>Phone *</label><input name="phone" type="tel" required></div>
    <div class="full"><label>Email *</label><input name="email" type="email" required></div>
   </div><button class="btn btn-lime submit arrow">Get My Estimate</button></form></div>
   <div class="success"><div class="tick">✓</div><h3>Thanks<span class="sn"></span>!</h3><p class="hint">Your project brief is in. We'll reach out to book a discovery call.</p><p class="fine preview-note"></p></div></div>
</div></section>`;

PAGES.loans = () => pageHero({crumb:'Business Loans',eyebrow:'Fast business funding',title:'Capital to grow — based on how your business performs.',lead:'Merchant cash advances, receivable financing, inventory, expansion and equipment loans from our lending partners. One application, multiple options, and an advisor who explains every term.',art:'loan',ctas:`<button class="btn btn-lime arrow" data-quote="Business Loan">Check My Options</button><a class="btn btn-ghost" style="color:#fff" href="#contact" data-prefill="Business Loan">Talk to a Funding Advisor</a>`,chips:['Soft-check pre-qualification','Decisions in days','Options beyond the bank','No obligation']}) + `
<section><div class="wrap">
  <div class="sec-head"><div class="eyebrow">Funding options</div><h2>The right type of capital for the job.</h2><p>Each product solves a different problem. Not sure which fits? Tell us what the money is for and we'll recommend the best structure.</p></div>
  <div class="grid g3">${LOANS.map(p=>`<article class="card prod"><div class="art">${p.tag?`<span class="tag">${p.tag}</span>`:''}${A(p.art)}</div><div class="body"><h3>${p.name}</h3><p class="sub">${p.sub}</p><ul>${li(p.f)}</ul><p class="kicker"><b style="color:var(--ink)">Great for:</b> ${p.fit}</p><div class="row">${quoteBtn('Loan: '+p.name,'Check Eligibility')}</div></div></article>`).join('')}</div>
</div></section>
<section class="dark"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">Spotlight</div><h2>How a Merchant Cash Advance works</h2><p>Funding that moves with your sales — not against them.</p></div>
  <div class="steps"><div class="step"><h4>Share card sales</h4><p>We review recent processing statements — usually 3–6 months.</p></div><div class="step"><h4>Get an offer</h4><p>See your advance amount, total cost and holdback % upfront.</p></div><div class="step"><h4>Receive funds</h4><p>Money is deposited to your business account once approved.</p></div><div class="step"><h4>Repay as you sell</h4><p>A small, agreed share of daily card sales goes toward repayment.</p></div></div>
</div></section>
<section class="white"><div class="wrap split">
  <div><div class="eyebrow">What you'll typically need</div><h2 style="font-size:clamp(30px,3.6vw,44px);margin:14px 0">Simple documents. Clear terms.</h2>
   <ul style="list-style:none;display:grid;gap:12px;font-size:16px">${['✅ Business registration & owner ID','✅ 3–6 months of bank statements','✅ Card processing statements (for cash advance)','✅ Accounts receivable aging (for receivable loans)','✅ Equipment quote or inventory list (if applicable)'].map(x=>`<li>${x}</li>`).join('')}</ul>
   <div class="notice mt">Financing is provided by third-party lending partners and is subject to credit review and approval. Rates, terms and amounts depend on your business profile. We'll always show total cost before you sign.</div></div>
  ${leadForm('loanForm','See what you qualify for','No impact to apply for a consultation.')}
</div></section>
${ctaBand('Combine funding with grants.','Pair a loan with non-repayable grant funding where you qualify — we screen both at the same time.','Business Loan + Grant')}`;

PAGES.grants = () => pageHero({crumb:'Business Grants',eyebrow:'Non-repayable funding',title:'Find the grants your business qualifies for.',lead:'Government programs can fund liquidity, equipment, technology, expansion and community projects. We screen eligibility, map the right program and help you build a strong, complete application.',art:'grant',chips:['Eligibility screening','Application writing support','Budget & document prep','Stack with loans']}) + `
<section><div class="wrap">
  <div class="sec-head"><div class="eyebrow">Featured programs</div><h2>Open programs we're helping businesses with now.</h2></div>
  <div class="grid g2">
   <article class="card prod"><div class="art"><span class="tag">Federal · BC via PacifiCan</span>${A('loan')}</div><div class="body"><h3>RTRI — Regional Tariff Response Initiative</h3><p class="sub">Non-repayable support for BC businesses hit by tariffs: up to $2M for liquidity plus up to $1M for pivot projects; larger repayable pivot funding also available.</p><ul>${li(['For incorporated BC businesses with $1M+ annual revenue','Liquidity: wages, rent, utilities, insurance, property tax','Pivot: equipment, tech, market diversification','Status: accepting applications'])}</ul><div class="row"><a class="btn btn-ink btn-sm arrow" href="#rtri">RTRI Details</a>${quoteBtn('Grant: RTRI','Check Eligibility')}</div></div></article>
   <article class="card prod"><div class="art"><span class="tag" style="background:var(--coral);color:#fff">Closes Nov 20, 2026</span>${A('grant')}</div><div class="body"><h3>REDIP — Rural Economic Diversification & Infrastructure Program</h3><p class="sub">Provincial grants for rural BC communities: up to $100K for development and up to $1M for implementation projects.</p><ul>${li(['For local governments, Indigenous communities & non-profits','Development: up to $100K at 80% of costs','Implementation: up to $400K (80%) or $1M (60%)','2026-27 intake closes Nov 20, 11:59 PM PST'])}</ul><div class="row"><a class="btn btn-ink btn-sm arrow" href="#redip">REDIP Details</a>${quoteBtn('Grant: REDIP','Get Application Help')}</div></div></article>
  </div>
</div></section>
<section class="dark"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">How we help</div><h2>From "do I qualify?" to "approved."</h2></div>
  <div class="steps"><div class="step"><h4>Screen</h4><p>Quick eligibility check across federal, provincial & local programs.</p></div><div class="step"><h4>Plan</h4><p>Project scope, budget and outcomes aligned to program criteria.</p></div><div class="step"><h4>Prepare</h4><p>Narrative, budget templates and supporting documents.</p></div><div class="step"><h4>Submit & report</h4><p>Submission support and help with reporting obligations.</p></div></div>
</div></section>
<section><div class="wrap split">
  <div><div class="eyebrow">Free grant screening</div><h2 style="font-size:clamp(30px,3.6vw,44px);margin:14px 0">Not sure which program fits?</h2><p class="kicker" style="font-size:16px">Tell us about your business and project. We'll identify programs worth pursuing — and be honest when one isn't a fit.</p><div class="notice mt">UrbanPay is an independent advisor and is not affiliated with PacifiCan, the Government of Canada or the Province of BC. Funding decisions are made solely by the program funder.</div></div>
  ${leadForm('grantForm','Free grant screening','We\'ll review and send programs you may qualify for.')}
</div></section>`;

PAGES.rtri = () => pageHero({crumb:'<a href="#grants">Grants</a> / RTRI',eyebrow:'Federal grant · British Columbia',title:'RTRI: up to $3M non-repayable for tariff-impacted BC businesses.',lead:'The Regional Tariff Response Initiative, delivered in BC by Pacific Economic Development Canada (PacifiCan), helps businesses affected by tariffs manage liquidity pressures, strengthen competitiveness, diversify markets and build resilience.',art:'loan',ctas:`<button class="btn btn-lime arrow" data-quote="Grant: RTRI">Check My RTRI Eligibility</button><a class="btn btn-ghost" style="color:#fff" href="#contact" data-prefill="Grant: RTRI">Book a Consultation</a>`,chips:['Status: accepting applications','$3.45B national program','Liquidity + pivot streams','Apply for one or both']}) + `
<section><div class="wrap">
  <div class="sec-head"><div class="eyebrow">Funding streams</div><h2>What RTRI can fund</h2></div>
  <table class="itable"><thead><tr><th>Stream</th><th>Type</th><th>Maximum</th><th>Cost share</th><th>Timing</th></tr></thead><tbody>
   <tr><td><b>Liquidity assistance</b><br><span class="kicker">Day-to-day operations</span></td><td>Non-repayable</td><td>Up to $2M (based on demonstrated need)</td><td>Up to 50%</td><td>Up to 12 months, ending by Mar 31, 2028</td></tr>
   <tr><td><b>Pivot projects</b><br><span class="kicker">Local/regional benefit</span></td><td>Non-repayable</td><td>Up to $1M</td><td>Up to 50%</td><td>Complete by Mar 31, 2029</td></tr>
   <tr><td><b>Pivot projects — transformative</b><br><span class="kicker">Larger projects</span></td><td>Repayable</td><td>Over $1M</td><td>Up to 75%</td><td>Complete by Mar 31, 2029</td></tr>
  </tbody></table>
  <p class="kicker mt">Combined non-repayable maximum: $3M ($2M liquidity + $1M pivot). Total RTRI funding maximum: $20M per business.</p>
</div></section>
<section class="white"><div class="wrap grid g2" style="gap:40px">
  <div><div class="eyebrow">Who's eligible</div><h2 style="font-size:34px;margin:14px 0">Business eligibility</h2>
   <ul style="list-style:none;display:grid;gap:10px">${['✅ Incorporated, for-profit, located and operating in BC','✅ At least $1M annual revenue in one or both of the last two fiscal years','✅ Viable before tariffs','✅ Affected by trade disruptions — e.g. in a Section 232/338 tariff-impacted sector or supply chain, 25%+ of revenue from goods ultimately exported to the U.S., or hurt by tariff-driven costs, supply disruption or lost customers','✅ For liquidity: a demonstrated liquidity need caused by tariff impacts'].map(x=>`<li>${x}</li>`).join('')}</ul>
   <h4 style="margin:24px 0 10px">Not-for-profits</h4><p class="kicker" style="font-size:15px">BC not-for-profits whose primary focus is supporting businesses may apply for projects that help tariff-affected businesses.</p></div>
  <div><div class="eyebrow">Eligible activities</div><h2 style="font-size:34px;margin:14px 0">What the money covers</h2>
   <div class="card" style="margin-bottom:14px"><h4>💧 Liquidity assistance</h4><p class="kicker">Employee salaries & wages, plus essential recurring costs like rent/lease, utilities, business insurance and property taxes.</p></div>
   <div class="card" style="margin-bottom:14px"><h4>🔄 Pivot projects</h4><p class="kicker">Productivity improvements, equipment & technology adoption, market diversification, supply-chain resilience and other competitiveness projects.</p></div>
   <div class="notice"><b>Generally not eligible:</b> retail, local consumer services (e.g. hotels, restaurants, utilities, healthcare, recreation), and generally oil & gas extraction and construction services. Businesses under $1M revenue can contact PacifiCan about other options.</div></div>
</div></section>
<section class="dark"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">How UrbanPay helps</div><h2>RTRI is not a simple relief form. Make your case count.</h2><p>Applications are assessed on program criteria, demonstrated need and your proposed response to tariff impacts.</p></div>
  <div class="steps"><div class="step"><h4>Eligibility check</h4><p>Revenue, tariff exposure and stream fit — in one call.</p></div><div class="step"><h4>Impact evidence</h4><p>Quantify tariff effects on costs, revenue and customers.</p></div><div class="step"><h4>Project & budget</h4><p>Build a credible pivot plan and cost-shared budget.</p></div><div class="step"><h4>Submission</h4><p>Narrative, documents and follow-up support.</p></div></div>
</div></section>
<section><div class="wrap split">
  <div><div class="eyebrow">Get started</div><h2 style="font-size:clamp(30px,3.6vw,44px);margin:14px 0">Free RTRI eligibility review</h2><p class="kicker" style="font-size:16px">Program details summarized from PacifiCan's RTRI pages as of November 2026; always confirm current criteria with PacifiCan. UrbanPay is an independent advisor, not a government agency.</p><p class="mt"><a class="btn btn-ghost btn-sm" href="https://www.canada.ca/en/pacific-economic-development/services/funding/regional-tariff-response-initiative.html" target="_blank" rel="noopener">Official PacifiCan RTRI page ↗</a></p></div>
  ${leadForm('rtriForm','Check my RTRI eligibility','Tell us about your business and tariff impact.')}
</div></section>`;

PAGES.redip = () => pageHero({crumb:'<a href="#grants">Grants</a> / REDIP',eyebrow:'BC provincial grant · 2026-27 intake',title:'REDIP: up to $1M for rural BC economic projects.',lead:'The Rural Economic Diversification and Infrastructure Program funds projects that build rural economic strength, plan for future growth, or create new services and infrastructure that benefit local rural economies.',art:'grant',ctas:`<button class="btn btn-lime arrow" data-quote="Grant: REDIP">Get REDIP Application Help</button><a class="btn btn-ghost" style="color:#fff" href="#contact" data-prefill="Grant: REDIP">Book a Consultation</a>`,chips:['Intake opened Sept 18, 2026','Closes Nov 20, 2026 · 11:59 PM PST','Decisions spring 2027']}) + `
<section class="dark" style="padding:44px 0"><div class="wrap" style="display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap">
  <div><h3 style="font-size:26px">⏳ The 2026-27 intake is closing soon</h3><p style="color:#a9b5d3">A Business BCeID is required and can take several weeks — start now.</p></div>
  <div class="countdown" id="cd"></div>
</div></section>
<section><div class="wrap">
  <div class="sec-head"><div class="eyebrow">Funding streams</div><h2>How much REDIP can fund</h2></div>
  <table class="itable"><thead><tr><th>Stream</th><th>What it supports</th><th>Max per project</th><th>Share of eligible costs</th></tr></thead><tbody>
   <tr><td><b>Development</b></td><td>Business planning, feasibility assessments and other developmental steps for economic diversification opportunities</td><td>$100,000</td><td>80%</td></tr>
   <tr><td><b>Implementation — small/medium</b><br><span class="kicker">Total project cost under $500K</span></td><td>New economic infrastructure and implementation of economic services programming</td><td>$400,000</td><td>80%</td></tr>
   <tr><td><b>Implementation — large</b><br><span class="kicker">Total project cost $500K+</span></td><td>Larger infrastructure and diversification projects</td><td>$1,000,000</td><td>60%</td></tr>
   <tr><td><b>Community Transition</b></td><td>Communities in a supported Community Transition event, or with a direct link to a major project of regional significance</td><td colspan="2">See program guide</td></tr>
  </tbody></table>
</div></section>
<section class="white"><div class="wrap grid g2" style="gap:40px">
  <div><div class="eyebrow">Who can apply</div><h2 style="font-size:34px;margin:14px 0">Eligible applicants</h2>
   <ul style="list-style:none;display:grid;gap:10px">${['✅ Local governments, regional districts, Indigenous governments/communities and not-for-profit organizations in BC','✅ Community eligibility follows the Province\'s Eligibility Matrix (rural vs urban by population and remoteness) — check with the Eligibility Lookup Tool','✅ All Indigenous communities in BC are eligible','✅ The project must directly serve the applicant\'s community(ies)','⚠️ Previous recipients must complete funded projects and reporting before new applications are reviewed'].map(x=>`<li>${x}</li>`).join('')}</ul>
   <div class="notice mt">Municipalities affected by the Oct 17, 2026 elections may submit by the deadline and email the council resolution to the Rural Programs Team by Dec 31, 2026.</div></div>
  <div><div class="eyebrow">Application checklist</div><h2 style="font-size:34px;margin:14px 0">Steps to apply</h2>
   <ol style="display:grid;gap:10px;padding-left:20px">${['Review the 2026-27 Program Guide & FAQ','Confirm community eligibility','Choose the right funding stream','Discuss your project with REDIP staff or a Regional Manager','Get a Business BCeID (allow several weeks)','Prepare templates, Excel budget, direct deposit form (+ .KML for construction projects)','Gather stream-specific supporting documents','Submit online at gov.bc.ca/REDIP'].map(x=>`<li>${x}</li>`).join('')}</ol></div>
</div></section>
<section class="dark"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">Recent REDIP-funded projects</div><h2>What rural communities are building</h2></div>
  <div class="grid g4">${[['$240K','Workforce attraction marketing campaign — City of Prince Rupert'],['~$238K','Tourism experience development — Northern BC Tourism Association'],['~$80K','Commercial investment attraction — Terrace Downtown Improvement Area'],['$76K','Local food supply-chain initiative — Kootenays']].map(([a,b])=>`<div class="card"><div class="stat">${a}</div><p style="margin-top:8px;font-size:14.5px;color:#a9b5d3">${b}</p></div>`).join('')}</div>
  <p class="center mt" style="font-size:13px;color:#8fa0c8">Source: BC Government news releases, 2026.</p>
</div></section>
<section><div class="wrap split">
  <div><div class="eyebrow">Application support</div><h2 style="font-size:clamp(30px,3.6vw,44px);margin:14px 0">Need help before Nov 20?</h2><p class="kicker" style="font-size:16px">We help communities and non-profits scope projects, build budgets and prepare complete applications. Funding is competitive and not guaranteed. Details summarized from gov.bc.ca/REDIP as of November 2026.</p><p class="mt"><a class="btn btn-ghost btn-sm" href="https://www2.gov.bc.ca/gov/content/employment-business/economic-development/support-organizations-community-partners/rural-economic-development/redip" target="_blank" rel="noopener">Official REDIP page ↗</a></p><p class="kicker mt">REDIP Rural Programs Team: RuralDevelopment@gov.bc.ca · 1-250-356-7950</p></div>
  ${leadForm('redipForm','Get REDIP application help','Tell us about your community and project.')}
</div></section>`;

PAGES['loyalty-gift-qr'] = () => pageHero({crumb:'Loyalty, Gift Cards & QR Payments',eyebrow:'Engage · Reward · Get paid anywhere',title:'Loyalty, gift cards & QR payments that bring customers back.',lead:'Reward regulars, sell gift cards in-store and online, and let customers pay by scanning a QR code or tapping your phone — all connected to your POS and payments.',art:'giftcard',chips:['Points & punch cards','Plastic & eGift cards','QR scan-to-pay','Tap to pay on phone']}) + `
<section><div class="wrap">
  <div class="sec-head"><div class="eyebrow">Loyalty & gift cards</div><h2>Turn one-time buyers into <span class="hl">regulars</span>.</h2><p>Loyalty and gift card programs that plug into Clover, Lightspeed, TouchBistro and more — so rewards and balances work at every checkout.</p></div>
  <div class="grid g2">${[
   {name:'Digital Loyalty Program',art:'ai',tag:'Most popular',sub:'Points or digital punch cards tied to the customer\'s phone number — no app or card to carry.',f:['Earn points or stamps automatically at checkout','Auto-rewards: free coffee, $ off, birthday treats','SMS & email win-back campaigns','See your top customers and visit frequency'],m:['Points','Punch card','Tiers','Birthday rewards']},
   {name:'Physical Loyalty Cards & Key Tags',art:'giftcard',sub:'Custom-printed plastic cards or key tags with barcode/QR that scan at your POS.',f:['Your branding, full colour both sides','Barcode, QR or magstripe options','Great for grocery, pet, salon & café','Pairs with the digital program']},
   {name:'Branded Gift Cards',art:'giftcard',tag:'Holiday favourite',sub:'Premium plastic gift cards designed for your brand, sold and redeemed at your counter.',f:['Custom design with your logo','Activate, reload & redeem at the POS','Real-time balance tracking','Display stands & gift sleeves available'],m:['Plastic','Kraft','Metallic finish']},
   {name:'eGift Cards',art:'browser',sub:'Sell gift cards 24/7 from your website and social — delivered instantly by email or text.',f:['Buy online, redeem in store','Scheduled delivery for birthdays & holidays','Corporate & bulk gift orders','Bonus promos: buy $50, get $10']},
  ].map(p=>prodCard(p,'Loyalty / Gift Cards')).join('')}</div>
</div></section>
<section class="dark"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">QR & mobile payments</div><h2>Get paid with a scan, a tap or a text.</h2><p>Give customers the fastest way to pay — on their own phone — with Apple Pay, Google Pay or card.</p></div>
  <div class="grid g4">${[['▦','QR scan-to-pay','A QR code on the table, counter, receipt or invoice opens a secure checkout on the customer\'s phone.'],['🍽','QR order & pay','Guests scan, browse your menu, order and pay from the table — orders go straight to the kitchen.'],['📱','Tap to pay on phone','Accept contactless cards and wallets on a compatible smartphone — no extra hardware (device & provider dependent).'],['💬','Text-to-pay & pay links','Send a payment link by SMS, email or social DM. Perfect for deposits, catering and phone orders.']].map(([i,h,p])=>`<div class="card"><div style="font-size:30px">${i}</div><h3 style="font-size:19px;margin:10px 0 6px">${h}</h3><p style="font-size:14.5px;color:#a9b5d3">${p}</p></div>`).join('')}</div>
</div></section>
<section><div class="wrap split">
  <div>${A('qr')}</div>
  <div><div class="eyebrow">Where QR payments shine</div><h2 style="font-size:clamp(30px,3.6vw,44px);margin:14px 0">Faster checkout, fewer lines.</h2>
   <div class="grid" style="gap:14px">${[['🍽 Restaurants & bars','Pay-at-table without waiting for a terminal; split bills on each guest\'s phone.'],['🛍 Retail & pop-ups','A counter QR display as a backup lane on busy days.'],['🔧 Trades & services','QR on invoices and quotes — customers pay the moment they get the bill.'],['🎟 Events & markets','Scan-to-pay signs that keep lines moving.']].map(([h,p])=>`<div class="card"><h4>${h}</h4><p class="kicker">${p}</p></div>`).join('')}</div>
   <div class="hero-ctas">${quoteBtn('QR / Tap to Pay','Set Up QR Payments')}</div></div>
</div></section>
<section class="white"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">More ways to engage</div><h2>Add-ons that grow every visit</h2></div>
  <div class="grid g3">${[['🔁','Memberships & subscriptions','Monthly coffee clubs, VIP memberships, service plans — billed automatically.'],['⭐','Review requests','Ask happy customers for Google reviews right after they pay.'],['🎯','Targeted promos','Send offers to lapsed or top customers by SMS or email.'],['🧾','Digital receipts','Text/email receipts that capture contacts for marketing.'],['📣','Referral rewards','Reward customers who bring friends.'],['📊','Customer insights','Visit frequency, spend and favourites in one dashboard.']].map(([i,h,p])=>`<div class="feat"><div class="ic">${i}</div><div><h4>${h}</h4><p>${p}</p></div></div>`).join('')}</div>
</div></section>
<section><div class="wrap split" style="align-items:start">
  <div><div class="eyebrow">FAQ</div><h2 style="font-size:clamp(30px,3.6vw,44px);margin:14px 0 24px">Loyalty, gift cards & QR, answered</h2>${faq([
   ['Will loyalty and gift cards work with my POS?','In most cases, yes. We match programs that integrate with Clover, Lightspeed, TouchBistro, Odoo and other popular POS systems so points and balances update at checkout.'],
   ['How long do custom plastic gift cards take?','Timing depends on design approval and quantity. We send a digital proof first, and you approve before anything is printed.'],
   ['Is QR scan-to-pay secure?','Yes. The QR opens a secure, encrypted checkout hosted by the payment provider. Customers pay with Apple Pay, Google Pay or card on their own device.'],
   ['Can I accept tap payments on my phone?','Tap to pay on a phone is available on compatible devices through supported providers. We\'ll check your device and set it up if it fits.'],
  ])}</div>
  ${leadForm('engageForm','Get loyalty, gift card & QR pricing','Tell us what you\'d like to offer customers.')}
</div></section>
${ctaBand('Give customers more reasons to come back.','Launch loyalty, gift cards and QR payments with one partner.','Loyalty / Gift Cards')}`;
PAGES.automation = () => pageHero({crumb:'Business Automation',eyebrow:'Work smarter · Grow faster',title:'Automate the busywork. Grow the business.',lead:'Connect your POS, payments, accounting, bookings and marketing so the repetitive work runs itself — follow-ups, invoices, reminders, reorders and reports — while you focus on customers.',art:'code',ctas:`<button class="btn btn-lime arrow" data-quote="Business Automation">Get a Free Automation Audit</button><a class="btn btn-ghost" style="color:#fff" href="#contact" data-prefill="Business Automation">Talk to an Expert</a>`,chips:['Free automation audit','Works with your existing tools','AI-powered','Set up & supported']}) + `
<section><div class="wrap">
  <div class="sec-head"><div class="eyebrow">Automation tools</div><h2>Hours back every week — <span class="hl">without hiring</span>.</h2><p>Pick the workflows that matter most. We build, connect and maintain them for you.</p></div>
  <div class="grid g3">${[
   {name:'AI Chat & Lead Capture',art:'ai',tag:'Popular',sub:'An AI assistant on your website and socials that answers questions 24/7 and books leads.',f:['Answers FAQs, hours, pricing & menus','Captures name, phone & need','Sends hot leads to you instantly','Hands off to a human anytime']},
   {name:'Booking & Reminders',art:'tablet',sub:'Online scheduling with automatic confirmations and reminders that cut no-shows.',f:['24/7 online booking','SMS & email reminders','Deposits & cancellation fees','Calendar sync for staff']},
   {name:'Invoicing & Payment Reminders',art:'laptop',sub:'Invoices go out automatically and chase themselves until they\'re paid.',f:['Recurring & milestone invoices','Pay-by-link & QR on every invoice','Automatic overdue reminders','Card-on-file auto-charge']},
   {name:'Accounting Sync',art:'loan',sub:'Sales, fees, tips and payouts flow into your books — no more manual entry.',f:['QuickBooks, Xero & Sage connections','Daily sales & deposit reconciliation','Expense & receipt capture','Month-end in minutes']},
   {name:'CRM & Follow-Up Workflows',art:'code',sub:'Every lead and customer tracked, with follow-ups that never slip.',f:['Lead pipeline & task automation','Welcome, quote & win-back sequences','Connect forms, POS & email','Zapier / Make integrations']},
   {name:'Marketing Automation',art:'ai',sub:'Campaigns that send themselves based on what customers do.',f:['Birthday, anniversary & lapsed-customer offers','Post-purchase review requests','Segmented SMS & email','Loyalty-triggered rewards']},
   {name:'Inventory & Reorder Alerts',art:'browser',sub:'Know before you run out — and stop over-ordering.',f:['Low-stock alerts & auto-POs','Supplier price tracking','Online & in-store stock sync','Dead-stock reports']},
   {name:'Staff Scheduling & Timesheets',art:'station',sub:'Schedules, clock-ins and tip-outs handled automatically.',f:['Shift scheduling from sales forecasts','Clock-in on the POS or phone','Tip pooling & payroll export','Labour-cost alerts']},
   {name:'Reports & Dashboards',art:'loan',sub:'All your numbers in one live dashboard, delivered to your inbox.',f:['Sales, margins & labour in one view','Multi-location comparisons','Daily/weekly email summaries','Custom KPIs']},
  ].map(p=>prodCard(p,'Business Automation')).join('')}</div>
</div></section>
<section class="dark"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">How it works</div><h2>From chaos to autopilot in four steps</h2></div>
  <div class="steps"><div class="step"><h4>Free audit</h4><p>We map your daily tasks and find the biggest time-wasters.</p></div><div class="step"><h4>Blueprint</h4><p>A clear plan of what to automate, which tools, and the cost.</p></div><div class="step"><h4>Build & connect</h4><p>We set up and connect POS, payments, accounting & marketing.</p></div><div class="step"><h4>Optimize</h4><p>Monthly check-ins to tune workflows and add new ones.</p></div></div>
</div></section>
<section class="white"><div class="wrap">
  <div class="sec-head center"><div class="eyebrow">Popular workflows</div><h2>Ready-made automations for restaurants & retail</h2></div>
  <div class="grid g2">${[['🍽 Restaurant','Online order → kitchen display → pickup SMS → review request next day'],['🍽 Restaurant','Reservation booked → reminder 24h before → no-show fee on card on file'],['🛍 Retail','Item hits low stock → supplier PO drafted → owner approves by text'],['🛍 Retail','First purchase → welcome email → loyalty points → 30-day win-back offer'],['💼 Services','Quote sent → auto follow-up in 2 days → deposit link → booking confirmed'],['📊 Any business','Daily sales + fees + deposits → synced to QuickBooks → summary email at 9 PM']].map(([t,f])=>`<div class="card"><span class="tag alt">${t}</span><p style="margin-top:12px;font-weight:600;color:var(--ink)">${f.split(' → ').map(x=>`<span style="white-space:nowrap">${x}</span>`).join(' <span style="color:#7B61FF;font-weight:800">→</span> ')}</p></div>`).join('')}</div>
</div></section>
<section><div class="wrap split" style="align-items:start">
  <div><div class="eyebrow">Free automation audit</div><h2 style="font-size:clamp(30px,3.6vw,44px);margin:14px 0">What would you automate first?</h2><p class="kicker" style="font-size:16px">Tell us what eats your time. We'll show you what can run on autopilot — and what it costs.</p>
  <div class="pill-list mt">${['Follow-ups','Invoices','Bookings','Bookkeeping','Inventory','Scheduling','Reviews','Reports'].map(x=>`<span>${x}</span>`).join('')}</div></div>
  ${leadForm('autoForm','Get your free automation audit','We\'ll reply with a simple automation plan.')}
</div></section>
${ctaBand('Stop doing it by hand.','Book a free automation audit and get hours back every week.','Business Automation')}`;
PAGES.restaurants = () => segPage('restaurants');
PAGES.retail = () => segPage('retail');
PAGES.why = () => pageHero({crumb:'Why UrbanPay',eyebrow:'About UrbanPay',title:'All payment solutions at one place.',lead:'UrbanPay (URBAN PAY INC.) helps Canadian businesses get paid, get funded and grow — with an approved vendor network that lets us recommend the best solution for each merchant, not just one brand.',art:'hero',chips:['Approved vendor network','Local BC team','Payments + funding + growth']}) + `
<section><div class="wrap grid g3">
  ${[['⚖','Vendor-neutral','We work with multiple terminal, POS and lending partners so recommendations are based on your needs.'],['🤝','One relationship','Payments, cheques, websites, marketing, loans and grants — one team that knows your business.'],['📍','Local & human','Based in British Columbia, serving merchants across Canada with real setup and training.'],['🔎','Transparent','Free statement reviews and clear side-by-side comparisons before you commit.'],['🛡','Secure','PCI-compliant partners, EMV terminals, encryption and tokenization.'],['🚀','Growth-minded','We help you grow revenue — not just process it.']].map(([i,h,p])=>`<div class="card"><div class="feat" style="flex-direction:column"><div class="ic">${i}</div><div><h4>${h}</h4><p>${p}</p></div></div></div>`).join('')}
</div></section>
${ctaBand()}`;

PAGES.contact = () => pageHero({crumb:'Contact',eyebrow:'Let\'s talk',title:'Get a quote, a statement review, or just advice.',lead:'Tell us what you need and an UrbanPay specialist will get back to you — usually within one business day.',art:'smart',ctas:' ',chips:['Call: '+PHONE,'8028 128 St, Surrey, BC V3W 4E9','Serving businesses across Canada']}) + `
<section><div class="wrap split" style="align-items:start">
  <div>
    <h2 style="font-size:34px;margin-bottom:20px">How can we help?</h2>
    <div class="grid" style="gap:16px">
      <div class="card"><h4>📄 Free statement review</h4><p class="kicker">Upload last month's processing statement and we'll break down your effective rate and hidden fees.</p></div>
      <div class="card"><h4>🖥 Terminals & POS</h4><p class="kicker">Clover, Poynt, Ingenico, Dejavoo, PAX, Lightspeed, Odoo, MYR, TouchBistro.</p></div>
      <div class="card"><h4>💰 Funding & grants</h4><p class="kicker">Cash advances, business loans, RTRI and REDIP support.</p></div>
      <div class="card"><h4>📍 Visit us</h4><p class="kicker"><a href="https://www.google.com/maps/search/?api=1&query=8028+128+St+Surrey+BC+V3W+4E9" target="_blank" rel="noopener" style="color:var(--ink3);font-weight:700">8028 128 St, Surrey, BC V3W 4E9</a></p></div>
      <div class="card"><h4>📞 Call or text</h4><p class="kicker"><a href="${TEL}" style="color:var(--ink3);font-weight:800;font-size:20px">${PHONE}</a></p></div>
      <div class="card" style="border-color:#25D366"><h4>💬 WhatsApp</h4><p class="kicker">Message us anytime — send photos of your statement or setup.</p><a class="btn btn-sm wa" style="margin-top:10px" href="https://wa.me/16043607088?text=Hi%20UrbanPay%2C%20I%27d%20like%20a%20quote." target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="display:inline-block;vertical-align:-3px"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7a2.8 2.8 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg> Chat on WhatsApp</a></div>
    </div>
  </div>
  ${leadForm('contactForm','Send us a message','We\'ll reply with options and next steps.')}
</div></section>`;

/* ===================== SEO MAP ===================== */
const SEO = {
 home:['/','UrbanPay | Payment Processing, POS & Business Funding Canada','Payment terminals, Clover & POS for retail and restaurants, online payments, cheques, loyalty, automation, business loans and grants. Free statement review.'],
 restaurants:['/restaurant-pos-payments/','Restaurant POS & Payment Processing Canada | UrbanPay','POS and payment bundles for cafés, QSR and full-service restaurants: Clover, TouchBistro, Lightspeed, pay-at-table, QR ordering and financing.'],
 retail:['/retail-pos-payments/','Retail POS & Payment Processing Canada | UrbanPay','POS and payment bundles for boutiques, grocery and multi-store retailers: Clover, Lightspeed, Odoo, inventory, eCommerce sync and inventory loans.'],
 terminals:['/payment-terminals/','Payment Terminals Canada: Clover, PAX, Ingenico | UrbanPay','Compare Clover, Poynt, Ingenico, Dejavoo and PAX terminals. Accept tap, chip, Interac, Apple Pay and Google Pay with local setup and support.'],
 clover:['/clover-pos/','Clover POS Canada: Flex, Mini, Station Duo | UrbanPay','Clover Flex, Flex Pocket, Mini, Station Duo, Station Solo and Kiosk with the right retail or restaurant plan, quoted and set up by UrbanPay.'],
 pos:['/pos-systems/','Best POS Systems for Retail & Restaurants | UrbanPay','Compare Clover, Lightspeed, Odoo, MYR and TouchBistro POS. Menu and inventory setup, staff training and integrated payments in Canada.'],
 'loyalty-gift-qr':['/loyalty-gift-cards-qr-payments/','Loyalty, Gift Cards & QR Code Payments | UrbanPay','Digital loyalty, plastic and eGift cards, QR scan-to-pay, QR order-and-pay, tap to pay on phone and text-to-pay for Canadian businesses.'],
 automation:['/business-automation/','Business Automation Tools for Small Business | UrbanPay','Automate follow-ups, bookings, invoicing, accounting sync, inventory, scheduling and marketing. Free automation audit for Canadian businesses.'],
 'virtual-terminal':['/virtual-terminal/','Virtual Terminal: Take Card Payments Online | UrbanPay','Accept phone, mail and invoice card payments from any browser with recurring billing, card-on-file and pay-by-link. No hardware needed.'],
 ecommerce:['/ecommerce-payments/','eCommerce Payment Gateway Canada | UrbanPay','Online payments for Shopify, WooCommerce and custom sites: hosted checkout, pay links, APIs, Apple Pay, Google Pay, subscriptions and fraud tools.'],
 cheques:['/cheque-printing/','Business Cheque Printing Canada: Laser & Manual | UrbanPay','Order secure laser and manual business cheques built to CPA Standard 006 with MICR encoding, your logo and a proof before print.'],
 'ai-marketing':['/ai-marketing/','AI Marketing & Commission-Free Online Ordering | UrbanPay','Commission-free online ordering, branded app, loyalty, SEO, reviews and AI email/SMS marketing for restaurants for one flat monthly fee.'],
 'web-apps':['/web-app-development/','Website & Mobile App Development | UrbanPay','Websites, online stores, iOS and Android apps and custom software with payments, booking and marketing built in. Get a project estimate.'],
 loans:['/business-loans/','Business Loans & Merchant Cash Advance Canada | UrbanPay','Merchant cash advance, receivable financing, inventory, expansion and equipment loans and lines of credit for Canadian small businesses.'],
 grants:['/business-grants/','Business Grants BC & Canada: RTRI, REDIP | UrbanPay','Free grant screening and application support for RTRI, REDIP and other government funding programs for BC and Canadian businesses.'],
 rtri:['/business-grants/rtri/','RTRI Grant BC: Tariff Response Funding Help | UrbanPay','Up to $2M liquidity and $1M pivot non-repayable funding for tariff-impacted BC businesses. Check RTRI eligibility and get application help.'],
 redip:['/business-grants/redip/','REDIP Grant BC 2026-27: Application Help | UrbanPay','REDIP funds up to $100K development and $1M implementation projects for rural BC communities. 2026-27 intake closes Nov 20. Get help.'],
 why:['/about/','About UrbanPay: Canadian Payments Partner | UrbanPay','URBAN PAY INC. helps Canadian businesses get paid, get funded and grow with a vendor-neutral network of payment, POS and funding partners.'],
 contact:['/contact/','Contact UrbanPay: Free Quote & Statement Review','Call +1 604 360 7088 or request a free quote and processing statement review for terminals, POS, online payments, loans and grants.'],
};
const STATIC = document.body.dataset.page || '';
const ROOT = document.querySelector('meta[name="site-root"]')?.content || '/';
document.documentElement.classList.add('js');

/* ===================== ROUTER ===================== */
const app = document.getElementById('app');
let pendingPrefill = null;
function setMeta(key){
  const [, t, d] = SEO[key]; document.title = t;
  let m=document.querySelector('meta[name=description]'); if(m) m.content=d;
}
function render(){
  const id = (location.hash||'#home').slice(1);
  const key = PAGES[id] ? id : 'home';
  app.innerHTML = `<div class="page on">${PAGES[key]()}</div>`;
  setMeta(key);
  window.scrollTo({top:0,behavior:'instant'});
  document.getElementById('mobile').classList.remove('open');
  document.querySelectorAll('.menu a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+key));
  initPage();
  if(pendingPrefill){prefill(app.querySelector('.form'),pendingPrefill);pendingPrefill=null}
}
if(!STATIC) window.addEventListener('hashchange',e=>{ const id=location.hash.slice(1); if(PAGES[id]||!id) render(); });

/* ===================== MOTION ===================== */
function initMotion(){
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);
     en.target.querySelectorAll?.('.count').forEach(countUp)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'}) : null;
  app.querySelectorAll('.sec-head,.card,.step,.feat,.compare,.itable,.band,.form,.bundle,.segcard,.matcher,.statrow,.faq details,.pill-list span').forEach(el=>{
    if(el.closest('.mega')) return;
    const sib=[...el.parentElement.children].indexOf(el);
    el.classList.add('rv'); el.style.transitionDelay=Math.min(sib,6)*70+'ms';
    io?io.observe(el):el.classList.add('in');
  });
  // rotating words
  const rot=document.getElementById('rot');
  if(rot){clearInterval(window._rot);const w=[...rot.children];let i=0;window._rot=setInterval(()=>{w[i].classList.remove('on');w[i].classList.add('out');const p=w[i];setTimeout(()=>p.classList.remove('out'),650);i=(i+1)%w.length;w[i].classList.add('on')},2200)}
  // tilt
  if(matchMedia('(hover:hover)').matches) app.querySelectorAll('.prod,.bundle').forEach(c=>{
    c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-4px)`});
    c.addEventListener('mouseleave',()=>c.style.transform='');
  });
}
function confetti(host){const cols=['#C8F25A','#7B61FF','#2BD9A0','#FF7A59','#5AB8FF'];for(let i=0;i<46;i++){const d=document.createElement('i');d.className='cf';d.style.background=cols[i%5];d.style.setProperty('--x',(Math.random()*360-180)+'px');d.style.setProperty('--y',(Math.random()*260-40)+'px');d.style.setProperty('--r',(Math.random()*720-360)+'deg');d.style.animationDelay=Math.random()*120+'ms';host.appendChild(d);setTimeout(()=>d.remove(),1600)}}
function initEffects(){
  const fine=matchMedia('(hover:hover) and (pointer:fine)').matches; if(!fine) return;
  app.querySelectorAll('.card,.bundle').forEach(c=>c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')}));
  document.querySelectorAll('.btn-lime:not(.submit)').forEach(b=>{if(b.dataset.mag)return;b.dataset.mag=1;b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
  const art=app.querySelector('.hero .hero-art'), hero=app.querySelector('.hero');
  if(art&&hero) hero.addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;art.style.transform=`translate(${x*-18}px,${y*-14}px)`;art.querySelectorAll('.float-chip').forEach((c,i)=>c.style.translate=`${x*(24+i*14)}px ${y*(18+i*10)}px`)});
}
let exitShown=false; try{exitShown=sessionStorage.getItem('upx')==='1'}catch(_){}
document.addEventListener('mouseout',e=>{
  if(exitShown||e.relatedTarget||e.clientY>10||modal.classList.contains('open')||!matchMedia('(pointer:fine)').matches) return;
  exitShown=true; try{sessionStorage.setItem('upx','1')}catch(_){}
  mform.innerHTML=`<button class="x" aria-label="Close">×</button><div class="exit" style="text-align:center"><div class="eyebrow">Before you go</div><div class="big" style="margin:14px 0 6px">Are you overpaying<br>on card fees?</div><p class="hint" style="font-size:16px">Upload last month's processing statement and we'll show your true effective rate and hidden fees — free, no obligation.</p><div class="wnav"><button class="btn btn-lime arrow" data-quote="Free statement review">Get My Free Statement Review</button></div><p class="fine">Or call <a href="${TEL}" style="font-weight:800">${PHONE}</a></p></div>`;
  modal.classList.add('open'); mform.querySelector('.x').onclick=closeModal;
});
function countUp(el){const to=+el.dataset.to,t0=performance.now();const f=t=>{const p=Math.min(1,(t-t0)/1200);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}
const sb=document.createElement('div');sb.id='scrollbar';document.body.appendChild(sb);
addEventListener('scroll',()=>{const h=document.documentElement;sb.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});

/* ===================== FORMS ===================== */
function prefill(formEl,val){
  if(!formEl||!val) return;
  const map={'Free statement review':'Free statement review','Clover':'Clover','Terminal':'Payment Terminal','POS':'POS System','Virtual':'Virtual Terminal','eCommerce':'eCommerce Payments','Cheque':'Cheque Printing','AI':'AI Marketing','Web':'Website / App','Loan':'Business Loan','Grant':'Business Grant','Restaurant':'POS System','Retail':'POS System','bundle':'Payment Terminal','Website':'Website / App','Loyalty':'Loyalty / Gift Cards','Gift':'Loyalty / Gift Cards','QR':'QR / Tap to Pay','Tap':'QR / Tap to Pay','Automation':'Business Automation'};
  formEl.querySelectorAll('input[name=interest]').forEach(cb=>{for(const k in map){if(val.includes(k)&&cb.value===map[k])cb.checked=true}});
  const n=formEl.querySelector('textarea[name=notes]'); if(n&&!n.value) n.value='Interested in: '+val;
}
function wireForm(root){
  if(!root||root.dataset.wired) return; root.dataset.wired=1;
  const form=root.querySelector('form'); if(!form) return;
  const steps=[...form.querySelectorAll('.wstep')], bars=[...root.querySelectorAll('.progress i')];
  let cur=0;
  const stmt=form.querySelector('.stmt'), fileIn=stmt?.querySelector('input[type=file]');
  const syncStmt=()=>{if(!stmt)return;const on=!!form.querySelector('input[name=interest][value="Free statement review"]:checked');stmt.hidden=!on;fileIn.required=on};
  form.addEventListener('change',e=>{syncStmt();if(e.target===fileIn){const f=fileIn.files[0];stmt.querySelector('.drop-t').innerHTML=f?`<b>✓ ${f.name}</b><br><small>${(f.size/1048576).toFixed(1)} MB · tap to change</small>`:'<b>Tap to upload</b> or drag your statement here';stmt.querySelector('.drop').classList.toggle('has',!!f)}});
  const go=i=>{syncStmt();cur=i;steps.forEach((s,j)=>s.classList.toggle('on',j===i));bars.forEach((b,j)=>b.classList.toggle('on',j<=i))};
  form.querySelectorAll('[data-next]').forEach(b=>b.onclick=()=>{ if(cur===0 && !form.querySelector('input[name=interest]:checked')){form.querySelector('.chips').animate([{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'none'}],{duration:250});return} if(cur===1&&stmt&&!stmt.hidden){const f=fileIn.files[0];const d=stmt.querySelector('.drop');if(!f||f.size>10485760){d.classList.add('err');d.querySelector('.drop-t').innerHTML=f?'<b>File is over 10 MB</b> — please upload a smaller PDF or photo':'<b>Please upload last month\'s statement</b><br><small>PDF or photo · max 10 MB</small>';return}d.classList.remove('err')} go(cur+1)});
  form.querySelectorAll('[data-prev]').forEach(b=>b.onclick=()=>go(cur-1));
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    let ok=true;
    form.querySelectorAll('[required]').forEach(f=>{const bad=!f.value.trim()||(f.type==='email'&&!/^\S+@\S+\.\S+$/.test(f.value));f.classList.toggle('err',bad);if(bad)ok=false});
    if(!ok) return;
    const data={}; new FormData(form).forEach((v,k)=>{if(v instanceof File)return;data[k]=data[k]?data[k]+', '+v:v});
    data.source=form.dataset.simple||root.id||'quote'; data.page=location.pathname+location.hash;
    const what=data.interest||data.cheque_type||data.project||data.source;
    data._subject=`New UrbanPay lead: ${what} — ${data.name||''}${data.business?' ('+data.business+')':''}`;
    data._template='table'; if(data.email) data._replyto=data.email; if(data.interest&&data.interest.includes('statement')) data._subject='📄 STATEMENT REVIEW — '+data._subject;
    const btn=form.querySelector('[type=submit],.submit'); const lbl=btn?.textContent; if(btn){btn.disabled=true;btn.textContent='Sending…'}
    let sent=false;
    const fd=new FormData(); Object.entries(data).forEach(([k,v])=>fd.append(k,v));
    const fl=form.querySelector('input[type=file]'); if(fl&&fl.files[0]&&!fl.closest('[hidden]')) fd.append('attachment',fl.files[0]);
    try{const r=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Accept':'application/json'},body:fd});sent=r.ok}catch(_){}
    if(btn){btn.disabled=false;btn.textContent=lbl}
    if(!sent){
      let m=form.querySelector('.send-err'); if(!m){m=document.createElement('p');m.className='notice send-err';m.style.marginTop='14px';form.appendChild(m)}
      m.innerHTML=`We couldn't send your request automatically. Please call, text or <a href="https://wa.me/16043607088?text=Hi%20UrbanPay%2C%20I%27d%20like%20a%20quote." target="_blank" rel="noopener"><b>WhatsApp</b></a> us at <a href="${TEL}"><b>${PHONE}</b></a> and we'll help right away.`;
      return;
    }
    root.querySelector('.fwrap').style.display='none';
    const s=root.querySelector('.success'); s.style.display='block';
    s.querySelector('.sn').textContent=data.name?', '+data.name.split(' ')[0]:''; confetti(s);
  });
}
function initPage(){
  app.querySelectorAll('.form').forEach(wireForm);
  app.querySelectorAll('[data-matcher]').forEach(initMatcher);
  initMotion(); initEffects();
  // effective-rate calc
  const v=document.getElementById('cvol'), f=document.getElementById('cfee');
  if(v){const fmt=n=>'$'+Math.round(n).toLocaleString('en-CA');
    const upd=()=>{const vol=+v.value, fee=+f.value, r=fee/vol*100;document.getElementById('cv').textContent=fmt(vol);document.getElementById('cf').textContent=fmt(fee);document.getElementById('er').textContent=r.toFixed(2)+'%';document.getElementById('erm').style.width=Math.min(100,r/5*100)+'%';document.getElementById('ermsg').innerHTML=`That's <b style="color:#fff">${fmt(fee*12)} a year</b> in fees. ${r>2.5?'That looks high — a statement review could uncover savings.':'Not bad — but a review can still spot hidden fees.'}`};
    v.oninput=f.oninput=upd;upd();}
  // AI commission calc
  const av=document.getElementById('aiv'), ap=document.getElementById('aip');
  if(av){const upd=()=>{document.getElementById('aio').textContent='$'+(+av.value).toLocaleString('en-CA');document.getElementById('aipc').textContent=ap.value+'%';document.getElementById('aiyr').textContent='$'+Math.round(av.value*ap.value/100*12).toLocaleString('en-CA')};av.oninput=ap.oninput=upd;upd();}
  // terminal filter
  const tf=document.getElementById('tfilter');
  if(tf) tf.onclick=e=>{const b=e.target.closest('button');if(!b)return;tf.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));document.querySelectorAll('#tgrid>div').forEach(d=>d.style.display=(b.dataset.b==='All'||d.dataset.brand===b.dataset.b)?'':'none')};
  const pf=document.getElementById('posfilter');
  if(pf) pf.onclick=e=>{const b=e.target.closest('button');if(!b)return;pf.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));const k=b.dataset.f==='Restaurants'?'Restaurant':b.dataset.f;document.querySelectorAll('#posgrid>div[data-fit]').forEach(d=>d.style.display=(b.dataset.f==='All'||d.dataset.fit.includes(k))?'':'none')};
  // countdown
  const cd=document.getElementById('cd');
  if(cd){const end=new Date('2026-11-21T07:59:00Z');const tick=()=>{let ms=end-new Date();if(ms<0){cd.innerHTML='<div><b>Closed</b><small>Watch for next intake</small></div>';return}const d=Math.floor(ms/864e5),h=Math.floor(ms/36e5)%24,m=Math.floor(ms/6e4)%60;cd.innerHTML=`<div><b>${d}</b><small>days</small></div><div><b>${h}</b><small>hours</small></div><div><b>${m}</b><small>mins</small></div>`};tick();clearInterval(window._cd);window._cd=setInterval(tick,30000)}
}

/* ===================== MODAL & GLOBAL CLICKS ===================== */
const modal=document.getElementById('modal'), mform=document.getElementById('modalForm');
function openModal(ctx,cheque){
  if(cheque){const cf=document.getElementById('chequeForm'); if(cf){cf.scrollIntoView({behavior:'smooth',block:'center'});return}
    if(STATIC){location.href=ROOT+SEO.cheques[0].slice(1)+'#order';return} location.hash='#cheques';setTimeout(()=>document.getElementById('chequeForm')?.scrollIntoView({behavior:'smooth'}),80);return}
  mform.innerHTML='<button class="x" aria-label="Close">×</button>'+leadForm('mf', ctx?('Get pricing: '+ctx.replace(/^[^:]+: /,'')):'Get your free custom quote').replace(/^<div class="form" id="mf">/,'').replace(/<\/div>$/,'');
  mform.id='modalForm'; delete mform.dataset.wired;
  wireForm(mform); prefill(mform,ctx||'');
  if(ctx && mform.querySelector('input[name=interest]:checked')) mform.querySelector('[data-next]').click();
  modal.classList.add('open'); mform.querySelector('.x').onclick=closeModal;
}
function closeModal(){modal.classList.remove('open')}
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.addEventListener('click',e=>{
  const q=e.target.closest('[data-quote]'); if(q){e.preventDefault();openModal(q.dataset.quote);return}
  const c=e.target.closest('[data-cheque]'); if(c){e.preventDefault();openModal('',true);return}
  const sc=e.target.closest('[data-scroll]'); if(sc){e.preventDefault();document.querySelector(sc.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});return}
  const p=e.target.closest('[data-prefill]');
  if(p){ if(STATIC){e.preventDefault();location.href=ROOT+SEO.contact[0].slice(1)+'?interest='+encodeURIComponent(p.dataset.prefill);return}
    pendingPrefill=p.dataset.prefill; if(location.hash===p.getAttribute('href')){render()} }
  if(e.target.closest('.burger')) document.getElementById('mobile').classList.toggle('open');
});
document.getElementById('yr').textContent=new Date().getFullYear();
(()=>{const it=document.getElementById('intro');if(!it||document.documentElement.classList.contains('nointro'))return;
 try{sessionStorage.setItem('upintro','1')}catch(_){}
 document.body.style.overflow='hidden';
 const end=()=>{it.classList.add('done');document.body.style.overflow='';setTimeout(()=>it.remove(),400)};
 it.addEventListener('click',end);const t=setTimeout(end,3500);it.addEventListener('animationend',e=>{if(e.animationName==='inOut'){clearTimeout(t);document.body.style.overflow='';it.remove()}});})();
if(STATIC){
  initPage();
  const qp=new URLSearchParams(location.search).get('interest'); if(qp) prefill(app.querySelector('.form'),qp);
  if(location.hash==='#order') setTimeout(()=>document.getElementById('chequeForm')?.scrollIntoView({behavior:'smooth',block:'center'}),300);
} else render();